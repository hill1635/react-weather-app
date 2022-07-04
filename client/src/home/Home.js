import React from "react";
import API from "../utils/API";
import Main from "./components/Main";
import Temperature from "./components/Temperature";
import Air from "./components/Air";
import Wind from "./components/Wind";
import Astronomy from "./components/Astronomy";
import "./Home.css";

function Home() {
  var lat = 40.758701;
  var long = -111.876183;
  var weather = {};

  var updateHTML = (tag, value) => {
    document.querySelector(tag).innerHTML = value;
  }

  var getAQI = () => {
    API.getAQI(lat, long)
      .then((res) => console.log("AQI: ", res.data));
  };

  var getCurrent = () => {
    API.getSevenDay(lat, long).then((res) => {
      var current = res.data.current;
      var daily= res.data.daily[0];

      updateHTML("#currentTemp", Math.round(current.temp));
      updateHTML("#feelsLikeTemp", Math.round(current.feels_like));
      updateHTML("#highTemp", Math.round(daily.temp.max));
      updateHTML("#lowTemp", Math.round(daily.temp.min));

      updateHTML("#humid", current.humidity);
      updateHTML("#uvi", current.uvi);
      
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

  // getAQI();
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
