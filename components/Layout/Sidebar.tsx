import React from 'react';
import { motion } from 'framer-motion';
import { Telescope, Send, Mic, CreditCard, Settings, LayoutGrid } from 'lucide-react';
import { View, HuntingMode } from '../../types';

interface SidebarProps {
  currentView: View;
  onChangeView: (view: View) => void;
  mode: HuntingMode;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, mode }) => {
  const accentColor = mode === 'website' ? 'text-neon-blue shadow-neon-blue/50' : 'text-neon-purple shadow-neon-purple/50';
  const glowColor = mode === 'website' ? 'rgba(0, 243, 255, 0.4)' : 'rgba(188, 19, 254, 0.4)';

  const navItems = [
    { id: 'discovery', icon: Telescope, label: 'Discovery' },
    { id: 'outreach', icon: Send, label: 'Outreach' },
    { id: 'builder', icon: Mic, label: 'AI Builder' },
    { id: 'billing', icon: CreditCard, label: 'Revenue' },
  ];

  return (
    <>
      {/* 
        Desktop: Vertical Sidebar (Left) 
        Mobile: Horizontal Bottom Bar (Bottom)
      */}
      <motion.div 
        initial={{ y: 100, x: 0 }}
        animate={{ y: 0, x: 0 }}
        className={`
          fixed z-50 
          bg-black/40 backdrop-blur-xl border-white/10
          
          /* Mobile Styles */
          bottom-0 left-0 right-0 h-20 pb-2
          flex flex-row items-center justify-around px-2 border-t shadow-[0_-4px_20px_rgba(0,0,0,0.4)]
          
          /* Desktop Styles */
          md:top-0 md:bottom-0 md:left-0 md:w-24 md:h-auto md:pb-0
          md:flex-col md:justify-start md:py-8 md:border-r md:border-t-0 md:shadow-none
        `}
      >
        {/* Logo - Hidden on Mobile */}
        <div className="hidden md:block mb-12">
          <div className={`p-3 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 ${accentColor}`}>
             <LayoutGrid size={28} />
          </div>
        </div>

        {/* Nav Items Container */}
        <div className="flex-1 flex w-full md:flex-col gap-1 md:gap-8 px-1 md:px-4 justify-around md:justify-start">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onChangeView(item.id as View)}
                className="relative group flex flex-col items-center justify-center flex-1 md:flex-none aspect-square md:w-full rounded-2xl transition-all duration-300"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/5 rounded-2xl border border-white/10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                      boxShadow: `0 0 20px ${glowColor}, inset 0 0 10px ${glowColor}`
                    }}
                  />
                )}
                
                <item.icon 
                  size={24} 
                  className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} 
                />
                
                {/* Labels: Visible on Mobile for Active, Visible on Desktop Hover */}
                <span className={`
                  relative z-10 text-[10px] mt-1 font-medium tracking-wide transition-opacity duration-300
                  ${isActive ? 'opacity-100' : 'opacity-60 md:opacity-0 md:group-hover:opacity-100'}
                `}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Settings - Hidden on Mobile */}
        <div className="mt-auto hidden md:block">
          <button className="p-4 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all">
            <Settings size={24} />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;