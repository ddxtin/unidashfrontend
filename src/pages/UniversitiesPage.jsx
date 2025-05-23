// src/pages/UniversitiesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './UniversitiesPage.css';

const UniversitiesPage = () => {
  return (
    <div className="page-container universities-page">
      <div className="container section-padding">
        <header className="page-header">
          <h1>Partner with Unidash: Expand Your Reach</h1>
          <p className="subtitle">Connect with a diverse and engaged pool of aspiring students. Streamline your admissions and discover top talent with Unidash.</p>
        </header>

        <section className="benefits-for-universities">
          <h2 className="section-title">Why Universities Choose Unidash</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Increased Applicant Pool</h3>
              <p>Access a wider, more diverse range of students from across India (and soon, Asia) actively seeking higher education opportunities.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📄</div>
              <h3>Streamlined Application Process</h3>
              <p>Receive standardized, complete, and verified applications, reducing administrative overhead and improving efficiency.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Targeted Outreach</h3>
              <p>Showcase your institution's unique programs and strengths to students whose profiles match your criteria.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Enhanced Visibility</h3>
              <p>Gain prominent exposure on a leading platform dedicated to university admissions, boosting your institution's brand.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚙️</div>
              <h3>Easy Integration (Future)</h3>
              <p>Our platform is being designed for potential future integration with existing university admission systems for seamless data flow.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Collaborative Partnership</h3>
              <p>Work with a dedicated team committed to understanding your needs and supporting your admission goals.</p>
            </div>
          </div>
        </section>

        <section className="how-it-works-uni section-padding alternate-bg">
          <h2 className="section-title">Simple Steps to Get Started</h2>
          <ol className="steps-list">
            <li><strong>Express Interest:</strong> Reach out to our partnership team via the contact form or email.</li>
            <li><strong>Onboarding:</strong> We'll guide you through setting up your university profile and listing your courses.</li>
            <li><strong>Receive Applications:</strong> Start receiving applications from qualified students directly through your Unidash portal.</li>
            <li><strong>Manage & Connect:</strong> Utilize our tools to manage applications and communicate with prospective students.</li>
          </ol>
        </section>

        <section className="cta-uni-section text-center section-padding">
          <h2 className="section-title">Join the Future of Admissions</h2>
          <p>Become a Unidash partner institution and be part of a transformative educational reform.</p>
          <Link to="/contact?subject=UniversityPartnership" className="btn-primary btn-large">Become a Partner</Link>
        </section>
      </div>
    </div>
  );
};

export default UniversitiesPage;