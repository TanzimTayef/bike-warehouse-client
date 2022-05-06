import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item";

const Inventores = () => {
  const { inventoresId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:8080/stocks/${inventoresId}}`;
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [inventoresId]);

  return (
    <>
      <section className="body-font bg-slate-100 pb-16 pt-8">
      <div className="mb-8 flex items-center justify-center">
          <h2 className="text-left   font-medium text-4xl">
              Inventory Management
            </h2>
            {
              item.name
            }
          </div>
       
        <div className="container py-4 mb-8 px-6 rounded-md shadow-sm mx-auto w-full bg-white">
           <Item item={item} />
          {
            console.log(item)
          }
       
        </div>
      
      </section>
    </>
  );
};

export default Inventores;
