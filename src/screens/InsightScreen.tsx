import React from 'react';
import { motion } from 'motion/react';

export function InsightScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="flex-1 max-w-6xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col justify-center"
    >
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold">The Insight</span>
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2 leading-tight">
          People shouldn't have to know where the answer is before they can find it.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 p-8 rounded-2xl bg-surface-container border border-error/30 relative"
        >
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-error/20 text-error font-bold text-[10px] uppercase tracking-wider rounded-bl-lg rounded-tr-xl">
            Traditional Paradigm
          </div>
          
          <h3 className="text-xl font-bold text-on-surface mb-6 mt-4">Keyword Matching</h3>
          <p className="text-sm text-on-surface-variant mb-6">
            Current systems require the user to input precise bureaucratic terminology. If they don't know the name of the scheme, they don't get the help.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-surface-container-high border border-outline-variant/30">
              <span className="text-sm font-medium text-on-surface">"How to apply for PMFBY?"</span>
              <span className="material-symbols-outlined text-success">check_circle</span>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-between p-4 rounded-lg bg-error/10 border border-error/30"
            >
              <span className="text-sm font-medium text-error">"My crop is failing."</span>
              <span className="material-symbols-outlined text-error">cancel</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hidden md:flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-3xl text-outline-variant">arrow_forward</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex-1 p-8 rounded-2xl bg-surface-container border border-primary/40 relative"
        >
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary text-on-primary font-bold text-[10px] uppercase tracking-wider rounded-bl-lg rounded-tr-xl">
            The SANG Architecture
          </div>
          
          <h3 className="text-xl font-bold text-on-surface mb-6 mt-4">Semantic Routing</h3>
          <p className="text-sm text-on-surface-variant mb-6">
            SANG translates natural language intent into structured queries, mapping the person's explicit and implicit needs to the right resource.
          </p>

          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="p-4 rounded-lg bg-surface-container-high border border-primary/50 shadow-[0_0_15px_rgba(79,219,200,0.15)] flex flex-col gap-3 relative overflow-hidden"
            >
              {/* Subtle pulsing background for SANG activation */}
              <motion.div 
                animate={{ opacity: [0.1, 0.3, 0.1] }} 
                transition={{ duration: 2, repeat: Infinity }} 
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 pointer-events-none"
              />
              <div className="flex items-center justify-between relative z-10">
                <span className="text-sm font-medium text-on-surface">"My crop is failing."</span>
                <span className="material-symbols-outlined text-primary">arrow_downward</span>
              </div>
              <div className="flex gap-2 relative z-10">
                <span className="px-2 py-1 bg-surface border border-primary/30 rounded text-[10px] uppercase font-bold text-primary">Agri Intent</span>
                <span className="px-2 py-1 bg-surface border border-secondary/30 rounded text-[10px] uppercase font-bold text-secondary">Location</span>
                <span className="px-2 py-1 bg-surface border border-tertiary/30 rounded text-[10px] uppercase font-bold text-tertiary">Resource Route</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="mt-8 text-center max-w-4xl mx-auto border-t border-outline-variant/30 pt-16"
      >
        <div className="flex flex-col items-center justify-center gap-6 mb-12 relative">
          
          <div className="flex flex-col items-center gap-3">
            <div className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/50 text-sm font-mono uppercase tracking-widest text-on-surface font-bold">
              PEOPLE
            </div>
            
            <div className="flex flex-col items-center">
              <span className="w-px h-6 bg-outline-variant/50"></span>
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 text-base font-mono uppercase tracking-widest text-primary font-bold shadow-[0_0_15px_rgba(79,219,200,0.2)]">
                <motion.span 
                  animate={{ opacity: [0.5, 1, 0.5] }} 
                  transition={{ duration: 2, repeat: Infinity }} 
                  className="w-2 h-2 rounded-full bg-primary"
                />
                SANG
              </div>
            </div>

            <div className="flex items-end justify-center h-8 relative w-64">
              <span className="absolute left-1/2 bottom-0 w-px h-6 bg-outline-variant/50 origin-bottom -rotate-[45deg] -translate-x-1/2"></span>
              <span className="absolute left-1/2 bottom-0 w-px h-6 bg-outline-variant/50"></span>
              <span className="absolute left-1/2 bottom-0 w-px h-6 bg-outline-variant/50 origin-bottom rotate-[45deg] -translate-x-1/2"></span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/40 text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">
                PROBLEMS
              </div>
              <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/40 text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">
                RESOURCES
              </div>
              <div className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/40 text-xs font-mono uppercase tracking-widest text-on-surface-variant font-bold">
                OPPORTUNITIES
              </div>
            </div>

            <span className="w-px h-6 bg-outline-variant/50 mt-2"></span>
            
            <div className="px-8 py-3 rounded-xl bg-surface-container-highest border border-on-surface/20 text-lg font-mono uppercase tracking-[0.2em] text-on-surface font-bold shadow-xl">
              ACTION
            </div>
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl font-bold text-on-surface leading-tight max-w-3xl mx-auto">
          Make relationships between people, problems, resources and opportunities visible — <br/>
          <span className="text-primary mt-4 block">and turn those relationships into action.</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
