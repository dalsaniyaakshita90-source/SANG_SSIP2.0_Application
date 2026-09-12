import React from 'react';
import { AnimatePresence } from 'motion/react';
import { AppProvider, useApp } from './AppContext';
import { Layout } from './components/Layout';

// Screens
import { EntryScreen } from './screens/EntryScreen';
import { ExploreScreen } from './screens/ExploreScreen';
import { ProblemScreen } from './screens/ProblemScreen';
import { InsightScreen } from './screens/InsightScreen';
import { QueryScreen } from './screens/QueryScreen';
import { PipelineScreen } from './screens/PipelineScreen';
import { PrototypeScreen } from './screens/PrototypeScreen';
import { ContextAgriScreen } from './screens/ContextAgriScreen';
import { Context333Screen } from './screens/Context333Screen';
import { ContextVoiceScreen } from './screens/ContextVoiceScreen';
import { BuiltVsNextScreen } from './screens/BuiltVsNextScreen';
import { DedicatedExplorationsScreen } from './screens/DedicatedExplorationsScreen';
import { FutureNetworkScreen } from './screens/FutureNetworkScreen';
import { WhySSIPScreen } from './screens/WhySSIPScreen';
import { RoadmapScreen } from './screens/RoadmapScreen';
import { ImpactScreen } from './screens/ImpactScreen';
import { FinalScreen } from './screens/FinalScreen';

function ScreenManager() {
  const { currentScreen } = useApp();

  return (
    <AnimatePresence mode="wait">
      {currentScreen === 'entry' && <EntryScreen key="entry" />}
      {currentScreen === 'explore' && <ExploreScreen key="explore" />}
      {currentScreen === 'problem' && <ProblemScreen key="problem" />}
      {currentScreen === 'insight' && <InsightScreen key="insight" />}
      {currentScreen === 'pipeline' && <PipelineScreen key="pipeline" />}
      {currentScreen === 'query' && <QueryScreen key="query" />}
      {currentScreen === 'prototype' && <PrototypeScreen key="prototype" />}
      {currentScreen === 'context-agri' && <ContextAgriScreen key="context-agri" />}
      {currentScreen === 'context-333' && <Context333Screen key="context-333" />}
      {currentScreen === 'context-voice' && <ContextVoiceScreen key="context-voice" />}
      {currentScreen === 'built-vs-next' && <BuiltVsNextScreen key="built-vs-next" />}
      {currentScreen === 'dedicated' && <DedicatedExplorationsScreen key="dedicated" />}
      {currentScreen === 'future' && <FutureNetworkScreen key="future" />}
      {currentScreen === 'why-ssip' && <WhySSIPScreen key="why-ssip" />}
      {currentScreen === 'roadmap' && <RoadmapScreen key="roadmap" />}
      {currentScreen === 'impact' && <ImpactScreen key="impact" />}
      {currentScreen === 'final' && <FinalScreen key="final" />}
    </AnimatePresence>
  );
}

function App() {
  return (
    <AppProvider>
      <Layout>
        <ScreenManager />
      </Layout>
    </AppProvider>
  );
}

export default App;
