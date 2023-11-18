import React, { useState, useEffect } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import Main from "./components/Main";
import Additional from "./components/Additional";
import HourlyForecast from "../components/hourlyForecast/HourlyForecast";
import ExtendedForecast from "../components/extendedForecast/ExtendedForecast";
import "./Home.scss";

function Home(props) {
  const defaultLocation = {
    name: "Salt Lake City",
    latitude: 40.7608,
    longitude: -111.8910
  }
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState(defaultLocation);
  
  useEffect(() => {
    props.getWeather(location.latitude, location.longitude, setForecast);
  }, [props, location]);

  return (
    <main className="weatherWrapper">
          <SearchBar setLocations={setLocation}/>
          <Main forecast={forecast} location={location}/>
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
