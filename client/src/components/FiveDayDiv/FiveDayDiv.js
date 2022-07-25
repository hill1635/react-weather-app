import React, { useEffect } from "react";
import "./FiveDayDiv.css";
import moment from "moment";
import DeleteBtn from "../buttons/DeleteBtn";

function FiveDayDiv(props) {
  
  useEffect(() => {
    if (Object.keys(props.forecasts.daily).length !== 0) {
      var root = document.querySelector(".fiveDayDiv");

      props.forecasts.daily.forEach((day) => {
      var div = document.createElement("div");
      var header = document.createElement("h4");
      var img = document.createElement("img");
      var high = document.createElement("span");
      var low = document.createElement("span");

      div.className = "dayDiv d-inline-block mx-auto";
      header.innerHTML = moment.unix(day.dt).format("ddd");
      img.src = "http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png";
      high.innerHTML = Math.round(day.temp.max, 0) + "ºF";
      low.innerHTML = Math.round(day.temp.min, 0) + "ºF";

      div.append(header);
      div.append(img);
      div.append(high);
      div.append(low);
      root.append(div);
      });
    }
  }, [props]);

  return <div className="fiveDayDiv"></div>;
}

export default FiveDayDiv;
