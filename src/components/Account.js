import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Account = () => {
  const [isButtonShow, setIsButtonShow] = useState(true);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  // const phoneNumber = useRef(null)
  const submitForm = () => {
    if (!email && !password) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
            photoURL:
              "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
            //  phoneNumber:phoneNumber
          })
            .then(() => {
              console.log("Profile Updated");
            })
            .catch((error) => {
              console.log("error", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error", error);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error", error);
        });
    }
  };

  return (
    <div className="flex-1 mx-8 bg-white p-8 relative">
      <div className="font-bold">Account</div>
      <p className="text-gray-500 text-base">
        To place your order now, log in to your existing account or sign up.
      </p>
      <img
        className="absolute w-36 h-36 right-10"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
        alt=""
      />
      {isButtonShow && (
        <div className="flex gap-4 my-6">
          <button
            className="border border-lime-500 text-lime-500 p-2 text-xs px-8"
            onClick={() => setIsButtonShow((prev) => !prev)}
          >
            <div>Have a account ?</div>
            <div className="font-bold text-sm">LOG IN</div>
          </button>
          <button className="bg-lime-600 p-2 text-xs px-8 text-white">
            <div>New to Swiggy ?</div>
            <div className="font-bold text-sm">SIGN UP</div>
          </button>
        </div>
      )}
      {!isButtonShow && (
        <div>
          {isSignInForm && (
            <p className="text-gray-500 text-sm my-4">
              Enter login details or{" "}
              <button onClick={() => setIsSignInForm((prev) => !prev)}>
                create an account
              </button>
            </p>
          )}
          {!isSignInForm && (
            <p className="text-gray-500 text-sm my-4">
              Sign up or{" "}
              <button onClick={() => setIsSignInForm((prev) => !prev)}>
                log in to your account
              </button>
            </p>
          )}
          <div className="border w-96">
            {!isSignInForm && (
              <div className="p-5 border-b-[1px]">
                <input type="text" ref={fullname} placeholder="Name" />
              </div>
            )}
            <div className="p-5 border-b-[1px]">
              <input
                className="border-none"
                type="text"
                ref={email}
                placeholder="Email"
              />
            </div>
            <div className="p-5 border-b-[1px]">
              <input type="password" ref={password} placeholder="Password" />
            </div>
          </div>
          {!isSignInForm && (
            <div className="my-3 text-sky-500">
              <Link>Have a referral code?</Link>
            </div>
          )}
          <button
            onClick={submitForm}
            className="bg-green-600 p-3 text-white w-96 my-3"
          >
            {isSignInForm ? "Login" : "Continue"}
          </button>
          <p className="text-xs"></p>
          <p className="text-xs">
            {isSignInForm
              ? "By clicking on Login, I accept the Terms & Conditions & Privacy Policy"
              : "By creating an account, I accept the Terms & Conditions & Privacy Policy"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Account;
