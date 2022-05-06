import React, { useState } from "react";

const Item = ({ item }) => {
  const { _id, picture, desc, name, price } = item;

  return (
    <div className="flex justify-between items-center">
      <div className="w-9/12 mr-4">
        <table className="text-left w-full">
          <tr className="border-b-2 border-slate-800">
            <th>Product</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          <tr className="shadow">
            <td className="flex items-center px-4 py-4">
              <img src="" alt="img" className="w-16 h-16 border" />
              <div className="ml-4">
                <p>name</p>
                <p>di</p>
                <p>desc</p>
              </div>
            </td>
            <td className="px-4 py-4">john do</td>
            <td className="px-4 py-4">1</td>
            <td className="px-4 py-4">$25</td>
            <td className="px-4 py-4">35</td>
            <td className="px-4 py-4 ">
              <div className="">
                <button className=" bg-teal-700 rounded text-white border py-1 px-4">
                  Delivered
                </button>
                <button className="  bg-red-800 rounded text-white border py-1 px-4 ">
                  Remove
                </button>
              </div>
            </td>
          </tr>
          <tr className="shadow">
            <td className="flex items-center px-4 py-4">
              <img src="" alt="img" className="w-16 h-16 border" />
              <div className="ml-4">
                <p>name</p>
                <p>di</p>
                <p>desc</p>
              </div>
            </td>
            <td className="px-4 py-4">john do</td>
            <td className="px-4 py-4">1</td>
            <td className="px-4 py-4">$25</td>
            <td className="px-4 py-4">35</td>
            <td className="px-4 py-4 ">
              <div className="">
                <button className=" bg-teal-700 rounded text-white border py-1 px-4">
                  Delivered
                </button>
                <button className="  bg-red-800 rounded text-white border py-1 px-4 ">
                  Remove
                </button>
              </div>
            </td>
          </tr>
       
        </table>
          </div>
          <div className="w-1/4 text-center">
              <h3 className="text-xl font-medium uppercase mb-6">Restock the items</h3>
              <div className="text-center">
                  <input type="text" name="" className="border-2 border-slate-400 outline-none rounded-md px-2 py-1" id="" />
                  <button className="block  bg-slate-800 hover:bg-slate-700 py-2 px-6 text-white mt-4 rounded-md mx-auto uppercase text-sm">ReStock</button>
            </div>
          </div>
    </div>
  );
};

export default Item;
