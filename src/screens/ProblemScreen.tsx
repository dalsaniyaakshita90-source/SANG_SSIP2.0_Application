import React from 'react';
import { motion } from 'motion/react';

export function ProblemScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 max-w-7xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col justify-center"
    >
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">The Problem</span>
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2 leading-tight">
          Resources exist. Connections don't always.
        </h2>
      </div>

      <div className="flex justify-center mb-16">
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
          {['People', 'Skills', 'Knowledge', 'Resources', 'Services', 'Opportunities'].map((item, i) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/40 text-on-surface font-mono text-sm tracking-wider uppercase"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
        {/* Animated Faint Connecting Lines (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-transparent z-0">
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '40%', opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute left-0 h-full bg-gradient-to-r from-outline-variant/10 to-transparent"
          />
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '40%', opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute right-0 h-full bg-gradient-to-l from-outline-variant/10 to-transparent"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-8 rounded-2xl bg-surface-container border border-outline-variant/30 flex flex-col items-center text-center relative z-10"
        >
          <div className="w-16 h-16 rounded-xl bg-error/10 border border-error/20 flex items-center justify-center mb-6 text-error">
            <span className="material-symbols-outlined text-3xl">person_off</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3">Unrouted Skill</h3>
          <p className="text-sm text-on-surface-variant">A talented individual with something valuable to offer, but disconnected from the opportunities that need them.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-8 rounded-2xl bg-surface-container border border-outline-variant/30 flex flex-col items-center text-center relative z-10"
        >
          <div className="w-16 h-16 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6 text-secondary">
            <span className="material-symbols-outlined text-3xl">inventory_2</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3">Underutilized Asset</h3>
          <p className="text-sm text-on-surface-variant">Facilities, grants, and institutional support systems that sit idle because those who need them cannot find them.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-8 rounded-2xl bg-surface-container border border-outline-variant/30 flex flex-col items-center text-center relative z-10"
        >
          <div className="w-16 h-16 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-6 text-tertiary">
            <span className="material-symbols-outlined text-3xl">help_center</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3">Invisible Answer</h3>
          <p className="text-sm text-on-surface-variant">Crucial civic or operational information that is technically public, but practically inaccessible to the average citizen.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-xl md:text-2xl font-bold text-on-surface leading-tight">
          The problem isn't always availability.<br/>
          <span className="text-primary mt-2 block">It’s discoverability and connection.</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
