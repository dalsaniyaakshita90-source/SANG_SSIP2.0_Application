import React from 'react';

export function SSIPTransition() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 border-t border-outline-variant/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-surface-container-lowest to-surface-container-lowest"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-5 lg:px-10 relative text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">Strategic Incubation Request</span>
        </span>
        
        <h2 className="text-3xl lg:text-5xl text-on-surface font-bold mb-6 leading-tight">
          Why SANG needs SSIP 2.0 to scale the last mile.
        </h2>
        
        <p className="text-base lg:text-lg text-on-surface-variant mb-10 leading-relaxed max-w-3xl mx-auto">
          The software intelligence exists. But to serve the unbanked, the unconnected, and the rural innovator, SANG must transition from a web URL to a telecom hotline, integrated directly with Gujarat's civic infrastructure.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/30 w-full sm:w-auto text-left flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">api</span>
            </span>
            <div>
              <span className="block text-sm font-bold text-on-surface">Data Synergies</span>
              <span className="block text-xs text-on-surface-variant mt-1">Integration with State registries.</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/30 w-full sm:w-auto text-left flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">satellite_alt</span>
            </span>
            <div>
              <span className="block text-sm font-bold text-on-surface">Telecom Linkage</span>
              <span className="block text-xs text-on-surface-variant mt-1">Toll-free IVR hardware bridging.</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/30 w-full sm:w-auto text-left flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">groups</span>
            </span>
            <div>
              <span className="block text-sm font-bold text-on-surface">Pilot Deployment</span>
              <span className="block text-xs text-on-surface-variant mt-1">Real-world district testing.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
