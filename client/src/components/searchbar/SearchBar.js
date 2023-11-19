import React, { useState } from "react";
import API from "../../utils/API";
import "./SearchBar.scss";
import SearchResults from "../searchresults/SearchResults";
import SearchBtn from "../buttons/SearchBtn";

function SearchBar(props) {
    var [input, setInput] = useState("");
    var [results, setResults] = useState([]);

    return (
        <div className="searchWrapper">
            <form className="searchBar">
                <input className="searchBarInput" type="text" placeholder="Search location"></input>
                <SearchBtn setResults={setResults}/>
            </form>
            <SearchResults results={results} locations={props.locations} setLocations={props.setLocations}/>
        </div>
    );
}

export default SearchBar;