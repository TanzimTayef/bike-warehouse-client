import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocalLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

 
 if (user) {
   navigate("/");
 }


  return (
    <div className="pt-4">
      <div className="flex justify-center items-center ">
        <div className="border-b-2 w-1/4"></div>
        <p className="px-2 font-medium text-gray-400">Or continue with</p>
        <div className="border-b-2 w-1/4"></div>
          </div>
          <div className="mt-6 flex justify-center items-center">
              <button   onClick={() => signInWithGoogle()} className="border-2 py-2 px-9 mx-2 rounded-md">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </button>
              <button className="border-2 py-2 px-9 mx-2 rounded-md ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </button>
              <button className="border-2 py-2 px-9 mx-2 rounded-md">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                 </svg>
              </button>
          </div>
    </div>
  );
};

export default SocalLogin;
