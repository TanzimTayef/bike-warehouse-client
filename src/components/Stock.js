import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import stockImg from "../images/bike/blog_all_1.jpg";

const Stock = () => {
  const navigate = useNavigate();
  const updateBtnHandler = () => {
       navigate("/inventory")
  }
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4 ">
      <div className="border-2 border-gray-200 relative text-left">
        <img
          alt="gallery"
          className=" w-full h-full object-cover object-center "
          src={stockImg}
        />
        <p className="absolute top-0 right-0 w-16 bg-teal-800 text-white text-center px-3 py-3 text-2xl font-medium">
          $80
        </p>
        <div className="px-8 py-8 z-10 w-full  bg-white">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Shooting Stars
          </h1>
          <p className="leading-relaxed mb-4">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="flex justify-between">
            <p>akik dewan</p>
            <div>
              <span className="mr-3">Quantity:</span>
              <input
                type="number"
                name=""
                id=""
                className="border w-14 px-1 outline-teal-700"
              />
            </div>
          </div>
        </div>
        <Link to="/inventory" onClick={updateBtnHandler} className="flex items-center uppercase text-white bg-teal-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-700 text-sm">
          Stock update
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Stock;
