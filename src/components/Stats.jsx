import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="flex items-start pb-6 sm:pb-24">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 font-poppins flexCenter flex-col space-x-0 md:flex-row md:space-x-4 text-center"
        >
          <h4 className="text-white text-2xl sm:text-3xl font-semibold mb-2 md:mb-0">
            {stat.value}
          </h4>
          <p className="text-gradient uppercase text-sm sm:text-lg">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
