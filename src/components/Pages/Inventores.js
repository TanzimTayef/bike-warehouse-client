import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item";

const Inventores = () => {
  const [item, setItem] = useState({});
  const { inventoresId } = useParams();


  useEffect(() => {
    const url = `http://localhost:8080/stocks/${inventoresId}`;
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [inventoresId]);



  // handle delivered button for increase the item quantity:

  return (
    <>
      <section className="body-font bg-slate-100 pb-16 pt-8">
      <div className="container mx-auto">
      <div className="mb-8 flex items-center justify-center">
          <h2 className="text-left uppercase   font-medium text-4xl">
              Product Details
            </h2>
          </div>
           
          <div className="md:w-9/12  mx-auto bg-white p-8 rounded-3xl shadow-2xl">
            <h2 className="text-4xl mb-1 text-yellow-600">{item.items}</h2>
            <p><span className="text-yellow-700">Product id:</span> {item._id}</p>
            <div className="flex justify-between items-center pt-2">
              <div className="">
              <img src={item.picture} className="max-w-md" alt="img" />
                </div>
              <div className="md:pl-6">
                <p className="text-2xl mb-3 font-medium">Quantity: {item.price}</p>
                <p className="text-xl mb-3 font-m">Price: {item.price}</p>

                <p className="text-sm">{item.desc}</p>
                <p className="py-4 text-xl">{item.name}</p>
                <div className="flex flex-wrap justify-center w-full bg-slate-50 pt-4 pb-8 shadow rounded-lg">
                  <form >
                    <input type="number" className="border-2 w-16 mr-2 py-2 px-2 outline-none border-gray-300 " />
                    <button className="border hover:bg-slate-800  px-16 py-2 bg-slate-700 text-white">Restock</button>
                  </form>
                  <button className="ml-6 border py-2 px-8 hover:bg-slate-500 bg-slate-400 text-white font-medium">Delivered</button>
                </div>
              </div>
           </div>
          </div>
          
          
        </div>
      
      </section>
    </>
  );
};

export default Inventores;
