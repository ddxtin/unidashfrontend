// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // To render child routes

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet /> {/* Page content will be rendered here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;