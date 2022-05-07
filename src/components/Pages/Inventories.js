import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../Item";
import userImg from "../../images/user.jpg";

const Inventories = () => {
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  return (
    <section className="bg-slate-50">
      <div className="flex">
        <div className="w-40 bg-slate-700 text-white"> this is sid bar</div>
        <div className="flex-auto">
          <div className=" mx-16">
            <div className="flex justify-between pt-8 mb-4">
              <form>
                <input
                  className="border-2 rounded-l-md py-2 w-50  px-2 outline-none"
                  placeholder="Search"
                  type="text"
                />
                <button className="border-2 py-2 bg-gray-100 rounded-r-md border-l-0 px-6 border-2">
                  Search
                </button>
              </form>
              <span className="flex items-center">
                <div className="mr-4 text-center">
                  <h4 className="font-medium text-md text-slate-700">
                    Admin name
                  </h4>
                  <p className="text-sm">
                    <small>Admin Profile</small>
                  </p>
                </div>
                <img
                  src={userImg}
                  className="w-16 border rounded-full h-16"
                  alt="img"
                />
              </span>
            </div>
            <div className="border-b py-6 flex justify-between">
            <h1 className="text-2xl font-medium ">Inventory Management</h1>
             <button className="bg-slate-600 hover:bg-slate-500 text-white px-6 py-2 rounded-md">Add To Item</button>
           </div>
            <div className="bg-white mb-8 py-6 px-6 rounded-md shadow mt-6">
              <table class="table-auto w-full text-left">
                <thead>
                  <tr className="px-1 py-1 border-b my-6">
                    <th>Id</th>
                    <th>Picture</th>
                    <th>Supply</th>
                    <th>Quantify</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                {stocks.map((stock) => (
                <Item stock={stock} setStocks={setStocks} />
              ))}
                </tbody>
              </table>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventories;
