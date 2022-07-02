import React from "react";
import SaveBtn from "../components/SaveBtn";
import CancelBtn from "../components/CancelBtn";

function Dashboard() {
  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
      <div className="search">
        <input type="text" placeholder="Search"></input>
        <SaveBtn />
        <CancelBtn />
      </div>
      <div className="saved"></div>
    </div>
  );
}

export default Dashboard;
