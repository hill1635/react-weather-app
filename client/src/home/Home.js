import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Additional from "./components/Additional";
import HourlyForecast from "../components/hourlyForecast/HourlyForecast";
import ExtendedForecast from "../components/extendedForecast/ExtendedForecast";
import "./Home.css";

function Home(props) {
  const [forecast, setForecast] = useState({});
  var latitude = 40.758701;
  var longitude = -111.876183;
  
  useEffect(() => {
    props.getWeather(latitude, longitude, setForecast);
  }, [latitude, longitude, props]);

  return (
    <main className="weatherWrapper">
          <Main forecast={forecast}/>
          <Additional forecast={forecast}/>
      <section className="hourlyForecast">
        <h3>Hourly Forecast</h3>
        <HourlyForecast forecast={forecast} />
      </section>
      <section className="extendedForecast">
        <h3>Extended forecast</h3>
        <ExtendedForecast forecast={forecast} />
      </section>
    </main>
  );
}

export default Home;
