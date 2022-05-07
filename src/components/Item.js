import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Item = ({ stock, setStock }) => {
  const { _id, picture, price, name } = stock;


  const handleItemRemove = (id) => {
    const procceed = window.confirm("Are You sure want to remove this?");
    if (procceed) {
      const url = `http://localhost:8080/stocks/${id}`;
      console.log(url)
      fetch(url, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => console.log(data));
      // const remaining = stock.filter(st => st._id !== id);
      // setStock(remaining)

    }
}

  return (
    <tr className="px-1 hover:bg-gray-100 border-b px-2 rounded">
      <td className=" py-2">{_id}</td>
      <td className=" py-2">
        <img src={picture} className="w-16 h-16" alt="" />
      </td>
      <td className=" py-2">{name}</td>
      <td className=" py-2">{price}</td>
      <td className=" py-2">{price}</td>
      <td className=" py-2">1961</td>
      <td className=" py-2">
        <button onClick={() =>handleItemRemove(_id)} className=" rounded-full bg-red-400 px-4 py-2 text-white font-bold">Remove</button>
      </td>
    </tr>
  );
};

export default Item;
