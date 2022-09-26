import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="bg-blue-gradient w-28 h-28 p-[2px] rounded-full font-poppins font-medium">
      <div className="bg-primary w-full h-full rounded-full flex flex-col items-center justify-center">
        <div className="flex gap-1">
          <p className="text-gradient text-lg">Get</p>
          <img src={arrowUp} alt="arrow" />
        </div>
        <div>
          <p className="text-gradient text-lg">Started</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
