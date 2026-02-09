import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Zap, ArrowUpRight, MoreHorizontal } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import { Lead } from '../types';

const leads: Lead[] = [
  { id: '1', name: 'Apex Dental Studio', niche: 'Dentist', rating: 4.9, reviews: 150, location: 'Miami, FL', websiteStatus: 'missing', aiVoiceStatus: 'none', techHealth: 25, phone: '+1 555-0001' },
  { id: '2', name: 'Ocean Drive Motors', niche: 'Automotive', rating: 4.2, reviews: 88, location: 'Miami, FL', websiteStatus: 'active', aiVoiceStatus: 'none', techHealth: 65, phone: '+1 555-0002' },
  { id: '3', name: 'Velvet Lounge', niche: 'Hospitality', rating: 3.9, reviews: 420, location: 'Miami, FL', websiteStatus: 'missing', aiVoiceStatus: 'none', techHealth: 15, phone: '+1 555-0003' },
  { id: '4', name: 'Secure Home Systems', niche: 'Security', rating: 4.7, reviews: 32, location: 'Miami, FL', websiteStatus: 'active', aiVoiceStatus: 'none', techHealth: 88, phone: '+1 555-0004' },
  { id: '5', name: 'FitLife Gym', niche: 'Fitness', rating: 4.5, reviews: 210, location: 'Miami, FL', websiteStatus: 'missing', aiVoiceStatus: 'none', techHealth: 40, phone: '+1 555-0005' },
];

const OutreachView: React.FC = () => {
  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto pb-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Command Center</h1>
          <p className="text-sm md:text-base text-gray-400">Manage your high-value opportunities.</p>
        </div>
        <div className="flex gap-3">
          <GlassCard className="px-4 py-2 flex items-center gap-2 text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Active Session
          </GlassCard>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.map((lead, idx) => (
          <GlassCard key={lead.id} delay={idx * 0.05} className="p-6 group hover:border-white/20 transition-colors">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg md:text-xl font-bold font-display text-white">{lead.name}</h3>
                  <button className="text-gray-500 hover:text-white transition-colors">
                    <ArrowUpRight size={14} />
                  </button>
                </div>
                <p className="text-xs md:text-sm text-gray-400">{lead.location} • {lead.niche}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 cursor-pointer">
                <MoreHorizontal size={16} />
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-gray-400 mb-1">Tech Health</div>
                <div className="flex items-end gap-2">
                   <div className="text-lg md:text-xl font-mono font-bold text-neon-blue">{lead.techHealth}%</div>
                   <div className="flex-1 h-2 bg-white/10 rounded-full mb-1.5 overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${lead.techHealth}%` }}
                       className={`h-full ${lead.techHealth < 40 ? 'bg-red-500' : 'bg-neon-blue'}`} 
                     />
                   </div>
                </div>
              </div>
              <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                <div className="text-xs text-gray-400 mb-1">Maps Rating</div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <span className="text-lg md:text-xl font-mono font-bold">{lead.rating}</span>
                  <div className="flex text-[10px] space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-1 h-3 rounded-full ${i < Math.floor(lead.rating) ? 'bg-yellow-400' : 'bg-gray-700'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 bg-white/5 hover:bg-neon-blue/20 hover:text-neon-blue border border-white/10 hover:border-neon-blue/50 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]">
                <Mail size={18} />
                <span className="text-sm font-medium">Pitch</span>
              </button>
              
              <button className="flex-1 relative overflow-hidden bg-white/5 hover:bg-neon-purple/20 hover:text-neon-purple border border-white/10 hover:border-neon-purple/50 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(188,19,254,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]" />
                <Phone size={18} />
                <span className="text-sm font-medium">Call</span>
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default OutreachView;