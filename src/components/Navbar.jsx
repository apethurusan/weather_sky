import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";

const Navbar = ({ handleUnits }) => {
  return (
    <div className="w-full shadow-md fixed top-0 z-50 bg-blue-500 animate-animateOpacity">
      <div className="main-div flex items-center justify-between h-20 font-bold text-[#fff]">
        <div className="cursor-pointer">
          <h1 className="text-lg hover:opacity-50 flex justify-center">
            <span>
              <TiWeatherDownpour size={22} />
            </span>
            Weather Sky
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            name="metric"
            onClick={handleUnits}
            className="hover:opacity-50"
          >
            °C
          </button>
          <span className="text-sm">/</span>
          <button
            name="imperial"
            onClick={handleUnits}
            className="hover:opacity-50"
          >
            °F
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
