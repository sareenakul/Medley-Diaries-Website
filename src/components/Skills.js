import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import webLogo from "../Assets/img/webLogo.png";
import webDev from "../Assets/img/webDev.png";
import yLogo from "../Assets/img/yLogo.png";
import webL from "../Assets/img/webL.png";

// Correct the export statement
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  


  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Features</h2>
              <p>Content's genre</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <a href="https://github.com/sareenakul" target="_blank" rel="noopener noreferrer">
                <div className="item">
                    <img src={webDev} alt="skill1"/>
                    <h5>Web Development</h5>
                </div>
              </a>
              <a href="https://www.youtube.com/@MedleyDiaries?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                <div className="item">
                    <img src={yLogo} alt="skill2"/>
                    <h5>Content Creation</h5>
                </div>
              </a>
              <a href="https://main.d1jm76fngccuyv.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="item">
                    <img src={webLogo} alt="skill3"/>
                    <h5>Drama</h5>
                </div>
              </a>
              <a href="https://www.instagram.com/medleydiaries/" target="_blank" rel="noopener noreferrer">
                <div className="item">
                    <img src={webL} alt="skill5"/>
                    <h5>Edits</h5>
                </div>
              </a>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Export the component correctly
export default Skills;