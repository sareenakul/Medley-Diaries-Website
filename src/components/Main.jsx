// Main.js
import React from "react";
import home from "../Assets/img/vids/home.mp4";
import Contact from "./Contact";
import "../App.css" // Import the external stylesheet

const Main = () => {
  return (
    <div className="main">
      <div className="overlay">
        <video src={home} autoPlay loop muted />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
