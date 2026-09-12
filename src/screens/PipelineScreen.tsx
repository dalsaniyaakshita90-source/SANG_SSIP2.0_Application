import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../AppContext';

type Stage = 'understand' | 'match' | 'route' | 'connect';

export function PipelineScreen() {
  const stages: { id: string; title: string; items: string[]; icon: string; color: string }[] = [
    {
      id: 'understand',
      title: 'Understand',
      items: ['What does the person need?', 'Intent', 'Skills', 'Context'],
      icon: 'psychology',
      color: 'primary'
    },
    {
      id: 'match',
      title: 'Match',
      items: ['What is relevant?', 'People', 'Resources', 'Opportunities'],
      icon: 'join_inner',
      color: 'secondary'
    },
    {
      id: 'connect',
      title: 'Connect',
      items: ['Who or what can help?', 'Pathways', 'Institutions'],
      icon: 'handshake',
      color: 'tertiary'
    },
    {
      id: 'route',
      title: 'Route',
      items: ['What should happen next?', 'Location', 'Urgency', 'Contextual relevance'],
      icon: 'alt_route',
      color: 'primary-fixed'
    },
    {
      id: 'act',
      title: 'Act',
      items: ['Turn the connection into action.', 'Next Steps', 'Destination'],
      icon: 'bolt',
      color: 'secondary-fixed'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 max-w-7xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col"
    >
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">How SANG Thinks</span>
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2 leading-tight">
          People shouldn't have to know where the answer is before they can find it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className={`p-5 rounded-2xl bg-surface-container border border-outline-variant/30 flex flex-col relative overflow-hidden`}
          >
            {/* Animated Signal Moving Through Pipeline */}
            <motion.div
               animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
               transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}
               className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-${stage.color} shadow-[0_0_10px_var(--color-${stage.color})] z-20`}
            />

            <div className={`absolute top-0 right-0 w-32 h-32 bg-${stage.color}/10 rounded-full blur-[40px] pointer-events-none`}></div>
            
            <div className="mb-6 flex flex-col gap-4 relative z-10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${stage.color}/20 text-${stage.color}`}>
                <span className="material-symbols-outlined text-2xl">{stage.icon}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-on-surface uppercase tracking-wide">
                {stage.title}
              </h3>
            </div>
            
            <div className="flex flex-col gap-3 relative z-10 mt-auto">
              {stage.items.map((item, i) => (
                <div 
                  key={i}
                  className={`flex items-start gap-2 p-2 ${i === 0 ? 'bg-surface-container-highest border border-outline-variant/30 font-bold mb-2' : ''} rounded-lg`}
                >
                  {i !== 0 && <span className={`w-1.5 h-1.5 rounded-full bg-${stage.color} mt-1.5 shrink-0`}></span>}
                  <span className={`text-xs ${i === 0 ? 'text-on-surface' : 'text-on-surface-variant'} leading-relaxed`}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
