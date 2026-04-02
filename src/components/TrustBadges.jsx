import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    { icon: ShieldCheck, label: "ISO 9001:2015 Certified", color: "#0d5c63" },
    { icon: Award, label: "MSME Registered Institute", color: "#c5a059" },
    { icon: GraduationCap, label: "Certified Expert Trainers", color: "#0d5c63" },
    { icon: CheckCircle2, label: "100% Result Oriented", color: "#c5a059" }
  ];

  return (
    <div className="bg-white/50 border-y border-gray-100 py-10 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default"
            >
              <badge.icon size={24} style={{ color: badge.color }} strokeWidth={2.5} />
              <span className="font-semibold text-gray-500 uppercase tracking-widest text-[0.7rem] md:text-[0.8rem]">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
