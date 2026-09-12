import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ContextVoiceScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="flex-1 max-w-5xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col justify-center"
    >
      <div className="mb-12">
        <span className="text-[10px] font-mono uppercase tracking-widest text-tertiary font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">record_voice_over</span>
          Voice + Language
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2">Bypassing the Language Barrier</h2>
        <p className="text-lg text-on-surface-variant mt-4 max-w-2xl">
          Access shouldn't require perfect English. SANG ingests natural audio in local dialects and extracts the structured intent required for routing.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="px-3 py-1.5 rounded-full bg-tertiary/20 text-tertiary font-mono text-[10px] font-bold uppercase tracking-wider">10 Languages</span>
          <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-outline font-mono text-[10px] font-bold uppercase tracking-wider">18 Multilingual Integration Tests Passed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <span className="px-3 py-1.5 rounded bg-tertiary/20 text-tertiary text-xs font-bold">ગુજરાતી</span>
            <span className="px-3 py-1.5 rounded bg-surface-container border border-outline-variant/30 text-outline text-xs font-bold">हिन्दी</span>
            <span className="px-3 py-1.5 rounded bg-surface-container border border-outline-variant/30 text-outline text-xs font-bold">English</span>
            <span className="px-3 py-1.5 rounded bg-surface-container border border-outline-variant/30 text-outline text-xs font-bold">தமிழ்</span>
          </div>
          
          <div className="p-6 rounded-2xl bg-surface-container-high border border-outline-variant/30 flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden">
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute inset-0 bg-tertiary/10 pointer-events-none"
            />
            <div className="flex items-center gap-2 mb-6 h-12 relative z-10">
              {[1, 2, 3, 4, 5, 4, 3, 5, 2, 1].map((i, idx) => (
                <motion.div 
                  key={idx}
                  animate={{ height: [`${i * 4}px`, `${i * 12}px`, `${i * 4}px`] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.1, ease: "easeInOut" }}
                  className="w-2 bg-tertiary rounded-full"
                />
              ))}
            </div>
            
            <p className="text-xs font-mono text-tertiary uppercase font-bold relative z-10">
              Receiving Audio Stream...
            </p>
          </div>
        </div>

        <div className="bg-surface-container rounded-2xl border border-outline-variant/30 p-6 relative overflow-hidden flex flex-col justify-center min-h-[350px]">
          <div className="space-y-4">
            <div className="p-3 rounded-lg bg-surface-container-highest border border-outline-variant/20">
              <span className="text-[10px] text-outline uppercase font-bold block mb-1">Voice Input (Gujarati)</span>
              <span className="text-sm font-medium text-on-surface">"મારે કપાસના પાકમાં જીવાત નિયંત્રણ માટે નજીકના કૃષિ કેન્દ્ર સાથે વાત કરવી છે."</span>
            </div>
            
            <div className="flex justify-center text-outline">
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </div>
            
            <div className="p-3 rounded-lg bg-surface-container-highest border border-outline-variant/20">
              <span className="text-[10px] text-outline uppercase font-bold block mb-1">Language Understanding</span>
              <span className="text-sm font-medium text-on-surface">"I want to connect with the nearest agricultural center for pest management in my cotton crop."</span>
            </div>
            
            <div className="flex justify-center text-outline">
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 p-2 rounded bg-tertiary/10 border border-tertiary/30 text-center">
                <span className="block text-[9px] uppercase text-tertiary font-bold">Intent</span>
                <span className="text-xs font-bold text-on-surface">Pest Mgmt</span>
              </div>
              <div className="flex-1 p-2 rounded bg-tertiary/10 border border-tertiary/30 text-center">
                <span className="block text-[9px] uppercase text-tertiary font-bold">Context</span>
                <span className="text-xs font-bold text-on-surface">Cotton</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-tertiary border border-tertiary/50 text-center mt-2">
              <span className="text-[10px] text-on-primary uppercase font-bold block mb-1">Routing Destination</span>
              <span className="text-sm font-bold text-on-primary">Nearest KVK Helpdesk</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
