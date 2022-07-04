import React, { useState } from "react";
import API from "../utils/API";

function Home() {
  const [weather, setWeather] = useState({});

  var currentForecast = () => {
    API.getCurrent(40.758701, -111.876183)
    .then((res) => {
      var weatherObj = {
        overview: res.data.weather[0].main,
        date: new Date(res.data.dt),
        temp: res.data.main.temp,
        sunrise: new Date(res.data.sys.sunrise),
        sunset: new Date(res.data.sys.sunset),
        windSpeed: res.data.wind.speed,
        windGust: res.data.wind.gust
      };
      console.log(weatherObj);
    });
  };

  var fiveDayForecast = () => {
    API.getFiveDay(40.758701, -111.876183).then((res) =>
      console.log("res: ", res.data)
    );
  };

  // currentForecast();

  return (
    <main>
      <h1>Default Location Daily Forecast</h1>
      <div>
        <span alt="icon">Weather icon goes here</span>
        <h2>Temp</h2>
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
