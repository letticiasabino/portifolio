import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, badge }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-16">
      {badge && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium tracking-wider mb-6 uppercase"
        >
          {badge}
        </motion.div>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white px-4"
      >
        {title.split(' ').map((word, i, arr) => (
          i === arr.length - 1 ? (
            <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {word}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
