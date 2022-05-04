import React, { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocalLogin from "../Shared/SocalLogin";

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || "/";
 

 if (user) {
   navigate(from, { replace: true });
 }

  const handleLoginForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);

  }


  const handleResetPassword = (e) => {
     sendPasswordResetEmail(email);
    alert("send email for reset password");
  }



  return (
    <div className="bg-gray-100">
      <div className=" md:w-1/3 py-16 mx-6 md:mx-auto">
        <h1 className="text-3xl font-bold mb-12">Sign in to your account</h1>
        <div className=" px-8 py-12 shadow-md bg-white rounded-lg">
          <form onSubmit={handleLoginForm}>
            <div className="text-left mb-4">
              <label
                className="text-base font-medium text-gray-500"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border block w-full p-2 rounded-lg mt-1 border-2 outline-none"
                type="email"
                name="email"
                placeholder="Your email"
                id=""
              />
            </div>
            <div className="text-left mb-4">
              <label
                className="text-base font-medium text-gray-500"
                htmlFor="password"
              >
                Password
              </label>
              <input
                 onChange={(e) => setPassword(e.target.value)}
                className="border block w-full p-2 rounded-lg mt-1 border-2 outline-none"
                type="password"
                name="password"
                placeholder="password"
                id=""
              />
            </div>
            <div className="flex justify-between mb-8">
              <div>
                <input type="checkbox" name="checkbox" id="" />
                <label className="px-1 font-medium" htmlFor="checkbox">
                  Remember me
                </label>
              </div>
              <button onClick={handleResetPassword} className="text-indigo-700 font-medium hover:underline">
                {" "}
                Forgot your password?
              </button>
            </div>
            <button className="border block w-full py-2 rounded-lg bg-teal-800 text-white uppercase hover:bg-teal-600">
              Sign in
            </button>
          </form>
          <div className="mt-2 me-2">
            Create an account?{" "}
            <Link to="/register" className="text-indigo-800 underline">
              Register
            </Link>
          </div>
          <SocalLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
