import React from "react";

import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section className="paddingY">
      <div className="flex flex-col space-x-0 space-y-4 mb-12 md:mb-20 md:space-y-0 md:flex-row md:space-x-52 md:items-center">
        <h3 className="heading2 md:max-w-sm">
          What people are saying about us
        </h3>
        <p className="paragraph max-w-md leading-relaxed">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <FeedbackCard />
    </section>
  );
};

export default Testimonials;
