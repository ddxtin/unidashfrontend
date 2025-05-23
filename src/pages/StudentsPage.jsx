// src/pages/StudentsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './StudentsPage.css';

const StudentsPage = () => {
  return (
    <div className="page-container students-page">
      <div className="container section-padding">
        <header className="page-header">
          <h1>Your Smartest Path to University</h1>
          <p className="subtitle">Unidash is designed to make your university application process seamless, efficient, and stress-free. Focus on your future, let us handle the paperwork.</p>
        </header>

        <section className="feature-highlight">
          <h2 className="section-title">The Unidash Advantage for Students</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📝</div>
              <h3>One Application, Many Choices</h3>
              <p>Say goodbye to filling out countless forms. Create your comprehensive profile once and apply to multiple universities with ease.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔍</div>
              <h3>Discover Your Dream College</h3>
              <p>Our powerful search tool helps you find colleges and courses that perfectly match your aspirations, academic profile, and eligibility.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⏱️</div>
              <h3>Save Time & Effort</h3>
              <p>Reduce application time significantly. Focus on what truly matters – your studies and future – while we handle the repetitive tasks.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💻</div>
              <h3>User-Friendly Interface</h3>
              <p>Navigate a clean, modern, and intuitive platform designed with students in mind. No more confusing and outdated university portals!</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Track Your Progress</h3>
              <p>Stay updated on your application statuses from all universities in one convenient dashboard (coming soon!).</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Secure Document Management</h3>
              <p>Upload, store, and manage all your academic documents securely in one place for easy submission to universities.</p>
            </div>
          </div>
        </section>

        <section className="cta-section text-center section-padding alternate-bg">
          <h2 className="section-title">Ready to Simplify Your Future?</h2>
          <p>Join thousands of students who are choosing a smarter way to apply to university.</p>
          <Link to="/signup" className="btn-primary btn-large">Sign Up for Free Today</Link>
        </section>
      </div>
    </div>
  );
};

export default StudentsPage;