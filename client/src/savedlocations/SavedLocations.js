import React, { useState, useEffect } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import ExtendedForecast from "../components/extendedForecast/ExtendedForecast";
import API from "../utils/API";

function SavedLocations() {
  const [locations, setLocations] = useState([]);
  const [forecasts, setForecasts] = useState([]);
  var locationsArray = [...locations];
  var forecastsArray = [...forecasts];

  // //Updates location
  // var updateLocations = (locations) => {
  //   API.updateLocations(JSON.stringify(locations))
  //   .then(() => console.log("updateLocations: ", locations))
  //   .catch((err) => console.log(err));
  // };

  // //Google API call that searches for lat and long
  // var searchLocation = (location, lastId) => {
  //   API.searchLocation(location).then((res) => {
  //     var prefix = res.data.candidates[0];
  //     var newLocation = {
  //       id: lastId + 1,
  //       name: prefix.formatted_address,
  //       lat: prefix.geometry.location.lat,
  //       lng: prefix.geometry.location.lng,
  //     };

  //     locationsArray.push(newLocation);
  //     getWeather(newLocation);
  //     console.log("searchLocation: ", locations);
  //   })
  //   .catch((err) => console.log(err));
  // };
  
  // //Saves location to DB
  // var saveLocation = () => {
  //   var lastId = 0;
  //   var inputValue = document.querySelector("#searchInput").value;
    
  //   if (locationsArray.length > 0) {
  //     lastId = locationsArray[locationsArray.length - 1].id;
  //   }
    
  //   searchLocation(inputValue, lastId);
  //   updateLocations(locationsArray);
  //   console.log("saveLocation: ", locations);
  // };

  // //Gets weather for saved locations
  // var getWeather = (location) => {
  //   API.getSevenDay(location.lat, location.lng)
  //   .then((res) => {
  //     var newObj = res.data;
  //     newObj.daily.pop();
  //     forecastsArray.push(newObj);
  //     setForecasts(forecastsArray);
  //     console.log("getWeather");
  //   })
  //   .catch((err) => console.log(err));
  // };

  // // Retreives saved locations from DB
  // var getLocations = () => {
  //   var dbArray = [];
  //   API.getLocations()
  //     .then((res) => {
  //       if (res > 0) {
  //         var savedArray = JSON.parse(res.data[0].locations);
  //         savedArray.forEach((location) => {
  //           dbArray.push(location);
  //           getWeather(location);
  //         });
  //         setLocations(dbArray);
  //         console.log("locations:", locations);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  //     console.log("getLocations");
  // };

  useEffect(() => {
    // getLocations();
  }, []);

  return (
    <main>
      <h1>Welcome to your Dashboard!</h1>
      <SearchBar />
      <div className="saved">
        {forecasts.map((forecast) => {
        <ExtendedForecast forecast={forecast} />
        })}
      </div>
    </main>
  );
}

export default SavedLocations;
