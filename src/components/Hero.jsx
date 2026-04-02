import React, { useEffect } from 'react';
import heroBg from '../assets/hero-bg.png';
import { ChevronRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.hero-content').classList.add('visible');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">Next Generation Learning</span>
          <h1>Personalized Learning <br/><span className="gradient-text">For Every Student</span></h1>
          <p>
            Structured learning, better results, and complete student progress tracking in one powerful system. 
            Experience the "Zone" difference today.
          </p>
          <div className="hero-cta">
            <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="btn btn-primary">
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
