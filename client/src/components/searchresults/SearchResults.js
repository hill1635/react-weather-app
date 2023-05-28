import React, { useState } from "react";
import API from "../../utils/API";
import "./SearchResults.css";

function SearchResults(props) {
    var [selected, setSelected] = useState({});
    var results = props.results;

    var selectResult = (e, result) => {
        e.preventDefault();
        var selected = {
            name: result.place_name,
            lat: result.center[1],
            long: result.center[0]
        };
        setSelected(selected);
        // Need to be able to change display of selectedCheck
        props.setLocations([...props.locations, selected]);
        API.addLocation(selected)
            .then((res) => {
                var locations = [];
                locations.push(res.data._id);
                API.updateUserLocations(locations);
            });
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