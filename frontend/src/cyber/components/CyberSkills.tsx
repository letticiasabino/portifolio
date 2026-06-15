import React from 'react';

const CyberSkills: React.FC = () => {
  return (
    <div id="skills" className="mb-12 border border-[#1f2937] bg-[#0d1117] rounded-lg p-6 font-mono">
      <div className="text-xs text-gray-500 mb-6">// 02_PROFICIÊNCIA TÉCNICA</div>
      
      <div className="space-y-4">
        <div className="flex items-center text-sm">
          <span className="w-24 text-gray-300">TypeScript</span>
          <div className="flex-1 h-2 bg-[#161b22] rounded-full overflow-hidden mx-4">
            <div className="h-full bg-blue-500 w-[78%]"></div>
          </div>
          <span className="w-10 text-right text-white">78%</span>
        </div>
        
        <div className="flex items-center text-sm">
          <span className="w-24 text-gray-300">React</span>
          <div className="flex-1 h-2 bg-[#161b22] rounded-full overflow-hidden mx-4">
            <div className="h-full bg-green-500 w-[72%]"></div>
          </div>
          <span className="w-10 text-right text-white">72%</span>
        </div>
        
        <div className="flex items-center text-sm">
          <span className="w-24 text-gray-300">Node.js</span>
          <div className="flex-1 h-2 bg-[#161b22] rounded-full overflow-hidden mx-4">
            <div className="h-full bg-blue-400 w-[75%]"></div>
          </div>
          <span className="w-10 text-right text-white">75%</span>
        </div>
        
        <div className="flex items-center text-sm">
          <span className="w-24 text-gray-300">Python</span>
          <div className="flex-1 h-2 bg-[#161b22] rounded-full overflow-hidden mx-4">
            <div className="h-full bg-yellow-500 w-[55%]"></div>
          </div>
          <span className="w-10 text-right text-white">55%</span>
        </div>
      </div>
    </div>
  );
};

export default CyberSkills;
