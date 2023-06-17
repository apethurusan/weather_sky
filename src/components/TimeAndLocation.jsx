import React from "react";
import { formatToLocalTime } from "../services/weatherService";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6 mt-8">
        <p className="text-[#fff] text-lg text-center">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-[#fff] text-2xl font-bold">{name}, {country}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
