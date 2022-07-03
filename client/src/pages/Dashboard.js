import React, { useState } from "react";
import SaveBtn from "../components/SaveBtn";
import CancelBtn from "../components/CancelBtn";
import FiveDayDiv from "../components/FiveDayDiv";
import API from "../utils/API";

function Dashboard() {
  const [locations, setLocations] = useState([]);

  var locationsArray = [...locations];

  var saveLocation = () => {
    setLocations(...locations, document.querySelector("#searchInput").value);
    API.updateLocations(locations);
  };

  var getLocations = () => {
    var dbArray = [];
    API.getLocations()
      .then((res) => {
        var savedArray = res.data[0].locations[0].split(",");
        savedArray.forEach((location) => {
          dbArray.push(location);
        });
        setLocations(dbArray);
      })
      .catch((err) => console.log(err));
  };

  getLocations();

  return (
    <main>
      <h1>Welcome to your Dashboard!</h1>
      <div className="search">
        <input type="text" placeholder="Search" id="searchInput"></input>
        <SaveBtn save={saveLocation} />
        <CancelBtn />
      </div>
      <div className="saved">
        <FiveDayDiv locations={locationsArray} />
      </div>
    </main>
  );
}

export default Dashboard;
