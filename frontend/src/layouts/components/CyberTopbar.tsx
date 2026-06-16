import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplet, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const CyberTopbar: React.FC = () => {
  const { toggleTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-[#0d1117] border-b border-green-500/30 flex items-center justify-between px-4 z-50 font-mono text-sm">
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 bg-[#161b22] px-4 py-1 rounded-t-md mt-2 border border-b-0 border-green-500/20">
          letticia.dev ~ {location.pathname === '/' ? '/home' : location.pathname}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-4 text-green-500/70">
          <Link to="/" className="hover:text-green-400 transition-colors">~/home</Link>
          <a href="#projects" className="hover:text-green-400 transition-colors">~/projects</a>
          <a href="#skills" className="hover:text-green-400 transition-colors">~/skills</a>
          <a href="#contact" className="hover:text-green-400 transition-colors">~/contact</a>
          <Link to="/meu-curriculo" className="hover:text-green-400 transition-colors text-purple-400">~/resume</Link>
        </div>
        <button 
          onClick={toggleTheme}
          className="text-gray-400 hover:text-white transition-colors"
          title="Alternar para modo Glass"
        >
          <Droplet size={18} />
        </button>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors ml-2"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[100%] left-0 right-0 bg-[#0d1117] border-b border-green-500/30 flex flex-col p-6 md:hidden z-50 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-green-400 font-bold text-lg hover:text-white transition-colors py-3 border-b border-gray-800">~/home</Link>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-green-400 font-bold text-lg hover:text-white transition-colors py-3 border-b border-gray-800">~/projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-green-400 font-bold text-lg hover:text-white transition-colors py-3 border-b border-gray-800">~/skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-green-400 font-bold text-lg hover:text-white transition-colors py-3 border-b border-gray-800">~/contact</a>
          <Link to="/meu-curriculo" onClick={() => setIsOpen(false)} className="text-purple-400 font-bold text-lg hover:text-purple-300 transition-colors py-4">~/resume</Link>
        </div>
      )}
    </div>
  );
};

export default CyberTopbar;
