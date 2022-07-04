import React from "react";
import API from "../utils/API";
import Main from "./components/Main";
import Temperature from "./components/Temperature";
import Air from "./components/Air";
import Wind from "./components/Wind";
import Astronomy from "./components/Astronomy";
import "./Home.css";

function Home() {
  var weather = {};

  var updateHTML = (tag, value) => {
    document.querySelector(tag).innerHTML = value;
  }

  var getCurrent = () => {
    API.getSevenDay(40.758701, -111.876183).then((res) => {
      var data = res.data;
      updateHTML("#currentTemp", data.current.temp);
      updateHTML("#feelsLikeTemp", data.current.feels_like);
      updateHTML("#highTemp", data.daily[0].temp.max);
      updateHTML("#lowTemp",data.daily[0].temp.min);
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
      <div className="row mx-auto mb-4">
        <div className="col col-6">
          <Main />
        </div>
        <div className="col col-4 mx-auto">
          <Temperature />
          <Air />
        </div>
      </div>
      <div className="row mb-5 mx-auto">
        <div className="col col-6">
          <Wind />
        </div>
        <div className="col">
          <Astronomy />
        </div>
      </div>
      <section className="hourlyForecast col-12 mx-auto mb-5">Hourly forecast</section>
      <section className="extendedForecast col-10 mx-auto">Extended forecast</section>
    </main>
  );
}

export default Home;
