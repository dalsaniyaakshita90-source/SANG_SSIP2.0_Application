import React, { createContext, useContext, useState } from 'react';

export type ScreenID = 
  | 'entry' 
  | 'explore' 
  | 'problem'
  | 'insight'
  | 'pipeline' 
  | 'query' 
  | 'prototype' 
  | 'context-agri' 
  | 'context-333' 
  | 'context-voice' 
  | 'built-vs-next' 
  | 'dedicated'
  | 'future'
  | 'why-ssip' 
  | 'roadmap' 
  | 'impact'
  | 'final';

const LINEAR_FLOW: ScreenID[] = [
  'entry', 
  'problem', 
  'insight', 
  'explore', 
  'query', 
  'pipeline', 
  'prototype', 
  'context-agri', 
  'context-333', 
  'context-voice', 
  'built-vs-next', 
  'dedicated',
  'future',
  'why-ssip', 
  'roadmap', 
  'impact', 
  'final'
];

interface AppContextType {
  currentScreen: ScreenID;
  navigate: (screen: ScreenID) => void;
  nextScreen: () => void;
  prevScreen: () => void;
  progress: number;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<ScreenID>('entry');

  const navigate = (screen: ScreenID) => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setCurrentScreen(screen);
  };

  const nextScreen = () => {
    const idx = LINEAR_FLOW.indexOf(currentScreen);
    if (idx !== -1 && idx < LINEAR_FLOW.length - 1) {
      navigate(LINEAR_FLOW[idx + 1]);
    }
  };

  const prevScreen = () => {
    const idx = LINEAR_FLOW.indexOf(currentScreen);
    if (idx > 0) {
      navigate(LINEAR_FLOW[idx - 1]);
    }
  };

  const progress = (() => {
    const baseIdx = LINEAR_FLOW.indexOf(currentScreen);
    return baseIdx / (LINEAR_FLOW.length - 1);
  })();

  return (
    <AppContext.Provider value={{ currentScreen, navigate, nextScreen, prevScreen, progress }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
