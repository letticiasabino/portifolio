import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import { resumeData } from '../../data/resumeData';

const CoursesList: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6 flex items-center gap-3">
        <div className="w-8 h-px bg-pink-500"></div>
        Cursos e Certificações
      </h3>
      <div className="grid gap-4">
        {resumeData.courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <GlassCard hoverEffect className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 group hover:border-pink-500/50">
              <span className="font-medium text-[var(--text-main)] text-sm group-hover:text-pink-400 transition-colors line-clamp-2">{course.name}</span>
              <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-pink-400 whitespace-nowrap self-start sm:self-auto">{course.duration}</span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
