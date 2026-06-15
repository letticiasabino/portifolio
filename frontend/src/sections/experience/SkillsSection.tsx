import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import { resumeData } from '../../data/resumeData';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaServer, FaGitAlt, FaGithub, FaJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSequelize, SiNextdotjs, SiPostman } from 'react-icons/si';

const techSkills = [
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Python", icon: FaPython, color: "text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "API REST", icon: FaServer, color: "text-gray-400" },
  { name: "MySQL", icon: FaDatabase, color: "text-blue-300" },
  { name: "Sequelize", icon: SiSequelize, color: "text-blue-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" }
];

const opSkills = [
  "CRM Hubspot", "Neo Sales", "Sistemas PDV", "Metodologias Ágeis",
  "Hardware & Redes", "Tech Sales B2B", "Atendimento Consultivo"
];

const getFlyInVariants = (index: number) => {
  const directions = [
    { x: -100, y: -100 },
    { x: 100, y: -100 },
    { x: -100, y: 100 },
    { x: 100, y: 100 },
    { x: 0, y: -150 },
    { x: 0, y: 150 },
    { x: -150, y: 0 },
    { x: 150, y: 0 },
  ];
  const dir = directions[index % directions.length];
  return {
    hidden: { opacity: 0, x: dir.x, y: dir.y, scale: 0.5, rotate: -30, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)',
      transition: { type: "spring" as const, stiffness: 100, damping: 10 }
    }
  };
};

const SkillsSection: React.FC = () => {
  return (
    <div id="skills" className="max-w-6xl mx-auto scroll-mt-20">
      <h3 className="text-3xl font-bold text-center text-[var(--text-main)] mb-6 cursor-blink">
        <span className="text-green-400 font-mono text-xl mr-2">{`>`}</span>
        Habilidades Técnicas
      </h3>
      
      <p className="text-center text-muted max-w-4xl mx-auto mb-12 text-lg leading-relaxed">
        {resumeData.skillsText}
      </p>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
      >
        {techSkills.map((skill, idx) => (
          <motion.div 
            key={idx} 
            variants={getFlyInVariants(idx)}
            whileHover={{ scale: 1.10 }}
            className="perspective-1000"
          >
            <GlassCard className="flex flex-col items-center justify-center gap-3 p-4 md:p-6 w-24 h-24 md:w-32 md:h-32 group cursor-default hover:bg-[rgba(0,255,0,0.05)] hover:shadow-[0_0_25px_rgba(0,255,0,0.4)] transition-all border-white/5">
              <skill.icon className={`text-3xl md:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
              <span className="text-xs md:text-sm font-medium text-[var(--text-main)] text-center group-hover:text-white">{skill.name}</span>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Habilidades Operacionais / Metodologias */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex flex-wrap justify-center gap-3"
      >
        {opSkills.map((skill, idx) => (
          <motion.div 
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="px-4 py-2 border border-green-500/30 text-green-400 bg-green-500/5 rounded-md font-mono text-sm hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all cursor-default">
              {skill}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
