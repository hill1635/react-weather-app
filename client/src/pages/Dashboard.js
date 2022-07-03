import React from "react";
import SaveBtn from "../components/SaveBtn";
import CancelBtn from "../components/CancelBtn";
import FiveDayDiv from "../components/FiveDayDiv";
import API from "../utils/API";

function Dashboard() {
  var locationsArray = [];

  var saveLocation = () => {
    locationsArray.push(document.querySelector("#searchInput").value);
    API.updateLocations(locationsArray);
  };

  var getLocations = () => {
    API.getLocations()
      .then((res) => {
        var savedArray = res.data[0].locations[0].split(",");
        savedArray.forEach((location) => {
          locationsArray.push(location);
        });
      })
      .catch((err) => console.log(err));
  };

  getLocations();

  return (
    <main>
      <h1>Welcome to your Dashboard!</h1>
      <div className="search">
        <input type="text" placeholder="Search" id="searchInput"></input>
        <button onClick={getLocations}>Get</button>
        <SaveBtn save={saveLocation} />
        <CancelBtn />
      </div>
      <div className="saved">
        <FiveDayDiv />
      </div>
    </main>
  );
}

export default Dashboard;
