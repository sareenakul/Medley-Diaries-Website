import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import record from '../Assets/img/record.png';

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
                <div className="item">
                    <img src={record} alt="skill1"/>
                    <h5>Web Development</h5>
                </div>
                <div className="item">
                    <img src={record} alt="skill2"/>
                    <h5>Content Creation</h5>
                </div>
                <div className="item">
                    <img src={record} alt="skill3"/>
                    <h5>Drama</h5>
                </div>
                <div className="item">
                    <img src={record} alt="skill4"/>
                    <h5>Music</h5>
                </div>
                <div className="item">
                    <img src={record} alt="skill5"/>
                    <h5>Edits</h5>
                </div>
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