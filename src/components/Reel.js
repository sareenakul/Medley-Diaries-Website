import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";

const Reel = ({title, description, url}) => {
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
        <Col sm={6} md={4}>
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                data-instgrm-embed-type="video"
                style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: 0,
                    width: "99.375%",
                    widthWebkitCalc: "calc(100% - 2px)",
                    widthCalc: "calc(100% - 2px)",
                }}>

                <a href={url} target="_blank" rel="noopener noreferrer">
                    View this post on Instagram
                </a>
            </blockquote>
        </Col>
    </Container>
  );
};

export default Reel;
