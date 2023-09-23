import React, { useState, useEffect } from "react";
import "./Location.css";
import ExtendedForecast from "../extendedForecast/ExtendedForecast";
import DeleteBtn from "../buttons/DeleteBtn";
import API from "../../utils/API";

function Location(props) {
    const [forecast, setForecast] = useState({});

    useEffect(() => {
        API.getSevenDay(props.data.lat, props.data.long)
            .then((res) => {
                res.data.name = props.data.name;
                setForecast(res.data);
            });
    }, [props]);

    if (Object.keys(forecast).length > 0) {
    return (
        <div className="location">
            <h4>{forecast.name}</h4>
            <div className="locationForecast">
                <ExtendedForecast forecast={forecast} />
            </div>
            <DeleteBtn />
        </div>
    );
    }
}

export default Location;