import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCore, Bell } from 'lucide-react';

const SystemPreview = () => {
  const features = [
    { icon: CheckCircle2, title: "Attendance Tracking", desc: "Digital check-ins for real-time safety updates." },
    { icon: ShieldCore, title: "Fee Management", desc: "Automated receipts and transparent billing." },
    { icon: Bell, title: "Parent Updates", desc: "Instant SMS notifications on student progress." }
  ];

  return (
    <section id="system" className="py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-bold tracking-widest uppercase text-xs mb-6 border border-secondary/20">
            Platform Driven
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 tracking-tight">
            Smart System to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Manage Students Easily</span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Attendance tracking, fee management, and parent updates—all seamlessly integrated. 
            The Coaching Zone platform provides unparalleled transparency and control.
          </p>
        </motion.div>

        {/* Floating Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(13,92,99,0.08)] border border-gray-100 flex items-center gap-3"
            >
              <feature.icon size={20} className="text-primary" />
              <span className="font-bold text-slate-700">{feature.title}</span>
            </motion.div>
          ))}
        </div>

        {/* 3D Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 50, rotateX: 25, rotateY: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 12, rotateY: -5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ perspective: "1500px" }}
          className="relative max-w-5xl mx-auto group"
        >
          {/* Glow Behind Dashboard */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[120px] rounded-full z-0 group-hover:bg-secondary/20 transition-colors duration-700"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Student Management Dashboard" 
            className="w-full h-auto rounded-3xl border border-white/40 shadow-[0_30px_100px_-20px_rgba(13,92,99,0.25)] relative z-10 transition-transform duration-700 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:scale-[1.02]"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <a href="#demo" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 transition-all duration-300">
            Book a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemPreview;
