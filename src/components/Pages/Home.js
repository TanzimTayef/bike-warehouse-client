import React from "react";
import Banner from "../Banner";
import Contact from "../Contact";
import Pricing from "../Pricing";
import Services from "../Services";
import Stocks from "../Stocks";
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <div id="banner">
        <Header />
        <Banner />
      </div>
      <Services />
      <Pricing />
      <Stocks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
