// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/homepage/HeroSection'; // Assuming this is correctly set up
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-container homepage">
      <HeroSection />

      <section className="how-it-works-section section-padding">
        <div className="container">
          <h2 className="section-title">How Unidash Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-icon-wrapper">
                <span className="step-number">1</span>
              </div>
              <h3>Create Your Profile</h3>
              <p>Fill out one comprehensive application with all your academic and personal details. Save once, use for many.</p>
            </div>
            <div className="step">
              <div className="step-icon-wrapper">
                <span className="step-number">2</span>
              </div>
              <h3>Search & Discover</h3>
              <p>Explore thousands of colleges and courses using smart filters tailored to your profile and preferences.</p>
            </div>
            <div className="step">
              <div className="step-icon-wrapper">
                <span className="step-number">3</span>
              </div>
              <h3>Apply with a Click</h3>
              <p>Select your chosen universities and apply to all of them simultaneously in one go. It's that simple!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-overview-section section-padding alternate-bg">
        <div className="container">
          <h2 className="section-title">Why Choose Unidash?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="benefit-icon">🎓</i> {/* Placeholder icon */}
              <h4>For Students</h4>
              <p>Save countless hours, reduce application stress, and discover a wider range of opportunities. Your university journey, simplified.</p>
              <Link to="/students" className="btn-secondary">Learn More for Students</Link>
            </div>
            <div className="benefit-item">
              <i className="benefit-icon">🏛️</i> {/* Placeholder icon */}
              <h4>For Universities</h4>
              <p>Reach a broader, more diverse pool of applicants and streamline your admissions process with standardized, complete data.</p>
              <Link to="/universities" className="btn-secondary">Explore University Partnerships</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reform-angle-section section-padding">
        <div className="container text-center">
          <h2 className="section-title">Join the Educational Reform</h2>
          <p className="reform-text">
            Unidash is more than just an application platform; it's a movement towards a more accessible, equitable, and efficient higher education system in India. We believe in empowering students and supporting institutions to foster a brighter future.
          </p>
          <Link to="/about" className="btn-primary btn-large">Our Mission</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;