import React from "react";
import Banner from "../Banner";
import Contact from "../Contact";
import Pricing from "../Pricing";
import Services from "../Services";
import Stocks from "../Stocks";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Pricing />
      <Stocks />
      <Contact />
    </>
  );
};

export default Home;
