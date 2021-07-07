import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div>
      <h3>Online Register</h3>
      <div className="register-link">
        <ul>
          <li>
            <Link to="/form">
              <h4>Online LockDown Pass</h4>
              <p>Now make the one pass from your home</p>
            </Link>
          </li>
          <li>
            <Link to="/form">
              <h4>Online Birth Certificate</h4>
              <p>now make the birth certificate for home</p>
            </Link>
          </li>
          <li>
            <Link to="/form">
              <h4>Online Business Registeration</h4>
              <p>make the office and business permission from home</p>
            </Link>
          </li>
          <li>
            <Link to="/form">
              <h4>Online covid Vaccine registeration</h4>
              <p>register the form for the covid vaccine online</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Register;
