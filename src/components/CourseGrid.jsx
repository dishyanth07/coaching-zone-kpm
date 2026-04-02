import React from 'react';
import { 
  BookOpen, 
  Languages, 
  PenTool, 
  Type, 
  Activity, 
  Calculator, 
  UserCheck, 
  Speech 
} from 'lucide-react';

const courses = [
  { 
    title: 'Tamil Phonics', 
    icon: BookOpen, 
    desc: 'Master Tamil language basics through scientific phonics.', 
    color: 'var(--primary)' 
  },
  { 
    title: 'English Phonics', 
    icon: Languages, 
    desc: 'Advanced English reading and pronunciation skills.', 
    color: 'var(--secondary)' 
  },
  { 
    title: 'Tamil Handwriting', 
    icon: PenTool, 
    desc: 'Artistic and legible Tamil script practice techniques.', 
    color: 'var(--accent)' 
  },
  { 
    title: 'English Handwriting', 
    icon: Type, 
    desc: 'Cursive and print handwriting perfection for students.', 
    color: 'var(--primary)' 
  },
  { 
    title: 'Hindi Phonics', 
    icon: Activity, 
    desc: 'The complete guide to Hindi pronunciation and reading.', 
    color: 'var(--secondary)' 
  },
  { 
    title: 'Grammar & Spoken English', 
    icon: Speech, 
    desc: 'Build confidence in communication and grammar.', 
    color: 'var(--accent)' 
  },
  { 
    title: 'Abacus', 
    icon: Calculator, 
    desc: 'Boost mental math speed and brain development.', 
    color: 'var(--primary)' 
  },
  { 
    title: 'Teacher Training', 
    icon: UserCheck, 
    desc: 'Professional certification for aspiring educators.', 
    color: 'var(--secondary)' 
  },
];

const CourseCard = ({ course }) => (
  <div className="course-card reveal-on-scroll">
    <div className="card-glow"></div>
    <div className="card-content">
      <div className="course-icon" style={{ backgroundColor: `${course.color}15`, color: course.color }}>
        <course.icon size={28} />
      </div>
      <h3>{course.title}</h3>
      <p>{course.desc}</p>
      <div className="card-footer">
        <span className="learn-more">Learn More →</span>
      </div>
    </div>
  </div>
);

const CourseGrid = () => {
  return (
    <section id="courses" className="course-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="subtitle">Exploration</span>
          <h2>Our Specialized <span className="gradient-text">Learning Paths</span></h2>
          <p>Carefully crafted courses designed to unlock every student's potential.</p>
        </div>
        <div className="course-grid">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
