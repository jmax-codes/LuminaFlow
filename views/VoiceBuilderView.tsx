import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Play, Pause, Wand2, Globe, BrainCircuit } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';

const VoiceBuilderView: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState('');

  const handleGenerate = () => {
    if (!url) return;
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <div className="h-full flex items-center justify-center p-4 md:p-8 overflow-y-auto">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-20">
        
        {/* Input Section */}
        <div className="space-y-6">
          <div className="mb-2">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Voice Factory</h1>
            <p className="text-sm md:text-base text-gray-400">Clone a brand voice from a single URL.</p>
          </div>

          <GlassCard className="p-6 md:p-8 space-y-6 border-neon-purple/20 shadow-[0_0_50px_-20px_rgba(188,19,254,0.2)]">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Target Website URL</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Globe className="h-5 w-5 text-gray-500 group-focus-within:text-neon-purple transition-colors" />
                </div>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple placeholder-gray-600 text-white transition-all outline-none text-sm md:text-base"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                 <div className="text-xs text-gray-500 mb-1">Tone</div>
                 <div className="text-white font-medium text-sm md:text-base">Professional</div>
               </div>
               <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                 <div className="text-xs text-gray-500 mb-1">Language</div>
                 <div className="text-white font-medium text-sm md:text-base">English (US)</div>
               </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !url}
              className={`
                w-full py-4 rounded-xl font-bold text-white text-lg tracking-wide relative overflow-hidden group
                ${isGenerating ? 'cursor-not-allowed' : 'hover:scale-[1.02]'}
                transition-all duration-300
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-pink-600 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              
              <div className="relative flex items-center justify-center gap-2">
                {isGenerating ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <BrainCircuit className="w-6 h-6" />
                    </motion.div>
                    <span>Analyzing Brand...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    <span>Generate Agent</span>
                  </>
                )}
              </div>
            </button>
          </GlassCard>
        </div>

        {/* Preview Section */}
        <div className="flex flex-col justify-center">
          <GlassCard className="p-6 md:p-8 relative min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center text-center overflow-hidden">
             {/* Background Pulse */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-neon-purple/20 blur-[60px] md:blur-[80px] rounded-full pointer-events-none" />

             <div className="relative z-10 w-full">
               <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 mx-auto mb-6 flex items-center justify-center shadow-2xl relative">
                  {isPlaying && (
                    <motion.div 
                      className="absolute inset-0 rounded-full border border-neon-purple"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  <Mic className="text-white w-8 h-8 md:w-10 md:h-10" />
               </div>

               <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Agent Preview</h3>
               <p className="text-gray-400 text-xs md:text-sm mb-8">Generated from {url || 'source...'}</p>

               {/* Waveform Animation */}
               <div className="flex items-center justify-center gap-1 h-12 mb-8">
                 {[...Array(20)].map((_, i) => (
                   <motion.div
                     key={i}
                     className="w-1 md:w-1.5 bg-neon-purple/80 rounded-full"
                     animate={isPlaying ? {
                       height: [10, Math.random() * 40 + 10, 10],
                     } : { height: 4 + Math.sin(i) * 3 }}
                     transition={{
                       duration: 0.5,
                       repeat: Infinity,
                       delay: i * 0.05
                     }}
                   />
                 ))}
               </div>

               <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]"
               >
                 {isPlaying ? <Pause fill="black" /> : <Play fill="black" className="ml-1" />}
               </button>
             </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default VoiceBuilderView;