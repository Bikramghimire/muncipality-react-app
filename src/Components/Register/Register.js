import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h3>Online Register</h3>
      <div className="register-link">
        <ul>
          <li>
            <Link to="/form">Register </Link>
          </li>
          <li>
            <a href="">Application</a>
          </li>
          <li>
            <a href="">Application</a>
          </li>
          <li>
            <a href="">Application</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Register;
