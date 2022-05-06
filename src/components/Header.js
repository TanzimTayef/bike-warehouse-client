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
    <header className="bg-transparent shadow h-24 items-center flex sticky ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
          <span className="ml-3 text-2xl uppercase font-bold text-blue-400">Bike Warehouse</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l  md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="hover:text-blue-700 text-sm uppercase font-bold mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-700 text-sm uppercase font-bold mr-5 hover:text-gray-900">
            About
          </Link>
          <Link to="/about" className="hover:text-blue-700 text-sm uppercase font-bold mr-5 hover:text-gray-900">
            Blogs
          </Link>
          <Link to="/inventory" className="hover:text-blue-700 text-sm uppercase font-bold mr-5 hover:text-gray-900">
           Inventories
          </Link>
          {
            user ?  <Link to="/service" className="hover:text-blue-700 text-sm uppercase font-bold mr-5 hover:text-gray-900">
            Manage Item
          </Link> : ''
         }
          {
            user?  <Link to="/about" className="hover:text-blue-700 text-sm uppercase font-bold mr-5 hover:text-gray-900">
            Add Item
          </Link> : ''
         }

          {
            user ?  <Link to="my item" className="hover:text-blue-700 text-sm uppercase font-bold mr-5 hover:text-gray-900">
            My Item
          </Link>: ''
          }
          
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
            className="inline-flex items-center bg-slate-800 text-white font-medium border-0 py-2 px-4 focus:outline-none hover:bg-slate-700 rounded text-base mt-4 md:mt-0"
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
