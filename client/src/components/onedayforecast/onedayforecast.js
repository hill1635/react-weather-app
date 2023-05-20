import React from "react";
import moment from "moment";

function OneDayForecast(props) {
  if (Object.keys(props.day).length > 0) {
    var day = props.day;
    return (
      <div className="oneDay">
        <div className="oneDayName">{moment.unix(day.dt).format("ddd")}</div>
        <div className="oneDayIcon"></div>
        <div className="oneDayHigh">{Math.round(day.temp.max) + "°F"}</div>
        <div className="oneDayLow">{Math.round(day.temp.min) + "°F"}</div>
      </div>
    );
  }
}

export default OneDayForecast;
