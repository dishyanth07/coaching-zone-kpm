import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Target, Zap, Heart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: index * 0.15, duration: 0.8, type: "spring", stiffness: 100 }}
    viewport={{ once: true, margin: "-100px" }}
    className="group relative bg-[#133234]/40 backdrop-blur-2xl border border-white/5 p-10 rounded-3xl overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner">
      <Icon size={32} className="text-secondary" />
    </div>
    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-lg">{desc}</p>
  </motion.div>
);

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  
  // Apple-style Dark Wipe effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#0a1314"]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [200, 0]);

  const features = [
    { icon: Shield, title: "Certified Tutors", desc: "Highly trained educators specializing in child psychology and active pedagogical methods." },
    { icon: Target, title: "Personalized", desc: "Every student follows a targeted curriculum adapted specifically to their learning pace." },
    { icon: Zap, title: "Result-Oriented", desc: "Proven scientific methodologies guaranteeing improvement in reading, writing, and math." },
    { icon: Heart, title: "Confidence", desc: "We focus on emotional growth and public speaking, building leaders for tomorrow." }
  ];

  return (
    <motion.section 
      ref={containerRef}
      style={{ backgroundColor }}
      className="py-40 relative z-20"
    >
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div style={{ y: yOffset }} className="flex flex-col lg:flex-row gap-20 items-start">
          
          <div className="lg:w-1/3 pt-10 sticky top-32">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-2 px-5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-bold tracking-widest uppercase text-xs mb-8"
            >
              The Distinction
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter"
            >
              Why Forward-Thinking Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Choose Us.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xl text-gray-500 leading-relaxed font-medium"
            >
              We believe in more than just passing exams. We build incredibly strong foundations through a highly systematic approach.
            </motion.p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, i) => (
              <FeatureCard key={i} index={i} {...feature} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
