import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, GraduationCap, Target } from 'lucide-react';

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const TrustStats = () => {
  const stats = [
    { icon: Users, end: 500, suffix: "+", label: "Students Empowered", color: "#0d5c63", bg: "bg-[#0d5c63]/10" },
    { icon: GraduationCap, end: 50, suffix: "+", label: "Specialized Courses", color: "#c5a059", bg: "bg-[#c5a059]/10" },
    { icon: Target, end: 100, suffix: "%", label: "Result Focused", color: "#0d5c63", bg: "bg-[#0d5c63]/10" }
  ];

  return (
    <section className="py-20 bg-white relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(13,92,99,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(13,92,99,0.15)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg}`}>
                <stat.icon size={36} color={stat.color} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-text-main mb-1 tracking-tight">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </h3>
                <p className="text-text-muted font-medium text-lg leading-tight">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
