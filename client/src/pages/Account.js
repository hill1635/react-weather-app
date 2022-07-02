import React from "react";
import EditBtn from "../components/EditBtn";
import SaveBtn from "../components/SaveBtn";
import CancelBtn from "../components/CancelBtn";

function Account() {
  return (
    <main>
      <h1>Account Info</h1><EditBtn />
      <p>First:</p><EditBtn />
      <p>Last:</p><EditBtn />
      <p>Email:</p><EditBtn />
      <p>Location:</p><EditBtn />
      <SaveBtn />
      <CancelBtn />
    </main>
  );
}

export default Account;
