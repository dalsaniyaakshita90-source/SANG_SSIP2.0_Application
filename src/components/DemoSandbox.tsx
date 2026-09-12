import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const mockResults = [
  {
    type: "Sustainability Opportunity",
    match: "98.4%",
    title: "Circular Textile Cooperative Incubator",
    desc: "Gujarat Green Textile Collective is offering sponsored workbench access and zero-waste material upcycling grants for local textile pattern designers.",
    meta: "Surat Industrial Belt II",
    action: "Route to Desk",
    icon: "arrow_forward",
    color: "primary"
  },
  {
    type: "Textile Resource Facility",
    match: "94.1%",
    title: "Common Effluent & Yarn Testing Lab",
    desc: "Subsidized physical testing hub for organic fibers, biodegradable tensile tests, and low-water dye calibration. Open to students and independent designers.",
    meta: "Khatodara Hub • Mon-Fri",
    action: "Access Pass",
    icon: "open_in_new",
    color: "secondary"
  },
  {
    type: "Local Organization",
    match: "89.7%",
    title: "Artisan Handloom Cluster Advisory",
    desc: "Regional liaison connecting traditional Surat hand-weavers with contemporary design graduates to modernize ethnic textile distribution models.",
    meta: "Adajan Liaison Desk",
    action: "Direct Contact",
    icon: "call",
    color: "tertiary"
  },
  {
    type: "Skill Connection Match",
    match: "86.2%",
    title: "Zero-Waste Dye Specialist Seeking Collaborator",
    desc: "SSIP-supported student innovator at SVNIT developing natural microbial pigments requires a surface pattern designer for joint commercial prototype.",
    meta: "SVNIT Campus Node",
    action: "Request Intro",
    icon: "person_add",
    color: "primary-fixed"
  }
];

export function DemoSandbox() {
  const [query, setQuery] = useState("I know textile design and I'm looking for a sustainability opportunity in Surat.");
  const [status, setStatus] = useState<'idle' | 'understanding' | 'extracting' | 'complete'>('complete');

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setStatus('understanding');
    setTimeout(() => {
      setStatus('extracting');
      setTimeout(() => {
        setStatus('complete');
      }, 1000);
    }, 1000);
  };

  return (
    <section className="w-full bg-surface py-20 border-t border-outline-variant/30" id="demo">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Interactive Sandbox</span>
            <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1">Ask naturally. SANG finds the connection.</h2>
          </div>
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface-variant text-[10px] font-bold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Simulation Engine Active</span>
          </div>
        </div>

        <div className="w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 p-5 lg:p-8 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/20 mb-space-lg">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-error/70"></span>
              <span className="w-3 h-3 rounded-full bg-secondary/70"></span>
              <span className="w-3 h-3 rounded-full bg-primary/70"></span>
              <span className="ml-2 font-mono text-[10px] text-outline font-bold">sang-session // runtime-v0.8.2 // protocol-eval</span>
            </div>
          </div>

          {/* Query Input */}
          <form onSubmit={handleSimulate} className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-primary text-xl">psychology_alt</span>
            </div>
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-surface-container-high border border-outline-variant/50 rounded-lg py-4 pl-12 pr-32 text-on-surface text-lg font-semibold focus:outline-none focus:border-primary transition-colors"
              placeholder="Tell SANG what you need..."
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button 
                type="submit" 
                disabled={status !== 'complete'}
                className="px-4 py-2 bg-primary text-on-primary text-[13px] font-bold rounded-md hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Find connections
              </button>
            </div>
          </form>

          {/* Processing States */}
          <AnimatePresence mode="wait">
            {status !== 'complete' && (
              <motion.div 
                key="processing"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <div className="p-4 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary animate-spin">progress_activity</span>
                  <span className="font-mono text-sm text-primary">
                    {status === 'understanding' ? '> Understanding query...' : '> Extracting context vectors...'}
                  </span>
                </div>
              </motion.div>
            )}

            {status === 'complete' && (
              <motion.div 
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Semantic Parsing */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-wider text-outline font-bold block mb-2">Semantic Parameter Parsing</span>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Identified Skill', value: 'Textile Design', meta: 'Taxonomy: Fabric & Weave', color: 'text-primary' },
                      { label: 'User Intent', value: 'Opportunity', meta: 'Vector: Economic / Seed', color: 'text-secondary' },
                      { label: 'Context / Domain', value: 'Sustainability', meta: 'Sector: Circular Materials', color: 'text-tertiary' },
                      { label: 'Location Geospatial', value: 'Surat, Gujarat', meta: 'Radius: 25km Municipal', color: 'text-primary-fixed' },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded bg-surface-container border border-outline-variant/30">
                        <span className="text-[10px] text-outline uppercase font-bold block">{item.label}</span>
                        <span className={`text-sm ${item.color} font-bold block`}>{item.value}</span>
                        <span className="text-[10px] text-on-surface-variant font-mono">{item.meta}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results Standard */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold">[ Prototype Results — Simulated Output ]</span>
                    <span className="text-[10px] text-outline font-bold">4 Validated Connections</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockResults.map((res, i) => (
                      <div key={i} className={`p-4 rounded-lg bg-surface-container-high border border-outline-variant/40 hover:border-${res.color}/40 transition-colors flex flex-col justify-between`}>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`px-2 py-0.5 rounded bg-${res.color}/10 text-${res.color} text-[10px] font-bold uppercase`}>{res.type}</span>
                            <span className="text-[10px] font-mono text-outline font-bold">{res.match} Match</span>
                          </div>
                          <h4 className="text-sm text-on-surface font-semibold">{res.title}</h4>
                          <p className="text-xs text-on-surface-variant mt-1">{res.desc}</p>
                        </div>
                        <div className="mt-4 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-[10px] font-bold">
                          <span className="text-on-surface font-mono">{res.meta}</span>
                          <span className={`text-${res.color} flex items-center gap-1`}>
                            {res.action} <span className="material-symbols-outlined text-xs">{res.icon}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
