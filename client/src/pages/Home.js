import React, { useState } from "react";
import API from "../utils/API";

function Home() {
  const [weather, setWeather] = useState({});

  var sevenDayForecast = () => {
    API.getSevenDay(40.758701, -111.876183).then((res) => {
      var currentWeather = {
        overview: res.data.current.weather[0].main,
        date: new Date(res.data.current.dt),
        temp: res.data.current.temp,
        sunrise: new Date(res.data.current.sunrise),
        sunset: new Date(res.data.current.sunset),
        windSpeed: res.data.current.wind_speed,
        windGust: res.data.current.wind_gust,
        uvi: res.data.current.uvi,
      };
      // setWeather(currentWeather);
      console.log("date: ", new Date(res.data.daily[0].dt));
    });
  };

  // sevenDayForecast();

  return (
    <main>
      <h1>Salt Lake City Forecast</h1>
      <div>
        <span alt="icon">{weather.overview}</span>
        <h2>Temperature: {weather.temp}</h2>
        <p>High, low, humidity, precip, air quality</p>
        <p>Sunrise, sunset, moon stuff</p>
        <p>Weather warnings</p>
        <div>Hourly forecast</div>
        <div>Extended forecast</div>
      </div>
    </main>
  );
}

export default Home;
