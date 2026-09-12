import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Context333Screen() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="flex-1 max-w-7xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col justify-center"
    >
      <div className="mb-12 text-center">
        <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">dialpad</span>
          The 333 Tiered Pathway System
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2 mb-4">Civic Assistance (333)</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-6">
          Explore the three-tiered access layer designed for information, operational assistance, and urgent help.
        </p>
        
        {/* Highly Visible Disclaimer */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-error/10 border-2 border-error/50 text-error shadow-[0_0_20px_rgba(255,180,171,0.2)] max-w-3xl">
          <span className="material-symbols-outlined text-xl">warning</span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
            Prototype exploration of a 333-style access layer; not currently telecom connected.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 h-full">
        <div className="p-8 rounded-2xl bg-surface-container border border-primary/30 flex flex-col items-center text-center relative overflow-hidden group">
          <span className="px-3 py-1 rounded bg-primary/20 text-primary font-mono text-xs font-bold mb-4 inline-block">INFO</span>
          <p className="text-lg font-bold text-on-surface mb-6 relative z-10">"Where can I find the information I need?"</p>
          <div className="flex-1 bg-primary/5 rounded-xl p-6 w-full border border-primary/20 flex flex-col justify-center relative z-10">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Direct Directory Resolution</h3>
            <p className="text-sm text-on-surface-variant">Outputs verified criteria checks, portal URLs, and official office timings without conversational overhead.</p>
          </div>
        </div>
        
        <div className="p-8 rounded-2xl bg-surface-container border border-secondary/30 flex flex-col items-center text-center relative overflow-hidden group">
          <span className="px-3 py-1 rounded bg-secondary/20 text-secondary font-mono text-xs font-bold mb-4 inline-block">ASSISTANCE</span>
          <p className="text-lg font-bold text-on-surface mb-6 relative z-10">"I have a problem. Help me find the right pathway."</p>
          <div className="flex-1 bg-secondary/5 rounded-xl p-6 w-full border border-secondary/20 flex flex-col justify-center relative z-10">
            <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Multistep Navigation</h3>
            <p className="text-sm text-on-surface-variant">Facilitates guided navigation across agencies, linking the user to verified advisors and forms.</p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-surface-container border border-error/50 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_15px_rgba(255,180,171,0.1)] group">
          {/* Subtle Emergency Pulse Background */}
          <motion.div 
            animate={{ opacity: [0.05, 0.15, 0.05] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute inset-0 bg-error pointer-events-none"
          />
          <span className="px-3 py-1 rounded bg-error/20 text-error font-mono text-xs font-bold mb-4 inline-block relative z-10">EMERGENCY</span>
          <p className="text-lg font-bold text-on-surface mb-6 relative z-10">"I need urgent help."</p>
          <div className="flex-1 bg-error/5 rounded-xl p-6 w-full border border-error/20 flex flex-col justify-center relative z-10">
            <h3 className="text-sm font-bold text-error uppercase tracking-wider mb-2">Emergency Escalation</h3>
            <p className="text-sm text-on-surface-variant">Bypasses standard matching algorithms to instantly route the user to emergency channels and human operators.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
