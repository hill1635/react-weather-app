import React from "react";
import API from "../utils/API";

function Home() {
  var fiveDayForecast = () => {
    API.getFiveDay(40.758701, -111.876183)
    .then((res) => console.log("res: ", res.data));
  };

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
