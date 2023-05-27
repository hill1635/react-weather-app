import React, { useState } from "react";
import Location from "../../components/location/Location";


function LocationsDB(props) {
    if (Object.keys(props.locations).length > 0) {
        return (
            <div className="saved">
            {props.locations.map((locationData) => {
                return <Location data={locationData} />
            })}
        </div>
        );
    }
}

export default LocationsDB;