import React from "react";
import logo from "./logo.png";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="center ma3 mb4">
      <Tilt
        className="Tilt m"
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <img className="logo" src={logo} alt="" />
      </Tilt>
    </div>
  );
};

export default Logo;
