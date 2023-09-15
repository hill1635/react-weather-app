import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./SearchResults.css";

function SearchResults(props) {
    var results = props.results;

    var selectResult = (e, location) => {
        e.preventDefault();
        console.log("location:", location);
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