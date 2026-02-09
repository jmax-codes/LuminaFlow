import React from 'react';
import { motion } from 'framer-motion';
import { HuntingMode } from '../../types';

interface BackgroundProps {
  mode: HuntingMode;
}

const Background: React.FC<BackgroundProps> = ({ mode }) => {
  const isWebsite = mode === 'website';

  // Colors adapted for the "Shadow/Blur" effect
  // Website Mode: Neon Cyan/Blue tones
  const blueColors = ['#00f3ff', '#0066ff', '#40c9ff'];
  // Voice Mode: Neon Purple/Violet tones
  const purpleColors = ['#bc13fe', '#7b2cbf', '#e056fd'];

  const color1 = isWebsite ? blueColors[0] : purpleColors[0];
  const color2 = isWebsite ? blueColors[1] : purpleColors[1];
  const color3 = isWebsite ? blueColors[2] : purpleColors[2];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050508] pointer-events-none">
      {/* 
         Visual Style: "Opera Neon" 
         - Large, diffuse gradient orbs acting as "moving shadows"
         - Heavy Gaussian blur
         - Prominent Grain/Noise texture
      */}

      {/* Orb 1 - Central Bloom */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
          x: ["-5%", "5%", "-5%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] rounded-full blur-[120px] md:blur-[180px] mix-blend-screen"
        style={{
           background: `radial-gradient(circle, ${color1} 0%, transparent 60%)`
        }}
      />

      {/* Orb 2 - Top Right Drifter */}
      <motion.div
        animate={{
          x: ["0%", "-15%", "0%"],
          y: ["0%", "15%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] md:w-[700px] md:h-[700px] rounded-full blur-[100px] md:blur-[140px] opacity-20 mix-blend-screen"
        style={{
           background: `radial-gradient(circle, ${color2} 0%, transparent 60%)`
        }}
      />

      {/* Orb 3 - Bottom Left Drifter */}
      <motion.div
        animate={{
          x: ["0%", "15%", "0%"],
          y: ["0%", "-15%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-[10%] -left-[10%] w-[70vw] h-[70vw] md:w-[900px] md:h-[900px] rounded-full blur-[100px] md:blur-[140px] opacity-20 mix-blend-screen"
        style={{
           background: `radial-gradient(circle, ${color3} 0%, transparent 60%)`
        }}
      />

      {/* Heavy Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }} 
      />

      {/* Vignette to focus center */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#050508]/60 z-10" />
    </div>
  );
};

export default Background;