import React from "react";

function Air() {
    return (
        <section className="currentAir">
        <p>Humidity: <span id="humid"></span></p>
        <p>UV Index: <span id="uvi"></span></p>
        <p>Air Quality: <span id="aqi"></span></p>
        <p>Wind: <span id="windSpeed"></span> <span id="windDirection"></span></p>
        <p>Sunrise <span id="sunrise"></span></p>
        <p>Sunset <span id="sunset"></span></p>
        <p>Moon Phase <span id="moonphase"></span></p>
      </section>
    );
}

export default Air;