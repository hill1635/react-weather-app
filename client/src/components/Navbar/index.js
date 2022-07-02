import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span>
            <h1 className="title">Weather App</h1>
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
            <Link to="/dashboard" className="navbar-item">Dashboard</Link>
            </div>
          </div>
  
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              </div>
            </div>
          </div>
      </nav>
    );
}

export default Navbar;