import React, { useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import ExtendedForecast from "../components/extendedForecast/ExtendedForecast";


function SearchLocation() {
    const [location, setLocation] = useState({});

    return (
        <div className="searchLocation">
            <SearchBar setLocation={setLocation}/>
            <div className="searchLocationResults">
            </div>
        </div>
    );
}

export default SearchLocation;