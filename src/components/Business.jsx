import React from "react";
import Button from "./Button";
import { features } from "../constants";
import useActive from "../hooks/useActive";

const Business = () => {
  const { activeCard, handleClick } = useActive(features[1].id);

  return (
    <section
      id="features"
      className="section space-x-0 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-40"
    >
      <div className="flex-1">
        <h2 className="heading2 md:max-w-md">
          You do the business, we’ll handle the money.
        </h2>
        <p className="paragraph leading-relaxed md:leading-loose mt-4 mb-12">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>

      {/* feature card */}
      <div className="flex-1 space-y-4">
        {features.map((feature) => (
          <div
            className={`feature-card p-4 rounded-2xl flex items-center space-x-6 ${
              feature.id === activeCard ? "active" : ""
            }`}
            key={feature.id}
            onClick={handleClick.bind(null, feature.id)}
          >
            <div className="w-14 h-14 flex-shrink-0 rounded-full bg-dimBlue flexCenter">
              <img
                src={feature.icon}
                alt={feature.id}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div className="font-poppins space-y-2 text-white">
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="paragraph text-sm leading-relaxed ss:text-base ss:leading-relaxed">
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
