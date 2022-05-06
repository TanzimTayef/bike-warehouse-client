import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStocksDetails from "../../hooks/usetStocks";
import Header from "../Header";
import Item from "../Item";

const Inventores = () => {
  const { inventoresId } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/stocks/${inventoresId}}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [inventoresId]);

  return (
    <>
      <Header />
      <section className="body-font bg-slate-100 pb-16 pt-8">
       
        <div className="container py-4 mb-8 px-6 rounded-md shadow-sm mx-auto w-full bg-white">
          <div className="border-b-2 pb-1 flex items-center">
            <h2 className="text-left  font-medium text-lg">
              Inventory Management
            </h2>
          </div>
          <Item item={item} />
          {
            console.log(item)
          }
          <div className="flex justify-end my-12 ">
            <div className=" mx-16">
                  <input
                    className=" px-2 py-2 border rounded outline-none"
                    type="number"
                    name="name"
                    placeholder="0"
                    id=""
                  />
                  <button
                    type="submit"
                    className="border-2 rounded font-medium  bg-gray-200 py-2 px-2 bg-teal-700 text-white  "
                  >
                    restock items
                  </button>
            </div>
            <div>
              <button className="border py-2 px-4 bg-pink-200 text-lg rounded">Add a new items</button>
            </div>
          </div>
        </div>
      
      </section>
    </>
  );
};

export default Inventores;
