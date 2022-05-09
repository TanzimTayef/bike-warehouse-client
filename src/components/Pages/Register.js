import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocalLogin from "../Shared/SocalLogin";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let navigate = useNavigate();
  let errorMessage;

  if (loading) {
    return  <div className="h-screen">  <Loading/></div>
  }

  if (error) {
    errorMessage = (<span className="border txt-center border-red-600 rounded py-2 px-4 bg-red-50 mx-auto ">{error?.message}</span>);
  }

  // user navigate
    if (user) {
      navigate("/");
    }



  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(email, name, password);

    // validation
    if (password.length < 6) {
      alert("password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
     alert("Password don't matched!!");
      return;
    } 
    createUserWithEmailAndPassword(email, password);

    // create user
  
    e.target.reset();
    
  };

  return (
    <div className="bg-gray-100">
      <div className=" md:w-1/3 py-16 mx-6 md:mx-auto">
        <h1 className="text-3xl text-center font-bold mb-12">Create an account</h1>
        <div className=" px-8 py-8 shadow-md bg-white rounded-lg">
          <p className="text-red-500">{errorMessage}</p>
          <form className="pt-4" onSubmit={handleRegister}>
            <div className="text-left mb-4">
              <label
                className="text-base font-medium text-gray-500"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border block w-full p-2 rounded-lg mt-1 border-2 outline-none"
                type="text"
                name="name"
                placeholder="Your name"
                id=""
               
              />
            </div>
            <div className="text-left mb-4">
              <label
                className="text-base font-medium text-gray-500"
                htmlFor="email"
              >
                Email address
              </label>
              <input
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
                className="border block w-full p-2 rounded-lg mt-1 border-2 outline-none"
                type="password"
                name="password"
                placeholder="password"
                id=""
                required
              />
            </div>
            <div className="text-left mb-4">
              <label
                className="text-base font-medium text-gray-500"
                htmlFor="confirmPassword"
              >
                Password
              </label>
              <input
                className="border block w-full p-2 rounded-lg mt-1 border-2 outline-none"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                id=""
                required
              />
            </div>
            <div className="flex justify-between mb-4">
              <div>
               
                <input type="checkbox" name="terms" id="terms" />
                <label className="px-1 font-medium" htmlFor="terms">
                  Remember me
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="border block w-full py-2 rounded-lg bg-slate-700 text-white uppercase hover:bg-gray-500"
            >
              Sign in
            </button>
          </form>
          <div className="mt-2 me-2">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-800 underline">
              Sign in
            </Link>
          </div>
          <SocalLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
