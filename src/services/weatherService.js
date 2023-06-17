import { DateTime } from "luxon";

//API=https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0109571924251b5b506a453d3d62b2d0
const API_KEY = "0109571924251b5b506a453d3d62b2d0";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//set API format
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

//get location's weather details
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity }, name, dt,
    sys: { country, sunrise, sunset }, weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed
  };
};


const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData("weather", searchParams)
    .then(formatCurrentWeather);

  return {
    ...formattedCurrentWeather,
  };
};

//get location's time and date
const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

//get current weather icon
const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
