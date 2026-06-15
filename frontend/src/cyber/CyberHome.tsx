import React from 'react';
import { motion } from 'framer-motion';
import CyberHero from './components/CyberHero';
import CyberProjects from './components/CyberProjects';
import CyberSkills from './components/CyberSkills';
import CyberExperience from './components/CyberExperience';
import CyberContact from './components/CyberContact';

const CyberHome: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <CyberHero />
      <CyberProjects />
      <CyberSkills />
      <CyberExperience />
      <CyberContact />
    </motion.div>
  );
};

export default CyberHome;
