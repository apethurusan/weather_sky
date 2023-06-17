import React from "react";
import { TbTemperature } from "react-icons/tb";
import { RiWindyFill } from "react-icons/ri";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

const TemperatureAndDetails = ({weather: {details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone},units,}) => {
  return (
    <div className="pb-4">

      <div className="flex items-center justify-center py-6 text-xl font-semibold text-[#fff]">
        <p>{details}</p>
      </div>

      <div className="flex flex-col xxsm:flex-row items-center justify-center gap-8 xxsm:gap-16 text-[#fff]">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        
        {units === "imperial" ? (
          <p className="text-5xl font-semibold flex">
            {temp.toFixed()}
            <span className="text-2xl">°F</span>
          </p>
        ) : (
          <p className="text-5xl font-semibold flex">
            {temp.toFixed()}
            <span className="text-2xl">°C</span>
          </p>
        )}

        <div className="flex flex-col space-y-2">
          <div className="flex text-sm items-center justify-center">
            <TbTemperature size={22} className="mr-1" />
            Real feel:
            {units === "imperial" ? (
              <span className="ml-1">
                {feels_like.toFixed()}
                <span className="text-sm">°F</span>
              </span>
            ) : (
              <span className="ml-1">
                {feels_like.toFixed()}
                <span className="text-sm">°C</span>
              </span>
            )}
          </div>
          <div className="flex text-sm items-center justify-center">
            <MdOutlineWaterDrop size={22} className="mr-1" />
            Humidity: <span className="ml-1">{humidity.toFixed()}%</span>
          </div>
          <div className="flex text-sm items-center justify-center">
            <RiWindyFill size={22} className="mr-1" />
            Wind: <span className="ml-1">{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-8 xsm:gap-2 mt-8 text-sm py-3 text-[#fff] text-center">
        <div className="flex flex-col xsm:flex-row items-center justify-center gap-4 xsm:gap-2">
          <FiSunrise size={22} className="mr-1" />
          <p>
            Rise:
            <span className="ml-1">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
          <p className="hidden xsm:block">|</p>

          <AiOutlineArrowUp size={22} className="mr-1" />
          {units === "imperial" ? (
            <p>
              High:
              <span className="ml-1 mr-4">
                {temp_max.toFixed()}
                <span className="text-sm absolute">°F</span>
              </span>
            </p>
          ) : (
            <p>
              High:
              <span className="ml-1 mr-4">
                {temp_max.toFixed()}
                <span className="text-sm absolute">°C</span>
              </span>
            </p>
          )}
          <p className="hidden xsm:block">|</p>
        </div>
        <div className="flex flex-col xsm:flex-row items-center justify-center gap-4 xsm:gap-2">
          <FiSunset size={22} className="mr-1" />
          <p>
            Set:
            <span className="ml-1">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
          <p className="hidden xsm:block">|</p>

          <AiOutlineArrowDown size={22} className="mr-1" />
          {units === "imperial" ? (
            <p>
              Low:
              <span className="ml-1">
                {temp_min.toFixed()}
                <span className="text-sm absolute">°F</span>
              </span>
            </p>
          ) : (
            <p>
              Low:
              <span className="ml-1">
                {temp_min.toFixed()}
                <span className="text-sm absolute">°C</span>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
