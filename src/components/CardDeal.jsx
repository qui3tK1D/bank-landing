import React from "react";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className="section items-center space-x-0 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-40">
      <div className="flex-1">
        <div className="md:max-w-md">
          <h3 className="heading2">
            Find a better card deal in few easy steps.
          </h3>
          <p className="paragraph mt-4 mb-8">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button />
        </div>
      </div>
      <div className="flex-1">
        <img src={card} alt="credit-card" />
      </div>
    </section>
  );
};

export default CardDeal;
