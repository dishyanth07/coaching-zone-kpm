import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import { Layout } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
          <div className="logo">
            <img src={logo} alt="Coaching Zone" className="logo-img" />
            <span>Coaching Zone Kanchipuram</span>
          </div>
        <div className="nav-links">
          <a href="#courses">Courses</a>
          <a href="#system">The System</a>
          <a href="#about">Why Us</a>
          <a href="tel:8248800704" className="btn btn-outline">Call Now</a>
          <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="btn btn-primary">Enroll Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
