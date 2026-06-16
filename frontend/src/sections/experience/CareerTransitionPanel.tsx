import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import { Target, Users, MessageSquare, Code2, Lightbulb, Puzzle, HeartHandshake } from 'lucide-react';

const impactData = [
  {
    icon: <Target size={18} className="text-purple-400" />,
    text: "5+ anos resolvendo problemas reais"
  },
  {
    icon: <MessageSquare size={18} className="text-pink-400" />,
    text: "Comunicação clara e empática"
  },
  {
    icon: <Puzzle size={18} className="text-purple-400" />,
    text: "Resolução de problemas com foco no usuário"
  },
  {
    icon: <HeartHandshake size={18} className="text-pink-400" />,
    text: "Escuta ativa e entendimento de necessidades"
  },
  {
    icon: <Users size={18} className="text-purple-400" />,
    text: "Colaboração entre áreas técnicas e clientes"
  },
  {
    icon: <Lightbulb size={18} className="text-pink-400" />,
    text: "Visão de negócio aplicada à tecnologia"
  }
];

const CareerTransitionPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="sticky top-24 pt-8 md:pt-0"
    >
      <GlassCard hoverEffect className="p-6 relative overflow-hidden group border-purple-500/20">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Code2 size={80} className="text-purple-500" />
        </div>
        
        <h3 className="text-xl font-bold text-[var(--text-main)] mb-6 flex items-center gap-3 relative z-10">
          <div className="w-6 h-px bg-pink-500"></div>
          Conectando pessoas e tecnologia
        </h3>

        <div className="space-y-4 relative z-10">
          {impactData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 transition-colors"
            >
              <div className="mt-0.5 shrink-0 bg-black/20 p-1.5 rounded-md">
                {item.icon}
              </div>
              <p className="text-sm text-gray-300 leading-snug font-medium">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default CareerTransitionPanel;
