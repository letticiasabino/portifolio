import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import { resumeData } from '../../data/resumeData';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6 flex items-center gap-3">
        <div className="w-8 h-px bg-purple-500"></div>
        Experiência Profissional
      </h3>
      <div className="space-y-8 border-l-2 border-purple-500/30 pl-8 ml-4 relative">
        {resumeData.experience.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative perspective-1000"
          >
            {/* Ponto da Linha do Tempo */}
            <div className="absolute -left-[41px] top-4 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] border-4 border-gray-950"></div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="h-full">
              <GlassCard hoverEffect className="p-6 h-full group">
                <h4 className="text-xl font-bold text-[var(--text-main)] group-hover:text-purple-400 transition-colors">{exp.role}</h4>
                <div className="text-purple-400 font-medium mb-1">{exp.company}</div>
                <div className="text-sm text-muted mb-4 uppercase tracking-wider font-semibold">{exp.period}</div>
                <p className="text-muted leading-relaxed">{exp.description}</p>
              </GlassCard>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
