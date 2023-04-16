import React from "react";

function Main() {
  return (
      <section className="currentMain">
        <h1>Salt Lake City</h1>
        <h4><span id="currentTime"></span></h4>
        <h4>Current <span id="currentTemp"></span></h4>
        <h5>Feels Like <span id="feelsLikeTemp"></span></h5>
        <h6>High <span id="highTemp"></span></h6>
        <h6>Low <span id="lowTemp"></span></h6>
        <img id="icon" src=""></img>
      </section>
  );
}

export default Main;
