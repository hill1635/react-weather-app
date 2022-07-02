import React from "react";
import LoginBtn from "../components/LoginBtn";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Password"></input>
            <LoginBtn />
        </div>
    );
}

export default Login;