import React from 'react';

export function DomainSpecificity() {
  return (
    <section className="w-full bg-surface py-20 border-t border-outline-variant/30" id="domain-specificity">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Domain Specificity & Routing Layers</span>
          <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1">Context matters. Not all requests are searches.</h2>
          <p className="text-sm text-on-surface-variant mt-2">
            A farmer asking about pest blight in Anand needs different routing logic than a student seeking a hardware lab in Rajkot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Agriculture Intelligence */}
          <div className="p-8 rounded-lg bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-4">
                <span className="text-[11px] text-primary uppercase font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">agriculture</span>
                  Agriculture Intelligence Layer
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-high font-mono text-[10px] font-bold text-on-surface-variant">Geo-Climatic Vectoring</span>
              </div>
              <p className="text-base text-on-surface font-semibold mb-2">
                Query + Location + Agro-Climatic Calendar = Precise Response
              </p>
              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                Generic search engines output theoretical advice. SANG incorporates black cotton soil profiles, groundwater salinity figures, and seasonal rabi/kharif calendars to route directly to local Krishi Vigyan Kendras (KVK) and verified soil testing labs.
              </p>
              <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/30 space-y-2 font-mono text-[10px] font-bold">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>Input: "Cotton leaf curl in Junagadh"</span>
                  <span className="text-primary">Matched: KVK Junagadh Direct</span>
                </div>
                <div className="flex items-center justify-between text-outline">
                  <span>Contextual Enrichment:</span>
                  <span>Saurashtra Soil #04 • Post-Monsoon</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[10px] font-bold">
              <span className="text-on-surface-variant">Groundwater / Agro Integration</span>
              <span className="text-primary">Validated in Prototype</span>
            </div>
          </div>

          {/* 333 Access Layer */}
          <div className="p-8 rounded-lg bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-4">
                <span className="text-[11px] text-secondary uppercase font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">dialpad</span>
                  The 333 Tiered Pathway System
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-high font-mono text-[10px] font-bold text-on-surface-variant">Intent Segregation</span>
              </div>
              <p className="text-base text-on-surface font-semibold mb-4">
                Different problems need different pathways
              </p>
              <div className="space-y-3">
                <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/20 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-mono text-[10px] font-bold mt-0.5">INFO</span>
                  <div>
                    <span className="text-xs font-semibold text-on-surface block">"Where can I find the information I need?"</span>
                    <span className="text-xs text-outline mt-0.5 block">Direct directory resolution, criteria checks, office timings.</span>
                  </div>
                </div>
                <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/20 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary font-mono text-[10px] font-bold mt-0.5">ASST</span>
                  <div>
                    <span className="text-xs font-semibold text-on-surface block">"I have a problem. Help me find the right pathway."</span>
                    <span className="text-xs text-outline mt-0.5 block">Facilitates multistep navigation across agencies and verified advisors.</span>
                  </div>
                </div>
                <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/20 flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-error-container/30 text-error font-mono text-[10px] font-bold mt-0.5">EMER</span>
                  <div>
                    <span className="text-xs font-semibold text-on-surface block">"I need urgent help."</span>
                    <span className="text-xs text-outline mt-0.5 block">Escalation safeguard bypassing standard algorithms for emergency channels.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[10px] font-bold text-outline">
              <span>* Prototype exploration of 333-style access layer; not telecom connected.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
