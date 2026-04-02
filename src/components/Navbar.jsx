import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <img src={logo} alt="Coaching Zone" className="logo-img" />
          <span>Coaching Zone Kanchipuram</span>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#courses" onClick={() => setIsMenuOpen(false)}>Courses</a>
          <a href="#system" onClick={() => setIsMenuOpen(false)}>The System</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>Why Us</a>
          <div className="mobile-actions">
            <a href="tel:8248800704" className="btn btn-outline">Call Now</a>
            <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="btn btn-primary">Enroll Now</a>
          </div>
        </div>

        <div className="nav-actions">
          <a href="tel:8248800704" className="btn btn-outline-nav">Call Now</a>
          <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="btn btn-primary-nav">Enroll Now</a>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
