import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Heart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="group relative bg-[#133234]/80 backdrop-blur-xl border border-white/10 p-10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="w-16 h-16 rounded-2xl bg-[#0a1e1e] border border-white/5 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-[#0a1e1e] transition-colors duration-300 shadow-[0_0_20px_rgba(197,160,89,0)] group-hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]">
      <Icon size={32} className="text-secondary group-hover:text-[#0a1e1e] transition-colors" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-300/80 leading-relaxed text-lg">{desc}</p>
  </motion.div>
);

const WhyChooseUs = () => {
  const features = [
    { icon: Shield, title: "Certified Tutors", desc: "Highly trained educators specializing in child psychology and active pedagogical methods." },
    { icon: Target, title: "Personalized Learning", desc: "Every student follows a targeted curriculum adapted specifically to their learning pace." },
    { icon: Zap, title: "Result-Oriented Training", desc: "Proven scientific methodologies guaranteeing improvement in reading, writing, and math." },
    { icon: Heart, title: "Confidence Building", desc: "We focus on emotional growth and public speaking, building leaders for tomorrow." }
  ];

  return (
    <section id="about" className="py-32 bg-[#0a1e1e] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-secondary font-bold tracking-widest uppercase text-sm mb-6">
              The Coaching Zone Edge
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Why Forward-Thinking <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Parents Choose Us</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              We believe in more than just teaching. We build foundations that last a lifetime through our unique systemic approach.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} index={i} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
