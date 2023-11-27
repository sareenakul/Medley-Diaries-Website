import React, { useEffect } from "react";
// import { Col } from "react-bootstrap";

const Reel = ({ title, description, url }) => {
  useEffect(() => {
    // Load Instagram Embed API script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{width: '100%', minHeight: '15rem'}}>
        <div style={{minWidth: '100%', height: '100%'}}>
          <blockquote
            className="instagram-media custom-instagram-embed"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            data-instgrm-embed-type="video"
            style={{width: '100%'}}
          >
          </blockquote>
          <div className="custom-reel-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Reel;
