import React from 'react';

export function Impact() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">The Final Output</span>
          <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1 leading-snug">
            SANG does not measure success in page views. It measures success in connections made.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <div className="p-space-lg rounded-lg bg-surface-container border border-outline-variant/30 text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">forum</span>
            <h3 className="text-lg font-bold text-on-surface mb-2">Zero Interface Learning</h3>
            <p className="text-xs text-on-surface-variant">Natural conversation replaces dropdowns and search bars, opening access to everyone regardless of digital literacy.</p>
          </div>
          
          <div className="p-space-lg rounded-lg bg-surface-container border border-outline-variant/30 text-center">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">trending_up</span>
            <h3 className="text-lg font-bold text-on-surface mb-2">Resource Utilization</h3>
            <p className="text-xs text-on-surface-variant">Connecting dormant community assets and government capital to the exact individuals who need them most.</p>
          </div>
          
          <div className="p-space-lg rounded-lg bg-surface-container border border-outline-variant/30 text-center">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-4">gavel</span>
            <h3 className="text-lg font-bold text-on-surface mb-2">Civic Efficiency</h3>
            <p className="text-xs text-on-surface-variant">Reducing helpdesk load and redundant applications by deterministic routing of citizens to the correct department.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
