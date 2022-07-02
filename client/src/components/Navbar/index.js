import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuState, setMenuState] = useState("disabled");
  var state = menuState;

  useEffect(() => {
    var dropdownBtn = document.querySelector(".navbar-burger");
    var dropdownMenu = document.querySelector(".navbar-menu");

    dropdownBtn.addEventListener("click", function() {
      if (state == "disabled") {
        dropdownMenu.classList.add("is-active");
        setMenuState("enabled");
      }
      if (state == "enabled") {
        dropdownMenu.classList.remove("is-active");
        setMenuState("disabled");
      }
    });
  });

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span>
          <h1 className="title">Weather App</h1>
        </span>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
