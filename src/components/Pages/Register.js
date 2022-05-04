import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocalLogin from "../Shared/SocalLogin";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let navigate = useNavigate();

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
      console.log("password must be at least 6 characters");
    }
    if (password !== confirmPassword) {
      console.log("password don't match");
    }

    // create user
    createUserWithEmailAndPassword(email, password);
    if (user) {
     console.log(user)
   }
  };

  return (
    <div className="bg-gray-100">
      <div className=" md:w-1/3 py-16 mx-6 md:mx-auto">
        <h1 className="text-3xl font-bold mb-12">Sign in to your account</h1>
        <div className=" px-8 py-12 shadow-md bg-white rounded-lg">
          <form onSubmit={handleRegister}>
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
              />
            </div>
            <div className="flex justify-between mb-8">
              <div>
                <input type="checkbox" name="checkbox" id="" />
                <label className="px-1 font-medium" htmlFor="checkbox">
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="border block w-full py-2 rounded-lg bg-teal-800 text-white uppercase hover:bg-teal-600"
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
