import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface py-20 lg:py-28 pt-32">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full bg-primary/10 blur-[130px]"></div>
        <div className="absolute top-10 right-10 w-[380px] h-[380px] rounded-full bg-secondary/10 blur-[100px]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high border border-outline-variant/40 mb-space-lg shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">CONNECTIVE INTELLIGENCE • SSIP 2.0 CANDIDATE</span>
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl text-on-surface font-bold tracking-tight max-w-4xl mx-auto leading-tight"
        >
          Bring the network to the person.
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-space-md text-base text-on-surface-variant max-w-3xl mx-auto leading-relaxed"
        >
          SANG connects people, problems, skills, resources and opportunities through intelligent understanding, matching and routing.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md"
        >
          <a className="px-space-lg py-3 rounded-lg bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-all duration-200 shadow-md shadow-primary/20 flex items-center gap-space-xs" href="#demo">
            <span>Explore SANG</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
          <a className="px-space-lg py-3 rounded-lg bg-surface-container-high border border-outline-variant/50 text-on-surface text-[13px] font-semibold hover:bg-surface-variant hover:border-primary/40 transition-all duration-200 flex items-center gap-space-xs" href="#how-it-works">
            <span>See how it works</span>
            <span className="material-symbols-outlined text-base">hub</span>
          </a>
        </motion.div>
        
        {/* Credibility Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-space-lg inline-flex items-center flex-wrap justify-center gap-space-md px-space-md py-2 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface-variant text-[10px] font-bold"
        >
          <span className="inline-flex items-center gap-1.5 text-primary">
            <span className="material-symbols-outlined text-xs">check_circle</span>
            Functional prototype
          </span>
          <span className="w-1 h-1 rounded-full bg-outline"></span>
          <span className="inline-flex items-center gap-1.5 text-on-surface">
            <span className="material-symbols-outlined text-xs">code</span>
            65 automated tests passing
          </span>
          <span className="w-1 h-1 rounded-full bg-outline"></span>
          <span className="inline-flex items-center gap-1.5 text-secondary">
            <span className="material-symbols-outlined text-xs">menu_book</span>
            Documented Public Prototype
          </span>
        </motion.div>
        
        {/* Hero Visual: Connective Graph */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-space-xl w-full max-w-5xl rounded-xl bg-surface-container-lowest border border-outline-variant/40 p-space-md lg:p-space-lg relative shadow-2xl"
        >
          <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/20 mb-space-md text-[10px] uppercase tracking-wider text-outline font-bold">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70"></span>
              <span className="text-on-surface">System Topology</span>
              <span className="text-outline-variant">•</span>
              <span>Active Semantic Vectors</span>
            </div>
            <span className="text-primary font-mono">STAGE: UNDERSTAND → MATCH → ROUTE → CONNECT</span>
          </div>
          
          <div className="relative w-full h-[320px] lg:h-[400px] flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full text-outline-variant" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 800 400">
              <defs>
                <linearGradient id="primary-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#4fdbc8" stopOpacity="0.9"></stop>
                  <stop offset="100%" stopColor="#7bd0ff" stopOpacity="0.9"></stop>
                </linearGradient>
                <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#272a30" strokeWidth="0.5"></path>
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100%" opacity="0.5" width="100%"></rect>
              
              {/* Animated Connecting Vectors */}
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} className="opacity-70" stroke="#4fdbc8" strokeDasharray="4 4" strokeWidth="1.5" x1="160" x2="400" y1="120" y2="200"></motion.line>
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", delay: 0.2 }} className="opacity-70" stroke="#7bd0ff" strokeDasharray="4 4" strokeWidth="1.5" x1="160" x2="400" y1="280" y2="200"></motion.line>
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeInOut" }} className="opacity-80" stroke="#4fdbc8" strokeWidth="2" x1="400" x2="640" y1="200" y2="100"></motion.line>
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }} className="opacity-90" stroke="#7bd0ff" strokeWidth="2" x1="400" x2="640" y1="200" y2="200"></motion.line>
              <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }} className="opacity-80" stroke="#6bd8cb" strokeWidth="2" x1="400" x2="640" y1="200" y2="300"></motion.line>
              <line stroke="#3c4947" strokeWidth="1.2" x1="280" x2="400" y1="70" y2="200"></line>
              <line stroke="#3c4947" strokeWidth="1.2" x1="520" x2="400" y1="340" y2="200"></line>
              
              {/* Nodes */}
              <g className="cursor-pointer">
                <circle cx="160" cy="120" fill="#191c22" r="34" stroke="#4fdbc8" strokeWidth="1.5"></circle>
                <circle className="animate-ping" cx="160" cy="120" fill="none" opacity="0.3" r="44" stroke="#4fdbc8" strokeWidth="0.7" style={{ animationDuration: '3s' }}></circle>
                <text fill="#71f8e4" fontFamily="Inter" fontSize="10" fontWeight="700" letterSpacing="1" textAnchor="middle" x="160" y="116">PERSON</text>
                <text fill="#bbcac6" fontFamily="Inter" fontSize="8" textAnchor="middle" x="160" y="129">Citizen / Seeker</text>
              </g>
              <g className="cursor-pointer">
                <circle cx="160" cy="280" fill="#191c22" r="32" stroke="#7bd0ff" strokeWidth="1.5"></circle>
                <text fill="#c4e7ff" fontFamily="Inter" fontSize="10" fontWeight="700" letterSpacing="1" textAnchor="middle" x="160" y="276">SKILL</text>
                <text fill="#bbcac6" fontFamily="Inter" fontSize="8" textAnchor="middle" x="160" y="289">Capabilities</text>
              </g>
              <g className="cursor-pointer">
                <circle cx="280" cy="70" fill="#191c22" r="24" stroke="#3c4947" strokeWidth="1.2"></circle>
                <text fill="#bbcac6" fontFamily="Inter" fontSize="8.5" fontWeight="700" textAnchor="middle" x="280" y="68">GEO-CONTEXT</text>
                <text fill="#859490" fontFamily="Inter" fontSize="7.5" textAnchor="middle" x="280" y="78">District / Block</text>
              </g>
              
              {/* Central Hub */}
              <g className="cursor-pointer">
                <circle cx="400" cy="200" fill="#101319" r="54" stroke="url(#primary-grad)" strokeWidth="2.5"></circle>
                <circle cx="400" cy="200" fill="none" opacity="0.5" r="68" stroke="#4fdbc8" strokeDasharray="6 4" strokeWidth="1"></circle>
                <text fill="#4fdbc8" fontFamily="Plus Jakarta Sans" fontSize="14" fontWeight="800" letterSpacing="2" textAnchor="middle" x="400" y="195">SANG</text>
                <text fill="#e1e2eb" fontFamily="Inter" fontSize="8.5" fontWeight="600" textAnchor="middle" x="400" y="210">CONNECTIVE</text>
                <text fill="#859490" fontFamily="Inter" fontSize="8" textAnchor="middle" x="400" y="222">INTELLIGENCE</text>
              </g>
              
              {/* Output Nodes */}
              <g className="cursor-pointer">
                <circle cx="640" cy="100" fill="#191c22" r="32" stroke="#ffb4ab" strokeWidth="1.5"></circle>
                <text fill="#ffdad6" fontFamily="Inter" fontSize="10" fontWeight="700" letterSpacing="1" textAnchor="middle" x="640" y="96">PROBLEM</text>
                <text fill="#bbcac6" fontFamily="Inter" fontSize="8" textAnchor="middle" x="640" y="109">Unsolved Need</text>
              </g>
              <g className="cursor-pointer">
                <circle cx="640" cy="200" fill="#191c22" r="34" stroke="#4fdbc8" strokeWidth="1.5"></circle>
                <text fill="#71f8e4" fontFamily="Inter" fontSize="10" fontWeight="700" letterSpacing="1" textAnchor="middle" x="640" y="196">RESOURCE</text>
                <text fill="#bbcac6" fontFamily="Inter" fontSize="8" textAnchor="middle" x="640" y="209">Capital / Centers</text>
              </g>
              <g className="cursor-pointer">
                <circle cx="640" cy="300" fill="#191c22" r="32" stroke="#7bd0ff" strokeWidth="1.5"></circle>
                <text fill="#c4e7ff" fontFamily="Inter" fontSize="10" fontWeight="700" letterSpacing="1" textAnchor="middle" x="640" y="296">OPPORTUNITY</text>
                <text fill="#bbcac6" fontFamily="Inter" fontSize="8" textAnchor="middle" x="640" y="309">Verified Pathway</text>
              </g>
              <g className="cursor-pointer">
                <circle cx="520" cy="340" fill="#191c22" r="24" stroke="#3c4947" strokeWidth="1.2"></circle>
                <text fill="#bbcac6" fontFamily="Inter" fontSize="8.5" fontWeight="700" textAnchor="middle" x="520" y="338">POLICY / SSIP</text>
                <text fill="#859490" fontFamily="Inter" fontSize="7.5" textAnchor="middle" x="520" y="348">Framework</text>
              </g>
            </svg>
          </div>
          
          <div className="mt-space-sm pt-space-sm border-t border-outline-variant/20 grid grid-cols-2 md:grid-cols-4 gap-space-sm text-center">
            <div className="px-2 py-1.5 rounded bg-surface-container">
              <span className="block text-[10px] text-primary uppercase font-bold">01 Understand</span>
              <span className="text-xs text-on-surface-variant">Intent & Nuance</span>
            </div>
            <div className="px-2 py-1.5 rounded bg-surface-container">
              <span className="block text-[10px] text-secondary uppercase font-bold">02 Match</span>
              <span className="text-xs text-on-surface-variant">Cross-domain Nodes</span>
            </div>
            <div className="px-2 py-1.5 rounded bg-surface-container">
              <span className="block text-[10px] text-tertiary uppercase font-bold">03 Route</span>
              <span className="text-xs text-on-surface-variant">Location Context</span>
            </div>
            <div className="px-2 py-1.5 rounded bg-surface-container">
              <span className="block text-[10px] text-primary-fixed uppercase font-bold">04 Connect</span>
              <span className="text-xs text-on-surface-variant">Verified Outcomes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
