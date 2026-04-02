import React from 'react';
import { MessageCircle, Phone, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container reveal-on-scroll">
        <div className="cta-content">
          <h2>Start Your Child's <span className="gradient-text">Learning Journey Today</span></h2>
          <p>Don't wait to give your child the tools they need for success. Join the Coaching Zone community.</p>
          
          <div className="cta-info">
            <div className="info-item">
              <Phone size={24} />
              <div>
                <span className="info-label">Call Us</span>
                <a href="tel:8248800704" className="info-val">8248800704</a>
              </div>
            </div>
            <div className="info-item">
              <Clock size={24} />
              <div>
                <span className="info-label">We're Open</span>
                <span className="info-val">9 AM – 8 PM</span>
              </div>
            </div>
          </div>
          
          <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="btn btn-primary cta-btn">
            <MessageCircle size={20} />
            Enroll Now via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
