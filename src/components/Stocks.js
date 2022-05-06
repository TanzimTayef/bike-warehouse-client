import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionTiltle from "./SectionTiltle";
import Stock from "./Stock";

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/stocks")
      .then(res => res.json())
      .then(data => setStocks(data));
  }, []);
  

  const handleManageInvetoris = () => {
    navigate("/inventores");
  }

  return (
    <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
          <div className="mb-24">
          <h1 className="text-4xl font-bold text-center uppercase text-slate-700">
            {" "}
            <span className="text-bold text-blue-200">//</span> Stock management
          </h1>
          <div className=" border-blue-400  border-b-4 pt-4 mx-auto  w-24 "></div>
        </div>
            <div className="flex flex-wrap -m-4">
         {
            stocks.slice(6, 12).map(stock => <Stock key={stock._id} stock={stock} />)
         }
           </div>
        <div className="pt-8 text-right">
        <button onClick={handleManageInvetoris}
            className="inline-flex items-center bg-teal-700 text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
          Manage Invetories
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
        </div>
        </div>     
    </section>
  );
};

export default Stocks;
