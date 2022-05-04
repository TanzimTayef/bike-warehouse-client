import React, { useEffect, useState } from "react";
import useStocks from "../hooks/usetStocks";
import SectionTiltle from "./SectionTiltle";
import Stock from "./Stock";

const Stocks = () => {
  const [stocks, setStocks] = useState({});
  useEffect(() => {
    fetch("stocks.js")
      .then(res => res.json())
    .then(data => setStocks(data))
  })

  return (
    <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <SectionTiltle/>
        <div className="flex flex-wrap -m-4">
          
          {
            stocks.length
          }
          {
            stocks.map(stock=> <Stock stock={stock} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Stocks;
