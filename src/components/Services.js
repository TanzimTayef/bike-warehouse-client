import React from "react";

const Services = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-24">
          <h1 className="text-4xl font-bold text-center uppercase text-slate-700">
            {" "}
            <span className="text-bold text-blue-200">//</span>Plans for Our Pricing
          </h1>
          <div className=" border-blue-400  border-b-4 pt-2 mx-auto  w-24 "></div>
        </div>
        <div className="flex justify-evenly  flex-wrap -m-4 w-full  items-center">
          <div className="border-2 min:h-80 w-80 shadow rounded-lg mb-6 ">
            <h1 className="bg-slate-100 w-full py-4 flex items-center justify-center font-medium text-slate-800 text-2xl">Free</h1>
            <div className=" py-8 px-4 text-center">
            <p className="text-4xl font-bold text-slate-800 mb-2 animate-bounce">USD 0</p>
            <p className="text-xl mb-1">
              Always free
              </p>
              <p>for 3 agents</p>
            <button className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-white mt-6">Get Started</button>
            <p className="text-sm mt-2 px-4">For small teams getting started with a service desk</p>
            </div>
       
          </div>
          <div className="border-2 min:h-80 w-80 shadow rounded-lg mb-6">
            <h1 className="bg-slate-100 w-full py-4 flex items-center justify-center font-medium text-slate-800 text-2xl">Standard</h1>
            <div className=" py-8 px-4 text-center">
            <p className="text-4xl font-bold text-slate-800 mb-2 animate-bounce">USD 20</p>
            <p className="text-xl mb-1">
            per agent/month
              </p>
              <p>1-15 agents</p>
            <button className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-white mt-6">Start trial</button>
            <p className="text-sm mt-2 px-4">For teams maturing to standardized service desk and ITSM practices</p>
            </div>
         
          </div>
          <div className="border-2 min:h-80 w-80 shadow rounded-lg mb-6">
            <h1 className="bg-slate-100 w-full py-4 flex items-center justify-center font-medium text-slate-800 text-2xl">Premium</h1>
            <div className=" py-8 px-4 text-center">
            <p className="text-4xl font-bold text-slate-800 mb-2 animate-bounce">USD 45</p>
            <p className="text-xl mb-1">
            per agent/month
              </p>
              <p>for 3 agents</p>
            <button className="px-4 py-2 rounded-md bg-slate-700 hover:bg-slate-600 text-white mt-6">Start trial</button>
            <p className="text-sm mt-2 px-4">For organizations seeking high-velocity ITSM at scale</p>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
