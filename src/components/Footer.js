import { Row, Col, Container } from "react-bootstrap";
import logo from "../Assets/img/logo.png";
const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" className="footer-logo"/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};
export default Footer;