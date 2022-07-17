import React from "react";
import API from "../utils/API";
import Main from "./components/Main";
import Temperature from "./components/Temperature";
import Air from "./components/Air";
import Wind from "./components/Wind";
import Astronomy from "./components/Astronomy";
import "./Home.css";

function Home(props) {
  var latitude = 40.758701;
  var longitude = -111.876183;
  var weather = {};

  var updateHTML = (tag, value) => {
    document.querySelector(tag).innerHTML = value;
  }

  var convertToTime = (milliseconds) => {
    var dayHalf = "";
    var seconds = Math.floor(milliseconds / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    if (hours > 12) {
      hours = hours - 12;
      dayHalf = "PM";
    }
  }

  // var getAQI = () => {
  //   API.getAQI(lat, long)
  //     .then((res) => console.log("AQI: ", res.data));
  // };

  var getCurrent = (data) => {
      var current = data.current;
      var daily= data.daily[0];

      // updateHTML("#currentTime", 
      updateHTML("#currentTemp", Math.round(current.temp));
      updateHTML("#feelsLikeTemp", Math.round(current.feels_like));
      updateHTML("#highTemp", Math.round(daily.temp.max));
      updateHTML("#lowTemp", Math.round(daily.temp.min));

      updateHTML("#humid", current.humidity);
      updateHTML("#uvi", current.uvi);
      
      updateHTML("#windSpeed", Math.round(current.wind_speed) + "mph");
      updateHTML("#windGust", Math.round(current.wind_gust) + "mph");
      updateHTML("#windDirection", current.wind_deg);

      updateHTML("#sunrise", current.sunrise);
      updateHTML("#sunset", current.sunset);
      updateHTML("#moonphase", daily.moon_phase);

      console.log("res.data: ", data);
  };

  // getAQI();
  // props.getWeather(latitude, longitude, getCurrent);

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
