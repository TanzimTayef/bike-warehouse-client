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
      <div className="w-1/2 h-96 ">
        Add Service
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input className="border" {...register("price")} />
          <input className="border" {...register("quantity")} />
          <textarea className="border" type="number" {...register("desc")} />
          <input value="Add To Item" className="border" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
