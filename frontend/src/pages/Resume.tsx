import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Download, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto flex flex-col gap-12"
      >
        {/* Header Section */}
        <motion.section variants={itemVariants} className="text-center md:text-left glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <FileText size={100} className="text-purple-500" />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                  {resumeData.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted font-medium mb-6">
                {resumeData.title}
              </h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href={`mailto:${resumeData.contact.email}`} className="text-sm text-muted hover:text-[var(--text-main)] transition-colors">
                  {resumeData.contact.email}
                </a>
                <span className="text-muted hidden md:inline">•</span>
                <span className="text-sm text-muted">
                  {resumeData.contact.phone}
                </span>
              </div>
            </div>
            
            <a
              href="/curriculo/letticia-sabino-dev.pdf"
              download="Letticia-Sabino-Dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group neon-glow shadow-[0_0_20px_rgba(168,85,247,0.4)] whitespace-nowrap"
            >
              Baixar PDF
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.section>

        {/* Resumo Profissional */}
        <motion.section variants={itemVariants} className="glass-effect rounded-2xl p-8 hover:border-[#00ff00]/50 transition-colors">
          <h3 className="text-xl sm:text-2xl font-mono font-semibold mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3 text-green-400 cursor-blink">
            <span className="text-green-500">{`>`}</span>
            fetching profile_summary... <span className="text-sm text-green-600 ml-2">[OK]</span>
          </h3>
          <p className="text-muted leading-relaxed text-lg">
            {resumeData.about}
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna Esquerda */}
          <div className="flex flex-col gap-12">
            
            {/* Experiência */}
            <motion.section variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-mono font-semibold mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3 text-green-400 cursor-blink">
                <span className="text-green-500">{`>`}</span>
                loading career_history... <span className="text-sm text-green-600 ml-2">[OK]</span>
              </h3>
              <div className="flex flex-col gap-8">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l border-purple-500/30 hover:border-purple-500 transition-colors">
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_#a855f7]"></div>
                    <h4 className="text-lg font-semibold text-[var(--text-main)]">{exp.role}</h4>
                    <div className="text-purple-400 text-sm font-medium mb-3">{exp.company} | {exp.period}</div>
                    <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Coluna Direita */}
          <div className="flex flex-col gap-12">
            
            {/* Formação */}
            <motion.section variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-mono font-semibold mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3 text-green-400 cursor-blink">
                <span className="text-green-500">{`>`}</span>
                mounting education_modules... <span className="text-sm text-green-600 ml-2">[OK]</span>
              </h3>
              <div className="flex flex-col gap-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="glass-effect p-5 rounded-xl hover:border-purple-500/30 transition-all">
                    <h4 className="font-semibold text-[var(--text-main)] text-lg mb-1">{edu.degree}</h4>
                    <div className="text-sm font-medium text-purple-400">{edu.institution}</div>
                    <div className="text-xs text-muted mt-2 uppercase tracking-wide">{edu.period}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Cursos */}
            <motion.section variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-mono font-semibold mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3 text-green-400 cursor-blink">
                <span className="text-green-500">{`>`}</span>
                verifying certifications... <span className="text-sm text-green-600 ml-2">[OK]</span>
              </h3>
              <div className="flex flex-col gap-3">
                {resumeData.courses.map((course, index) => (
                  <div key={index} className="flex justify-between items-center glass-effect p-4 rounded-xl hover:border-purple-500/30 transition-colors">
                    <span className="text-sm font-medium text-[var(--text-main)]">{course.name}</span>
                    <span className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-md whitespace-nowrap ml-4 font-mono">{course.duration}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Idiomas */}
            <motion.section variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-mono font-semibold mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3 text-green-400 cursor-blink">
                <span className="text-green-500">{`>`}</span>
                parsing language_packs... <span className="text-sm text-green-600 ml-2">[OK]</span>
              </h3>
              <div className="flex flex-col gap-4">
                {resumeData.languages.map((lang, index) => (
                  <div key={index} className="glass-effect p-5 rounded-xl hover:border-purple-500/30 transition-colors">
                    <div className="font-semibold text-[var(--text-main)] mb-2 text-lg">{lang.name}</div>
                    <div className="text-xs text-muted leading-relaxed font-mono">{lang.level}</div>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Resume;
