import React, { useState, useEffect } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import Main from "./components/Main";
import Additional from "./components/Additional";
import HourlyForecast from "../components/hourlyForecast/HourlyForecast";
import ExtendedForecast from "../components/extendedForecast/ExtendedForecast";
import "./Home.scss";

function Home(props) {
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState([]);
  
  useEffect(() => {
    if (location.length > 0) {
      props.getWeather(location[0].lat, location[0].long, setForecast);
    }
  }, [props, location]);

  return (
    <main className="weatherWrapper">
      <section>
        <SearchBar setLocations={setLocation}/>
      </section>
      {location.length > 0 &&
      <div className= "weatherWrapper">
        <Main forecast={forecast} location={location[0]}/>
        <Additional forecast={forecast}/>
        <section className="hourlyForecast">
          <h3>Hourly Forecast</h3>
          <HourlyForecast forecast={forecast} />
        </section>
        <section className="extendedHome">
          <h3 className="extendedTitle">Extended forecast</h3>
            <ExtendedForecast forecast={forecast} />
        </section>
      </div>
      }
    </main>
  );
}

export default Home;
