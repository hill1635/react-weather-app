import React from "react";
import SignupBtn from "../components/SignupBtn";

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Username"></input>
      <input type="text" placeholder="Password"></input>
      <SignupBtn />
    </div>
  );
}

export default SignUp;
