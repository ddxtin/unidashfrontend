// src/components/layout/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="container header-container">
        <Link to="/" className="logo-link">
          {/* Use your actual logo image here */}
          <img src="/logo_full.png" alt="Unidash Logo" className="logo-image" />
          {/* <span className="logo-text">Unidash</span> */}
        </Link>
        <nav className="main-nav">
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
            <li><NavLink to="/students" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>For Students</NavLink></li>
            <li><NavLink to="/universities" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>For Universities</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink></li>
            <li><NavLink to="/faq" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>FAQ</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          {/* These will eventually link to your actual app's login/signup */}
          <Link to="/login" className="btn-secondary auth-btn">Login</Link>
          <Link to="/signup" className="btn-primary auth-btn">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;