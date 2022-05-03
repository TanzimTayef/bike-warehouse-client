import React from "react";
import PriceCart from "./PriceCart";
import SectionTiltle from "./SectionTiltle";

const Pricing = () => {
  return (
    <section class="text-gray-700 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
              <SectionTiltle></SectionTiltle>
              <div class="flex flex-wrap -m-4">
                   <PriceCart/>
                   <PriceCart/>
                   <PriceCart/>
                   <PriceCart/>
              </div>;
      </div>
    </section>
  );
};

export default Pricing;
