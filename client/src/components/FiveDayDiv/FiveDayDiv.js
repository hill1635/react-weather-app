import React, { useEffect } from "react";
import "./FiveDayDiv.css";
import OneDayForecast from "../onedayforecast/onedayforecast";
import moment from "moment";
import DeleteBtn from "../buttons/DeleteBtn";

function FiveDayDiv(props) {
var days = props.forecast.daily;

  return (
  <div className="fiveDayDiv">
    {days.map(day => {
      return <OneDayForecast key={day.dt} forecast={day}/>
    })}
  </div>
  );
}

export default FiveDayDiv;
