import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../AppContext';

export function EntryScreen() {
  const { nextScreen } = useApp();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[calc(100vh-4rem)]"
    >
      {/* Subtle Network Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="relative w-full max-w-4xl h-full">
          <svg className="absolute inset-0 w-full h-full text-outline-variant" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 600">
            {/* Animated lines */}
            <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="opacity-20" stroke="#4fdbc8" strokeWidth="1" x1="200" x2="500" y1="200" y2="300"></motion.line>
            <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 9, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 1 }} className="opacity-20" stroke="#7bd0ff" strokeWidth="1" x1="800" x2="500" y1="250" y2="300"></motion.line>
            <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 7.5, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 0.5 }} className="opacity-20" stroke="#4fdbc8" strokeWidth="1" x1="300" x2="500" y1="450" y2="300"></motion.line>
            <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 8.5, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 2 }} className="opacity-20" stroke="#ffb4ab" strokeWidth="1" x1="750" x2="500" y1="400" y2="300"></motion.line>
            
            {/* Central Stable Node */}
            <circle cx="500" cy="300" fill="#ffffff" r="4" className="opacity-50"></circle>

            {/* Nodes */}
            <motion.circle animate={{ opacity: [0, 0.4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} cx="200" cy="200" fill="#4fdbc8" r="3"></motion.circle>
            <text fill="#bbcac6" fontFamily="Inter" fontSize="10" letterSpacing="1" x="210" y="204" className="opacity-40">PEOPLE</text>
            
            <motion.circle animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} cx="800" cy="250" fill="#7bd0ff" r="3"></motion.circle>
            <text fill="#bbcac6" fontFamily="Inter" fontSize="10" letterSpacing="1" x="810" y="254" className="opacity-40">OPPORTUNITIES</text>
            
            <motion.circle animate={{ opacity: [0, 0.3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} cx="300" cy="450" fill="#6bd8cb" r="3"></motion.circle>
            <text fill="#bbcac6" fontFamily="Inter" fontSize="10" letterSpacing="1" x="310" y="454" className="opacity-40">RESOURCES</text>

            <motion.circle animate={{ opacity: [0, 0.4, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} cx="750" cy="400" fill="#ffb4ab" r="3"></motion.circle>
            <text fill="#bbcac6" fontFamily="Inter" fontSize="10" letterSpacing="1" x="760" y="404" className="opacity-40">PROBLEMS</text>
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-on-surface tracking-tight mb-6">
            SANG
          </h1>
          <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary mb-8 leading-relaxed max-w-2xl mx-auto">
            Connective Intelligence for People, Problems, Resources & Opportunities
          </h2>
          <p className="text-2xl md:text-4xl text-on-surface-variant font-medium font-display leading-tight">
            “Don’t make people enter the network.<br/>Bring the network to the person.”
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-10 mt-4"
        >
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-outline-variant font-bold">
            <span>PEOPLE</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>PROBLEMS</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>RESOURCES</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>OPPORTUNITIES</span>
          </div>

          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-sm font-bold text-on-surface uppercase tracking-wider">Akshita Dalsaniya</span>
            <span className="text-[10px] font-mono text-outline uppercase tracking-wider">BBA — RK University</span>
          </div>

          <motion.button 
            onClick={nextScreen}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79,219,200,0.4)' }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ['0 0 0px rgba(79,219,200,0)', '0 0 15px rgba(79,219,200,0.2)', '0 0 0px rgba(79,219,200,0)'] }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            className="px-8 py-4 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface text-sm font-bold tracking-widest uppercase hover:bg-surface-variant hover:border-primary/50 transition-colors duration-300 relative overflow-hidden group"
          >
            <motion.div 
              animate={{ x: ['-100%', '200%'] }} 
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12"
            />
            <span className="relative z-10">Enter The Journey</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
