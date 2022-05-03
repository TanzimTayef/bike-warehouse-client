import React from "react";
import SectionTiltle from "./SectionTiltle";
import Service from "./Service";

const Services = () => {
  return (
    <section class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto">
              <SectionTiltle />
              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                  <Service/>
                  <Service/>
                  <Service/>
              </div>
      </div>
    </section>
  );
};

export default Services;
