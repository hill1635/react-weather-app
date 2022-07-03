import React, { useState } from "react";
import SaveBtn from "../components/SaveBtn";
import CancelBtn from "../components/CancelBtn";
import FiveDayDiv from "../components/FiveDayDiv";
import API from "../utils/API";

function Dashboard() {
  const [locations, setLocations] = useState([]);

  var locationsArray = [...locations];

  var saveLocation = () => {
    var lastId = 0;
    if (locationsArray.length > 0) {
      lastId = locationsArray[locationsArray.length - 1].id;
    }

    var newSave = document.querySelector("#searchInput").value;
    var newArray = [...locations, { id: lastId + 1, name: newSave }];

    setLocations(newArray);
    API.updateLocations(JSON.stringify(newArray));
  };

  var getLocations = () => {
    var dbArray = [];
    API.getLocations()
      .then((res) => {
        if (res.data[0].locations.length > 0) {
          var savedArray = JSON.parse(res.data[0].locations);
          savedArray.forEach((location) => {
            dbArray.push(location);
          });
          setLocations(dbArray);
        }
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
        <FiveDayDiv
          locations={locations}
          setLocations={setLocations}
          getLocations={getLocations}
        />
      </div>
    </main>
  );
}

export default Dashboard;
