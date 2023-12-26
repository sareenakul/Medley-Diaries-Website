import React, { createRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from "../Assets/img/logo.png";
import { Col, Container, Row } from 'react-bootstrap';


  
const isValidEmail = (email) => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.form = createRef();
    this.state = {
        submissionStatus: null,
    };
  }
  sendEmail = (e) => {
    e.preventDefault();
    const userEmail = this.form.current.elements.user_email.value;
    const userName = this.form.current.elements.from_name.value;
    const userMessage = this.form.current.elements.message.value;

    if (!userName || !userEmail || !userMessage) {
        this.setState({ submissionStatus: 'error' });
        alert('Please fill in all the required fields.');
        return;
      }

    if (!isValidEmail(userEmail)) {
        // Display an error message or take appropriate action
        console.log('Invalid email address');
        this.setState({ submissionStatus: 'error' });
        alert('Invalid email address. Please enter a valid email.');
        return;
      }
    emailjs.sendForm('service_w4mgxgg', 'template_v5h2hih', this.form.current, 'nZH4gydG6dRtw1G8m')
      .then((result) => {
        this.setState({ submissionStatus: 'success' });
        this.resetForm();
        alert('Message sent successfully!');
      }, (error) => {
        this.setState({ submissionStatus: 'error' });
        alert('Something went wrong. Please try again later.');
      });
  };
  resetForm = () => {
    // Reset the form fields
    this.form.current.reset();
  };
  render() {
    const { submissionStatus } = this.state;
    return (
        <div>
            <Container className='whole'>
                <Row>
                    <div className="contact-container">
                        <Col sm={12} md={12} lg={6}>
                            <center>
                                <div className="form-copy-box">
                                    <div className="logo-box">
                                        <img src={logo} alt="Logo" className="logo" />
                                        <h2>Let's Collaborate</h2>
                                        <p>Let's create something amazing together!</p>
                                        <hr className="highlight-line2"></hr>
                                        <span> 
                                            <div>
                                                <b>Contact Email</b>: medleydiaries@gmail.com
                                            </div>
                                            <div>
                                                <b>Location </b>: Vaughan, ON
                                            </div>
                                            <div>
                                                <b>Contact Number </b>: (+1)4379704218
                                            </div>
                                            <div style={{margin: '1rem'}}>
                                                <a href="https://ca.linkedin.com/in/akul-sareen-7a7501223" className='btn btn-outline-primary'> <> </>CONNECT ON LINKEDIN </a>
                                            </div>
                                            <div>
                                                <a href="mailto:medleydiaries@gmail.com" style={{textDecoration: 'none',}} className="btn btn-outline-danger"> medleydiaries@gmail.com </a>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </center>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <Container fluid='sm' className="form-box">
                                <center className="header">
                                    <h2>Let's Connect</h2>
                                    <div className="highlight-line"></div>
                                </center>
                                <form ref={this.form} onSubmit={this.sendEmail} className="form">
                                    <label> Full Name</label>
                                    <input type="text" name="from_name" className="input-field"/>
                                    <label>Email</label>
                                    <input type="email" name="user_email" className="input-field"/>
                                    <label>Message</label>
                                    <textarea name="message" className="input-field"/>
                                    <input type="submit" value="Send" className="submit-button" />
                                </form>
                                {submissionStatus === 'success' && (<p className="success-message">Message sent successfully!</p>)}
                                {submissionStatus === 'error' && (<p className="error-message">Something went wrong. Please try again later.</p>)}
                            </Container>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
    }
}
export default ContactUs;