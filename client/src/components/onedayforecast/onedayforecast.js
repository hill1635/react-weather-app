import React from "react";
import "./OneDayForecast.css";
import moment from "moment";

function OneDayForecast(props) {
  if (Object.keys(props.day).length > 0) {
    var day = props.day;
    return (
      <div className="oneDay">
        <div className="oneDayName">{moment.unix(day.dt).format("ddd")}</div>
        <img className="oneDayIcon" id="icon" src={"http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"}></img>
        <div className="oneDayHigh">{Math.round(day.temp.max) + "°F"}</div>
        <div className="oneDayLow">{Math.round(day.temp.min) + "°F"}</div>
      </div>
    );
  }
}

export default OneDayForecast;
