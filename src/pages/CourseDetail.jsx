import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Clock, 
  Target, 
  Award, 
  MessageCircle,
  Calendar,
  Users
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const courseDetails = {
  'tamil-phonics': {
    title: 'Tamil Phonics',
    description: 'Master Tamil language basics through our scientific phonics approach. Perfect for young learners starting their language journey.',
    duration: '3 Months (Basic) | 6 Months (Advanced)',
    target: 'Ages 4 - 12',
    benefits: ['Clear Pronunciation', 'Scientific Reading Habits', 'Cultural Appreciation', 'Storytelling Skills'],
    curriculum: ['Introduction to Tamil Vowels', 'Consonants Blending', 'Word Formation', 'Sentence Construction', 'Basic Grammar', 'Expressive Reading'],
    color: '#0d5c63'
  },
  'english-phonics': {
    title: 'English Phonics',
    description: 'Advanced English reading and pronunciation skills using global standards. We focus on phonemic awareness and fluency.',
    duration: '4 Months (Basic) | 8 Months (Comprehensive)',
    target: 'Ages 3.5 - 10',
    benefits: ['Confident Reading', 'Accent Correction', 'Vocabulary Expansion', 'Spelling Accuracy'],
    curriculum: ['Letter Sounds (44 sounds)', 'Blending & Segmenting', 'Digraphs & Diphthongs', 'Sight Words', 'Fluency Building', 'Comprehension'],
    color: '#c5a059'
  },
  'hindi-phonics': {
    title: 'Hindi Phonics',
    description: 'A complete guide to Hindi pronunciation and reading. Simplifying the complex Varnamala for easy understanding.',
    duration: '3-5 Months',
    target: 'Ages 5 - 15',
    benefits: ['Correct Pronunciation', 'Reading Fluency', 'Basic Conversation', 'Writing Mastery'],
    curriculum: ['Swars & Vyanjans', 'Matra Mastery', 'Listening/Speaking Skills', 'Simple Sentences', 'Creative Writing', 'Conversational Hindi'],
    color: '#ca8a04'
  },
  'abacus': {
    title: 'Abacus Mental Math',
    description: 'Boost mental math speed and overall brain development. Our program improves concentration, memory, and spatial visualization.',
    duration: '8 Levels (3 months per level)',
    target: 'Ages 6 - 13',
    benefits: ['Lightning Fast Calculation', 'Heightened Concentration', 'Photographic Memory', 'Mathematical Logic'],
    curriculum: ['Finger Theory', 'Basic Addition/Subtraction', 'Advanced Multi-digit Math', 'Multiplication Tables', 'Division & Visualization', 'Speed Calculation'],
    color: '#0d5c63'
  },
  'handwriting': {
    title: 'Handwriting Excellence',
    description: 'Artistic and legible handwriting practice in Tamil and English. We correct posture, grip, and penmanship technique.',
    duration: '1-2 Months (Per Language)',
    target: 'All Ages',
    benefits: ['Improved Legibility', 'Increased Writing Speed', 'Proper Posture/Grip', 'Artistic Presentation'],
    curriculum: ['Pre-writing Strokes', 'Lowercase/Uppercase Rules', 'Letter Continuity', 'Spacing & Slant', 'Cursive Special (Optional)', 'Speed Practice'],
    color: '#c5a059'
  },
  'spoken-english': {
    title: 'Grammar & Spoken English',
    description: 'Build total confidence in communication and grammar. From basics to advanced public speaking.',
    duration: '3 Months (Per Level)',
    target: 'School Students & Adults',
    benefits: ['Public Speaking Confidence', 'Grammatically Correct Fluency', 'Social Interaction Skills', 'Presentation Mastery'],
    curriculum: ['Essential Grammar Tenses', 'Vocabulary Builder', 'Social Situations', 'Debates & Group Discussion', 'Mannerisms & Soft Skills', 'Public Speaking Projects'],
    color: '#ca8a04'
  },
  'teacher-training': {
    title: 'Teacher Training',
    description: 'Professional certification for aspiring educators in Phonics, Abacus, and Handwriting.',
    duration: 'Certification Intensive',
    target: 'Aspiring Teachers & Parents',
    benefits: ['Professional Certification', 'Business Setup Guidance', 'Teaching Pedagogy Mastery', 'Marketing Assistance'],
    curriculum: ['Subject Expertise', 'Classroom Management', 'Child Psychology Basics', 'Lesson Planning', 'Digital Tools for Teaching', 'Assessment Systems'],
    color: '#0d5c63'
  }
};

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courseDetails[slug];
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Course not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="course-page">
      {/* Course Hero */}
      <section className="course-hero" style={{ background: `linear-gradient(135deg, ${course.color}08, ${course.color}15)` }}>
        <div className="container">
          <Link to="/" className="back-link reveal-on-scroll">
            <ArrowLeft size={18} />
            <span>Back to All Courses</span>
          </Link>
          
          <div className="course-header-content">
            <div className="course-badge" style={{ backgroundColor: `${course.color}15`, color: course.color }}>Certified Program</div>
            <h1 className="reveal-on-scroll">{course.title}</h1>
            <p className="course-desc reveal-on-scroll">{course.description}</p>
            
            <div className="course-meta reveal-on-scroll">
              <div className="meta-item">
                <Clock size={20} />
                <span>{course.duration}</span>
              </div>
              <div className="meta-item">
                <Target size={20} />
                <span>{course.target}</span>
              </div>
              <div className="meta-item">
                <Award size={20} />
                <span>Certified Course</span>
              </div>
            </div>

            <div className="course-actions reveal-on-scroll">
              <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="btn btn-primary">
                <MessageCircle size={20} />
                Inquire via WhatsApp
              </a>
              <a href="tel:8248800704" className="btn btn-outline">Call for Admission</a>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Benefits */}
      <section className="course-details-main">
        <div className="container">
          <div className="course-grid-detail">
            <div className="curriculum-side reveal-on-scroll">
              <h3>Training <span className="gradient-text">Curriculum</span></h3>
              <p>Our structured modules help students progress from fundamentals to advanced mastery.</p>
              
              <div className="curriculum-list">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="curriculum-item">
                    <span className="step-num">{i + 1}</span>
                    <span className="step-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="benefits-side reveal-on-scroll">
              <div className="benefits-card glass-card">
                <h3>Core <span className="gradient-text">Benefits</span></h3>
                <ul className="check-list">
                  {course.benefits.map((benefit, i) => (
                    <li key={i}>
                      <CheckCircle2 size={24} className="feature-icon" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="help-card glass-card">
                <h4>Have Questions?</h4>
                <p>Chat with our counselors to understand if this is the right path for your child.</p>
                <div className="help-items">
                    <div className="help-item">
                        <Users size={18} />
                        <span>Limited Batch Size</span>
                    </div>
                    <div className="help-item">
                        <Calendar size={18} />
                        <span>Flexible Batches Available</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
