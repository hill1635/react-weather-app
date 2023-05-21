import React from "react";
import moment from "moment";

function Additional(props) {

  const degToCompass = (num) => {
    var degree = parseInt((num/22.5)+.5);
    var directions = ["N", "NE", "NNE", "ENE", "E", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return directions[(degree % 16)];
  };

  const moonPhase = (current) => {
    var moon = {};
    if (current > forecast.daily[1].moon_phase) {
      moon.phase = "Waning";
    } else if (current < forecast.daily[1].moon_phase) {
      moon.phase = "Waxing";
    }

    if (current < .5 ) {
      moon.shape = "Crescent";
    } else if (current >= .5) {
      moon.shape = "Gibbous";
    } else if (current === 1) {
      moon.shape = "Full Moon";
    }

    var moonPhase = current === 1 ? "Full Moon" : moon.phase + " " + moon.shape + " " + Math.round(current * 100) + "%";
    return moonPhase;
  };

  if (Object.keys(props.forecast).length > 0) {
    var forecast = props.forecast;
    return (
        <section className="currentAdd">
          <div className="addDiv">
            <p>Humidity: <span id="humid">{forecast.current.humidity + "%"}</span></p>
            <p>Air Quality: <span id="aqi">{forecast.current.aqi.main.aqi}</span></p>
            <p>Wind Speed: <span id="windSpeed">{Math.round(forecast.current.wind_speed) + "mph"}</span></p>
            <p>Wind Direction: <span id="windDirection">{degToCompass(forecast.current.wind_deg)}</span></p>
          </div>
          <div className="addDiv">
            <p>UV Index: <span id="uvi">{forecast.current.uvi}</span></p>
            <p>Sunrise <span id="sunrise">{moment.unix(forecast.current.sunrise).format("LT")}</span></p>
            <p>Sunset <span id="sunset">{moment.unix(forecast.current.sunset).format("LT")}</span></p>
            <p>Moon Phase <span id="moonphase">{moonPhase(forecast.daily[0].moon_phase)}</span></p>
          </div>
      </section>
    );
  }
}

export default Additional;