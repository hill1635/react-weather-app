import React, { useEffect } from "react";
import moment from "moment";
import DeleteBtn from "../buttons/DeleteBtn";

function FiveDayDiv(props) {
  useEffect(() => {
    if (Object.keys(props.dailyForecast).length !== 0) {
      var root = document.querySelector(".fiveDayDiv");

      props.dailyForecast.forEach((day) => {
        const markup = `
        <div className="dayDiv">
        <h5>${moment.unix(day.dt).format("dddd")}</h5>
        <img src="http://openweathermap.org/img/wn/${
          day.weather[0].icon
        }@2x.png"</img>
        <span>${day.temp.max}</span>
        <span>${day.temp.min}</span>
        </div>
      `;
        root.innerHTML += markup;
      });
    }
  }, [props]);

  return <div className="fiveDayDiv"></div>;
}

export default FiveDayDiv;
