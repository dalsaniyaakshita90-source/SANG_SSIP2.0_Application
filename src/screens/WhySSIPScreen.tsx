import React from 'react';
import { motion } from 'motion/react';

export function WhySSIPScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="flex-1 max-w-4xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col justify-center items-center text-center"
    >
      <div className="mb-12">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Why SSIP?</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-on-surface uppercase tracking-tight mt-2">We have built the intelligence.</h2>
        <h3 className="text-xl md:text-3xl font-body font-medium text-primary mt-4">Now we need to build the evidence.</h3>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 w-full p-8 rounded-2xl bg-surface-container-high border border-outline-variant/30 text-lg md:text-xl text-on-surface font-medium leading-relaxed relative overflow-hidden"
      >
        <motion.div 
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"
        />
        <p className="mb-4 relative z-10">We are not asking SSIP to fund an untested idea.</p>
        <p className="text-primary font-bold relative z-10">We are asking for support to move a working intelligence foundation from controlled validation toward real-world validation and pilot deployment.</p>
      </motion.div>

      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="px-6 py-3 rounded-full bg-success/10 border border-success/30 text-success font-bold tracking-wider uppercase mb-3 flex items-center gap-3 relative overflow-hidden group"
        >
          <motion.div animate={{ opacity: [0, 0.2, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-success" />
          <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse relative z-10"></span>
          <span className="relative z-10">Proof of Intelligence</span>
        </motion.div>
        
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="material-symbols-outlined text-outline-variant mb-3">arrow_downward</motion.span>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="px-6 py-3 rounded-full bg-warning/10 border border-warning/30 text-[#6B5A00] dark:text-warning font-bold tracking-wider uppercase mb-3 flex items-center gap-3 relative overflow-hidden group"
        >
          <motion.div animate={{ opacity: [0, 0.2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute inset-0 bg-warning" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning relative z-10"></span>
          <span className="relative z-10">Complete the Bridge</span>
        </motion.div>
        
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="material-symbols-outlined text-outline-variant mb-3">arrow_downward</motion.span>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="px-6 py-3 rounded-full bg-error/10 border border-error/30 text-error font-bold tracking-wider uppercase mb-3 flex items-center gap-3 relative overflow-hidden group"
        >
          <motion.div animate={{ opacity: [0, 0.2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute inset-0 bg-error" />
          <span className="w-2.5 h-2.5 rounded-full bg-error relative z-10"></span>
          <span className="relative z-10">Build the Real SANG Network</span>
        </motion.div>
        
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="material-symbols-outlined text-outline-variant mb-3">arrow_downward</motion.span>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
          className="px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold tracking-wider uppercase mb-3 flex items-center gap-3 relative overflow-hidden group"
        >
          <motion.div animate={{ opacity: [0, 0.2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} className="absolute inset-0 bg-primary" />
          <span className="material-symbols-outlined text-sm relative z-10">flight_takeoff</span>
          <span className="relative z-10">Real-World Pilot</span>
        </motion.div>
        
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="material-symbols-outlined text-outline-variant mb-3">arrow_downward</motion.span>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          className="px-6 py-3 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-bold tracking-wider uppercase flex items-center gap-3 relative overflow-hidden group"
        >
          <motion.div animate={{ opacity: [0, 0.2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 2 }} className="absolute inset-0 bg-secondary" />
          <span className="material-symbols-outlined text-sm relative z-10">query_stats</span>
          <span className="relative z-10">Measured Impact</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
