import React, { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
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
  let errorMessage;
 
  if (loading || sending) {
    return <div className="h-screen"><Loading/></div>
  }
  if (error) {
    errorMessage = (<span className="border txt-center border-red-600 rounded py-2 px-4 bg-red-50 mx-auto ">{error?.message}</span>);
  }

 if (user) {
   navigate(from, { replace: true });
 }

  const handleLoginForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    e.target.reset();
  }


  const handleResetPassword = () => {
    if (email) {
       sendPasswordResetEmail(email);
        toast('Sent email');
    }
    else{
        toast('please enter your email address');
    }
  }



  return (
    <div className="bg-gray-100">
      <div className=" md:w-1/3 py-16  mx-6 md:mx-auto">
        <h1 className="text-3xl text-center font-bold mb-12">Sign in to your account</h1>
        <div className=" px-8 pb-12 pt-8 shadow-md bg-white rounded-lg">
          <p>{errorMessage }</p>
          <form className="mt-4" onSubmit={handleLoginForm}>
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
                required
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
                Forgot password?
              </button>
            </div>
            <button className="border block w-full py-2 rounded-lg bg-slate-700 text-white uppercase hover:bg-gray-500">
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
