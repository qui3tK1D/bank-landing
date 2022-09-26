import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section id="clients" className="section">
      <div className="p-6 w-full rounded-2xl bg-black-gradient-2 flex flex-col justify-between items-start space-y-8 sm:p-8 lg:p-12 md:space-y-0 md:items-center md:flex-row">
        <div className="font-poppins">
          <h1 className="heading2 mb-4">Let’s try our service now!</h1>
          <p className="paragraph md:max-w-md leading-relaxed">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
