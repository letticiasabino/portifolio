import React from 'react';
import { resumeData } from '../../data/resumeData';

const CyberContact: React.FC = () => {
  return (
    <div id="contact" className="mb-12">
      <div className="text-xs text-gray-500 mb-4 font-mono">// 04_COMMUNICATION_LINK</div>
      <div className="border border-[#1f2937] bg-[#0d1117] rounded-lg p-6 font-mono">
        <h3 className="text-green-500 font-bold mb-4 cursor-blink">Establishing Secure Connection..._</h3>
        <p className="text-gray-400 mb-6 text-sm">
          Aberta para novas oportunidades e colaborações. Envie uma mensagem se quiser conversar sobre código, arquitetura ou construir algo juntos.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <a href={`mailto:${resumeData.contact.email}`} className="border border-[#1f2937] hover:border-green-500/50 bg-[#161b22] p-4 rounded flex items-center gap-3 transition-colors group">
            <div className="text-green-500 group-hover:animate-pulse">@</div>
            <div>
              <div className="text-xs text-gray-500">Email</div>
              <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{resumeData.contact.email}</div>
            </div>
          </a>
          
          <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="border border-[#1f2937] hover:border-blue-500/50 bg-[#161b22] p-4 rounded flex items-center gap-3 transition-colors group">
            <div className="text-blue-500 group-hover:animate-pulse">in</div>
            <div>
              <div className="text-xs text-gray-500">LinkedIn</div>
              <div className="text-sm text-gray-300 group-hover:text-white transition-colors">/letticiasabino-dev</div>
            </div>
          </a>
          
          <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="border border-[#1f2937] hover:border-gray-400/50 bg-[#161b22] p-4 rounded flex items-center gap-3 transition-colors group sm:col-span-2">
            <div className="text-gray-300 group-hover:animate-pulse">{'>_'}</div>
            <div>
              <div className="text-xs text-gray-500">GitHub</div>
              <div className="text-sm text-gray-300 group-hover:text-white transition-colors">github.com/letticiasabino</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CyberContact;
