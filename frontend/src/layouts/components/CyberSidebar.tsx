import React from 'react';
import { MapPin } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

const CyberSidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex w-72 flex-col gap-8 h-full bg-[#0d1117] border-r border-green-500/30 p-6 overflow-y-auto font-mono">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-4 group">
          <div className="absolute inset-0 rounded-full border-2 border-green-500 border-dashed animate-[spin_10s_linear_infinite]"></div>
          <img src="https://github.com/letticiasabino.png" alt="Lettícia" className="w-full h-full rounded-full object-cover p-2" />
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0d1117]"></div>
        </div>
        <h2 className="text-xl font-bold text-white tracking-widest">{resumeData.name}</h2>
        <p className="text-sm text-green-400 mt-1">@letticia.dev</p>
      </div>

      <div>
        <div className="text-xs text-gray-500 mb-3">// TECNOLOGIAS</div>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs border border-blue-500/50 text-blue-400 rounded">Node.js</span>
          <span className="px-2 py-1 text-xs border border-blue-400/50 text-blue-300 rounded">TypeScript</span>
          <span className="px-2 py-1 text-xs border border-green-500/50 text-green-400 rounded">React</span>
          <span className="px-2 py-1 text-xs border border-yellow-500/50 text-yellow-400 rounded">Python</span>
          <span className="px-2 py-1 text-xs border border-green-600/50 text-green-500 rounded">Django</span>
        </div>
      </div>

      <div>
        <div className="text-xs text-gray-500 mb-3">// ESTATÍSTICAS</div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">commits</span>
            <span className="text-green-500">847</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">projetos</span>
            <span className="text-white">12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">uptime</span>
            <span className="text-green-500">99.8%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">localização</span>
            <span className="text-white flex items-center gap-1"><MapPin size={12}/> São Gonçalo, RJ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSidebar;
