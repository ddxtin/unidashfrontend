// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import UniversitiesPage from './pages/UniversitiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';
// Import PrivacyPolicyPage and TermsPage if you create them
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
// import TermsPage from './pages/TermsPage';

import './App.css'; // App-specific styles

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* Layout wraps all these pages */}
        <Route index element={<HomePage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="universities" element={<UniversitiesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
        {/* 
        Example for legal pages if you create them:
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-service" element={<TermsPage />} /> 
        */}

        {/* 
        Placeholder for future login/signup if they are part of this app initially.
        For now, header links point to /login and /signup which will be 404 if not defined.
        If you want to create placeholder pages for them:
        <Route path="login" element={<div className="container section-padding"><h2>Login Page - Coming Soon!</h2></div>} />
        <Route path="signup" element={<div className="container section-padding"><h2>Sign Up Page - Coming Soon!</h2></div>} />
        */}
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      </Route>
    </Routes>
  );
}

export default App;