import React from 'react';

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
      <div className="h-16 w-full max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <a className="flex items-center gap-space-sm focus:outline-none" href="#">
            <span className="flex items-center justify-center w-8 h-8 rounded bg-surface-container-high border border-outline-variant/40 text-primary font-display text-lg font-bold tracking-tight">S</span>
            <span className="font-display text-lg text-on-surface font-bold tracking-tight uppercase">SANG</span>
          </a>
          <span className="hidden xl:inline-block h-4 w-px bg-outline-variant/30"></span>
          <span className="hidden xl:inline-block text-[10px] uppercase tracking-widest text-outline font-bold">Connective Intelligence</span>
        </div>
        <nav className="hidden lg:flex items-center gap-space-lg h-full">
          <a className="text-on-surface-variant hover:text-on-surface text-[13px] font-semibold transition-colors py-space-sm" href="#how-it-works">How it works</a>
          <a className="text-on-surface-variant hover:text-on-surface text-[13px] font-semibold transition-colors py-space-sm" href="#capabilities">What we've built</a>
          <a className="text-on-surface-variant hover:text-on-surface text-[13px] font-semibold transition-colors py-space-sm" href="#domain-specificity">The 333 Layer</a>
          <a className="text-on-surface-variant hover:text-on-surface text-[13px] font-semibold transition-colors py-space-sm" href="#roadmap">Roadmap</a>
        </nav>
        <div className="flex items-center gap-space-md">
          <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container border border-outline-variant/40">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] tracking-wider uppercase text-on-surface-variant font-bold">Prototype v0.8</span>
          </div>
          <a className="inline-flex items-center justify-center px-space-md py-1.5 rounded bg-primary text-on-primary text-[13px] font-semibold hover:bg-secondary transition-colors duration-150" href="#demo">
            Explore SANG
          </a>
        </div>
      </div>
    </header>
  );
}
