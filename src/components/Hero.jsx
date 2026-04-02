import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, PlayCircle } from 'lucide-react';

const Particle = ({ delay, duration, x, y, size }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.8, 0],
      scale: [0, 1, 0.5],
      y: [0, -100]
    }}
    transition={{ 
      duration, 
      delay, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute bg-white rounded-full blur-[1px]"
    style={{ left: x, bottom: y, width: size, height: size }}
  />
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Apple-style fade and scale out based on scroll depth
  const scale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const yOffset = useTransform(scrollY, [0, 800], [0, 150]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.2]);

  const headline = "Smarter Learning Starts Here";
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
  };

  return (
    <section ref={containerRef} className="relative h-[120vh] bg-[#0a0f12] overflow-hidden sticky top-0 -z-10">
      
      {/* Immersive Cinematic Background with Slow Zoom */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2425]/40 via-[#0a0f12] to-[#0a0f12] z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/30 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-1/4 right-1/4 w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full mix-blend-screen" />
        
        {/* Floating Particles */}
        <Particle x="20%" y="10%" size={4} duration={4} delay={0} />
        <Particle x="75%" y="30%" size={6} duration={5} delay={1} />
        <Particle x="40%" y="20%" size={3} duration={6} delay={2} />
        <Particle x="85%" y="15%" size={5} duration={4} delay={3} />
        <Particle x="15%" y="40%" size={4} duration={7} delay={0.5} />
      </motion.div>

      {/* Content wrapper tied to scroll transforms */}
      <motion.div 
        style={{ scale, opacity, y: yOffset }}
        className="relative z-20 h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-gray-300 text-sm font-semibold tracking-wider uppercase">The Complete Educational System</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tighter mb-8 max-w-5xl" style={{ perspective: "1000px" }}>
          {headline.split(" ").map((word, index) => (
            <span key={index} className="inline-block whitespace-nowrap mr-4 overflow-hidden">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: (index * 0.1) + (charIndex * 0.03) + 0.5 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl font-medium leading-relaxed mb-12"
        >
          Master <span className="text-white">Tamil, English, Phonics, Abacus, Handwriting,</span> and <span className="text-white">Spoken English</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#courses" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a0f12] font-bold rounded-full overflow-hidden hover:scale-105 transition-all duration-300">
            <span className="relative z-10">Explore Path</span>
            <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#demo" className="inline-flex items-center gap-2 text-white font-semibold hover:text-secondary transition-colors duration-300">
            <PlayCircle size={24} />
            See How It Works
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
