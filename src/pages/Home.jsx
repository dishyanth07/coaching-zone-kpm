import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustStats from '../components/TrustStats';
import CourseGrid from '../components/CourseGrid';
import SystemPreview from '../components/SystemPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home = () => {
  const { hash } = useLocation();
  useScrollReveal();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <TrustStats />
      <CourseGrid />
      <SystemPreview />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
};

export default Home;
