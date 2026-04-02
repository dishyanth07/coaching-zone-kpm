import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Flame } from 'lucide-react';

const programs = [
  {
    title: "Complete Kids Development Program",
    duration: "6 Months",
    desc: "A holistic program combining Phonics, Abacus, and Handwriting to build a rock-solid foundation for young learners.",
    features: ["Scientific Learning Methods", "Customized Study Materials", "Weekly Parent Progress Updates"],
    hot: true
  },
  {
    title: "Teacher Training Certification",
    duration: "3 Months",
    desc: "Professional certification for aspiring educators to master modern pedagogy, child psychology, and systemic teaching.",
    features: ["ISO Certified Curriculum", "Practical Training Sessions", "Placement Assistance"],
    hot: false
  }
];

const MasterPrograms = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-gradient-to-b from-secondary/5 to-transparent blur-3xl transform skew-y-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-bold tracking-widest uppercase text-xs mb-4">
            Elite Training Paths
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Our Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Programs</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Comprehensive learning ecosystems designed for maximum impact and guaranteed results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(13,92,99,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(13,92,99,0.2)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Highlight strip */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              
              {program.hot && (
                <div className="absolute top-6 right-6 flex items-center gap-1 bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-bold border border-red-100">
                  <Flame size={14} /> Hot Choice
                </div>
              )}

              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#c5a059" color="#c5a059" />
                ))}
                <span className="text-sm font-semibold text-text-muted ml-2">(4.9/5)</span>
              </div>

              <h3 className="text-2xl font-bold text-text-main mb-2 tracking-tight">{program.title}</h3>
              <p className="inline-block text-secondary font-semibold text-sm mb-4 bg-secondary/10 px-3 py-1 rounded-md">{program.duration} • Intensive</p>
              
              <p className="text-text-muted mb-6 line-height-relaxed">{program.desc}</p>

              <div className="space-y-3 mb-8">
                {program.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 rounded-xl font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                View Full Curriculum
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterPrograms;
