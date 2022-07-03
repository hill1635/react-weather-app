import React from "react";
import LoginBtn from "../components/LoginBtn";
import API from "../utils/API";

function Login() {
  var startSession = () => {
    API.login({
        email: document.querySelector("#loginUser").value,
        password: document.querySelector("#loginPassword").value
    })
    .then(() => window.location.href="/");
  };

  return (
    <main>
      <h1>Login</h1>
      <input type="text" placeholder="Username" id="loginUser"></input>
      <input type="text" placeholder="Password" id="loginPassword"></input>
      <LoginBtn login={startSession}/>
    </main>
  );
}

export default Login;
