import React from 'react';
import { motion } from 'framer-motion';

const DashboardMockup = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, rotateX: 20, y: 100 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      transition={{ duration: 1, type: 'spring', damping: 20 }}
      viewport={{ once: true, margin: '-100px' }}
      style={{ perspective: '1200px' }}
      className="w-full max-w-5xl mx-auto rounded-2xl bg-[#0f171c] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col mt-20"
    >
      {/* Window Controls */}
      <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>

      <div className="flex p-6 gap-6 h-[500px]">
        {/* Sidebar */}
        <div className="w-48 hidden sm:flex flex-col gap-4">
          <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} transition={{ delay: 0.5 }} className="h-4 bg-white/10 rounded"></motion.div>
          <div className="space-y-3 mt-8">
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + (i * 0.1) }} className="h-8 bg-white/5 rounded-lg"></motion.div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Header Stats */}
          <div className="grid grid-cols-3 gap-4 h-24">
            {[...Array(3)].map((_, i) => (
              <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 1 + (i * 0.15) }} className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-end">
                <motion.div initial={{ width: 0 }} whileInView={{ width: i===0?'60%':i===1?'40%':'80%' }} transition={{ delay: 1.5, duration: 1 }} className="h-2 bg-secondary/50 rounded mt-2"></motion.div>
                <div className="text-2xl font-bold text-white mt-2">
                  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }}>{i===0?'852':i===1?'₹ 12K':'99%'}</motion.span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Graph Area */}
          <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-6 flex flex-col">
            <div className="flex justify-between mb-8">
              <div className="h-4 w-32 bg-white/10 rounded"></div>
              <div className="h-4 w-16 bg-white/10 rounded"></div>
            </div>
            
            <div className="flex-1 flex items-end gap-4 justify-between pt-8">
              {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
                <div key={i} className="w-full bg-white/5 rounded-t-sm relative flex justify-end flex-col h-full">
                  <motion.div 
                    initial={{ height: 0 }} 
                    whileInView={{ height: `${height}%` }} 
                    transition={{ delay: 1.5 + (i * 0.1), type: 'spring', damping: 15 }}
                    className="w-full bg-gradient-to-t from-primary/80 to-secondary/80 rounded-t-sm"
                  ></motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SystemPreview = () => {
  return (
    <section id="system" className="py-40 bg-[#0a1314] overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter">
            An OS for <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Education.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Attendance, parent tracking, and curriculum mapping inside a unified interface.
          </p>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>
  );
};

export default SystemPreview;
