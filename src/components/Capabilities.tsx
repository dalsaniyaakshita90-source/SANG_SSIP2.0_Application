import React from 'react';

const capabilities = [
  { id: '01', key: 'CORE', title: 'Matching Engine', desc: 'High-dimensional matching across disparate taxonomy trees.' },
  { id: '02', key: 'NLP', title: 'Query Understanding', desc: 'Extracts tacit skills, implicit requirements, and contextual urgency.' },
  { id: '03', key: 'ASSETS', title: 'Resource Matching', desc: 'Identifies institutional tooling, laboratory access, and grant facilities.' },
  { id: '04', key: 'AGRI', title: 'Agri Intelligence', desc: 'Soil type, seasonal sowing cycle, and weather parameter routing.' },
  { id: '05', key: 'SPATIAL', title: 'Location Routing', desc: 'District, taluka, and municipal radius geospatial bounds filtering.' },
  { id: '06', key: 'LINGUA', title: 'Multilingual Layer', desc: 'Cross-lingual semantic understanding across English, Hindi, and Gujarati.' },
  { id: '07', key: 'AUDIO', title: 'Voice In / Out', desc: 'Spoken intent translation tailored for low-literacy rural citizens.' },
  { id: '08', key: '333-INFO', title: '333 Information', desc: 'Rapid answers to "Where do I find the verified criteria or portal?"' },
  { id: '09', key: '333-ASST', title: '333 Assistance', desc: 'Guided pathways for complex civic bottlenecks and operational troubleshooting.' },
  { id: '10', key: '333-EMER', title: '333 Urgent Help', desc: 'High-priority flagging for time-critical distress and institutional support.' },
  { id: '11', key: 'SAFEGUARD', title: 'Emergency Escalation', desc: 'Deterministic diversion of critical safety inputs away from generic matching.' },
  { id: '12', key: 'INTEGRITY', title: 'Safe No-Match Logic', desc: 'Refuses hallucination; clearly signals unindexed or low-confidence outcomes.' },
];

export function Capabilities() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 border-t border-outline-variant/30" id="capabilities">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">SANG Core Verification</span>
            <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1">We built the intelligence first.</h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-lg">
            SANG already has a functional prototype covering core intelligence and access layers. Every capability listed below is backed by automated tests, not conceptual mockups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.id} className="p-4 rounded bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between text-outline mb-2 font-mono text-[10px] font-bold">
                <span>{cap.id} // {cap.key}</span>
                <span className="text-primary">ACTIVE</span>
              </div>
              <h3 className="text-base text-on-surface font-semibold">{cap.title}</h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-surface-container-high border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-on-surface font-semibold uppercase">Automated Test Matrix: 65/65 PASSING</span>
            <span className="text-outline">|</span>
            <span className="text-on-surface-variant">Coverage: Routing, Parsing, Dialect Invariance, Geo-lookup</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-outline text-[10px] font-bold uppercase">Strict Zero-Fabrication Protocol</span>
            <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[10px] font-bold text-primary">v0.8-verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
