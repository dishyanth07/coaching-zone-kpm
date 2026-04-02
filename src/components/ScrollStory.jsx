import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollStory = () => {
  const containerRef = useRef(null);
  
  // We use a large custom height to give the user plenty of scrolling space
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for springy cinematic feel
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 50 });

  // 1. Text Reveal Animation Sequence (0% to 30% of scroll)
  const textScale = useTransform(smoothProgress, [0, 0.15, 0.3], [0.8, 1, 1.2]);
  const textOpacity = useTransform(smoothProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.15, 0.3], [100, 0, -100]);

  // 2. Background Morph Sequence (20% to 40% of scroll)
  // Transition from Dark Hero to Light Clean
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.2, 0.4],
    ["#0a0f12", "#0a0f12", "#ffffff"]
  );

  // 3. Grid Reveal Sequence (30% to 100% of scroll)
  const gridOpacity = useTransform(smoothProgress, [0.3, 0.4], [0, 1]);
  const gridY = useTransform(smoothProgress, [0.3, 0.45], [200, 0]);

  // Parallax offsets for individual cards based on scroll
  const cardY1 = useTransform(smoothProgress, [0.4, 1], [100, -150]);
  const cardY2 = useTransform(smoothProgress, [0.4, 1], [300, -50]);
  const cardY3 = useTransform(smoothProgress, [0.4, 1], [500, 50]);

  return (
    <motion.section 
      ref={containerRef} 
      style={{ backgroundColor }}
      className="relative h-[300vh] -mt-[100vh] z-10"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Section 1: Cinematic Text Reveal */}
        <motion.div 
          style={{ scale: textScale, opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-widest text-center px-4 leading-tight">
            Personalized Learning <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">For Every Student</span>
          </h2>
        </motion.div>

        {/* Section 2: Courses Slide In */}
        <motion.div 
          style={{ opacity: gridOpacity, y: gridY }}
          className="w-full max-w-7xl px-6 flex flex-col items-center justify-center h-full pt-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-6xl font-bold text-[#0f2425] tracking-tight">Our Curriculum</h3>
            <p className="text-gray-500 mt-4 text-lg">Scroll to explore the paths</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            
            <motion.div style={{ y: cardY1 }} className="flex flex-col gap-8">
              <div className="bg-gray-50/80 backdrop-blur-xl border border-gray-200 p-10 rounded-3xl shadow-xl">
                <div className="w-16 h-16 bg-[#0d5c63]/10 text-[#0d5c63] rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">Aa</div>
                <h4 className="text-2xl font-bold text-[#0f2425] mb-2">Tamil Phonics</h4>
                <p className="text-gray-600">Master reading basics through scientific phonics.</p>
              </div>
              <div className="bg-gray-50/80 backdrop-blur-xl border border-gray-200 p-10 rounded-3xl shadow-xl">
                <div className="w-16 h-16 bg-[#c5a059]/10 text-[#c5a059] rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">En</div>
                <h4 className="text-2xl font-bold text-[#0f2425] mb-2">English Phonics</h4>
                <p className="text-gray-600">Advanced pronunciation and reading flow.</p>
              </div>
            </motion.div>

            <motion.div style={{ y: cardY2 }} className="flex flex-col gap-8">
              <div className="bg-[#0d5c63] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">∑</div>
                <h4 className="text-2xl font-bold mb-2">Abacus</h4>
                <p className="text-white/80">Boost mental math speed and brain development drastically.</p>
              </div>
              <div className="bg-gray-50/80 backdrop-blur-xl border border-gray-200 p-10 rounded-3xl shadow-xl">
                <div className="w-16 h-16 bg-[#0d5c63]/10 text-[#0d5c63] rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">✎</div>
                <h4 className="text-2xl font-bold text-[#0f2425] mb-2">Handwriting</h4>
                <p className="text-gray-600">Artistic print and cursive practice systems.</p>
              </div>
            </motion.div>

            <motion.div style={{ y: cardY3 }} className="flex flex-col gap-8">
              <div className="bg-gray-50/80 backdrop-blur-xl border border-gray-200 p-10 rounded-3xl shadow-xl">
                <div className="w-16 h-16 bg-[#c5a059]/10 text-[#c5a059] rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">🎙</div>
                <h4 className="text-2xl font-bold text-[#0f2425] mb-2">Spoken English</h4>
                <p className="text-gray-600">Build extreme confidence in communication.</p>
              </div>
              <div className="bg-[#c5a059] text-white p-10 rounded-3xl shadow-2xl">
                <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">★</div>
                <h4 className="text-2xl font-bold mb-2">Teacher Training</h4>
                <p className="text-white/80">ISO certified pedagogy and professional training.</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ScrollStory;
