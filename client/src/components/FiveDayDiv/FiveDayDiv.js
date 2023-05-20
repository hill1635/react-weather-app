import React, { useEffect, useRef } from "react";
import "./FiveDayDiv.css";
import OneDayForecast from "../onedayforecast/OneDayForecast";
import moment from "moment";
import DeleteBtn from "../buttons/DeleteBtn";

function FiveDayDiv(props) {
  if (Object.keys(props.forecast).length > 0) {
    console.log("props:", props.forecast);
  return (
  <div className="fiveDayDiv">
    {props.forecast.daily.map(day => {
      return <OneDayForecast key={day.dt} day={day}/>
    })}
  </div>
  );
  }
}

export default FiveDayDiv;
