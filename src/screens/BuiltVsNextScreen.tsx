import React from 'react';
import { motion } from 'motion/react';

export function BuiltVsNextScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex-1 max-w-7xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col overflow-y-auto custom-scrollbar"
    >
      <div className="mb-12 text-center max-w-3xl mx-auto shrink-0 mt-8">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Content Honesty</span>
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2 mb-4">SANG is honest software.</h2>
        <p className="text-lg text-on-surface-variant">
          We clearly distinguish what is functional today from what requires real-world development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 shrink-0 mb-20">
        {/* DONE */}
        <div className="p-6 md:p-8 rounded-3xl bg-surface-container border-2 border-green-500 relative flex flex-col min-h-[500px] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-green-500" />
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-on-surface">Proof of Intelligence</h3>
            <span className="px-4 py-1.5 bg-green-500 text-black font-bold text-[10px] uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              Done
            </span>
          </div>
          
          <p className="text-sm text-on-surface-variant font-medium mb-3">"Can SANG understand, match, route and respond safely?"</p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider self-start mb-6">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            YES — demonstrated in prototype
          </div>
          
          <p className="text-sm text-on-surface-variant mb-6 pb-6 border-b border-outline-variant/30">
            Functional prototype validated in a controlled environment.
          </p>

          <div className="mb-6 p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-center">
            <span className="block text-green-400 font-mono font-bold tracking-widest uppercase text-lg">65 / 65</span>
            <span className="block text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1">Automated Tests Passing</span>
          </div>

          <div className="flex-1 space-y-2">
            {[
              'Matching Engine',
              'Query Understanding',
              'Resource Matching',
              'Agriculture Intelligence',
              'Location Routing',
              'Multilingual Layer',
              'Voice In / Out',
              '333 Information',
              '333 Assistance',
              '333 Urgent Help',
              'Emergency Escalation',
              'Safe No-Match Logic',
              'Web Interface',
              'Automated Testing',
              'Documentation',
              'Public GitHub Prototype'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-400 text-sm">done</span>
                <span className="text-sm font-medium text-on-surface">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PARTIALLY DONE */}
        <div className="p-6 md:p-8 rounded-3xl bg-surface-container border-2 border-yellow-400 relative flex flex-col min-h-[500px] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-yellow-400" />
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-on-surface">Bridge to the Real World</h3>
            <span className="px-4 py-1.5 bg-yellow-400 text-black font-bold text-[10px] uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(250,204,21,0.4)]">
              Partially Done
            </span>
          </div>
          
          <p className="text-sm text-on-surface-variant font-medium mb-3">"Can the intelligence work reliably with real-world data and context?"</p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-wider self-start mb-6">
            <span className="material-symbols-outlined text-sm">build</span>
            FOUNDATIONS EXIST
          </div>
          
          <p className="text-sm text-on-surface-variant mb-6 pb-6 border-b border-outline-variant/30">
            Deeper development and validation required.
          </p>

          <div className="flex-1 space-y-3">
            {[
              'Knowledge Graph Foundation',
              'Trust & Verification',
              'Accessibility',
              'Real-World Data Architecture',
              'Broader Connection Infrastructure',
              'Emergency Access Architecture'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-yellow-400 text-sm">clock_loader_40</span>
                <span className="text-sm font-medium text-on-surface">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NOT DONE */}
        <div className="p-6 md:p-8 rounded-3xl bg-surface-container border-2 border-error/40 relative flex flex-col min-h-[500px] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-error" />
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-on-surface">Real SANG Network</h3>
            <span className="px-4 py-1.5 bg-error text-on-primary font-bold text-[10px] uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(234,84,85,0.4)]">
              Not Done
            </span>
          </div>
          
          <p className="text-sm text-on-surface-variant font-medium mb-3">"Can SANG operate as a real network connecting people and institutions?"</p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-error/10 text-error text-xs font-bold uppercase tracking-wider self-start mb-6">
            <span className="material-symbols-outlined text-sm">pending</span>
            NOT YET
          </div>
          
          <p className="text-sm text-on-surface-variant mb-6 pb-6 border-b border-outline-variant/30 font-bold">
            The network layer is what we build next.
          </p>

          <div className="flex-1 space-y-3">
            {[
              'Real-user validation',
              'Real opportunity network',
              'Problem Pods',
              'Resource exchange',
              'Blind selection',
              'City intelligence',
              'Institutional integrations',
              'Measurable pilot'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-error text-sm">close</span>
                <span className="text-sm font-medium text-on-surface">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
