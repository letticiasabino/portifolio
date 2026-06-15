import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const LinkedInBadge: React.FC = () => {
  return (
    <div className="w-full bg-bg-glass backdrop-blur-md border border-border-glass rounded-xl p-6 transition-colors duration-500 flex flex-col items-center text-center h-full justify-center">
      <div className="relative mb-4">
        <img src="https://github.com/letticiasabino.png" alt="Lettícia S." className="w-24 h-24 rounded-full border-4 border-purple-500/30 object-cover" />
        <div className="absolute bottom-0 right-0 bg-[#0d1117] rounded-full p-1.5 border border-white/10">
          <FaLinkedin className="text-blue-500" size={16} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-[var(--text-main)]">Lettícia S.</h3>
      <a href="https://br.linkedin.com/in/letticiasabino-dev/en" target="_blank" rel="noreferrer" className="text-sm text-purple-500 hover:text-purple-400 mb-3">
        @letticiasabino-dev
      </a>
      <p className="text-sm text-muted mb-4 line-clamp-4">
        Residência em Tecnologia SOFTEX PE | ADS - SI | Desenvolvedora Backend | JavaScript | Node.js | API REST | Python | Django | MySQL | Testes | HTML | CSS.<br/>
        Centro de Excelência em Tecnologia de Software do Recife | Programadores do Amanhã
      </p>
      
      <div className="mt-auto pt-4 border-t border-white/5 w-full">
        <a 
          href="https://br.linkedin.com/in/letticiasabino-dev/en" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/5 text-[var(--text-main)] text-sm font-medium transition-all"
        >
          Ver perfil
        </a>
      </div>
    </div>
  );
};

export default LinkedInBadge;
