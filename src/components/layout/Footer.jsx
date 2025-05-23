// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// import unidashLogoMark from '../../assets/unidash_logo_mark.png'; // Example if you have a logo mark

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <div className="container footer-container">
        <div className="footer-section about-unidash">
          {/* <img src={unidashLogoMark} alt="Unidash" className="footer-logo-mark" /> */}
          <h4>Unidash</h4>
          <p>Revolutionizing university applications in India and beyond. Our mission is to simplify your path to higher education.</p>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/students">For Students</Link></li>
            <li><Link to="/universities">For Universities</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section legal-links">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-section connect">
          <h4>Connect With Us</h4>
          {/* Add social media links/icons here */}
          <p>social media icons</p>
          <p>Email: <a href="mailto:info@unidash.app">info@unidash.app</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Unidash. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;