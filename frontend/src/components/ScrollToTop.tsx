import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Observa a rolagem da página para mostrar ou esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      // Container da página do GlassLayout e do window
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
      
      // Checa também se houver scroll interno no cyber layout
      const cyberContainer = document.querySelector('.overflow-y-auto');
      const cyberScrolled = cyberContainer ? cyberContainer.scrollTop : 0;
      
      if (scrolled > 300 || cyberScrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, true);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility, true);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
    const root = document.getElementById('root');
    if (root) {
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Tenta rolar também o container interno do CyberLayout caso o tema esteja hacker
    const cyberContainer = document.querySelector('.overflow-y-auto');
    if (cyberContainer) {
      cyberContainer.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full text-white transition-colors focus:outline-none flex items-center justify-center ${
            theme === 'hacker' 
              ? 'bg-green-600 hover:bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' 
              : 'bg-purple-600 hover:bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
          }`}
          aria-label="Voltar para o topo"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
