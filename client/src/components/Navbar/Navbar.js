import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "../buttons/LogoutBtn";
import "./Navbar.css";

function Navbar(props) {
  const [menuState, setMenuState] = useState("disabled");
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  var state = menuState;

  useEffect(() => {
    if (props.user !== undefined) {
      setIsLoggedIn(true);
    }
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
  }, [ props.user ]);

  return (
    <nav className="navbar shadow-none" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="title">
          <Link to="/" style={{textDecoration: "none"}}>
          <h1>Weather App</h1>
          </Link>
        </span>

        <button
          className="navbar-burger"
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
                <Link to="/dashboard" className="navbar-item p-0" style={{textDecoration: "none"}}>Dashboard</Link>
              </div>
              {!isLoggedIn &&
              <div className="navLinks">
                <div className="navBtn">
                  <Link to="/login" className="navbar-item p-0" style={{textDecoration: "none"}}>Login</Link>
                </div>
                <div className="navBtn">
                  <Link to="/signup" className="navbar-item p-0" style={{textDecoration: "none"}}>Sign Up</Link>
                </div>
              </div>
              }
              {isLoggedIn &&
              <div className="navLinks">
                <div className="navBtn">
                  <Link to="/account" className="navbar-item p-0" style={{textDecoration: "none"}}>Account</Link>
                </div>
                <div className="navBtn">
                  <LogoutBtn />
                </div>
              </div>
              }
            </div>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
