import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../AppContext';

const capabilities = [
  { id: 'match', title: 'Matching', desc: 'Connects a person\'s skills, needs and context to relevant opportunities and resources.', icon: 'join_inner', example: 'Textile Design Skill → Surat Incubator Match', color: 'primary' },
  { id: 'nlp', title: 'Query Understanding', desc: 'Extracts tacit skills, implicit requirements, and contextual urgency.', icon: 'psychology', example: '"I need help with crops" → Agricultural Intent', color: 'secondary' },
  { id: 'resource', title: 'Resource Matching', desc: 'Identifies institutional tooling, laboratory access, and grant facilities.', icon: 'inventory_2', example: 'Student Innovator → Seed Grant 2.0', color: 'tertiary' },
  { id: 'agri', title: 'Agri Intelligence', desc: 'Soil type, seasonal sowing cycle, and weather parameter routing.', icon: 'agriculture', example: 'Black Cotton Soil + Kharif → KVK Direct', color: 'primary-fixed' },
  { id: 'route', title: 'Location Routing', desc: 'District, taluka, and municipal radius geospatial bounds filtering.', icon: 'my_location', example: 'Query in Rajkot → Rajkot Facilities', color: 'secondary-fixed' },
  { id: 'lang', title: 'Multilingual', desc: 'Cross-lingual semantic understanding across English, Hindi, and Gujarati.', icon: 'translate', example: 'Gujarati Input → English Vector → Regional Match', color: 'tertiary-fixed' },
  { id: 'voice', title: 'Voice In / Out', desc: 'Spoken intent translation tailored for low-literacy rural citizens.', icon: 'record_voice_over', example: 'Audio Stream → Text Intent → Routing', color: 'primary' },
  { id: '333-info', title: '333 Information', desc: 'Rapid answers to "Where do I find the verified criteria or portal?"', icon: 'info', example: '"Where is the form?" → URL & Requirements', color: 'secondary' },
  { id: '333-asst', title: '333 Assistance', desc: 'Guided pathways for complex civic bottlenecks and operational troubleshooting.', icon: 'support_agent', example: '"My application is stuck" → Escalation node', color: 'tertiary' },
  { id: '333-emer', title: '333 Urgent Help', desc: 'High-priority flagging for time-critical distress and institutional support.', icon: 'emergency', example: '"Medical help needed" → Emergency dispatch', color: 'error' },
  { id: 'escalate', title: 'Emergency Esc.', desc: 'Deterministic diversion of critical safety inputs away from generic matching.', icon: 'warning', example: 'Bypass algorithms → Human operator', color: 'error' },
  { id: 'safe', title: 'Safe No-Match', desc: 'Refuses hallucination; clearly signals unindexed or low-confidence outcomes.', icon: 'gpp_good', example: 'Unknown query → "I cannot verify this yet."', color: 'primary-fixed' },
];

export function PrototypeScreen() {
  const capabilities = [
    { id: 'match', title: 'Matching', desc: 'Connects a person\'s skills, needs and context to relevant opportunities and resources.', icon: 'join_inner', example: 'Textile Design Skill → Surat Incubator Match', color: 'primary' },
    { id: 'nlp', title: 'Query Understanding', desc: 'Extracts tacit skills, implicit requirements, and contextual urgency.', icon: 'psychology', example: '"I need help with crops" → Agricultural Intent', color: 'secondary' },
    { id: 'resource', title: 'Resource Matching', desc: 'Identifies institutional tooling, laboratory access, and grant facilities.', icon: 'inventory_2', example: 'Student Innovator → Seed Grant 2.0', color: 'tertiary' },
    { id: 'agri', title: 'Agriculture Intelligence', desc: 'Soil type, seasonal sowing cycle, and weather parameter routing.', icon: 'agriculture', example: 'Black Cotton Soil + Kharif → KVK Direct', color: 'primary-fixed' },
    { id: 'route', title: 'Location Routing', desc: 'District, taluka, and municipal radius geospatial bounds filtering.', icon: 'my_location', example: 'Query in Rajkot → Rajkot Facilities', color: 'secondary-fixed' },
    { id: 'lang', title: 'Multilingual', desc: 'Cross-lingual semantic understanding across multiple languages.', icon: 'translate', example: '10 LANGUAGES · 18 INTEGRATION TESTS', color: 'tertiary-fixed' },
    { id: 'voice', title: 'Voice Input / Output', desc: 'Spoken intent translation tailored for low-literacy rural citizens.', icon: 'record_voice_over', example: 'Audio Stream → Text Intent → Routing', color: 'primary' },
    { id: '333-info', title: '333 Information', desc: 'Rapid answers to "Where do I find the verified criteria or portal?"', icon: 'info', example: '"Where is the form?" → URL & Requirements', color: 'secondary' },
    { id: '333-asst', title: '333 Assistance', desc: 'Guided pathways for complex civic bottlenecks and operational troubleshooting.', icon: 'support_agent', example: '"My application is stuck" → Escalation node', color: 'tertiary' },
    { id: '333-emer', title: '333 Urgent Help', desc: 'High-priority flagging for time-critical distress and institutional support.', icon: 'emergency', example: '"Medical help needed" → Emergency dispatch', color: 'error' },
    { id: 'escalate', title: 'Emergency Escalation', desc: 'Deterministic diversion of critical safety inputs away from generic matching.', icon: 'warning', example: 'Bypass algorithms → Human operator', color: 'error' },
    { id: 'safe', title: 'Safe No-Match Handling', desc: 'Refuses hallucination; clearly signals unindexed or low-confidence outcomes.', icon: 'gpp_good', example: 'Unknown query → "I cannot verify this yet."', color: 'primary-fixed' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-1 max-w-7xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col"
    >
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Interactive Core</span>
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2">We built the intelligence first.</h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl text-lg">Functional within the current controlled SANG prototype.</p>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase font-bold text-on-surface">65 / 65 Automated Tests Passing</span>
          </div>
          <span className="text-[10px] font-mono uppercase text-outline">Documented Public Prototype</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="p-6 rounded-2xl bg-surface-container border border-outline-variant/30 flex flex-col relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${cap.color}/5 rounded-full blur-[40px] pointer-events-none`}></div>
            
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${cap.color}/10 text-${cap.color}`}>
                <span className="material-symbols-outlined text-2xl">{cap.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface leading-tight uppercase tracking-wide">{cap.title}</h3>
            </div>
            
            <p className="text-sm text-on-surface-variant mb-6 flex-1 relative z-10 leading-relaxed">
              {cap.desc}
            </p>
            
            <div className="p-3 rounded-lg bg-surface-container-highest border border-outline-variant/20 font-mono text-xs relative z-10">
              <span className="text-[9px] uppercase text-outline block mb-1">Execution Match</span>
              <span className={`font-medium text-${cap.color}`}>{cap.example}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
