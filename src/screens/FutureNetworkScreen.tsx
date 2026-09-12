import React from 'react';
import { motion } from 'motion/react';

export function FutureNetworkScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex-1 max-w-7xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col overflow-y-auto custom-scrollbar"
    >
      <div className="text-center mb-10 shrink-0 mt-8">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">The Ecosystem</span>
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2 mb-4">Future Network Components</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          The intelligence exists. The network is what we build next. Here are the core pillars of the future SANG ecosystem.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shrink-0 mb-20">
        {[
          { title: 'SANGGram', desc: 'Community/rural-facing SANG.' },
          { title: 'Real Opportunity Network', desc: 'Connect real skills, needs and opportunities.' },
          { title: 'Problem Pods', desc: 'Collaborative spaces around recurring problems.' },
          { title: 'Resource Exchange', desc: 'Move useful resources toward people and problems that need them.' },
          { title: 'Blind Selection', desc: 'Explore more equitable matching/selection mechanisms that reduce bias.' },
          { title: 'City Intelligence', desc: 'Richer local intelligence around needs, services and opportunities.' },
          { title: 'Institutional Integrations', desc: 'Connect organisations, services and systems.' },
          { title: 'Real 333 Deployment', desc: 'Move from a prototype access layer toward real access infrastructure.' },
          { title: 'SANG SHIELD Deployment', desc: 'Move resilient emergency-access architecture toward real testing.' },
          { title: 'Measurable Pilot', desc: 'Controlled real-world testing with measurable outcomes.' }
        ].map((item, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={idx} 
            className="p-6 rounded-2xl bg-surface-container border border-outline-variant/30 hover:border-primary/30 hover:bg-surface-container-high transition-colors group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{item.title}</h4>
              <span className="px-2.5 py-1 rounded-md bg-error/10 text-error text-[10px] font-bold uppercase tracking-wider border border-error/20">Future</span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
