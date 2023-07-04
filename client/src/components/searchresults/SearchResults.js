import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./SearchResults.css";

function SearchResults(props) {
    var [selected, setSelected] = useState({});
    var results = props.results;
    var savedLocations = props.locations;

    useEffect(() => {
    API.getSavedData()
        .then((res) => {
            if (res.data.length > 0) {
                res.data[0].locations.forEach(location => {
                    API.getLocation(location)
                        .then((res) => {
                            console.log("res.data:", res.data[0]);
                            savedLocations.push(res.data[0]);
                            props.setLocations(savedLocations);
                        });
                });
            }
        });
    }, [selected]);

    var selectResult = (e, result) => {
        e.preventDefault();
        var selectedObj = {
            name: result.place_name,
            lat: result.center[1],
            long: result.center[0]
        };
        // Need to be able to change display of selectedCheck
        API.addLocation(selected)
        .then((res) => {
            savedLocations.push(res.data._id);
            console.log("savedLocations:", savedLocations);
            // API.updateUserLocations(savedLocations);
            // props.setLocations(savedLocations);
        });
        setSelected(selectedObj);
    }

    var saveResult = () => {
        var locations = [...props.locations];
        console.log("locations:", locations);
        locations.unshift(selected);
        props.setLocations(locations);
    }
    
    return (
        <div className="searchResults">
            {results.map(result => {
                return <span className="searchResult" key={result.id} onClick={e => selectResult(e, result)}>{result.place_name}</span>
            })}
            <div className="selectedCheck">
                <div className="selectedCheckText">Do you want to save {selected.name}?</div>
                <button className="saveSelected" onClick={saveResult}>Yes</button>
                <button className="cancelSelected" onClick={e => e.target.parentElement.style.display = "none"}>No</button>
            </div>
        </div>
        
    );
}

export default SearchResults;