import React from "react";

const Banner = () => {
  return (
    <section  className=" body-font h-screen  bg-gradient-to-r from-slate-900">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="text-white lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font font-bold uppercase text-white sm:text-4xl text-4xl mb-6 ">
          Accomplish more

            <br className="hidden lg:inline-block" />
            together
          </h1>
          <p className="mb-8 leading-relaxed text-gray-200 text-justify">
          By subscribing to our company BIM you will always be up-to-date on our latest promotions, deals and vehicle inventory!
          </p>
          <div className="flex items-center hover:text-sky-300   ">
            <button className=" hover:text-sky-300   text-white focus:outline-none mr-2 font-bold text-indigo-100 rounded text-lg">
            Subscribe
            </button>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
    </section>
  );
};

export default Banner;
