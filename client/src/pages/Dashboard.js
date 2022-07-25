import React, { useState, useEffect } from "react";
import SaveBtn from "../components/buttons/SaveBtn";
import CancelBtn from "../components/buttons/CancelBtn";
import FiveDayDiv from "../components/fivedaydiv/FiveDayDiv";
import API from "../utils/API";

function Dashboard() {
  const [locations, setLocations] = useState([]);
  const [forecasts, setForecasts] = useState([]);
  var locationsArray = [...locations];

  //Saves location to DB
  var saveLocation = () => {
    var lastId = 0;
    var inputValue = document.querySelector("#searchInput").value;

    if (locationsArray.length > 0) {
      lastId = locationsArray[locationsArray.length - 1].id;
    }

    //Google API to search for location data
    API.searchLocation(inputValue).then((res) => {
      var prefix = res.data.candidates[0];
      var newLocation = {
        id: lastId + 1,
        name: prefix.formatted_address,
        lat: prefix.geometry.location.lat,
        lng: prefix.geometry.location.lng,
      };

      var newArray = [...locations, newLocation];
      setLocations(newArray);
      API.updateLocations(JSON.stringify(newArray));
      console.log("saveLocation");
    });

    getLocations();
  };

  //Gets weather for saved locations
  var getWeather = (location) => {
    API.getSevenDay(location.lat, location.lng)
    .then((res) => {
      setForecasts([...forecasts, res.data]);
      console.log("forecasts: ", forecasts);
    });
  };

  // Retreives saved locations from DB
  var getLocations = () => {
    var dbArray = [];
    API.getLocations()
      .then((res) => {
        if (res.data[0].locations.length > 0) {
          var savedArray = JSON.parse(res.data[0].locations);
          savedArray.forEach((location) => {
            dbArray.push(location);
            getWeather(location);
          });
          setLocations(dbArray);
        }
      })
      .catch((err) => console.log(err));
      console.log("getLocations");
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <main>
      <h1>Welcome to your Dashboard!</h1>
      <div className="search">
        <input type="text" placeholder="Search" id="searchInput"></input>
        <SaveBtn save={saveLocation} />
        <CancelBtn />
      </div>
      <div className="saved">
        {/* {locations.map((location) => (
          <div>
            <p>{location.name}</p>
          </div>
        ))} */}
        {/* Map FiveDayDiv here */}
        {/* <FiveDayDiv
          locations={locations}
          setLocations={setLocations}
          getLocations={getLocations}
        /> */}
      </div>
    </main>
  );
}

export default Dashboard;
