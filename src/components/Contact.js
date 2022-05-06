import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="text-gray-700 body-font relative bg-slate-100">
      <div className="container px-5 py-24 mx-auto">
        <div class=" mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-center uppercase text-slate-700">
              {" "}
              <span className="text-bold text-blue-200">//</span>Contact with us
            </h1>
            <div className=" border-blue-400  border-b-4 pt-2 mx-auto  w-24 "></div>
          </div>
          <div className="flex items-center justify-between w-full ">
            <div className="w-8/12 bg-white mr-8 py-8 px-6 shadow-lg rounded-md md:h-96">
              <ContactForm />
            </div>
            <div className="w-4/12 bg-white py-8 md:h-96 px-6 shadow-lg rounded-md flex flex-wrap items-start">
              <div  className="">
                <p className="text-2xl text-slate-800 font-bold">Let’s Call or Email</p>
                <p><small>tayef464@gmail.com</small></p>
                <p>+8801789654950</p>
              </div>
              <div className="">
                <p className="text-2xl text-slate-800 font-bold">We Reached Here</p>
                <p>45 Mikraham Street, New York 47895</p>
              </div>
              <div className="">
                <p className="text-2xl text-slate-800 font-bold">Chat on Online</p>
                <p>tayef464@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
