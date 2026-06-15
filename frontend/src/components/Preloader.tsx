import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const bootSequence = [
  "initializing letticia.dev...",
  "mounting core_modules...",
  "fetching career_history... [OK]",
  "establishing secure connection...",
  "verifying cryptographic keys...",
  "loading cyber_interface... [OK]",
  "SYSTEM ONLINE."
];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setProgress(Math.floor(((currentLine + 1) / bootSequence.length) * 100));
      }, Math.random() * 300 + 200); // Atraso aleatório entre 200-500ms
      return () => clearTimeout(timer);
    } else {
      // Fim da sequência, espera um pouco e conclui
      const finalTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(finalTimer);
    }
  }, [currentLine, onComplete]);

  // Gerar barra de progresso ASCII
  const totalBlocks = 20;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;
  const progressBar = `[${'#'.repeat(filledBlocks)}${'-'.repeat(emptyBlocks)}] ${progress}%`;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] text-[#00ff00] font-mono p-8 flex flex-col justify-end pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwNTA1MDUiLz48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iIzAwZmYwMCIvPjwvc3ZnPg==')]"></div>
      
      <div className="max-w-3xl w-full mx-auto relative z-10 flex flex-col gap-2">
        {bootSequence.slice(0, currentLine).map((line, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm md:text-base text-green-500"
          >
            <span className="mr-2">{'>'}</span>{line}
          </motion.div>
        ))}
        
        {currentLine < bootSequence.length && (
          <div className="text-sm md:text-base text-green-400 mt-2">
            <span className="mr-2">{'>'}</span>
            <span className="cursor-blink">_</span>
          </div>
        )}

        <div className="mt-8 text-xs md:text-sm text-green-600">
          <div>{progressBar}</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
