import React from "react";

function Air() {
    return (
        <section className="row col-11 mx-auto">
        <p>Humidity <span id="humid"></span></p>
        <p>UV Index <span id="uvi"></span></p>
        <p>Air Quality <span id="aqi"></span></p>
      </section>
    );
}

export default Air;