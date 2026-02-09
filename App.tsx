import React, { useState } from 'react';
import { View, HuntingMode } from './types';
import Sidebar from './components/Layout/Sidebar';
import Background from './components/Layout/Background';
import DiscoveryView from './views/DiscoveryView';
import OutreachView from './views/OutreachView';
import VoiceBuilderView from './views/VoiceBuilderView';
import BillingView from './views/BillingView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('discovery');
  const [huntingMode, setHuntingMode] = useState<HuntingMode>('website');

  const renderView = () => {
    switch (currentView) {
      case 'discovery':
        return <DiscoveryView mode={huntingMode} setMode={setHuntingMode} />;
      case 'outreach':
        return <OutreachView />;
      case 'builder':
        return <VoiceBuilderView />;
      case 'billing':
        return <BillingView />;
      default:
        return <DiscoveryView mode={huntingMode} setMode={setHuntingMode} />;
    }
  };

  return (
    <div className="relative w-full h-[100dvh] text-white font-sans overflow-hidden selection:bg-neon-blue/30">
      <Background mode={huntingMode} />
      
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        mode={huntingMode}
      />
      
      {/* 
        Responsive Layout:
        Mobile: Full width (left-0), Bottom padding for nav (bottom-20)
        Desktop: Left offset for sidebar (md:left-24), Full height (md:bottom-0)
      */}
      <main className="absolute top-0 left-0 right-0 bottom-20 md:left-24 md:bottom-0 overflow-hidden transition-all duration-300">
        {/* Top Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#050508] to-transparent z-20 pointer-events-none" />
        
        {/* Content */}
        <div className="h-full w-full relative z-10">
          {renderView()}
        </div>

        {/* Bottom Fade Mask - Adjust for mobile to blend with nav */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050508] to-transparent z-20 pointer-events-none" />
      </main>
    </div>
  );
};

export default App;