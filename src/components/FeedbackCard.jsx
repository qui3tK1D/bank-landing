import React from "react";
import useActive from "../hooks/useActive";
import { feedback } from "../constants";

const FeedbackCard = () => {
  const { activeCard, handleClick } = useActive(feedback[1].id);
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 space-x-0 md:flex-row md:space-x-4">
      {feedback.map((feedback) => (
        <div
          className="feedback-container flex-1 font-poppins"
          key={feedback.id}
          onClick={handleClick.bind(null, feedback.id)}
        >
          <div
            className={`feedback-card h-full rounded-2xl flex flex-col justify-between p-5 md:px-6 md:py-8 ${
              activeCard === feedback.id ? "active" : ""
            }`}
          >
            {/* quote */}
            <p className="text-white leading-loose text-lg mb-6">
              {feedback.content}
            </p>
            {/* author */}
            <div className="flex items-center space-x-4">
              <img
                src={feedback.img}
                alt={feedback.id}
                className="h-10 w-10 object-contain"
              />
              <div>
                <h4 className="text-white text-base">{feedback.name}</h4>
                <span className="text-gray-400 font-thin text-sm">
                  {feedback.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackCard;
