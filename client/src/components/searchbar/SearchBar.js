import React, { useState } from "react";
import API from "../../utils/API";
import "./SearchBar.scss";
import SearchResults from "../searchresults/SearchResults";

function SearchBar(props) {
    var [input, setInput] = useState("");
    var [results, setResults] = useState([]);
    var search = (e) => {
        e.preventDefault();
        API.searchLocation(e.target.parentElement.children[0].value).then(res => {
            var resultsData = res.data.features;
            resultsData.forEach(place => {
                var name = place.place_name;
                var nameArray = name.split(", ");
                if (nameArray[0].charAt(0) === "0" || nameArray[0].charAt(0) === "1" || nameArray[0].charAt(0) === "2" || nameArray[0].charAt(0) === "3" || nameArray[0].charAt(0) === "4" || nameArray[0].charAt(0) === "5" || nameArray[0].charAt(0) === "6" || nameArray[0].charAt(0) === "7" || nameArray[0].charAt(0) === "8" || nameArray[0].charAt(0) === "9") {
                    nameArray.shift();
                }
                if (nameArray[nameArray.length - 1] === "United States") {
                nameArray.pop();
                }
                nameArray[nameArray.length - 1] = nameArray[nameArray.length - 1].replace(/[0-9]/g, '');
                name = nameArray.join(", ");
                name = name.trim();
                place.place_name = name;
            });
            setResults(resultsData);
        });
    }


    return (
        <div className="searchWrapper">
            <form className="searchBar">
                <input className="searchBarInput" type="text" placeholder="Search location"></input>
                <button className="searchBarButton" type="submit" onClick={e => search(e)}>Search</button>
            </form>
            <SearchResults results={results} locations={props.locations} setLocations={props.setLocations}/>
        </div>
    );
}

export default SearchBar;