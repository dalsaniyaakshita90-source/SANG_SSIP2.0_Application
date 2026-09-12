import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../AppContext';

export function QueryScreen() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 max-w-5xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface">What are you looking for?</h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full bg-surface-container rounded-2xl border border-outline-variant/30 p-6 shadow-2xl relative overflow-hidden"
      >
        <motion.div variants={itemVariants} className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline text-2xl">search</span>
          </div>
          <div className="w-full bg-surface-container-highest border border-outline-variant/50 rounded-xl py-6 pl-14 pr-6 text-on-surface text-lg md:text-xl font-medium">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              "I know textile design and I'm looking for a sustainability opportunity in Surat."
            </motion.span>
          </div>
        </motion.div>
        
        <div className="min-h-[400px]">
          {/* Pipeline Visualization */}
          <motion.div variants={itemVariants} className="flex items-center justify-between mb-12 relative px-4">
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-outline-variant/20 -translate-y-1/2 z-0"></div>
            
            {['understanding', 'matching', 'routing', 'connecting'].map((step, idx) => {
              return (
                <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                  <motion.div 
                    initial={{ backgroundColor: '#272a30', borderColor: '#3c4947', scale: 0.8 }}
                    animate={{ backgroundColor: '#4fdbc8', borderColor: '#4fdbc8', scale: 1 }}
                    transition={{ delay: 2 + (idx * 0.5), duration: 0.4 }}
                    className="w-4 h-4 rounded-full border-2"
                  />
                  <span className={`text-[10px] font-mono uppercase font-bold text-on-surface`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block mb-4">IDENTIFIED</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4, duration: 0.5 }}
                  className="p-4 rounded-lg bg-surface-container-highest border border-outline-variant/20"
                >
                  <span className="text-[10px] text-outline uppercase font-bold block mb-1">Skill</span>
                  <span className="text-on-surface font-semibold">Textile Design</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.2, duration: 0.5 }}
                  className="p-4 rounded-lg bg-surface-container-highest border border-outline-variant/20"
                >
                  <span className="text-[10px] text-outline uppercase font-bold block mb-1">Intent</span>
                  <span className="text-on-surface font-semibold">Opportunity</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.4, duration: 0.5 }}
                  className="p-4 rounded-lg bg-surface-container-highest border border-outline-variant/20"
                >
                  <span className="text-[10px] text-outline uppercase font-bold block mb-1">Context</span>
                  <span className="text-on-surface font-semibold">Sustainability</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4.6, duration: 0.5 }}
                  className="p-4 rounded-lg bg-surface-container-highest border border-outline-variant/20"
                >
                  <span className="text-[10px] text-outline uppercase font-bold block mb-1">Location</span>
                  <span className="text-on-surface font-semibold">Surat, Gujarat</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.5, duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">PROTOTYPE RESULTS / SIMULATED OUTPUT</span>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">Opportunity</span>
                      <span className="text-outline font-mono text-[10px]">HIGH RELEVANCE · PROTOTYPE</span>
                    </div>
                    <h4 className="text-lg font-bold text-on-surface">Circular Textile Cooperative Incubator</h4>
                    <p className="text-sm text-on-surface-variant mt-1">Simulated entity: Sponsored workbench access and zero-waste material upcycling grants.</p>
                  </div>
                  <button className="shrink-0 px-4 py-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-xs font-bold text-on-surface hover:text-primary hover:border-primary/50 transition-colors">
                    Route to Desk
                  </button>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 6, duration: 0.8 }}
                  className="p-5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-wider">Resource</span>
                      <span className="text-outline font-mono text-[10px]">RELEVANT MATCH · PROTOTYPE</span>
                    </div>
                    <h4 className="text-lg font-bold text-on-surface">Common Effluent & Yarn Testing Lab</h4>
                    <p className="text-sm text-on-surface-variant mt-1">Simulated entity: Subsidized physical testing hub for organic fibers.</p>
                  </div>
                  <button className="shrink-0 px-4 py-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-xs font-bold text-on-surface hover:text-primary hover:border-primary/50 transition-colors">
                    Access Pass
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
