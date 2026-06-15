import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import { resumeData } from '../../data/resumeData';

const EducationList: React.FC = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6 flex items-center gap-3">
        <div className="w-8 h-px bg-purple-500"></div>
        Formação Acadêmica
      </h3>
      <div className="space-y-6">
        {resumeData.education.map((edu, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 50, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="perspective-1000"
          >
            <motion.div whileHover={{ scale: 1.02 }}>
              <GlassCard hoverEffect className="p-6 border-l-4 border-l-purple-500 group">
                <h4 className="text-lg font-bold text-[var(--text-main)] group-hover:text-purple-400 transition-colors">{edu.degree}</h4>
                <div className="text-purple-400 font-medium">{edu.institution}</div>
                <div className="text-sm text-muted mt-2">{edu.period}</div>
              </GlassCard>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationList;
