import React from 'react';
import { motion } from 'framer-motion';

const codeSnippet = `import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, Terminal, Droplet } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isResume = location.pathname === '/meu-curriculo';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b-0 py-4 px-6 md:px-12 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl tracking-tight text-[var(--text-main)] flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-purple-500 neon-glow"></div>
        Lettícia Sabino
      </Link>
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full glass-effect-hover text-muted hover:text-[var(--text-main)] transition-all flex items-center justify-center"
        >
          {theme === 'glass' ? <Terminal size={18} /> : <Droplet size={18} />}
        </button>
      </div>
    </nav>
  );
};

export const resumeData = {
  name: "Lettícia Sabino",
  title: "Desenvolvedora Full Stack",
  about: "Desenvolvedora em transição de carreira com foco em Backend...",
  contact: {
    email: "letticiasabinoc@gmail.com",
    github: "https://github.com/letticiasabino",
    linkedin: "https://linkedin.com/in/letticiasabino-desenvolvedora",
  }
};

const CyberLayout: React.FC = () => {
  // INICIALIZANDO SISTEMA...
  // CARREGANDO MÓDULOS...
  // CONEXÃO ESTABELECIDA.
  return <div className="system-ready"></div>;
};

export default CyberLayout;`;

const BackgroundCode: React.FC = () => {
  // Repete o snippet algumas vezes para preencher a tela
  const fullText = Array(10).fill(codeSnippet).join('\n\n');

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.08] text-[#00ff00] font-mono text-xs md:text-sm whitespace-pre select-none">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-50%' }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 100 // Rolagem lenta
        }}
      >
        {fullText}
      </motion.div>
    </div>
  );
};

export default BackgroundCode;
