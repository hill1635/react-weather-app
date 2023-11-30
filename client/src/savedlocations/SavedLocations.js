import React, { useState, useEffect } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import LocationsDB from "./components/LocationsDB";
import API from "../utils/API";

function SavedLocations(props) {
  const [locations, setLocations] = useState([]);

  // Retreives saved locations from DB
  var getLocations = (locationsData) => {
    var locationsArray = [];
    locationsData.forEach((locationId) => {
      API.getLocation(locationId)
      .then((res) => {
        if (res.data.forecast === undefined) {
          var locationData = res.data;
          API.getSevenDay(locationData.lat, locationData.long)
          .then(res => { 
            locationData.forecast = res.data;
            API.updateLocation(locationData.id, locationData);
            locationsArray.push(locationData);
          });
        } else {
          locationsArray.push(res.data);
        }
      }).then(() => setLocations([...locationsArray]));
    });
  };
  
  useEffect(() => {
    if (props.user.locations !== undefined) {
      getLocations(props.user.locations);
    }
  }, [ props.user ]);

  return (
    <main>
      <h1>Welcome to your Dashboard!</h1>
      <SearchBar locations={locations} setLocations={setLocations} api={API.updateUserLocations}/>
      <LocationsDB locations={locations}/>
    </main>
  );
}

export default SavedLocations;
