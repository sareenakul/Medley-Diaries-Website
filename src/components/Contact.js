import React, { createRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from "../Assets/img/logo.png";
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
      <div className="contact-container">
        <div className="form-copy-box">
            <div className="logo-box">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </div>
        <div className="form-box">
            <div className="header">
                <h2>Let's Connect</h2>
            </div>
          <form ref={this.form} onSubmit={this.sendEmail} className="form">
            <label>Name</label>
            <input type="text" name="from_name" className="input-field"/>
            <label>Email</label>
            <input type="email" name="user_email" className="input-field"/>
            <label>Message</label>
            <textarea name="message" className="input-field"/>
            <input type="submit" value="Send" className="submit-button" />
          </form>
          {submissionStatus === 'success' && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {submissionStatus === 'error' && (
            <p className="error-message">Something went wrong. Please try again later.</p>
          )}
        </div>
      </div>
    );
  }
}
export default ContactUs;