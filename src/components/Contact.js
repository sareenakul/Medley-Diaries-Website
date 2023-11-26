import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../Assets/img/logo.png"

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
    const onFormUpdate = (category, value) =>{
        setFormData({
            ...formData,
            [category]: value
        })
    }
    const handleSubmit = () =>{}
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={logo} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formData.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value )}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formData.lastName} placeholder="Family Name" onChange={(e)=> onFormUpdate('lastName', e.target.value )}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formData.email} placeholder="Mail ID" onChange={(e)=> onFormUpdate('email', e.target.value )}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formData.phone} placeholder="Contact Number" onChange={(e)=> onFormUpdate('phone', e.target.value )}/>
                                </Col>
                                <Col>
                                    <textarea rows="6" value={formData.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value )}/>
                                    <button type="submit">
                                        <span>{submitButtonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false? "Warning" : "Success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;