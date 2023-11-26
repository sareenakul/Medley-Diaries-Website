import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () =>{
    const formInitialData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formData, setFormData] = useState(formInitialData);
    const [submitButtonText, setSubmitButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;