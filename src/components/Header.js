import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleBtnLogin = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    signOut(auth);
    console.log("sign out success");
  };

  return (
    <header className="text-gray-700 body-font shadow-md sticky">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Techy</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/inventory" className="mr-5 hover:text-gray-900">
            Inventory
          </Link>
          <Link to="/service" className="mr-5 hover:text-gray-900">
            Service
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>

          <Link to="contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {user ? (
          <button
            onClick={handleSignOut}
            className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
          >
            Sign out
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        ) : (
          <button
            onClick={handleBtnLogin}
            className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
          >
            Log in
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
