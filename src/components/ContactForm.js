import React from 'react';

const ContactForm = () => {
    return (
        <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <input className="w-full bg-sky-50 rounded shadow-sm  focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text" />
        </div>
        <div className="p-2 w-1/2">
          <input className="w-full bg-sky-50 rounded  shadow-sm focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email" />
        </div>
        <div className="p-2 w-full">
          <textarea className="w-full bg-sky-50 rounded shadow-sm  focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
        </div>
        <div className="p-2 w-full">
          <button className=" text-slate-200 bg-slate-800 border-0 py-2 mt-4 focus:outline-none hover:bg-slate-700 rounded text-md block w-full uppercase font-bold">Contact us</button>
        </div>
       
      </div>
    );
};

export default ContactForm;