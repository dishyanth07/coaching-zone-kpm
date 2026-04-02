import React, { useEffect } from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) heroContent.classList.add('visible');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      {/* Dynamic Fluid Background Layer */}
      <div className="hero-fluid-bg">
        <div className="fluid-blob b1"></div>
        <div className="fluid-blob b2"></div>
        <div className="fluid-blob b3"></div>
      </div>

      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">Next Generation Learning</span>
          <h1>Personalized Learning <br/><span className="gradient-text">For Every Student</span></h1>
          <p>
            Tamil, English, Hindi, Phonics, Handwriting, Abacus & Spoken English. 
            Structured learning, better results, and complete student tracking.
          </p>
          <div className="hero-cta">
            <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="btn btn-primary" target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a href="#courses" className="btn btn-outline">
              Explore Courses
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
