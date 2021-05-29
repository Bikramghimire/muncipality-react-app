import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/img/new_logo.png";

function Navbar() {
  return (

      <div className="navbar container">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
          <div className="logo-text">
            <span className="logo-big">Godawari Muncipality</span>
            <br />
            Government Of Nepal
          </div>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Notice</li>
            <li>Register</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
  
  );
}

export default Navbar;
