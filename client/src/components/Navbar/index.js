import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  var dropdown = document.querySelector(".navbar-menu");
  const toggle = () => {
    dropdown.classList.add("is-active");
  };

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
          onClick={toggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Dashboard
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
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
