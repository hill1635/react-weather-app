import React from "react";
import API from "../../utils/API";

function LogoutBtn() {
  var endSession = () => {
    API.logout()
    .then(() => console.log("logged out"));
  };

  return <button onClick={endSession}>Log Out</button>;
}

export default LogoutBtn;
