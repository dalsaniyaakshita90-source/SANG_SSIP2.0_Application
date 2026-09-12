import React from 'react';
import { motion } from 'motion/react';

export function ImpactScreen() {
  const impacts = [
    { icon: 'lock_open', title: 'Access', desc: 'Make relevant support easier to reach.', color: 'primary' },
    { icon: 'filter_alt', title: 'Relevance', desc: 'Connect people with what actually fits their situation.', color: 'secondary' },
    { icon: 'record_voice_over', title: 'Inclusion', desc: 'Support multilingual and accessibility-oriented interaction.', color: 'tertiary' },
    { icon: 'verified', title: 'Trust', desc: 'Avoid fabricated connections.', color: 'primary-fixed' },
    { icon: 'satellite_alt', title: 'Resilience', desc: 'Explore emergency access beyond ordinary connectivity.', color: 'secondary-fixed' },
    { icon: 'play_arrow', title: 'Action', desc: 'Move information toward meaningful next steps.', color: 'tertiary-fixed' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 max-w-6xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col justify-center items-center gap-12"
    >
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-4">Why This Matters</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          SANG does not measure success in page views. It measures success in connections made.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {impacts.map((item, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-surface-container border border-outline-variant/30 flex flex-col hover:border-primary/50 hover:bg-surface-container-high transition-colors group cursor-default"
          >
            <span className={`material-symbols-outlined text-${item.color} text-3xl mb-4 group-hover:scale-110 transition-transform`}>{item.icon}</span>
            <h4 className="text-lg font-bold text-on-surface uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full mt-8 p-8 md:p-12 rounded-3xl bg-surface-container-high border border-outline-variant/20 relative overflow-hidden group"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"
        ></motion.div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-12">
            <div className="flex items-center justify-center gap-4 text-on-surface font-mono text-sm sm:text-base font-bold uppercase">
              <span>PEOPLE</span>
              <span className="material-symbols-outlined text-primary">sync_alt</span>
              <span>HELP</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-on-surface font-mono text-sm sm:text-base font-bold uppercase">
              <span>PROBLEMS</span>
              <span className="material-symbols-outlined text-secondary">sync_alt</span>
              <span>SOLUTIONS</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-on-surface font-mono text-sm sm:text-base font-bold uppercase">
              <span>SKILLS</span>
              <span className="material-symbols-outlined text-tertiary">sync_alt</span>
              <span>OPPORTUNITIES</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-on-surface font-mono text-sm sm:text-base font-bold uppercase">
              <span>RESOURCES</span>
              <span className="material-symbols-outlined text-primary-fixed">sync_alt</span>
              <span>PEOPLE</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-on-surface font-mono text-sm sm:text-base font-bold uppercase">
              <span>EMERGENCIES</span>
              <span className="material-symbols-outlined text-error">sync_alt</span>
              <span>RESPONSE</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-on-surface font-mono text-sm sm:text-base font-bold uppercase">
              <span>COMMUNITIES</span>
              <span className="material-symbols-outlined text-secondary-fixed">sync_alt</span>
              <span>INSTITUTIONS</span>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-outline-variant/30">
            <h3 className="text-xl md:text-2xl font-bold text-on-surface">
              From fragmented possibilities to connected action.
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
