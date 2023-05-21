import React, { useState } from "react";
import ExtendedForecast from "../../components/extendedForecast/ExtendedForecast";


function LocationsDB() {
    var forecasts = [];
    return (
        <div className="saved">
        {/* {forecasts.map((forecast) => {
            return <ExtendedForecast forecast={forecast} />
        })} */}
      </div>
    );
}

export default LocationsDB;