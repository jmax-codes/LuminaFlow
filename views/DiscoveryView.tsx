import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Globe, PhoneOff, CheckCircle2, XCircle } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import { HuntingMode, Lead } from '../types';

interface DiscoveryViewProps {
  mode: HuntingMode;
  setMode: (mode: HuntingMode) => void;
}

const mockWebLeads: Lead[] = [
  { id: '1', name: 'Starlight Bistro', niche: 'Restaurant', rating: 4.8, reviews: 342, location: 'Austin, TX', websiteStatus: 'missing', aiVoiceStatus: 'none', techHealth: 30, phone: '+1 555-0123' },
  { id: '2', name: 'Elite Plumbing', niche: 'Plumbing', rating: 4.5, reviews: 89, location: 'Austin, TX', websiteStatus: 'missing', aiVoiceStatus: 'none', techHealth: 45, phone: '+1 555-0124' },
  { id: '3', name: 'Green Leaf Spa', niche: 'Beauty', rating: 4.9, reviews: 120, location: 'Austin, TX', websiteStatus: 'active', aiVoiceStatus: 'none', techHealth: 80, phone: '+1 555-0125' },
];

const mockVoiceLeads: Lead[] = [
  { id: '4', name: 'TechFix Auto', niche: 'Automotive', rating: 4.2, reviews: 56, location: 'Austin, TX', websiteStatus: 'active', aiVoiceStatus: 'none', techHealth: 60, phone: '+1 555-0199' },
  { id: '5', name: 'Legal Eagles', niche: 'Legal', rating: 5.0, reviews: 12, location: 'Austin, TX', websiteStatus: 'active', aiVoiceStatus: 'none', techHealth: 55, phone: '+1 555-0200' },
  { id: '6', name: 'Sky High Roofing', niche: 'Construction', rating: 3.8, reviews: 201, location: 'Austin, TX', websiteStatus: 'broken', aiVoiceStatus: 'none', techHealth: 40, phone: '+1 555-0201' },
];

const DiscoveryView: React.FC<DiscoveryViewProps> = ({ mode, setMode }) => {
  const isWebsite = mode === 'website';
  const accentColor = isWebsite ? 'text-neon-blue' : 'text-neon-purple';
  const glowBorder = isWebsite ? 'border-neon-blue/30' : 'border-neon-purple/30';
  const shadowGlow = isWebsite ? 'shadow-[0_0_30px_-5px_rgba(0,243,255,0.3)]' : 'shadow-[0_0_30px_-5px_rgba(188,19,254,0.3)]';

  return (
    <div className="flex flex-col h-full overflow-hidden p-4 md:p-8 gap-4 md:gap-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center space-y-4 md:space-y-8 mt-2 md:mt-4 flex-shrink-0"
      >
        <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-lg p-1 rounded-full border border-white/10 relative w-full md:w-auto">
          <motion.div 
             className={`absolute inset-y-1 w-[50%] bg-white/10 rounded-full border border-white/10 ${shadowGlow}`}
             animate={{ 
               left: isWebsite ? '4px' : 'calc(50% - 4px)',
               width: 'calc(50%)'
             }}
             transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <button 
            onClick={() => setMode('website')}
            className={`relative z-10 flex-1 md:flex-none px-2 md:px-8 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${isWebsite ? 'text-white' : 'text-gray-400'}`}
          >
            Website Hunting
          </button>
          <button 
            onClick={() => setMode('voice')}
            className={`relative z-10 flex-1 md:flex-none px-2 md:px-8 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${!isWebsite ? 'text-white' : 'text-gray-400'}`}
          >
            Voice Agents
          </button>
        </div>

        {/* Search Bar */}
        <div className={`flex flex-col md:flex-row items-center w-full max-w-3xl bg-white/5 backdrop-blur-xl border ${glowBorder} rounded-2xl p-2 transition-all duration-500 ${shadowGlow} gap-2 md:gap-0`}>
          <div className="w-full md:flex-1 flex items-center px-4 md:border-r border-white/10 bg-white/5 md:bg-transparent rounded-xl md:rounded-none h-12 md:h-auto">
            <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Niche (e.g. Dentist)" 
              className="bg-transparent w-full outline-none text-white placeholder-gray-500 h-full font-display text-sm md:text-base"
            />
          </div>
          <div className="w-full md:flex-1 flex items-center px-4 bg-white/5 md:bg-transparent rounded-xl md:rounded-none h-12 md:h-auto">
            <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Location (e.g. Miami)" 
              className="bg-transparent w-full outline-none text-white placeholder-gray-500 h-full font-display text-sm md:text-base"
            />
          </div>
          <button className={`w-full md:w-auto px-8 py-3 rounded-xl font-bold text-black transition-transform active:scale-95 flex-shrink-0 ${isWebsite ? 'bg-neon-blue' : 'bg-neon-purple'}`}>
            Scan
          </button>
        </div>
      </motion.div>

      {/* Results Columns */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 overflow-hidden min-h-0">
        {/* Left Column: Website Status - Hidden on mobile if not in website mode */}
        <div className={`
          flex flex-col gap-4 overflow-y-auto pr-2 pb-20 
          transition-opacity duration-500 scrollbar-thin
          ${isWebsite ? 'opacity-100' : 'opacity-40 grayscale-[0.5] hidden md:flex'}
        `}>
          <div className="flex items-center justify-between mb-2 flex-shrink-0">
            <h2 className="text-lg md:text-xl font-display font-semibold text-white/90">Businesses <span className="text-neon-blue">Without Websites</span></h2>
            <div className="px-2 py-1 rounded bg-neon-blue/10 text-neon-blue text-xs font-mono">Found: 124</div>
          </div>
          
          {mockWebLeads.map((lead, i) => (
            <GlassCard key={lead.id} delay={i * 0.1} hoverEffect className="p-4 md:p-5 flex items-center justify-between group flex-shrink-0">
              <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-neon-blue transition-colors">{lead.name}</h3>
                <div className="flex items-center text-xs md:text-sm text-gray-400 mt-1 space-x-3">
                  <span className="flex items-center truncate"><MapPin size={12} className="mr-1 flex-shrink-0"/> <span className="truncate">{lead.location}</span></span>
                  <span className="flex items-center text-yellow-400 whitespace-nowrap"><Globe size={12} className="mr-1 text-gray-500 flex-shrink-0"/> {lead.niche}</span>
                </div>
              </div>
              <div className="flex flex-col items-end pl-2">
                <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                  <span className="font-bold text-sm md:text-base">{lead.rating}</span>
                  <span className="text-xs opacity-60">({lead.reviews})</span>
                </div>
                {lead.websiteStatus === 'missing' && (
                  <span className="px-2 md:px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] md:text-xs font-bold flex items-center whitespace-nowrap">
                    <XCircle size={10} className="mr-1" /> Missing Site
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Right Column: AI Voice Status - Hidden on mobile if not in voice mode */}
        <div className={`
          flex flex-col gap-4 overflow-y-auto pr-2 pb-20 
          transition-opacity duration-500 scrollbar-thin
          ${!isWebsite ? 'opacity-100' : 'opacity-40 grayscale-[0.5] hidden md:flex'}
        `}>
          <div className="flex items-center justify-between mb-2 flex-shrink-0">
            <h2 className="text-lg md:text-xl font-display font-semibold text-white/90">Businesses <span className="text-neon-purple">Without AI Agents</span></h2>
            <div className="px-2 py-1 rounded bg-neon-purple/10 text-neon-purple text-xs font-mono">Found: 87</div>
          </div>

          {mockVoiceLeads.map((lead, i) => (
            <GlassCard key={lead.id} delay={i * 0.1} hoverEffect className="p-4 md:p-5 flex items-center justify-between group flex-shrink-0">
               <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-neon-purple transition-colors">{lead.name}</h3>
                <div className="flex items-center text-xs md:text-sm text-gray-400 mt-1 space-x-3">
                  <span className="flex items-center truncate"><MapPin size={12} className="mr-1 flex-shrink-0"/> <span className="truncate">{lead.location}</span></span>
                  <span className="flex items-center whitespace-nowrap"><PhoneOff size={12} className="mr-1 flex-shrink-0"/> {lead.phone}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 pl-2">
                <div className="w-24 md:w-32 bg-white/5 rounded-full h-1.5 overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-[80%]" />
                </div>
                <span className="text-[10px] text-red-300 font-mono uppercase tracking-wider whitespace-nowrap">Missed Call Risk: HIGH</span>
                <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] md:text-xs font-bold whitespace-nowrap">
                  No AI Detected
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoveryView;