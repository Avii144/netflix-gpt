import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const toggleSignInForm = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
          alt="netflix-logo"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
        <p className="text-3xl font-bold p-2 m-auto">
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </p>
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-2 w-full bg-gray-800"
        />
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full bg-gray-800"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800"
        />
        <button className=" w-full p-4 my-2 text-center bg-red-800">
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to netflix Sign-in now"
            : "already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
