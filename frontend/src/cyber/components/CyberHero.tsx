import React from 'react';
import { resumeData } from '../../data/resumeData';

const CyberHero: React.FC = () => {
  return (
    <div className="mb-12 border border-[#1f2937] bg-[#0d1117] rounded-lg p-6 relative overflow-hidden group hover:border-green-500/50 transition-colors">
      <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
      <div className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
        <span className="text-green-500 font-bold">~$</span> Olá, eu sou Lettícia Sabino.<br />
        Desenvolvedora Full Stack em transição de carreira, com uma trajetória que une operações, suporte técnico e liderança. Hoje construo sistemas reais com visão de produto, foco em usabilidade e uma obsessão saudável por resolver problemas de negócio com tecnologia.<span className="cursor-blink bg-green-500 text-transparent ml-1">_</span>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
        <a href="/curriculo/letticia-sabino-dev.pdf" download="Letticia-Sabino-Dev.pdf" target="_blank" className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/50 rounded hover:bg-green-500/20 transition-colors flex items-center gap-2">
          {'>'} baixar_curriculo()
        </a>
        <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#161b22] text-gray-300 border border-gray-700 rounded hover:border-gray-500 transition-colors flex items-center gap-2">
          {'>'} ver_github()
        </a>
      </div>
    </div>
  );
};

export default CyberHero;
