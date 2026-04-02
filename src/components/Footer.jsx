import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Globe, Instagram, Send, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src={logo} alt="Coaching Zone" className="logo-img" />
            <span>Coaching Zone Kanchipuram</span>
          </Link>
          <p>ISO & MSME Certified Excellence. Redefining education through a smart, systematic approach to student learning in Kanchipuram.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/coaching_zone_kpm" target="_blank" rel="noreferrer"><Send size={20} /></a>
            <a href="https://youtube.com/@coachingzone-u1x?si=XE3ULO6Glut-kfF7" target="_blank" rel="noreferrer"><Globe size={20} /></a>
            <a href="https://www.instagram.com/coaching_zone_kpm/" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
            <a href="mailto:coachingzonekpm@gmail.com"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h5>Courses</h5>
            <Link to="/course/tamil-phonics">Tamil Phonics</Link>
            <Link to="/course/english-phonics">English Phonics</Link>
            <Link to="/course/abacus">Abacus</Link>
            <Link to="/course/handwriting">Handwriting</Link>
          </div>
          <div className="link-group">
            <h5>The Platform</h5>
            <Link to="/">Student Tracking</Link>
            <Link to="/">Parent Portal</Link>
            <Link to="/">Fee Management</Link>
          </div>
          <div className="link-group">
            <h5>Contact</h5>
            <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: '1.5' }}>
              201, Gandhi Road, <br/>
              Opp to Theradi, <br/>
              Kanchipuram - 631501
            </span>
            <a href="tel:8248800704">8248800704</a>
            <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Coaching Zone Kanchipuram. All rights reserved. Designed with ❤️ for future leaders.</p>
      </div>
    </footer>
  );
};

export default Footer;
