import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import GlassLayout from './layouts/GlassLayout';
import CyberLayout from './layouts/CyberLayout';
import Preloader from './components/Preloader';

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const [showPreloader, setShowPreloader] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(true);

  useEffect(() => {
    // When theme switches to hacker, run preloader
    if (theme === 'hacker') {
      setShowPreloader(true);
      setPreloaderDone(false);
    } else {
      setShowPreloader(false);
      setPreloaderDone(true);
    }
  }, [theme]);

  return (
    <BrowserRouter>
      {showPreloader && !preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}
      
      {(!showPreloader || preloaderDone) && (
        theme === 'hacker' ? <CyberLayout /> : <GlassLayout />
      )}
    </BrowserRouter>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
