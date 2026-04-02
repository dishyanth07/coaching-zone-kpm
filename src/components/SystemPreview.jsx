import React from 'react';
import dashboardImg from '../assets/dashboard-preview.png';
import { CheckCircle2 } from 'lucide-react';

const SystemPreview = () => {
  return (
    <section id="system" className="system-section">
      <div className="container">
        <div className="system-layout">
          <div className="system-content reveal-on-scroll">
            <span className="badge">Platform Driven</span>
            <h2>Smart System to <span className="gradient-text">Manage Students Easily</span></h2>
            <p>
              Automated Attendance Tracking, Fee Management, and Student Records.
              The Coaching Zone platform provides instructors and parents with
              unprecedented insights into student progress and performance.
            </p>
            <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="btn btn-primary" target="_blank" rel="noreferrer">Book a Demo</a>
          </div>
          
          <div className="system-visual-full reveal-on-scroll">
            <img 
              src={dashboardImg} 
              alt="Dashboard 3D Mockup" 
              className="dashboard-3d" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemPreview;
