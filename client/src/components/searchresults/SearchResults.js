import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./SearchResults.css";

function SearchResults(props) {
    var results = props.results;

    var selectResult = (e, location) => {
        e.preventDefault();
        API.getLocation(location.id).then(res => {
            if (res.data === "Not found") {
                var locationObj = {
                    id: location.id,
                    name: location.place_name,
                    lat: location.center[1],
                    long: location.center[0]
                };
                API.addLocation (locationObj)
                .then(res => {
                    console.log("addLocation:", res.data);
                });
            } else {
                console.log("data:", res.data);
            }
        });
    }
    
    return (
        <div className="searchResults">
            {results.map(result => {
                return <span className="searchResult" key={result.id} onClick={e => selectResult(e, result)}>{result.place_name}</span>
            })}
        </div>
        
    );
}

export default SearchResults;