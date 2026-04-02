import React from 'react';
import dashboardImg from '../assets/dashboard-preview.png';
import { CheckCircle2 } from 'lucide-react';

const SystemPreview = () => {
  return (
    <section id="system" className="system-section">
      <div className="container system-grid">
        <div className="system-content reveal-on-scroll">
          <span className="badge">Platform Driven</span>
          <h2>A Smart System That <span className="gradient-text">Tracks Every Student</span></h2>
          <p>
            The Coaching Zone platform provides instructors and parents with 
            unprecedented insights into student progress, attendance, and performance.
          </p>
          <ul className="features-list">
            <li><CheckCircle2 size={24} className="feature-icon" /> <span>Automated Attendance Tracking</span></li>
            <li><CheckCircle2 size={24} className="feature-icon" /> <span>Real-time Parent Updates</span></li>
            <li><CheckCircle2 size={24} className="feature-icon" /> <span>Unified Fee Management</span></li>
            <li><CheckCircle2 size={24} className="feature-icon" /> <span>Digital Progress Reports</span></li>
          </ul>
          <a href="https://wa.me/8248800704" className="btn btn-primary">Book a Demo</a>
        </div>
        
        <div className="system-visual reveal-on-scroll">
          <div className="image-container">
            <img src={dashboardImg} alt="Dashboard Preview" className="dashboard-img" />
            <div className="floating-card c1">
              <div className="card-label">Attendance</div>
              <div className="card-val">98.5%</div>
            </div>
            <div className="floating-card c2">
              <div className="card-label">New Students</div>
              <div className="card-val">+24</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemPreview;
