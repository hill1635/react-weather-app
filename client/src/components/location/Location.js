import React, { useState, useEffect } from "react";
import "./Location.scss";
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
        <section className="location">
            <h4>{forecast.name}</h4>
            <div className="locationForecast">
                <ExtendedForecast forecast={forecast} />
                <DeleteBtn placeId={props.data.id} locations={props.locations} setLocations={props.setLocations}/>
            </div>
        </section>
    );
    }
}

export default Location;