import React, { useState } from "react";
import API from "../../utils/API";
import "./SearchBar.css";

function SearchBar() {
    var [input, setInput] = React.useState("");
    var search = (e) => {
        e.preventDefault();
        API.searchLocation(input).then(res => {         
            console.log(res.data);
        });
    }
    return (
        <div className="searchBar">
            <form>
                <input className="searchBarInput" type="text" placeholder="Search location" onChange={e => setInput(e.target.value)}></input>
                <button className="searchBarButton" type="submit" onClick={e => search(e)}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;