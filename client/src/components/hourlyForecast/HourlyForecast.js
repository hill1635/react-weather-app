import React from "react";
import "./HourlyForecast.css";
import OneHourForecast from "../onehourforecast/OneHourForecast"

function HourlyForecast(props) {
    if (Object.keys(props.forecast).length > 0) {
        var hourlyForecast = props.forecast.hourly;
        
        return (
            <div className="hourlyForecast">
                {hourlyForecast.map(hour => {
                    return <OneHourForecast key={hour.dt} hour={hour} />
                })}
            </div>
        );
    }
}

export default HourlyForecast;