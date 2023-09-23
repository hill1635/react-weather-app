import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./SearchResults.css";

function SearchResults(props) {
    var results = props.results;

    var updateLocations = (locationId, locationData) => {
        var userLocations = [];
        if (props.locations.length > 0) {
            userLocations = props.locations.map(location => location.id);
            userLocations = [ ...userLocations, locationId ];
            props.setLocations([ ...props.locations, locationData ]);
        } else {
            userLocations.push(locationId);
            props.setLocations([ locationData ]);
        }
        API.updateUserLocations(JSON.stringify(userLocations))
        .then(res => { console.log("res.data:", res.data) });
    };

    var selectResult = (e, location) => {
        e.preventDefault();
        API.getLocation(location.id).then(res => {
            if (res.data === null) {
                var locationObj = {
                    id: location.id,
                    name: location.place_name,
                    lat: location.center[1],
                    long: location.center[0]
                };
                API.addLocation(locationObj)
                .then(res => {
                    updateLocations(res.data.id, locationObj);
                });
            } else {
                updateLocations(res.data.id, res.data);
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