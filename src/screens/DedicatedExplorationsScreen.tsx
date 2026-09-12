import React from 'react';
import { motion } from 'motion/react';

export function DedicatedExplorationsScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex-1 max-w-7xl mx-auto w-full px-5 lg:px-10 py-12 lg:py-20 flex flex-col overflow-y-auto custom-scrollbar"
    >
      <div className="mb-12 text-center max-w-3xl mx-auto shrink-0 mt-8">
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Future R&D</span>
        <h2 className="text-3xl md:text-5xl font-bold text-on-surface mt-2 mb-4">Dedicated Explorations</h2>
        <p className="text-lg text-on-surface-variant">
          Deep-dive concepts into how SANG could evolve beyond the current prototype.
        </p>
      </div>

      {/* SANGGram SECTION */}
      <div className="shrink-0 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-surface-container rounded-3xl p-8 md:p-12 border border-outline-variant/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-secondary pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">hub</span>
          </div>
          
          <div className="flex-1 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-wider mb-4 border border-secondary/30">
              Future Development · Not Yet Built
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-2">SANGGram</h2>
            <h3 className="text-xl text-secondary font-medium mb-6">Community / Rural-Facing SANG</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              A future community-facing evolution of SANG designed to bring connective intelligence closer to rural and local communities — helping people discover relevant opportunities, resources, assistance and connections without navigating fragmented systems alone.
            </p>
          </div>

          <div className="flex-1 w-full bg-surface-container-highest rounded-2xl p-8 border border-outline-variant/40 flex flex-col items-center justify-center relative z-10">
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="px-6 py-2 rounded-full bg-surface border border-outline-variant/30 text-sm font-bold uppercase tracking-widest">PERSON</span>
              <span className="material-symbols-outlined text-outline">arrow_downward</span>
              <motion.div 
                animate={{ boxShadow: ['0 0 0px rgba(123,208,255,0)', '0 0 20px rgba(123,208,255,0.2)', '0 0 0px rgba(123,208,255,0)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="px-8 py-3 rounded-xl bg-secondary/10 border border-secondary/40 text-secondary text-lg font-bold tracking-widest uppercase"
              >
                SANGGram
              </motion.div>
              <span className="material-symbols-outlined text-outline">arrow_downward</span>
              
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                <div className="p-3 text-center rounded-lg bg-surface border border-outline-variant/30 text-[10px] font-bold text-on-surface-variant uppercase">Local People</div>
                <div className="p-3 text-center rounded-lg bg-surface border border-outline-variant/30 text-[10px] font-bold text-on-surface-variant uppercase">Local Problems</div>
                <div className="p-3 text-center rounded-lg bg-surface border border-outline-variant/30 text-[10px] font-bold text-on-surface-variant uppercase">Local Resources</div>
                <div className="p-3 text-center rounded-lg bg-surface border border-outline-variant/30 text-[10px] font-bold text-on-surface-variant uppercase">Local Opportunities</div>
              </div>
              
              <span className="material-symbols-outlined text-outline mt-2">arrow_downward</span>
              <span className="text-secondary font-bold uppercase tracking-widest text-lg">ACTION</span>
            </div>
          </div>
        </div>
      </div>

      {/* SANG SHIELD SECTION */}
      <div className="shrink-0 mb-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-surface-container rounded-3xl p-8 md:p-12 border border-outline-variant/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 p-8 opacity-5 text-primary pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">shield</span>
          </div>
          
          <div className="flex-1 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-4 border border-primary/30">
              Future R&D Direction · Not Yet Deployed
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-2">SANG SHIELD</h2>
            <h3 className="text-xl text-primary font-medium mb-6">Resilient Emergency Access</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              Emergency access should not depend entirely on terrestrial connectivity. Even when ordinary connectivity fails, the system should try to preserve a path to help.
            </p>
            <p className="text-sm font-mono text-outline-variant">
              Potential satellite-enabled emergency communication when terrestrial connectivity is unavailable. Minimal emergency payload. Store & Forward. Local Relay.
            </p>
          </div>

          <div className="flex-1 w-full flex flex-col gap-4 relative z-10">
            {/* The Scenario */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-xs font-mono text-on-surface-variant font-bold">11:47 PM</div>
              <div className="flex items-start gap-4 mb-4">
                <span className="material-symbols-outlined text-error">signal_cellular_nodata</span>
                <div>
                  <h4 className="text-error font-bold mb-1 uppercase tracking-widest text-xs">Today: 0 BARS</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    A woman returning from work on an isolated road notices someone following her. She reaches for her phone. Ordinary communication fails.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-outline uppercase font-bold">
                <span>Person</span> <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                <span>Phone</span> <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                <span className="text-error">Cell Network</span> <span className="material-symbols-outlined text-[10px]">close</span>
                <span className="text-error">CONNECTION FAILS</span>
              </div>
            </div>

            {/* The Solution */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/30 relative overflow-hidden">
              <motion.div 
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-primary pointer-events-none"
              />
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <span className="material-symbols-outlined text-primary">satellite_alt</span>
                <div>
                  <h4 className="text-primary font-bold mb-1 uppercase tracking-widest text-xs">Future: Resilient Pathway</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    SANG Shield activates resilient connectivity, transmitting a minimal emergency payload securely to the response network.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-outline uppercase font-bold relative z-10">
                <span>Person</span> <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                <span>Emergency Layer</span> <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                <span className="text-error">No Signal</span> <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                <span className="text-primary bg-primary/20 px-1 py-0.5 rounded">SHIELD</span> <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                <span className="text-success">Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
