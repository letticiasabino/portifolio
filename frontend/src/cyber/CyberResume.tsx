import React from 'react';
import { resumeData } from '../data/resumeData';
import { motion } from 'framer-motion';

const CyberResume: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-mono text-gray-300 max-w-4xl mx-auto"
    >
      <div className="mb-8 flex justify-between items-end border-b border-green-500/30 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">{'>'} {resumeData.name}</h1>
          <h2 className="text-green-500 text-sm">{resumeData.title}</h2>
        </div>
        <a
          href="/curriculo/letticia-sabino-dev.pdf"
          target="_blank"
          className="px-4 py-2 bg-[#161b22] border border-gray-600 text-gray-300 text-sm hover:border-green-500 hover:text-green-400 transition-colors"
        >
          {'>'} download_pdf()
        </a>
      </div>

      <div className="mb-10">
        <h3 className="text-gray-500 text-xs mb-4">// PROFILE_SUMMARY</h3>
        <div className="border border-[#1f2937] bg-[#0d1117] p-6 text-sm leading-relaxed text-gray-400">
          {resumeData.about}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-gray-500 text-xs mb-4">// CAREER_LOGS</h3>
          <div className="space-y-6">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="border-l border-green-500/30 pl-4 relative">
                <div className="absolute w-2 h-2 bg-green-500 rounded-full -left-[4.5px] top-1"></div>
                <div className="text-white font-bold text-sm">{exp.role}</div>
                <div className="text-green-500 text-xs mb-2">{exp.company} | {exp.period}</div>
                <div className="text-gray-400 text-xs">{exp.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-gray-500 text-xs mb-4">// EDUCATION_MODULES</h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="border border-[#1f2937] bg-[#0d1117] p-4 text-sm">
                  <div className="text-white font-bold">{edu.degree}</div>
                  <div className="text-green-500 text-xs">{edu.institution}</div>
                  <div className="text-gray-500 text-xs mt-1">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gray-500 text-xs mb-4">// CERTIFICATIONS</h3>
            <div className="space-y-3 text-sm">
              {resumeData.courses.map((course, idx) => (
                <div key={idx} className="flex justify-between border-b border-[#1f2937] pb-2">
                  <span className="text-gray-300">{course.name}</span>
                  <span className="text-green-500 text-xs">{course.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CyberResume;
