import React from "react";

function Wind() {
  return (
    <section className="currentWind col-8 mx-auto">
      <p>Wind Speed <span id="windSpeed"></span></p>
      <p>Wind Direction <span id="windDirection"></span></p>
    </section>
  );
}

export default Wind;