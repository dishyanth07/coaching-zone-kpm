import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Srinivasan R.", role: "Parent", text: "Truly a professional system! My daughter's handwriting and grammar have improved significantly in just 3 months. The attendance tracking gives us great peace of mind.", rating: 5 },
    { name: "Priya K.", role: "Student (Spoken English)", text: "The trainers here are experts. I used to be afraid of public speaking, but now I can confidently present in English. Highly recommend for competitive exams too!", rating: 5 },
    { name: "Karthik M.", role: "Parent (Abacus)", text: "The specialized focus on every child is what makes Coaching Zone stand out. Best training institute in Kanchipuram for foundation learning.", rating: 5 }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Parent & Student Reviews</span>
          <h2 className="text-4xl md:text-5xl mt-4 font-extrabold text-primary">Trusted by Families in <span className="gradient-text">Kanchipuram</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col relative"
            >
              <div className="absolute top-8 right-10 text-gray-100">
                <Quote size={48} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#c5a059" color="#c5a059" />
                ))}
              </div>
              <p className="text-lg text-text-muted leading-relaxed mb-8 flex-grow">"{review.text}"</p>
              <div>
                <h5 className="font-bold text-xl text-primary">{review.name}</h5>
                <span className="text-secondary font-semibold text-sm">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
