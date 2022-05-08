import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const url = `http://localhost:8080/stocks/`;
    fetch(url, {
      method: "POST",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div>
      <h1 className="text-4xl uppercase font-bold  text-slate-800 text-center mt-8">  Add Service</h1>
      <div className="w-3/5 flex justify-center py-16 ">
      
        <form className="p-2 w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border w-full mb-4 bg-sky-50 rounded shadow-sm  focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input className="border mb-4  w-full bg-sky-50 rounded shadow-sm  focus:outline-none focus:border-indigo-500 text-base px-4 py-2" {...register("price")} />
          <input className="border mb-4 w-full bg-sky-50 rounded shadow-sm  focus:outline-none focus:border-indigo-500 text-base px-4 py-2" {...register("quantity")} />
          <input className="border mb-4 w-full bg-sky-50 rounded shadow-sm  focus:outline-none focus:border-indigo-500 text-base px-4 py-2" {...register("url")} />
          <textarea className="border mb-4 w-full bg-sky-50 rounded shadow-sm  focus:outline-none focus:border-indigo-500 text-base px-4 py-2" type="number" {...register("desc")} />
          <input value="Add Item" className="border text-slate-200 bg-slate-800 border-0 py-2 mt-4 focus:outline-none hover:bg-slate-700 rounded text-md block w-full uppercase font-bold" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
