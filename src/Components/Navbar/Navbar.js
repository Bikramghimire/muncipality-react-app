import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/img/new_logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar container" id="navbar">
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
          <li>
            <Link
              activeClass="active"
              to="navbar"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="newsbanner"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Notices
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Registeration
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="navbar"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
