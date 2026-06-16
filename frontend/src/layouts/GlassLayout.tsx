import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Terminal, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
    }
    setIsOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Fallback garantido
    const root = document.getElementById('root');
    if (root) {
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.history.pushState(null, '', '/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border-glass px-6 py-4 flex items-center justify-between transition-all duration-300">
      <Link to="/" onClick={scrollToTop} className="font-bold text-xl tracking-tight text-[var(--text-main)] flex items-center gap-2 group">
        <div className="w-2 h-2 rounded-full bg-purple-500 neon-glow group-hover:animate-ping"></div>
        Lettícia Sabino
      </Link>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-6 text-sm font-medium text-muted items-center">
          <a href="#home" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-[var(--text-main)] transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[var(--text-main)] transition-colors">Sobre</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:text-[var(--text-main)] transition-colors">Experiência</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-[var(--text-main)] transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-[var(--text-main)] transition-colors">Projetos</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[var(--text-main)] transition-colors">Contato</a>
          <span className="w-px h-4 bg-border-glass"></span>
          <Link to="/meu-curriculo" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
            Meu Currículo
          </Link>
        </div>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full glass-effect-hover text-muted hover:text-[var(--text-main)] transition-all flex items-center justify-center"
          aria-label="Toggle Theme"
          title={`Alternar para modo Cyber Hacker`}
        >
          <Terminal size={18} />
        </button>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-muted hover:text-[var(--text-main)] transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[100%] left-0 right-0 glass-effect border-t border-border-glass flex flex-col p-6 gap-6 md:hidden z-50 animate-in slide-in-from-top-2 shadow-2xl">
          <a href="#home" onClick={(e) => handleNavClick(e, '#hero')} className="text-[var(--text-main)] font-semibold text-lg hover:text-purple-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-[var(--text-main)] font-semibold text-lg hover:text-purple-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">Sobre</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-[var(--text-main)] font-semibold text-lg hover:text-purple-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">Experiência</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="text-[var(--text-main)] font-semibold text-lg hover:text-purple-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-[var(--text-main)] font-semibold text-lg hover:text-purple-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">Projetos</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-[var(--text-main)] font-semibold text-lg hover:text-purple-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">Contato</a>
          <Link to="/meu-curriculo" onClick={() => setIsOpen(false)} className="text-purple-400 font-bold text-lg py-3 px-4 rounded-lg hover:bg-purple-500/10 mt-2 border-t border-border-glass">Meu Currículo</Link>
        </div>
      )}
    </nav>
  );
};

const GlassLayout: React.FC = () => {
  return (
    <div className="min-h-screen font-sans relative">
      {/* Esferas brilhantes de fundo */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none z-0"></div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meu-curriculo" element={<Resume />} />
      </Routes>
      <footer className="relative z-10 border-t border-border-glass py-8 text-center text-muted text-sm glass-effect flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="https://github.com/letticiasabino" target="_blank" rel="noreferrer" className="text-muted hover:text-[var(--text-main)] transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/letticiasabino-desenvolvedora" target="_blank" rel="noreferrer" className="text-muted hover:text-[var(--text-main)] transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:letticiasabinoc@gmail.com" className="text-muted hover:text-[var(--text-main)] transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Lettícia Sabino. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default GlassLayout;
