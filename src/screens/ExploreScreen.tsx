import React from 'react';
import { motion } from 'motion/react';
import { useApp, ScreenID } from '../AppContext';

export function ExploreScreen() {
  const paths = [
    {
      id: 'query',
      title: 'Find a Connection',
      desc: 'Tell SANG what you need or what you can offer.',
      icon: 'search',
      color: 'primary'
    },
    {
      id: 'pipeline',
      title: 'Understand the System',
      desc: 'See how SANG turns natural language into connections.',
      icon: 'psychology',
      color: 'secondary'
    },
    {
      id: 'prototype',
      title: 'See the Working Prototype',
      desc: 'Interact with the SANG Core.',
      icon: 'terminal',
      color: 'tertiary'
    },
    {
      id: 'context-agri',
      title: 'Explore Human Access',
      desc: 'See multilingual, voice and 333-style pathways.',
      icon: 'record_voice_over',
      color: 'primary-fixed'
    },
    {
      id: 'built-vs-next',
      title: 'See What Comes Next',
      desc: 'Understand how SSIP takes SANG from prototype to real-world validation.',
      icon: 'rocket_launch',
      color: 'secondary-fixed'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-1 max-w-7xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20"
    >
      <div className="mb-12">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Navigation</span>
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-2">The Explore Journey</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paths.map((path, idx) => (
          <motion.div
            key={path.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, translateY: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="text-left p-6 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col h-full relative overflow-hidden group hover:shadow-xl hover:border-outline-variant/50 transition-shadow"
          >
            <div className={`absolute top-0 right-0 p-4 opacity-10 text-${path.color} group-hover:scale-110 transition-transform duration-500`}>
              <span className="material-symbols-outlined text-6xl">{path.icon}</span>
            </div>
            
            <div className={`w-10 h-10 rounded-lg bg-${path.color}/10 flex items-center justify-center mb-6`}>
              <span className={`material-symbols-outlined text-${path.color}`}>{path.icon}</span>
            </div>
            
            <h3 className="text-xl font-bold text-on-surface mb-2">{path.title}</h3>
            <p className="text-sm text-on-surface-variant font-medium leading-relaxed">{path.desc}</p>
            
            <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: `var(--color-${path.color})` }}>
              <span>Part 0{idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
