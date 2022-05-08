import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const [item, setItem] = useState({});
  const { inventoresId } = useParams();
  const [quan, setQuan] = useState();



  
  
    useEffect(() => {
      const url = `http://localhost:8080/stocks/${inventoresId}`;
      console.log(url)
      fetch(url)
        .then((res) => res.json())
        .then((data) => setItem(data));
    }, [inventoresId]);

  
    // handle Restock button to add the quantity:
  // const handleDelivered = (id) => {
  //   const quan = item.quantity - 1;
  //   const newQuan = quan;
  //   const url = `http://localhost:8080/stocks/${id}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(newQuan)
  //   })
  //     .then(response => response.json)
  //     .then(data => console.log("success", data)); 
  // }

  // Handle delivered to decrease Quantify:
 

    return (
        <section className="body-font bg-slate-100 pb-16 pt-8">
        <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-center">
            <h2 className="text-left uppercase   font-medium text-4xl">
                Product Details
              </h2>
            </div>
            <div className="md:w-9/12  mx-auto bg-white p-8 rounded-3xl shadow-2xl">
              <h2 className="text-4xl mb-1 text-yellow-600">{item.name}</h2>
              <p><span className="text-yellow-700">Product id:</span> {item._id}</p>
              <div className="flex flex-wrap justify-start w-full items-center pt-2">
                <div className="w-96">
                <img src={item.images} className="max-w-md max-h-md w-full" alt="img" />
                  </div>
                <div className="md:pl-6 w-96 sm:mt-4">
                <p className="text-2xl mb-3 font-medium">Quantity: {quan}</p>
                  <p className="text-xl mb-3 font-m">Price: {item.price}</p>
  
                  <p className="text-sm">{item.decs}</p>
                  <p className="py-4 text-xl">{item.supplier}</p>
                  <div className="flex flex-wrap justify-center w-full bg-slate-50 pt-4 pb-8 shadow rounded-lg">
                    <form >
                      <input type="number" name="number" className="border-2 w-16 mr-2 py-1 px-2 outline-none border-gray-300 " />
                      <button type='submit' className="border hover:bg-slate-800  px-8 py-1 bg-slate-700 text-white">Restock</button>
                    </form>
                    {/* <button onClick={() => handleDelivered(item._id)}  className="ml-6 border px-4 hover:bg-slate-500 bg-slate-400 text-white font-medium">Delivered</button> */}
                  </div>
                </div>
             </div>
            </div>
            
            
          </div>
        
        </section>
    );
};

export default ItemDetails;