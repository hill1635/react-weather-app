import React, { useState, useEffect } from "react";
import moment from "moment";
import Main from "./components/Main";
import Additional from "./components/Additional";
import FiveDayDiv from "../components/fivedaydiv/FiveDayDiv";
import "./Home.css";

function Home(props) {
  const [forecast, setForecast] = useState([]);
  var latitude = 40.758701;
  var longitude = -111.876183;
  var mainData = {};
  var additonalData = {};

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


      const degToCompass = (num) => {
        var degree = parseInt((num/22.5)+.5);
        var directions = ["N", "NE", "NNE", "ENE", "E", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return directions[(degree % 16)];
      };
      apiData[0].daily.shift();
      setForecast(apiData);

      document.querySelector("#icon").src = "http://openweathermap.org/img/wn/" + daily.weather[0].icon + "@2x.png";
      updateHTML("#currentTemp", Math.round(current.temp) + "&#8457");
      updateHTML("#feelsLikeTemp", Math.round(current.feels_like) + "&#8457");
      updateHTML("#highTemp", Math.round(daily.temp.max) + "&#8457");
      updateHTML("#lowTemp", Math.round(daily.temp.min) + "&#8457");

      updateHTML("#humid", current.humidity + "%");
      updateHTML("#uvi", current.uvi);

      updateHTML("#windSpeed", Math.round(current.wind_speed) + "mph");
      updateHTML("#windDirection", degToCompass(current.wind_deg));

      updateHTML("#sunrise", moment.unix(current.sunrise).format("LT"));
      updateHTML("#sunset", moment.unix(current.sunset).format("LT"));
      updateHTML("#moonphase", daily.moon_phase);
    };

    // getAQI();
    props.getWeather(latitude, longitude, updateWeather);
  }, []);

  return (
    <main className="weatherWrapper">
          <Main />
          <Additional />
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
