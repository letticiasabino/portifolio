import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import { resumeData } from '../../data/resumeData';

const LanguagesGrid: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6 flex items-center gap-3">
        <div className="w-8 h-px bg-pink-500"></div>
        Idiomas
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {resumeData.languages.map((lang, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <GlassCard hoverEffect className="p-5 text-center group hover:border-pink-500/50 flex flex-col items-center justify-center h-full">
              <h4 className="font-bold text-[var(--text-main)] mb-1 group-hover:text-white transition-colors">{lang.name}</h4>
              <span className="text-pink-400 text-sm whitespace-pre-line leading-relaxed">{lang.level}</span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesGrid;
