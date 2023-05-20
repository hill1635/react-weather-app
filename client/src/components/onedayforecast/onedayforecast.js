import React from "react";

function OneDayForecast(props) {
  console.log("OneDayForecast:", props);
  return <div className="oneDay">
    <div className="oneDayName"></div>
    <div className="oneDayIcon"></div>
    <div className="oneDayHigh"></div>
    <div className="oneDayLow"></div>
  </div>;
}

export default OneDayForecast;
