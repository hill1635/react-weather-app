import React from "react";
import "./OneHourForecast.css";
import moment from "moment";

function OneHourForecast(props) {
    if (Object.keys(props.hour).length > 0 ) {
        var hour = props.hour;
        return (
            <div className="oneHour">
                <div className="oneHourName">{moment.unix(hour.dt).format("ddd")}</div>
                <img className="oneHourIcon" id="icon" src={"http://openweathermap.org/img/wn/" + hour.weather[0].icon + "@2x.png"}></img>
                <div className="oneHourTemp">{hour.temp}</div>
                <div className="oneHourUVI">{hour.uvi}</div>
                <div className="oneHourWind">{hour.wind_speed}</div>

            </div>
        );
    }
}

export default OneHourForecast;

