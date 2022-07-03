import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [menuState, setMenuState] = useState("");
  var state = menuState;

  useEffect(() => {
    var dropdownBtn = document.querySelector(".navbar-burger");
    var dropdownMenu = document.querySelector(".navbar-menu");

    dropdownBtn.addEventListener("click", function () {
      if (state === "disabled") {
        dropdownMenu.classList.add("is-active");
        setMenuState("enabled");
      }
      if (state === "enabled") {
        dropdownMenu.classList.remove("is-active");
        setMenuState("disabled");
      }
    });
  });

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="title">
          <Link to="/">
          <h1>Weather App</h1>
          </Link>
        </span>

        <button
          className="cloud navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
        </div>

        <div className="navbar-end">
            <div className="buttons">
              <div className="navBtn">
                <Link to="/dashboard" className="navbar-item p-0">Dashboard</Link>
              </div>
              <div className="navBtn">
                <Link to="/login" className="navbar-item p-0">Login</Link>
              </div>
              <div className="navBtn">
                <Link to="/signup" className="navbar-item p-0">Sign Up</Link>
              </div>
              <div className="navBtn">
                <Link to="/account" className="navbar-item p-0">Account</Link>
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
