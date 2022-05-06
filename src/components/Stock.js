import React from "react";
import {useNavigate } from "react-router-dom";
import stockImg from "../images/bike/blog_all_1.jpg";

const Stock = ({ stock }) => {
  const {_id, picture, price, name, desc, items } = stock;
  const navigate = useNavigate();

  const navigateToInventory = (_id) => {
       navigate(`/invetores/${_id}`)
  }
  return (
    <div className="lg:w-1/3 h-full sm:w-1/2 p-4">
      <div className="border-2 border-gray-200 relative text-left">
        <div className="h-64">
        <img
          alt="gallery"
          className=" w-full h-full object-cover object-center "
          src={picture}
        />
      </div>
        <p className="absolute top-0 right-0 w-16 bg-teal-800 text-white text-center px-3 py-3 text-2xl font-medium">
         {price}
        </p>
        <div className="px-8 py-8 z-10 w-full  bg-white">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             {items}
          </h1>
          <p className="leading-relaxed mb-4">{desc.slice(0, 80)}...</p>
          <div className="flex justify-between">
            <p>{name}</p>
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
        <button onClick={() => navigateToInventory(_id)} className="flex items-center uppercase text-white bg-teal-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-700 text-sm">
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
        </button>
      </div>
    </div>
  );
};

export default Stock;
