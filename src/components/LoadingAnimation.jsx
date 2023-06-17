import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";

const LoadingAnimation = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="bg-blue-500 animate-animateOpacity text-[#fff] flex justify-center items-center font-bold h-[100vh]">
        <span>
          <TiWeatherDownpour size={60} className="mb-4" />
        </span>
        <span className="text-5xl">Weather Sky</span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
