import React from "react";
import "./Location.css";
import ExtendedForecast from "../extendedForecast/ExtendedForecast";

function Location(props) {
    console.log("Location:", props.data);
    if (Object.keys(props.data).length > 0) {
    return (
        <div className="location">
            <h3>Location</h3>
            <div className="locationForecast">
                <ExtendedForecast forecast={props.data} />
            </div>
        </div>
    );
    }
}

export default Location;