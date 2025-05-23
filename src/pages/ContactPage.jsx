// src/pages/ContactPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // To get query params
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const subjectFromQuery = queryParams.get('subject');
    if (subjectFromQuery) {
      setFormData(prevData => ({ ...prevData, subject: subjectFromQuery }));
    }
  }, [location.search]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For a static site, you might use a service like Formspree or Netlify Forms
    // Or, if you have a backend, send it there.
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form (optional)
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container contact-page">
      <div className="container section-padding">
        <header className="page-header">
          <h1>Get in Touch</h1>
          <p className="subtitle">We'd love to hear from you! Whether you have a question, a partnership proposal, or just want to say hello, feel free to reach out.</p>
        </header>

        <div className="contact-content-wrapper">
          <div className="contact-form-container">
            <h2 className="section-title">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary btn-large">Send Message</button>
            </form>
          </div>

          <div className="contact-info-container">
            <h2 className="section-title">Contact Information</h2>
            <div className="info-item">
              <h3>Email Us</h3>
              <p><a href="mailto:info@unidash.app">info@unidash.app</a> (General Inquiries)</p>
              <p><a href="mailto:partners@unidash.app">partners@unidash.app</a> (Partnerships)</p>
              <p><a href="mailto:support@unidash.app">support@unidash.app</a> (Support)</p>
            </div>
            <div className="info-item">
              <h3>Follow Us</h3>
              {/* Replace with actual links and icons */}
              <p>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                <a href="#" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
                <a href="#" target="_blank" rel="noopener noreferrer"> Instagram</a>
              </p>
            </div>
            <div className="info-item">
              <h3>Office Address (Future)</h3>
              <p>Unidash Headquarters<br />[Your City, State, Pin Code]<br />India</p>
              <p>(Details coming soon)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;