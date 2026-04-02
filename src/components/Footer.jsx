import React from 'react';
import logo from '../assets/logo.png';
import { Send, Globe, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <img src={logo} alt="Coaching Zone" className="w-12 h-12 object-contain" />
              <span className="font-outfit font-extrabold text-xl text-text-main">
                Coaching Zone <br className="hidden sm:block lg:hidden"/> <span className="text-primary">Kanchipuram</span>
              </span>
            </div>
            <p className="text-text-muted leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0">
              ISO & MSME Certified Excellence. Redefining education through a smart, systematic approach to student learning in Kanchipuram.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a href="https://www.facebook.com/coaching_zone_kpm" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Send size={20} />
              </a>
              <a href="https://youtube.com/@coachingzone-u1x?si=XE3ULO6Glut-kfF7" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="https://www.instagram.com/coaching_zone_kpm/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:coachingzonekpm@gmail.com" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
            <div>
              <h5 className="font-bold text-lg text-text-main mb-6">Courses</h5>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Tamil & English Phonics</a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Abacus</a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Handwriting</a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Grammar & Spoken English</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-lg text-text-main mb-6">The Platform</h5>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Student Tracking</a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Parent Portal</a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Fee Management</a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Attendance Records</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-lg text-text-main mb-6">Contact</h5>
              <div className="flex flex-col items-center sm:items-start gap-4 text-text-muted">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                  <span className="leading-relaxed font-medium">
                    201, Gandhi Road,<br/>
                    Opp to Theradi,<br/>
                    Kanchipuram - 631501
                  </span>
                </div>
                <div className="flex gap-3 mt-2">
                  <Phone size={20} className="text-secondary shrink-0" />
                  <a href="tel:8248800704" className="hover:text-primary transition-colors font-medium">8248800704</a>
                </div>
                <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" target="_blank" rel="noreferrer" className="inline-block mt-4 px-6 py-2 bg-green-50 text-green-600 font-bold rounded-full hover:bg-green-100 transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-text-muted font-medium text-sm">
            © 2026 Coaching Zone Kanchipuram. All rights reserved. Designed with ❤️ for future leaders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
