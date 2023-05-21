import React, { useState } from "react";
import API from "../../utils/API";
import "./SearchBar.css";

function SearchBar(props) {
    var [input, setInput] = useState("");
    var search = (e) => {
        e.preventDefault();
        API.searchLocation(input).then(res => {   
            var name = res.data.features[0].place_name;
            var nameArray = name.split(", ");
            if (nameArray[0].charAt(0) === "0" || nameArray[0].charAt(0) === "1" || nameArray[0].charAt(0) === "2" || nameArray[0].charAt(0) === "3" || nameArray[0].charAt(0) === "4" || nameArray[0].charAt(0) === "5" || nameArray[0].charAt(0) === "6" || nameArray[0].charAt(0) === "7" || nameArray[0].charAt(0) === "8" || nameArray[0].charAt(0) === "9") {
                nameArray.shift();
            }
            nameArray.pop();
            nameArray[nameArray.length - 1] = nameArray[nameArray.length - 1].replace(/[0-9]/g, '');
            name = nameArray.join(", ");
            name = name.trim();

            var locationObject = {
                name: name,
                latitude: res.data.features[0].center[1],
                longitude: res.data.features[0].center[0]
            }
            props.setLocation(locationObject);
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