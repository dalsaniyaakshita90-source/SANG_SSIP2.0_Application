import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ContextAgriScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="flex-1 max-w-5xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col justify-center items-center"
    >
      <div className="w-full">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">agriculture</span>
            Agriculture Intelligence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2">Precision Routing for Farmers</h2>
          <p className="text-lg text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Prototype routing based on location and agricultural context.
          </p>
        </div>

        <div className="w-full bg-surface-container rounded-2xl border border-outline-variant/30 p-8 shadow-xl">
          <div className="flex flex-col gap-8">
            <div className="p-4 rounded-xl bg-surface-container-highest border border-outline-variant/50 relative">
              <span className="absolute -top-3 left-4 px-2 py-0.5 bg-surface-container-highest text-outline text-[10px] uppercase font-bold tracking-widest">Input Query</span>
              <p className="text-lg font-medium text-on-surface">"Cotton leaf curl in Junagadh"</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 justify-center relative">
              {/* Subtle visual pathway line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-primary/20 -translate-y-1/2 z-0 pointer-events-none"></div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-4 rounded-lg bg-surface-container-high border border-primary/20 text-center flex-1 w-full relative z-10"
              >
                <span className="material-symbols-outlined text-primary mb-2">search</span>
                <span className="block text-[10px] uppercase text-outline font-bold">Query</span>
                <span className="block text-sm font-semibold text-on-surface mt-1">Cotton Disease</span>
              </motion.div>
              <span className="material-symbols-outlined text-outline relative z-10 hidden md:block">chevron_right</span>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-4 rounded-lg bg-surface-container-high border border-primary/20 text-center flex-1 w-full relative z-10"
              >
                <span className="material-symbols-outlined text-primary mb-2">landscape</span>
                <span className="block text-[10px] uppercase text-outline font-bold">Agro Context</span>
                <span className="block text-sm font-semibold text-on-surface mt-1">Saurashtra Soil #04</span>
              </motion.div>
              <span className="material-symbols-outlined text-outline relative z-10 hidden md:block">chevron_right</span>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-4 rounded-lg bg-surface-container-high border border-primary/20 text-center flex-1 w-full relative z-10"
              >
                <span className="material-symbols-outlined text-primary mb-2">my_location</span>
                <span className="block text-[10px] uppercase text-outline font-bold">Location</span>
                <span className="block text-sm font-semibold text-on-surface mt-1">Junagadh</span>
              </motion.div>
            </div>

            <div className="flex justify-center">
              <span className="material-symbols-outlined text-primary">arrow_downward</span>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="p-6 rounded-xl bg-primary/10 border border-primary/30 flex flex-col items-center text-center relative overflow-hidden"
            >
              <motion.div 
                animate={{ opacity: [0, 0.2, 0] }} 
                transition={{ duration: 2, repeat: Infinity }} 
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 pointer-events-none"
              />
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Prototype Routing Destination</span>
              <h3 className="text-xl font-bold text-on-surface">KVK Junagadh</h3>
              <p className="text-sm text-on-surface-variant mt-2 max-w-lg">Simulated routing mapping the query to the correct agricultural district institution.</p>
            </motion.div>
          </div>

          <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-[10px] uppercase font-bold">
            <span className="text-primary flex items-center gap-1.5"><span className="material-symbols-outlined text-xs">verified</span> Prototype Logic</span>
            <span className="text-outline">Future Integration: Live Weather & Live KVK Databases</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
