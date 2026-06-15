import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackgroundCode from '../components/BackgroundCode';
import CyberHome from '../cyber/CyberHome';
import CyberResume from '../cyber/CyberResume';
import CyberTopbar from './components/CyberTopbar';
import CyberSidebar from './components/CyberSidebar';

const CyberLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans flex flex-col relative overflow-hidden">
      <BackgroundCode />
      <div className="scanlines"></div>
      
      <CyberTopbar />
      
      <div className="flex-1 flex pt-12 overflow-hidden relative z-10">
        <CyberSidebar />
        
        {/* Área de Conteúdo Principal - Rola normalmente */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-4 md:p-8 pb-24">
            <Routes>
              <Route path="/" element={<CyberHome />} />
              <Route path="/meu-curriculo" element={<CyberResume />} />
            </Routes>
          </div>
        </div>
      </div>
      
      {/* Barra de Status */}
      <div className="fixed bottom-0 left-0 right-0 h-8 bg-[#0d1117] border-t border-green-500/30 flex items-center justify-between px-4 text-xs font-mono z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-green-500">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            sistema online
          </div>
          <div className="text-gray-500 hidden sm:block">branch: main</div>
        </div>
        <div className="text-gray-500 flex gap-4">
          <span className="hidden sm:block">última build: há 2min</span>
          <span>São Gonçalo, RJ</span>
        </div>
      </div>
    </div>
  );
};

export default CyberLayout;
