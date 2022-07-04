import React, { useState } from "react";
import API from "../utils/API";
import "./Home.css";

function Home() {
  var weather = {};

  var getCurrent = () => {
    API.getSevenDay(40.758701, -111.876183).then((res) => {
      // weather = {
      //   overview: res.data.current.weather[0].main,
      //   date: res.data.current.dt,
      //   temp: res.data.current.temp,
      //   sunrise: res.data.current.sunrise,
      //   sunset: res.data.current.sunset,
      //   windSpeed: res.data.current.wind_speed,
      //   windGust: res.data.current.wind_gust,
      //   uvi: res.data.current.uvi,
      // };
      console.log("res.data: ", res.data);
    });
  };

  // getCurrent();

  return (
    <main className="text-center">
      <div className="row mx-auto mb-5">
        <div className="col col-6">
          <section className="currentMain mx-auto row h-100">
            <h1>Salt Lake City</h1>
            <span alt="icon"></span>
          </section>
        </div>
        <div className="col col-4 mx-auto">
          <section className="currentTemp row mb-3">
            <p>Current</p>
            <p>Feels Like</p>
            <p>High</p>
            <p>Low</p>
          </section>
          <section className="row col-11 mx-auto">
            <p>Humidity</p>
            <p>Precipitation</p>
            <p>Air Quality</p>
          </section>
        </div>
      </div>
      <div className="row mb-5 mx-auto">
        <div className="col col-6">
          <section className="currentWind col-8 mx-auto">
            <p>Wind Speed</p>
            <p>Wind Gusts</p>
            <p>Wind Direction</p>
          </section>
        </div>
        <div className="col">
          <section className="currentAstronomy col mx-5">
            <p>Sunrise</p>
            <p>Sunset</p>
            <p>Moon Phase</p>
          </section>
        </div>
      </div>
      <section className="hourlyForecast col-12 mx-auto mb-5">Hourly forecast</section>
      <section className="extendedForecast col-10 mx-auto">Extended forecast</section>
    </main>
  );
}

export default Home;
