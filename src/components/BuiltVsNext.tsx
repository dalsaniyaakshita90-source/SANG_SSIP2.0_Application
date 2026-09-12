import React from 'react';

export function BuiltVsNext() {
  return (
    <section className="w-full bg-surface py-20 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Transparency Protocol</span>
          <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1">SANG is honest software.</h2>
          <p className="mt-2 text-sm text-on-surface-variant">
            Many civic-tech proposals blend vaporware with reality. SANG strictly demarcates what is functional today from what requires SSIP backing tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* BUILT */}
          <div className="p-8 rounded-lg bg-surface-container border border-primary/40 relative">
            <div className="absolute top-0 right-8 px-3 py-1 bg-primary text-on-primary font-bold text-[10px] uppercase tracking-wider rounded-b-lg">
              Present State
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-3xl text-primary">verified</span>
              <h3 className="text-2xl font-bold text-on-surface">BUILT</h3>
            </div>
            <p className="text-sm text-on-surface-variant mb-6">Functional prototype components operating deterministically today without fabrication.</p>
            
            <ul className="space-y-4">
              {[
                "Web-based ingestion and routing framework",
                "English language semantic entity extraction",
                "Text-based input / intent classification",
                "Foundational 'Understand → Match' algorithm",
                "In-browser evaluation sandbox"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                  <span className="text-sm text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NEXT WITH SSIP */}
          <div className="p-8 rounded-lg bg-surface-container border border-secondary/40 relative opacity-90 hover:opacity-100 transition-opacity">
            <div className="absolute top-0 right-8 px-3 py-1 bg-secondary text-on-secondary font-bold text-[10px] uppercase tracking-wider rounded-b-lg">
              Future State
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-3xl text-secondary">rocket_launch</span>
              <h3 className="text-2xl font-bold text-on-surface">NEXT WITH SSIP</h3>
            </div>
            <p className="text-sm text-on-surface-variant mb-6">The critical integration vectors requiring institutional partnership and SSIP 2.0 grant acceleration.</p>
            
            <ul className="space-y-4">
              {[
                "Hardware telecom linkage for feature-phone IVR dialing",
                "Native multi-dialect Gujarati speech-to-text models",
                "Direct API hooks into State departmental databases",
                "Ground-truth geospatial polygon routing for exact districts",
                "Cloud infrastructure scaling for concurrent access"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm mt-0.5">arrow_forward</span>
                  <span className="text-sm text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
