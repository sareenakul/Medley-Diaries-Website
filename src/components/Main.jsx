// Main.js
import React from "react";
import home from "../Assets/img/vids/home.mp4";
import "../App.css" // Import the external stylesheet
import ContactComponent from "./ContactComponent";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay">
        <video src={home} preload="auto" autoPlay loop muted />
        <ContactComponent/>
      </div>
    </div>
  );
};

export default Main;
