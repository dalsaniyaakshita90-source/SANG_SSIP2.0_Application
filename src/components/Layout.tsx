import React from 'react';
import { useApp } from '../AppContext';
import { motion } from 'motion/react';

export function Layout({ children }: { children: React.ReactNode }) {
  const { currentScreen, navigate, nextScreen, prevScreen, progress } = useApp();

  const isEntry = currentScreen === 'entry';

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-x-hidden selection:bg-primary/30 flex flex-col">
      {/* Top Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isEntry ? 'bg-transparent' : 'bg-surface/90 backdrop-blur-md border-b border-outline-variant/30'}`}>
        <div className="h-16 w-full max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">
          <button onClick={() => navigate('entry')} className="flex items-center gap-space-sm focus:outline-none group">
            <span className="flex items-center justify-center w-8 h-8 rounded bg-surface-container-high border border-outline-variant/40 text-primary font-display text-lg font-bold tracking-tight group-hover:border-primary/50 transition-colors">S</span>
            <span className="font-display text-lg text-on-surface font-bold tracking-tight uppercase">SANG</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-outline">
            {(() => {
              if (currentScreen === 'entry') return <span>01 / 17 &nbsp;&mdash;&nbsp; SANG Entry</span>;
              if (currentScreen === 'problem') return <span>02 / 17 &nbsp;&mdash;&nbsp; The Problem</span>;
              if (currentScreen === 'insight') return <span>03 / 17 &nbsp;&mdash;&nbsp; The Insight</span>;
              if (currentScreen === 'explore') return <span>04 / 17 &nbsp;&mdash;&nbsp; Explore SANG</span>;
              if (currentScreen === 'query') return <span>05 / 17 &nbsp;&mdash;&nbsp; EXPLORE SANG: FIND A CONNECTION</span>;
              if (currentScreen === 'pipeline') return <span>06 / 17 &nbsp;&mdash;&nbsp; EXPLORE SANG: UNDERSTAND THE SYSTEM</span>;
              if (currentScreen === 'prototype') return <span>07 / 17 &nbsp;&mdash;&nbsp; EXPLORE SANG: WORKING PROTOTYPE</span>;
              if (currentScreen === 'context-agri') return <span>08 / 17 &nbsp;&mdash;&nbsp; HUMAN ACCESS: AGRICULTURE</span>;
              if (currentScreen === 'context-333') return <span>09 / 17 &nbsp;&mdash;&nbsp; HUMAN ACCESS: CIVIC ASSISTANCE</span>;
              if (currentScreen === 'context-voice') return <span>10 / 17 &nbsp;&mdash;&nbsp; HUMAN ACCESS: VOICE + LANGUAGE</span>;
              if (currentScreen === 'built-vs-next') return <span>11 / 17 &nbsp;&mdash;&nbsp; EXPLORE SANG: SEE WHAT COMES NEXT</span>;
              if (currentScreen === 'dedicated') return <span>12 / 17 &nbsp;&mdash;&nbsp; EXPLORE SANG: DEDICATED EXPLORATIONS</span>;
              if (currentScreen === 'future') return <span>13 / 17 &nbsp;&mdash;&nbsp; EXPLORE SANG: FUTURE NETWORK</span>;
              if (currentScreen === 'why-ssip') return <span>14 / 17 &nbsp;&mdash;&nbsp; Why SSIP</span>;
              if (currentScreen === 'roadmap') return <span>15 / 17 &nbsp;&mdash;&nbsp; Roadmap</span>;
              if (currentScreen === 'impact') return <span>16 / 17 &nbsp;&mdash;&nbsp; Impact</span>;
              if (currentScreen === 'final') return <span>17 / 17 &nbsp;&mdash;&nbsp; Final</span>;
              return null;
            })()}
          </nav>
        </div>
        
        {/* Progress Bar */}
        {!isEntry && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-outline-variant/20">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col pt-16 relative">
        {children}
      </main>

      {/* Bottom Controls */}
      {!isEntry && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-5 lg:p-8 pointer-events-none">
          <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
            <button 
              onClick={prevScreen}
              className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container/80 backdrop-blur border border-outline-variant/50 text-on-surface text-sm font-semibold hover:bg-surface-variant transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back
            </button>
            
            {currentScreen !== 'final' && (
              <button 
                onClick={nextScreen}
                className="pointer-events-auto flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:bg-secondary transition-colors shadow-lg shadow-primary/20 cursor-pointer"
              >
                Continue
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
