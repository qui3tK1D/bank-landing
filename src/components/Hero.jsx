import React from "react";
import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="paddingY flex items-start md:items-center flex-col md:flex-row space-y-8 md:space-y-0"
    >
      <div className="flex-1 flex items-start flex-col paddingX xl:px-0">
        <div className="px-2 py-2 flex items-center space-x-2 bg-discount-gradient rounded-lg mb-2 ss:px-4">
          <img src={discount} alt="discount" />
          <p className="paragraph">
            <span className="text-white">20%</span> Discount For
            <span className="text-white"> 1 Month</span>
            <span> Account</span>
          </p>
        </div>
        <div className="w-3/4 flex items-center justify-between md:justify-start">
          <h1 className="font-semibold text-4xl ss:text-5xl md:text-6xl font-poppins text-white leading-tight tracking-tight ss:leading-tight md:leading-tight">
            The Next <span className="text-gradient">Genetaration</span>
          </h1>
          <div className="hidden ss:flex ml-8">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-semibold text-4xl ss:text-5xl md:text-6xl font-poppins text-white leading-tight tracking-tight ss:leading-tight md:leading-tight">
          Payment Method
        </h1>
        <p className="paragraph mt-6 leading-loose max-w-md">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex-1 flex justify-center relative">
        <img src={robot} alt="robot" className="relative" />
        {/* <div className="absolute w-2/5 h-2/6 top-0 blue__gradient" /> */}
      </div>
      <div className="flex ss:hidden self-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
