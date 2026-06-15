import React from 'react';

const CyberProjects: React.FC = () => {
  return (
    <div id="projects" className="mb-12">
      <div className="text-xs text-gray-500 mb-4 font-mono">// 01_PROJECTS</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mocking projects for visual, but should use real data if available. Or just static for now as requested. */}
        <div className="border border-[#1f2937] bg-[#0d1117] rounded-lg p-5 hover:border-green-500/50 transition-colors font-mono">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-white font-bold">AprenderJá</h3>
            <span className="text-[10px] px-2 py-0.5 border border-yellow-500/50 text-yellow-500 rounded-full">WIP</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">Plataforma EdTech brasileira de requalificação profissional. Full-stack do zero.</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 bg-[#161b22] border border-[#30363d] rounded text-gray-400">TanStack Start</span>
            <span className="px-2 py-1 bg-[#161b22] border border-[#30363d] rounded text-gray-400">Prisma</span>
          </div>
        </div>

        <div className="border border-[#1f2937] bg-[#0d1117] rounded-lg p-5 hover:border-green-500/50 transition-colors font-mono">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-white font-bold">REST API Auth</h3>
            <span className="text-[10px] px-2 py-0.5 border border-green-500/50 text-green-500 rounded-full">LIVE</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">Sistema de autenticação com JWT, rate limiting e segurança de produção.</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 bg-[#161b22] border border-[#30363d] rounded text-gray-400">Node.js</span>
            <span className="px-2 py-1 bg-[#161b22] border border-[#30363d] rounded text-gray-400">JWT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberProjects;
