import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const phases = [
  { id: '01', title: 'Prototype', desc: 'Functional intelligence foundation, Web-based prototype, Automated testing', color: 'primary' },
  { id: '02', title: 'Validate', desc: 'Real users, Real problems, Accessibility, Feedback', color: 'secondary' },
  { id: '03', title: 'Verify', desc: 'Verified data, Institutional partnerships, Local routing, Trust mechanisms', color: 'tertiary' },
  { id: '04', title: 'Pilot', desc: 'Controlled district-level deployment', color: 'primary-fixed' },
  { id: '05', title: 'Measure', desc: 'Connections made, Access improved, Resource utilization, User outcomes', color: 'secondary-fixed' }
];

export function RoadmapScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 max-w-4xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col justify-center"
    >
      <div className="mb-12 text-center">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Execution Plan</span>
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2">The Path Forward</h2>
      </div>

      <div className="relative border-l-2 border-outline-variant/30 pl-8 space-y-12 max-w-2xl mx-auto">
        {phases.map((phase, idx) => {
          return (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 + 0.2 }}
              key={phase.id} 
              className="relative group"
            >
              <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-surface bg-${phase.color} transition-transform group-hover:scale-125`}></div>
              
              <div className="flex items-center gap-4 mb-2">
                <span className={`font-mono text-sm font-bold text-${phase.color}`}>Phase {phase.id}</span>
                <h3 className={`text-xl font-bold uppercase tracking-wide text-on-surface`}>
                  {phase.title}
                </h3>
              </div>
              
              <div className="pt-2 pb-4">
                <ul className="space-y-2">
                  {phase.desc.split(', ').map((item, i) => (
                    <motion.li 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: idx * 0.15 + 0.3 + (i * 0.1) }}
                      key={i} 
                      className="flex items-center gap-2 text-sm text-on-surface-variant font-medium group-hover:text-on-surface transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-${phase.color}`}></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
