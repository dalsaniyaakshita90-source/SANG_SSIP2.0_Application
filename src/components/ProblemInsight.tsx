import React from 'react';
import { motion } from 'motion/react';

export function ProblemInsight() {
  return (
    <>
      <section className="w-full bg-surface-container-lowest py-20 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold">The Problem</span>
              <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1">Resources exist. Connections don’t always.</h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-lg">
              The missing layer is not always more resources. It is better discoverability, relevance and connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="p-space-lg rounded-lg bg-surface-container border border-outline-variant/30 relative flex flex-col justify-between">
              <div className="flex items-center justify-between text-outline mb-space-md">
                <span className="material-symbols-outlined text-lg text-error">link_off</span>
                <span className="text-[10px] uppercase tracking-wider text-error font-bold">Unrouted Skill</span>
              </div>
              <div>
                <h3 className="text-lg text-on-surface font-semibold">Skill without Opportunity</h3>
                <p className="mt-space-xs text-sm text-on-surface-variant">
                  A trained youth with specialized artisan or engineering capabilities sits idle because local industrial demand is cataloged across siloed portals.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-[10px] font-bold text-on-surface-variant">
                <span>Node State:</span>
                <span className="text-outline font-mono">DORMANT_CAPABILITY</span>
              </div>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container border border-outline-variant/30 relative flex flex-col justify-between">
              <div className="flex items-center justify-between text-outline mb-space-md">
                <span className="material-symbols-outlined text-lg text-error">inventory_2</span>
                <span className="text-[10px] uppercase tracking-wider text-error font-bold">Underutilized Asset</span>
              </div>
              <div>
                <h3 className="text-lg text-on-surface font-semibold">Resource without Access</h3>
                <p className="mt-space-xs text-sm text-on-surface-variant">
                  State-of-the-art incubation labs, seed grants, and testing hubs remain below optimal capacity while grassroots problem-solvers lack simple entry points.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-[10px] font-bold text-on-surface-variant">
                <span>Node State:</span>
                <span className="text-outline font-mono">ISOLATED_CAPITAL</span>
              </div>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container border border-outline-variant/30 relative flex flex-col justify-between">
              <div className="flex items-center justify-between text-outline mb-space-md">
                <span className="material-symbols-outlined text-lg text-error">visibility_off</span>
                <span className="text-[10px] uppercase tracking-wider text-error font-bold">Invisible Answer</span>
              </div>
              <div>
                <h3 className="text-lg text-on-surface font-semibold">Solution without Discoverability</h3>
                <p className="mt-space-xs text-sm text-on-surface-variant">
                  A proven agricultural intervention or municipal policy already exists, but a farmer or entrepreneur two districts over cannot find it without knowing exact departmental terminology.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-[10px] font-bold text-on-surface-variant">
                <span>Node State:</span>
                <span className="text-outline font-mono">INDEX_FRAGMENTATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-20 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-space-xl">
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">The Insight</span>
            <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1 leading-snug">
              "People shouldn't have to know where the answer is before they can find it."
            </h2>
            <p className="mt-space-sm text-base text-on-surface-variant">
              Conventional platforms demand that users know the exact agency, keyword, and bureaucratic structure. SANG flips the burden from the human to the intelligence layer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {/* Traditional Paradigm */}
            <div className="p-space-lg rounded-lg bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/20 mb-space-md">
                  <span className="text-[11px] uppercase tracking-wider text-outline font-bold">Traditional Paradigm</span>
                  <span className="px-2 py-0.5 rounded bg-error-container/30 text-error text-[10px] font-bold">High Friction</span>
                </div>
                <div className="space-y-space-md my-space-md text-sm text-on-surface-variant">
                  <div className="flex items-start gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-outline text-[10px] shrink-0 mt-0.5">1</span>
                    <span>User guesses search keywords and navigates dozens of disconnected government and NGO portals.</span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-outline text-[10px] shrink-0 mt-0.5">2</span>
                    <span>Sifts hundreds of raw links, outdated PDFs, and ambiguous forms.</span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-outline text-[10px] shrink-0 mt-0.5">3</span>
                    <span>Tries to self-determine qualification, eligibility criteria, and regional applicability.</span>
                  </div>
                  <div className="flex items-start gap-space-sm text-error">
                    <span className="w-6 h-6 rounded-full bg-error-container/20 flex items-center justify-center text-error text-[10px] shrink-0 mt-0.5">✕</span>
                    <span className="font-medium">Result: Frustration, high drop-off rate, and wasted institutional allocations.</span>
                  </div>
                </div>
              </div>
              <div className="p-space-sm rounded bg-surface-container-lowest text-outline font-mono text-xs overflow-x-auto whitespace-nowrap">
                FLOW: SEEKER ──(Friction)──► QUERY WALL ──(Dropout)──► ∅
              </div>
            </div>

            {/* SANG Architecture */}
            <div className="p-space-lg rounded-lg bg-surface-container border border-primary/40 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/20 mb-space-md">
                  <span className="text-[11px] uppercase tracking-wider text-primary font-bold">The SANG Architecture</span>
                  <span className="px-2 py-0.5 rounded bg-primary-container/30 text-primary text-[10px] font-bold">Zero-Barrier Routing</span>
                </div>
                <div className="space-y-space-md my-space-md text-sm text-on-surface">
                  <div className="flex items-start gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                    <span>User simply expresses what they need or what they offer in natural, multilingual everyday speech or text.</span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                    <span>SANG extracts semantic entities: skills, constraints, domain requirements, and geolocated context.</span>
                  </div>
                  <div className="flex items-start gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                    <span>Synthesizes validated pathways across civic initiatives, incubation programs, and community nodes.</span>
                  </div>
                  <div className="flex items-start gap-space-sm text-primary">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                    <span className="font-medium">Result: Actionable, verified connections directly delivered to the individual.</span>
                  </div>
                </div>
              </div>
              <div className="p-space-sm rounded bg-surface-container-lowest text-primary font-mono text-xs overflow-x-auto whitespace-nowrap">
                FLOW: EXPRESS ──► UNDERSTAND ──► MATCH ──► ROUTE ──► DIRECT CONNECT
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
