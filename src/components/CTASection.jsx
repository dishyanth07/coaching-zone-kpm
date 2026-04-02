import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary via-[#0f464a] to-[#1a3a3d] rounded-[40px] p-12 md:p-20 shadow-[0_30px_100px_-20px_rgba(13,92,99,0.3)] relative overflow-hidden"
        >
          {/* Decorative Rings */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] border-[40px] border-white/5 rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[20px] border-secondary/10 rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Start Your Child’s Learning <br className="hidden md:block"/> Journey Today
            </h2>
            <p className="text-xl md:text-2xl text-blue-100/80 font-medium mb-12">
              Join 500+ successful students and experience the difference of structured, customized coaching.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <a href="https://wa.me/message/MPG3QK4G2ZQ2M1" className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-10 py-5 rounded-full inline-flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)]">
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
              <a href="tel:8248800704" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary font-bold text-lg px-10 py-5 rounded-full inline-flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]">
                <PhoneCall size={24} />
                Call 8248800704
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 font-medium">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-secondary" />
                <span>Mon - Sat: 9:30 AM to 8:30 PM</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30"></div>
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span>Admissions Now Open</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
