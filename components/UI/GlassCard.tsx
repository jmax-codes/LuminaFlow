import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  hoverEffect = false,
  onClick,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: [0.23, 1, 0.32, 1] // Liquid easing
      }}
      whileHover={hoverEffect ? { 
        scale: 1.01, 
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)"
      } : {}}
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-white/[0.03] 
        backdrop-blur-[24px] 
        border border-white/[0.08]
        rounded-2xl
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
        ${hoverEffect ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Inner Highlight for glass effect */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      
      {children}
    </motion.div>
  );
};

export default GlassCard;