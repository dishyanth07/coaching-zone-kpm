import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Languages, PenTool, Type, Activity, 
  Calculator, UserCheck, Speech, ArrowRight
} from 'lucide-react';

const courses = [
  { 
    title: 'Tamil Phonics', 
    icon: BookOpen, 
    desc: 'Master Tamil language basics through scientific phonics.', 
    color: '#0d5c63' 
  },
  { 
    title: 'English Phonics', 
    icon: Languages, 
    desc: 'Advanced English reading and pronunciation skills.', 
    color: '#c5a059' 
  },
  { 
    title: 'Hindi Phonics', 
    icon: Activity, 
    desc: 'The complete guide to Hindi pronunciation and reading.', 
    color: '#0d5c63' 
  },
  { 
    title: 'Handwriting', 
    icon: PenTool, 
    desc: 'Artistic and legible print and cursive practice techniques.', 
    color: '#c5a059' 
  },
  { 
    title: 'Grammar', 
    icon: Type, 
    desc: 'Strong foundation in language rules and structure.', 
    color: '#0d5c63' 
  },
  { 
    title: 'Spoken English', 
    icon: Speech, 
    desc: 'Build confidence in communication and public speaking.', 
    color: '#c5a059' 
  },
  { 
    title: 'Abacus', 
    icon: Calculator, 
    desc: 'Boost mental math speed, concentration, and brain development.', 
    color: '#0d5c63' 
  },
  { 
    title: 'Teacher Training', 
    icon: UserCheck, 
    desc: 'Professional certification for aspiring educators.', 
    color: '#c5a059' 
  },
];

const CourseCard = ({ course, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(13,92,99,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(13,92,99,0.15)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
    <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
         style={{ backgroundColor: `${course.color}15`, color: course.color }}>
      <course.icon size={32} strokeWidth={2} />
    </div>
    <h3 className="relative z-10 text-2xl font-bold text-text-main mb-3 tracking-tight">{course.title}</h3>
    <p className="relative z-10 text-text-muted mb-6 leading-relaxed">{course.desc}</p>
    <div className="relative z-10 flex items-center text-primary font-bold text-sm tracking-wide group-hover:text-secondary transition-colors cursor-pointer">
      LEARN MORE <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </motion.div>
);

const CourseGrid = () => {
  return (
    <section id="courses" className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold tracking-widest uppercase text-xs mb-4">
            Extensive Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main mb-4 tracking-tight">
            Our Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Learning Paths</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Carefully crafted courses designed to unlock every student's potential through scientific and proven methodologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
