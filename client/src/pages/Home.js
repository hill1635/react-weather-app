import React, { useState } from "react";
import API from "../utils/API";
import "./Home.css";

function Home() {
  // const [weather, setWeather] = useState({});
  var weather = {};

  var getCurrent = () => {
    API.getCurrent(40.758701, -111.876183).then((res) => {
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

  // var weatherObj = weather;
  console.log("currentWeather: ", weather);

// getCurrent();

  return (
    <main>
      <div className="row mx-auto">
        <section className="currentMain mx-auto">
          <h1>Salt Lake City</h1>
          <span alt="icon"></span>
        </section>
        <section className="currentTemp mx-auto">
          <p><i className="fa-solid fa-temperature-three-quarters"></i></p>
          <p>High</p>
          <p>Low</p>
          <p>Humidity</p>
          <p>Precipitation</p>
          <p>Air Quality</p>
        </section>
      </div>
      <div className="row">
        <section className="currentAstronomy mx-auto">
          <p>Sunrise</p>
          <p>Sunset</p>
          <p>Moon Phase</p>
        </section>
        <section className="weatherWarnings mx-auto">
          <p>Weather warnings</p>
        </section>
      </div>
      <section className="hourlyForecast">Hourly forecast</section>
      <section className="extendedForecast">Extended forecast</section>
    </main>
  );
}

export default Home;
