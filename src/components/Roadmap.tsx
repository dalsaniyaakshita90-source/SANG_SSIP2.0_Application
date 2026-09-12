import React from 'react';

const phases = [
  {
    phase: 'Phase 01',
    status: 'ACTIVE',
    color: 'primary',
    title: 'Algorithmic Foundation',
    desc: 'Core "Understand → Match → Route" deterministic logic written. Web-based sandbox functional.',
    points: ['Semantic evaluation', 'Constraint routing', 'React/Vite application layer']
  },
  {
    phase: 'Phase 02',
    status: 'SSIP TARGET',
    color: 'secondary',
    title: 'Telecom & Vernacular',
    desc: 'Bypassing the internet barrier. Voice integration for basic feature phones in native dialects.',
    points: ['Twilio/Exotel IVR hook', 'Gujarati/Hindi Audio-to-Text', 'District-level geospatial mapping']
  },
  {
    phase: 'Phase 03',
    status: 'LONG-TERM',
    color: 'outline-variant',
    title: 'Institutional Hooking',
    desc: 'Direct synchronization with NGO directories, state government registries, and incubation hubs.',
    points: ['Real-time program status API', 'Dynamic capacity checks', 'Cross-agency analytics dashboard']
  }
];

export function Roadmap() {
  return (
    <section className="w-full bg-surface py-20 border-t border-outline-variant/30" id="roadmap">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Execution Plan</span>
          <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1">The Path to Scale.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div key={phase.phase} className="relative pl-6 md:pl-0 md:pt-8 border-l md:border-l-0 md:border-t border-outline-variant/30">
              <div className={`absolute -left-1.5 md:left-0 md:-top-1.5 w-3 h-3 rounded-full bg-${phase.color}`}></div>
              
              <div className="mb-4 pt-1 md:pt-0 md:mt-4 flex items-center justify-between">
                <span className="text-sm font-bold text-on-surface font-mono">{phase.phase}</span>
                <span className={`px-2 py-0.5 text-[9px] font-bold tracking-wider rounded bg-${phase.color}/20 text-${phase.color === 'outline-variant' ? 'outline' : phase.color}`}>
                  {phase.status}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-on-surface mb-2">{phase.title}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">{phase.desc}</p>
              
              <ul className="space-y-2">
                {phase.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] text-on-surface-variant font-medium">
                    <span className="text-outline-variant mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
