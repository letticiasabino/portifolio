import React from 'react';
import { resumeData } from '../../data/resumeData';

const CyberExperience: React.FC = () => {
  return (
    <div id="experience" className="mb-12">
      <div className="text-xs text-gray-500 mb-4 font-mono">// 03_CAREER_LOGS</div>
      <div className="border border-[#1f2937] bg-[#0d1117] rounded-lg p-6 font-mono relative">
        <div className="absolute top-6 bottom-6 left-[27px] w-px bg-green-500/20"></div>
        <div className="space-y-8">
          {resumeData.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-12 group">
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-[#0d1117] border-2 border-green-500 rounded-full group-hover:bg-green-500 transition-colors"></div>
              <h3 className="text-white font-bold text-sm mb-1">{exp.role}</h3>
              <div className="text-green-400 text-xs mb-2">{exp.company} <span className="text-gray-500">| {exp.period}</span></div>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>
              <div className="text-xs text-gray-500">Tech: <span className="text-gray-300">{exp.tech}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CyberExperience;
