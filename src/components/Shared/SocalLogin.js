import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
import googleIcon from "../../images/gogle.svg"
import githubIcon from "../../images/github.svg"

const SocalLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub ,  gUser] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  

  if (loading) {
    return <Loading/>
  }
 
 if (user || gUser) {
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
              <button   onClick={() => signInWithGoogle()} className="border-2 py-1 px-4 mx-2 rounded-md">
              Google
              </button>
              <button  onClick={() => signInWithGithub()} className="border-2 py-1 px-4 mx-2 rounded-md ">
              Github
              </button>
              <button className="border-2 py-1 px-4 mx-2 rounded-md">
              Facebook
              </button>
          </div>
    </div>
  );
};

export default SocalLogin;
