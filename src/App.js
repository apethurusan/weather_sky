import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import getFormattedWeatherData from "./services/weatherService";
import LoadingAnimation from "./components/LoadingAnimation";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState();
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };

  // find current location
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
  
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
      .then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    handleLocation();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-blue-400">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="">
          {weather && (
            <>
              <Navbar handleUnits={handleUnits} />
              <MainSection setQuery={setQuery} weather={weather} units={units} />
              <Footer />
            </>
          )}
        </div>
      )} 
    </div>
  );
}

export default App;
