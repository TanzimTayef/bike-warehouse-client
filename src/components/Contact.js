import React from "react";
import ContactForm from "./ContactForm";
import SectionTiltle from "./SectionTiltle";

const Contact = () => {
  return (
    <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-24 mx-auto">
              <div class="lg:w-1/2 md:w-2/3 mx-auto">
                  <SectionTiltle/>
                  <ContactForm/>
          </div>
      </div>
    </section>
  );
};

export default Contact;
