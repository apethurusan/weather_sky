import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery }) => {
  const [city, setCity] = useState("");

  //find searh city weather details
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city !== ""){
      setQuery({ q: city });
    }
  };

  //current location weather details
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 items-center text-center md:text-right">
      <form onSubmit={handleSubmit} className="relative mr-8">
        <AiOutlineSearch className="absolute top-0 left-0 text-xl rounded-2xl cursor-pointer mt-[0.6rem] ml-4 text-primary" />
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className="w-full bg-secondary placeholder-primary text-primary pl-12 py-2 rounded-2xl shadow-lg outline-none capitalize"
          type="text"
          placeholder="Search city"
        />
        <BiCurrentLocation
          size={22}
          title="Current Location"
          onClick={handleLocation}
          className="text-[#fff] bg-blue-500 absolute top-0 -right-8 mt-2 ml-4 cursor-pointer rounded-3xl hover:opacity-50"
        />
      </form>
    </div>
  );
};

export default Inputs;
