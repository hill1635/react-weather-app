import React from "react";
import "./SearchResults.css";

function SearchResults(props) {
    var results = props.results;
    console.log("results: ", results);
    return (
        <div className="searchResults">
            {results.map(result => {
                return <span className="searchResult" key={result.id}>{result.place_name}</span>
            })}
        </div>
    );
}

export default SearchResults;