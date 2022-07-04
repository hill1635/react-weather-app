import React from "react";
import SignupBtn from "../components/buttons/SignUpBtn";
import API from "../utils/API";

function SignUp() {
  var createAccount = () => {
    API.createUser({
      email: document.querySelector("#userInput").value,
      password: document.querySelector("#passwordInput").value
    })
    .then(() => window.location.href = "/login"); 
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Username" id="userInput"></input>
      <input type="text" placeholder="Password" id="passwordInput"></input>
      <SignupBtn submit={createAccount} />
    </main>
  );
}

export default SignUp;
