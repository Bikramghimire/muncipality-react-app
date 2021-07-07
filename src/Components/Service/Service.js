import React from "react";
import Empoly from "../Employ/Empoly";
import Notice from "../Notice/Notice";
import Register from "../Register/Register";
import "./Service.css";

function Service() {
  return (
    <div className="service" id="service">
      <Register />
      <Notice />
      <Empoly />
    </div>
  );
}

export default Service;
