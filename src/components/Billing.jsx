import React from "react";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className="section items-center space-x-0 md:space-x-8 lg:space-x-40"
    >
      <div className="flex-1 order-2 md:order-1 flex items-center relative">
        <img src={bill} alt="billing" className="z-10" />
        <div className="absolute left-0 w-1/2 h-1/2 pink__gradient" />
      </div>

      <div className="flex-1 order-1 md:order-2 mb-4 lg:mb-0">
        <div>
          <h2 className="heading2 md:max-w-md">
            Easily control your billing & invoicing.
          </h2>
          <p className="paragraph mt-4 leading-relaxed md:leading-loose mb-8 md:max-w-lg">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex space-x-8">
            <img
              src={apple}
              alt="apple-store"
              className="cursor-pointer w-28"
            />
            <img
              src={google}
              alt="google-app"
              className="cursor-pointer w-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
