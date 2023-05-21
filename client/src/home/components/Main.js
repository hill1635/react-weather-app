import React from "react";

function Main(props) {
  if (Object.keys(props.forecast).length > 0) {
  var forecast = props.forecast;
  return (
      <section className="currentMain">
        <h1 className="currentHeader">{props.location.name}</h1>
        <div className="currentWeather">
          <img className="weatherIcon" id="icon" src={"http://openweathermap.org/img/wn/" + forecast.current.weather[0].icon + "@2x.png"}></img>
          <div className="currentDetails">
            <h4><span id="currentTime"></span></h4>
            <h4>Current <span id="currentTemp">{Math.round(forecast.current.temp) + "°F"}</span></h4>
            <h5>Feels Like <span id="feelsLikeTemp">{Math.round(forecast.current.feels_like) + "°F"}</span></h5>
            <h6>High <span id="highTemp">{Math.round(forecast.daily[0].temp.max) + "°F"}</span></h6>
            <h6>Low <span id="lowTemp">{Math.round(forecast.daily[0].temp.min) + "°F"}</span></h6>
          </div>
        </div>
      </section>
  );
  }
}

export default Main;
