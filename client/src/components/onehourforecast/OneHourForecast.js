import React from "react";
import "./OneHourForecast.css";
import moment from "moment";

function OneHourForecast(props) {
    if (Object.keys(props.hour).length > 0 ) {
        var hour = props.hour;
        return (
            <div className="oneHour">
                <div className="oneHourName">{moment.unix(hour.dt).format("h:mm a")}</div>
                <img className="oneHourIcon" id="icon" src={"http://openweathermap.org/img/wn/" + hour.weather[0].icon + "@2x.png"}></img>
                <div className="oneHourTemp">{Math.round(hour.temp) + "°F"}</div>
                <div className="oneHourUVI">{"UVI " + Math.round(hour.uvi)}</div>
                <div className="oneHourWind">{Math.round(hour.wind_speed) + " mph"}</div>
            </div>
        );
    }
}

export default OneHourForecast;

