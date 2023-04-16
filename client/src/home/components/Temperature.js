import React from "react";

function Temperature() {
  return (
    <section className="currentTemp">
      <h3>Current <span id="currentTemp"></span></h3>
      <h5>Feels Like <span id="feelsLikeTemp"></span></h5>
      <h6>High <span id="highTemp"></span></h6>
      <h6>Low <span id="lowTemp"></span></h6>
    </section>
  );
}

export default Temperature;
