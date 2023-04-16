import React from "react";

function Additional() {
    return (
        <section className="currentAdd">
          <div className="addDiv">
            <p>Humidity: <span id="humid"></span></p>
            <p>Air Quality: <span id="aqi"></span></p>
            <p>Wind Speed: <span id="windSpeed"></span></p>
            <p>Wind Direction: <span id="windDirection"></span></p>
          </div>
          <div className="addDiv">
            <p>UV Index: <span id="uvi"></span></p>
            <p>Sunrise <span id="sunrise"></span></p>
            <p>Sunset <span id="sunset"></span></p>
            <p>Moon Phase <span id="moonphase"></span></p>
          </div>
      </section>
    );
}

export default Additional;