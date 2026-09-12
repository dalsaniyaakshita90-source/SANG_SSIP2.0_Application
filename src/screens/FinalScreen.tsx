import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../AppContext';

export function FinalScreen() {
  const { navigate } = useApp();

  const handleStartAgain = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('entry');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[calc(100vh-4rem)] pb-24"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-on-surface tracking-tight uppercase mb-4">
            SANG
          </h2>
          <p className="text-lg md:text-xl font-mono text-primary font-bold uppercase tracking-widest mb-10">
            Connect. Understand. Route. Act.
          </p>
          <p className="text-2xl md:text-4xl text-on-surface-variant font-medium leading-tight">
            “Don’t make people enter the network.<br/>
            Bring the network to the person.”
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-2 mb-12"
        >
          <span className="text-lg font-bold text-on-surface">Akshita Dalsaniya</span>
          <span className="text-sm font-mono text-outline uppercase tracking-wider">RK University</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative z-50 pointer-events-auto"
        >
          <motion.button 
            type="button"
            onClick={handleStartAgain}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface text-sm font-bold uppercase tracking-wider hover:bg-surface-variant hover:border-primary/50 transition-all relative z-50 cursor-pointer pointer-events-auto"
          >
            Start Again
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
