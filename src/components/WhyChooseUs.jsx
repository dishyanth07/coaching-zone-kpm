import React from 'react';
import { Shield, Target, Zap, Heart } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="feature-item reveal-on-scroll">
    <div className="feature-icon-box">
      <Icon size={24} />
    </div>
    <div className="feature-text">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section id="about" className="why-section">
      <div className="container">
        <div className="why-content">
          <div className="text-side reveal-on-scroll">
            <span className="badge">The Coaching Zone Edge</span>
            <h2>Why Forward-Thinking <span className="gradient-text">Parents Choose Us</span></h2>
            <p>
              We believe in more than just teaching. We believe in building 
              foundations that last a lifetime through our unique systemic approach.
            </p>
          </div>
          <div className="features-grid-why">
            <Feature icon={Shield} title="Certified Tutors" desc="Highly trained experts in child psychology and pedagogy." />
            <Feature icon={Target} title="Personalized focus" desc="Every student follows a curriculum tailored to their pace." />
            <Feature icon={Zap} title="Result Oriented" desc="Guaranteed improvement in reading, writing and confidence." />
            <Feature icon={Heart} title="Emotional Growth" desc="Building student confidence beyond academic achievements." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
