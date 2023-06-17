import React from "react";
import Inputs from "./Inputs";
import TemperatureAndDetails from "./TemperatureAndDetails";
import TimeAndLocation from "./TimeAndLocation";

const MainSection = ({ weather, setQuery, units }) => {
  return (
    <div className="main-div animate-animateOpacity mt-28 bg-blue-400">
      <Inputs setQuery={setQuery} />
      <TimeAndLocation weather={weather} />
      <TemperatureAndDetails weather={weather} units={units} />
    </div>
  );
};

export default MainSection;
