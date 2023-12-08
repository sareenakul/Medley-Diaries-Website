import React from "react";
import home from "../Assets/img/vids/home.mp4";
import Contact from "./Contact";  // Adjust the path based on your file structure

const Main = () => {
  return (
    <div className="main" style={{ width: '100%', height: 'auto', position: 'relative' }}>
      <div className="overlay">
      <video src={home} autoPlay loop muted style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      <Contact />
      </div>
    </div>
  );
};

export default Main;
