import React from "react";
import EditBtn from "../components/EditBtn";

function Account() {
  return (
    <div>
      <h1>Account Info</h1><EditBtn />
      <p>First:</p><EditBtn />
      <p>Last:</p><EditBtn />
      <p>Email:</p><EditBtn />
      <p>Location:</p><EditBtn />
    </div>
  );
}

export default Account;
