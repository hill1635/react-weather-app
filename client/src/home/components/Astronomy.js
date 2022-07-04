import React from "react";

function Astronomy() {
  return (
    <section className="currentAstronomy col mx-5">
      <p>Sunrise <span id="sunrise"></span></p>
      <p>Sunset <span id="sunset"></span></p>
      <p>Moon Phase <span id="moonphase"></span></p>
    </section>
  );
}

export default Astronomy;