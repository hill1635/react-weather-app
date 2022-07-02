import React from "react";
import EditBtn from "../components/EditBtn";
import SaveBtn from "../components/SaveBtn";

function Account() {
  return (
    <div>
      <h1>Account Info</h1><EditBtn />
      <p>First:</p><EditBtn />
      <p>Last:</p><EditBtn />
      <p>Email:</p><EditBtn />
      <p>Location:</p><EditBtn />
      <SaveBtn />
    </div>
  );
}

export default Account;
