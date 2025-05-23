// src/components/sections/homepage/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Revolutionizing University Applications in India</h1>
          <p>One application, endless opportunities. Unidash simplifies your journey to higher education, making it easier than ever to find and apply to your dream university.</p>
          <div className="hero-cta">
            <Link to="/signup" className="btn-primary btn-large">Get Started Now</Link>
            <Link to="/students" className="btn-secondary btn-large">Learn More</Link>
          </div>
        </div>
        <div className="hero-image-container">
          {/* Replace with your actual hero image or illustration */}
          <img src="/hero_image.jpg" alt="Students applying to university" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
