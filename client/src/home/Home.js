import React, { useState, useEffect } from "react";
import moment from "moment";
import Main from "./components/Main";
import Temperature from "./components/Temperature";
import Air from "./components/Air";
import Wind from "./components/Wind";
import Astronomy from "./components/Astronomy";
import FiveDayDiv from "../components/fivedaydiv/FiveDayDiv";
import "./Home.css";

function Home(props) {
  const [forecast, setForecast] = useState([]);
  var latitude = 40.758701;
  var longitude = -111.876183;

  var updateHTML = (tag, value) => {
    document.querySelector(tag).innerHTML = value;
  };

  // var getAQI = () => {
  //   API.getAQI(lat, long)
  //     .then((res) => console.log("AQI: ", res.data));
  // };
  useEffect(() => {
    var updateWeather = (data) => {
      var current = data.current;
      var daily = data.daily[0];
      var apiData = [data];
      apiData[0].daily.shift();
      setForecast(apiData);

      document.querySelector("#icon").src = "http://openweathermap.org/img/wn/" + daily.weather[0].icon + "@2x.png";
      updateHTML("#currentTemp", Math.round(current.temp));
      updateHTML("#feelsLikeTemp", Math.round(current.feels_like));
      updateHTML("#highTemp", Math.round(daily.temp.max));
      updateHTML("#lowTemp", Math.round(daily.temp.min));

      updateHTML("#humid", current.humidity);
      updateHTML("#uvi", current.uvi);

      updateHTML("#windSpeed", Math.round(current.wind_speed) + "mph");
      updateHTML("#windGust", Math.round(current.wind_gust) + "mph");
      updateHTML("#windDirection", current.wind_deg);

      updateHTML("#sunrise", moment.unix(current.sunrise).format("LT"));
      updateHTML("#sunset", moment.unix(current.sunset).format("LT"));
      updateHTML("#moonphase", daily.moon_phase);
    };

    // getAQI();
    props.getWeather(latitude, longitude, updateWeather);
  }, []);

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
      <section className="hourlyForecast col-12 mx-auto mb-5">
        Hourly forecast
      </section>
      <section className="extendedForecast col-10 mx-auto">
        <h3>Extended forecast</h3>
        <FiveDayDiv forecasts={forecast} />
      </section>
    </main>
  );
}

export default Home;
