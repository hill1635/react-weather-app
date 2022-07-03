import React from "react";
import SaveBtn from "../components/SaveBtn";
import CancelBtn from "../components/CancelBtn";
import FiveDayDiv from "../components/FiveDayDiv";
import API from "../utils/API";

function Dashboard() {
  var saveLocation = () => {
    API.addLocation(document.querySelector("#searchInput").value);
  };

  var getLocations = () => {
    API.getLocations();
  };

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
