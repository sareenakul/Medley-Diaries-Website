import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";

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
    <Container>
      <Col sm={6} md={4} className="custom-reel-container">
        <blockquote
          className="instagram-media custom-instagram-embed"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          data-instgrm-embed-type="video"
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            View this post on Instagram
          </a>
        </blockquote>
        <div className="custom-reel-text">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
      </Col>
    </Container>
  );
};

export default Reel;
