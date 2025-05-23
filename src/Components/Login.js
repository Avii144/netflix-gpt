import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../Utils/Validate";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_IMG_URL, userAvatar } from "../Utils/constants";
const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonValidation = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userAvatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG_URL} alt="netflix-logo" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90"
      >
        <p className="text-3xl font-bold p-2 m-auto">
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </p>
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-2 w-full bg-gray-800"
        />
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full bg-gray-800"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className=" w-full p-4 my-2 text-center bg-red-800"
          onClick={handleButtonValidation}
        >
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to netflix Sign-up now"
            : "already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
