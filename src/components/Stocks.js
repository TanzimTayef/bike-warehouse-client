import React, { useEffect, useState } from "react";
import useStocks from "../hooks/usetStocks";
import SectionTiltle from "./SectionTiltle";
import Stock from "./Stock";

const Stocks = () => {
  return (
    <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <SectionTiltle/>
        <div className="flex flex-wrap -m-4">
          <Stock/>
          <Stock/>
          <Stock/>
          <Stock/>
        </div>
      </div>
    </section>
  );
};

export default Stocks;
