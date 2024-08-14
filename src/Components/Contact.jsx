import React, { useState } from 'react';
import './Contact.css';  // Importing the CSS file
import Header from './Header';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send email using EmailJS
    emailjs.send('service_mji95wz', 'template_w0w1p8b', {
      user_name: formData.name,
      reply_to: formData.email, // Use reply_to instead of user_email
      message: formData.message,
    }, 'TkKJ7bb3URX0hzAk1')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Thank you for your message! We are working on it.');
    }, (err) => {
      console.error('FAILED...', err);
      alert('Oops! Something went wrong. Please try again.');
    });
  
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Have any questions, feedback, or inquiries? We'd love to hear from you. 
            Please fill out the form below and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>DAILY BUGGLE Headquarters</p>
          <p>123,Abisheak House,Kovaipudhur</p>
          <p>Coimbatore,TamilNadu,12345</p>

          <h3>Email Us</h3>
          <p>gouthampratish@gmail.com</p>

          <h3>Call Us</h3>
          <p>+91 6381102585</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
