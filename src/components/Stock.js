import React from "react";
import { useNavigate } from "react-router-dom";

const Stock = ({ stock }) => {
  const { _id, images, price, name, supplier, decs, quantity } = stock;
  const navigate = useNavigate();

  const navigateToInventory = (_id) => {
    navigate(`/invetores/${_id}`);
  };
  return (
    <div className="lg:w-1/3 h-full sm:w-1/2 p-4">
      <div className="border-2 border-gray-200 relative text-left">
        <div className="h-64">
          <img
            alt="gallery"
            className=" w-full h-full object-cover object-center "
            src={images}
          />
        </div>
        <p className="absolute top-0 right-0  bg-slate-800 text-white text-center px-3 py-3 text-2xl font-medium">
          {price}
        </p>
        <div className="px-8 py-8 z-10 w-full  bg-white">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {name}
          </h1>
          <p className="leading-relaxed mb-4">{decs.slice(0, 100)}...</p>
          <div className="flex justify-between">
            <p>{supplier}</p>
            <div>
              <span className="mr-3">Quantity: {quantity}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigateToInventory(_id)}
          className="flex items-center uppercase text-white bg-slate-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-slate-700 text-sm"
        >
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
