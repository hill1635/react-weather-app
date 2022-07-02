import React from "react";

function Home() {
  return (
    <div>
      <h1>Default Location Daily Forecast</h1>
      <div>
        <img alt="icon">Weather icon goes here</img>
        <h2>Temp</h2>
        <p>High, low, humidity, precip, air quality</p>
        <p>Sunrise, sunset, moon stuff</p>
        <p>Weather warnings</p>
        <div>Hourly forecast</div>
        <div>Extended forecast</div>
      </div>
    </div>
  );
}

export default Home;
