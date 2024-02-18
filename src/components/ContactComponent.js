import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const ContactComponent = () => {
  useEffect(() => {
    const loadScript = async () => {
      // Create a script element
      const script = document.createElement("script");
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.async = true;

      // Add a callback function to execute after the script is loaded
      script.onload = () => {
        // Additional actions after the script is loaded
        console.log("Script loaded!");
      };

      // Append the script element to the document body
      document.body.appendChild(script);
    };

    // Call the async function to load the script
    loadScript();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <Container id="contact" className="contact-bg">
      <div
        className="visme_d"
        data-title="Untitled Project"
        data-url="y40p7vpz-untitled-project"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="16760"
      ></div>
    </Container>
  );
};

export default ContactComponent;
