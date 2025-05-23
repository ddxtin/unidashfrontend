// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="page-container not-found-page">
      <div className="container text-center"> {/* Added text-center here */}
        <div className="not-found-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-message">Oops! Page Not Found.</h2>
          <p className="error-description">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary btn-large">Go to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;