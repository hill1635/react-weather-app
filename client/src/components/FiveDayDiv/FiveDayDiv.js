import React, { useEffect } from "react";
import "./FiveDayDiv.css";
import moment from "moment";
import DeleteBtn from "../buttons/DeleteBtn";

function FiveDayDiv(props) {
  
  useEffect(() => {
    if (Object.keys(props.forecasts).length !== 0) {
      var root = document.querySelector(".fiveDayDiv");

      props.forecasts.forEach((location) => {
      var container = document.createElement("div");

      location.daily.forEach((day) => {
      var dayDiv = document.createElement("div");
      var header = document.createElement("h4");
      var img = document.createElement("img");
      var high = document.createElement("span");
      var low = document.createElement("span");

      dayDiv.className = "dayDiv d-inline-block mx-auto";
      header.innerHTML = moment.unix(day.dt).format("ddd");
      img.src = "http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png";
      high.innerHTML = Math.round(day.temp.max, 0) + "ºF";
      low.innerHTML = Math.round(day.temp.min, 0) + "ºF";

      dayDiv.append(header);
      dayDiv.append(img);
      dayDiv.append(high);
      dayDiv.append(low);
      container.append(dayDiv);
    });
    root.append(container);
    });
    }
  }, [props]);

  return <div className="fiveDayDiv"></div>;
}

export default FiveDayDiv;
