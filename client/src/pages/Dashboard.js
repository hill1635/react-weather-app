import React from "react";
import SaveBtn from "../components/SaveBtn";
import CancelBtn from "../components/CancelBtn";
import FiveDayDiv from "../components/FiveDayDiv";

function Dashboard() {
  return (
    <main>
      <h1>Welcome to your Dashboard!</h1>
      <div className="search">
        <input type="text" placeholder="Search"></input>
        <SaveBtn />
        <CancelBtn />
      </div>
      <div className="saved">
        <FiveDayDiv />
      </div>
    </main>
  );
}

export default Dashboard;
