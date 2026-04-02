import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Languages, 
  Binary, 
  PenTool, 
  MessageSquare, 
  GraduationCap, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

const courses = [
  {
    id: 'tamil-phonics',
    title: 'Tamil Phonics',
    count: 'Level 1-3',
    icon: Languages,
    desc: 'Scientific approach to Tamil reading and pronunciation.'
  },
  {
    id: 'english-phonics',
    title: 'English Phonics',
    count: 'Standard/Advanced',
    icon: BookOpen,
    desc: 'Master 44 sounds and blending for fluent English reading.'
  },
  {
    id: 'hindi-phonics',
    title: 'Hindi Phonics',
    count: 'Basics+',
    icon: MessageSquare,
    desc: 'Simplified Hindi learning for non-native speakers.'
  },
  {
    id: 'abacus',
    title: 'Abacus Math',
    count: '8 Levels',
    icon: Binary,
    desc: 'Boost mental calculation speed and brain development.'
  },
  {
    id: 'handwriting',
    title: 'Handwriting',
    count: 'Tamil/English',
    icon: PenTool,
    desc: 'Correcting posture, grip, and penmanship technique.'
  },
  {
    id: 'spoken-english',
    title: 'Spoken English',
    count: 'A1-C2',
    icon: MessageSquare,
    desc: 'Total confidence in communication and grammar.'
  },
  {
    id: 'teacher-training',
    title: 'Teacher Training',
    count: 'Certified',
    icon: GraduationCap,
    desc: 'Become a certified Phonics, Abacus or Handwriting coach.'
  }
];

const CourseCard = ({ id, icon: Icon, title, count, desc }) => (
  <Link to={`/course/${id}`} className="course-card glass-card reveal-on-scroll">
    <div className="card-accent" />
    <div className="card-header">
      <div className="icon-box">
        <Icon size={24} />
      </div>
      <span className="course-count">{count}</span>
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <div className="card-footer">
      <span className="learn-more">Learn More</span>
      <ChevronRight size={16} />
    </div>
  </Link>
);

const CourseGrid = () => {
  return (
    <section id="courses" className="course-grid-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="badge">Our Programs</span>
          <h2>Specialized Learning <span className="gradient-text">Paths</span></h2>
          <p>From primary literacy to advanced mental math, we offer structured curriculum for every student.</p>
        </div>
        
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
