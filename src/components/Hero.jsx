import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CalendarCheck, BookOpen, Award, GraduationCap, Zap } from 'lucide-react';

const FloatingIcon = ({ Icon, className, delay }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-15, 15, -15] }}
    transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
    className={`absolute hidden lg:flex items-center justify-center bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(13,92,99,0.15)] border border-gray-100 ${className}`}
  >
    <Icon size={32} className="text-primary" />
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9f6]">
      {/* Background Subtleties */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-secondary/10 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

      {/* Floating Education Icons */}
      <FloatingIcon Icon={BookOpen} className="top-[20%] left-[8%]" delay={0} />
      <FloatingIcon Icon={GraduationCap} className="bottom-[25%] left-[12%]" delay={1.5} />
      <FloatingIcon Icon={Award} className="top-[25%] right-[10%]" delay={0.7} />
      <FloatingIcon Icon={Zap} className="bottom-[20%] right-[15%]" delay={2.2} />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold tracking-wide text-[0.85rem] mb-6 border border-primary/20 shadow-sm">
            Top-Rated Coaching Institute
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-text-main leading-tight tracking-tight mb-8">
            Upgrade Your Skills with <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Industry-Level Training
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
            Tamil, English, Phonics, Abacus, Handwriting, and Educator Programs. 
            Experience structured learning with complete student tracking for proven results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full overflow-hidden shadow-[0_10px_30px_-5px_rgba(13,92,99,0.3)] hover:scale-105 transition-all duration-300">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[200%] group-hover:animate-[shimmer_2s_infinite]" />
              <span className="relative z-10">Enroll Now</span>
              <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="tel:8248800704" className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-white text-primary font-bold rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
              <CalendarCheck size={20} />
              Book Free Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
