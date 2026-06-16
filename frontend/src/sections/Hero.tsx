import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Download, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const phrases = [
  "Desenvolvedora Backend em construção constante",
  "Node.js | Python | React | Next.js",
  "De Tech Sales & Support para Software Engineering",
  "Construindo APIs RESTful e soluções escaláveis"
];

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center text-center py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)', scale: 0.9 }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="flex flex-col items-center w-full"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative mb-8 group"
        >
          {/* Bits Flutuantes */}
          {[
            { v: '0', t: 'top-0 -left-6', color: 'text-purple-400', size: 'text-xs', dur: 4, del: 0, x: 10, y: -15, rot: 15 },
            { v: '1', t: 'bottom-4 -right-6', color: 'text-pink-400', size: 'text-sm', dur: 5, del: 1, x: -15, y: 20, rot: -10 },
            { v: '1', t: '-top-4 right-2', color: 'text-green-400', size: 'text-xs', dur: 6, del: 2, x: -10, y: -20, rot: 20 },
            { v: '0', t: '-bottom-4 -left-2', color: 'text-purple-300', size: 'text-xs', dur: 4.5, del: 0.5, x: 15, y: 15, rot: -20 },
            { v: '1', t: 'top-1/2 -left-10', color: 'text-green-300', size: 'text-[10px]', dur: 3.5, del: 1.5, x: 12, y: -10, rot: 45 },
            { v: '0', t: 'top-1/3 -right-8', color: 'text-purple-500', size: 'text-xs', dur: 5.5, del: 0.8, x: -12, y: -15, rot: -30 },
            { v: '1', t: 'bottom-10 -left-8', color: 'text-pink-500', size: 'text-[10px]', dur: 4.2, del: 2.5, x: 8, y: 18, rot: 10 },
            { v: '0', t: '-bottom-8 right-6', color: 'text-green-500', size: 'text-xs', dur: 4.8, del: 1.2, x: -10, y: 12, rot: -15 },
            { v: '1', t: '-top-8 left-10', color: 'text-purple-300', size: 'text-[10px]', dur: 3.8, del: 0.3, x: 15, y: -8, rot: 60 },
            { v: '0', t: 'bottom-0 right-10', color: 'text-pink-300', size: 'text-xs', dur: 5.2, del: 1.8, x: -18, y: -10, rot: -45 },
          ].map((bit, i) => (
            <motion.div 
              key={i}
              className={`absolute ${bit.t} ${bit.color} font-mono ${bit.size} opacity-60 pointer-events-none z-20`}
              animate={{ y: [0, bit.y, 0], x: [0, bit.x, 0], rotate: [0, bit.rot, 0] }}
              transition={{ duration: bit.dur, repeat: Infinity, ease: "easeInOut", delay: bit.del }}
            >{bit.v}</motion.div>
          ))}

          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-700 animate-[spin_4s_linear_infinite] z-0"></div>
          <img src="https://github.com/letticiasabino.png" alt="Lettícia Sabino" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#030712] object-cover z-10 shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-shadow duration-500" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 px-5 py-2 rounded-full glass-effect border-purple-500/30 text-purple-300 text-sm font-medium tracking-wide flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse neon-glow"></span>
          {resumeData.title.toUpperCase()}
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight">
          Olá, eu sou <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient-x cursor-blink">
            {resumeData.name}
          </span>
        </h1>
        
        <div className="text-base sm:text-lg md:text-xl text-muted mb-10 max-w-2xl font-mono h-24 md:h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentPhrase}
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              {phrases[currentPhrase]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto px-4 sm:px-0">
          <a 
            href="#projects" 
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 overflow-hidden neon-glow shadow-[0_0_20px_rgba(168,85,247,0.4)] text-sm sm:text-base"
          >
            <span className="relative z-10">Ver Projetos</span>
            <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="/curriculo/letticia-sabino-dev.pdf" 
            download="Letticia-Sabino-Dev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 sm:px-8 sm:py-4 glass-effect hover:bg-white/10 text-[var(--text-main)] rounded-full font-semibold transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2 group border border-white/10 hover:border-purple-500/50 text-sm sm:text-base"
          >
            Baixar currículo
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
        
        <div className="mt-12 flex items-center gap-6">
          <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] rounded-full p-2" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-[#0a66c2] transition-colors hover:shadow-[0_0_15px_rgba(10,102,194,0.5)] rounded-full p-2 bg-white/0 hover:bg-white/10" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
      </motion.div>
      
      {/* Indicador de rolagem */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hidden md:flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
