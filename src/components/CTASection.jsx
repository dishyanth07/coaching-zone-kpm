import React from 'react';
import { MessageCircle, Phone, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-container reveal-on-scroll">
          <div className="cta-content">
            <h2>Start Your Child's <br/><span className="gradient-text" style={{ filter: 'brightness(1.5)' }}>Learning Journey Today</span></h2>
            <p>Don't wait to give your child the tools they need for success. Join the Coaching Zone community and track progress effortlessly.</p>
            
            <div className="cta-info">
              <div className="info-item">
                <Phone size={32} />
                <div>
                  <span className="info-label">Call Us Directly</span>
                  <a href="tel:8248800704" className="info-val">8248800704</a>
                </div>
              </div>
              <div className="info-item">
                <Clock size={32} />
                <div>
                  <span className="info-label">Learning Hours</span>
                  <span className="info-val">9 AM – 8 PM</span>
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="btn btn-primary cta-btn" target="_blank" rel="noreferrer">
              <MessageCircle size={24} />
              Contact Now via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
