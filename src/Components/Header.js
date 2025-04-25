import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { toggleGptSearchview } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchview());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
          navigate("/browse")
        );
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className=" absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-48 " src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-500 text-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 text-white bg-purple-500 rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "home Page" : "Gpt Search"}
          </button>
          <img className="w-12 h-12" alt="usericon" src={user.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
