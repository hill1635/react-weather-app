import React, { useEffect, useRef } from "react";
import "./ExtendedForecast.css";
import OneDayForecast from "../onedayforecast/OneDayForecast";
import moment from "moment";
import DeleteBtn from "../buttons/DeleteBtn";

function ExtendedForecast(props) {
  console.log("EF props:", props);
  if (props & Object.keys(props.forecast).length > 0) {
    var extendedForecast = props.forecast.daily;
    extendedForecast.pop();
  return (
  <div className="extendedForecast">
    {extendedForecast.map(day => {
      return <OneDayForecast key={day.dt} day={day}/>
    })}
  </div>
  );
  }
}

export default ExtendedForecast;
