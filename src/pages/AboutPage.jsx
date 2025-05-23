// src/pages/AboutPage.jsx
import React from 'react';
import './AboutPage.css';
// import teamMemberImage from '../assets/team-placeholder.jpg'; // Example if you have team images

const AboutPage = () => {
  return (
    <div className="page-container about-page">
      <div className="container section-padding">
        <header className="page-header">
          <h1>About Unidash</h1>
          <p className="subtitle">Learn more about our mission, vision, and the passionate team driving the change in university admissions.</p>
        </header>

        <section className="mission-vision-section">
          <div className="mission-item">
            <h2 className="section-title">Our Mission</h2>
            <p>To simplify and democratize the university application process in India and Asia, making higher education more accessible for every student. We aim to eliminate redundancies and provide a single, efficient platform for students to connect with their dream institutions.</p>
          </div>
          <div className="vision-item alternate-bg section-padding"> {/* Added padding here for visual separation */}
            <h2 className="section-title">Our Vision</h2>
            <p>To be the leading and most trusted platform for university admissions, fostering a transparent and empowering ecosystem for students, universities, and schools. We envision a future where applying to university is a moment of excitement, not stress.</p>
          </div>
        </section>

        <section className="story-section section-padding">
          <h2 className="section-title">The Unidash Story</h2>
          <p>Unidash was born from the firsthand experiences of students navigating the complex and often frustrating landscape of university applications in India. We saw the need for a unified, user-friendly solution that could save students time, reduce stress, and open up a wider world of educational opportunities. Our founders, passionate about education and technology, came together to build a platform that addresses these critical pain points, aiming to spark a genuine educational reform.</p>
          <p>We believe that technology can be a powerful enabler for positive change, and Unidash is our commitment to leveraging it for the betterment of the education sector.</p>
        </section>

        <section className="team-section section-padding alternate-bg">
          <h2 className="section-title">Our Team (Coming Soon)</h2>
          <p className="text-center">We are a dedicated group of innovators, educators, and tech enthusiasts committed to making Unidash a success. More details about our core team will be shared here soon!</p>
          {/* 
          Example of how you might list team members later:
          <div className="team-grid">
            <div className="team-member">
              <img src={teamMemberImage} alt="Team Member Name" />
              <h3>Team Member Name</h3>
              <p>Role/Title</p>
            </div>
            </div> 
          */}
        </section>

        <section className="values-section section-padding">
            <h2 className="section-title">Our Core Values</h2>
            <ul className="values-list">
                <li><strong>Student-Centricity:</strong> Putting the needs and experiences of students at the heart of everything we do.</li>
                <li><strong>Innovation:</strong> Continuously seeking creative solutions to improve the application process.</li>
                <li><strong>Integrity:</strong> Operating with transparency, honesty, and ethical practices.</li>
                <li><strong>Collaboration:</strong> Working closely with students, universities, and schools to build a better ecosystem.</li>
                <li><strong>Accessibility:</strong> Striving to make our platform and educational opportunities available to all.</li>
            </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;