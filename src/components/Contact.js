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
        <Container className='contact-bg'>
        <Row className='contact_section'>
            <Col sm={12} md={12} lg={6}>
            <center>
                    <h2> Let's Collaborate </h2>
                    <p> Let's create something amazing together!</p>
                    <hr className='customline'></hr>
                    <span> 
                        <div>
                            <b>Contact Email</b>: medleydiaries@gmail.com
                        </div>
                        <div>
                            <b>Location </b>: Vaughan, Ontario
                        </div>

                        <div>
                            <b>Contact Number </b>: (+1)4379704218
                        </div>
                        <div style={{margin: '1rem'}}>
                            <a href="https://ca.linkedin.com/in/akul-sareen-7a7501223">CONNECT ON LINKEDIN </a>
                        </div>

                        <div>
                            <a href="mailto:medleydiaries@gmail.com" 
                                style={{textDecoration: 'none',}}>medleydiaries@gmail.com </a>
                        </div>

                        <img src={logo} alt="Logo" className="logo"/>

                    </span>
                </center>
            </Col>
            <Col sm={12} md={12} lg={6}>
                <Container fluid='sm' className='contact-form' style={{marginTop: '20px'}}> 
                    <center>
                        <h2> Get in Touch </h2>
                        <hr className='customline'></hr>
                    </center>
                    <form ref={this.form} onSubmit={this.sendEmail} className="form">
                        <label> Full Name</label>
                        <input type="text" name="from_name" className="input-field"/>
                        <label>Email</label>
                        <input type="email" name="user_email" className="input-field"/>
                        <label>Message</label>
                        <textarea name="message" className="input-field"/>
                        <input type="submit" value="✉️Send Message" className="submit-button" />
                    </form>
                    {submissionStatus === 'success' && (<p className="success-message">Message sent successfully!</p>)}
                    {submissionStatus === 'error' && (<p className="error-message">Something went wrong. Please try again later.</p>)}
                </Container>
            </Col>
        </Row>
        <div className='footer-contact' style={{display: 'none'}}>
            contact form
        </div>
        </Container>
    );
    }
}
export default ContactUs;