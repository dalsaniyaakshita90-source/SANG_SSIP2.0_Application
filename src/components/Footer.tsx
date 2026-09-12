import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-surface py-12 border-t border-outline-variant/30 text-center">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col items-center">
        <div className="flex items-center gap-space-sm mb-6">
          <span className="flex items-center justify-center w-6 h-6 rounded bg-surface-container-high border border-outline-variant/40 text-primary font-display text-sm font-bold tracking-tight">S</span>
          <span className="font-display text-sm text-on-surface font-bold tracking-tight uppercase">SANG</span>
        </div>
        
        <p className="text-xs text-outline font-medium mb-2">
          Connective Intelligence for People, Problems, Resources & Opportunities.
        </p>
        <p className="text-[10px] text-outline-variant font-bold uppercase tracking-widest font-mono">
          PROTOTYPE v0.8.2 // SSIP 2.0 SUBMISSION
        </p>
      </div>
    </footer>
  );
}
