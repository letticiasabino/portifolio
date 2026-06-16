import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/Button';
import { useContactForm } from '../../hooks/useContactForm';

const ContactForm: React.FC = () => {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-4xl mx-auto"
    >
      <GlassCard className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Nome Completo *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-sm font-medium text-gray-300">WhatsApp</label>
              <input 
                type="text" 
                id="whatsapp" 
                name="whatsapp" 
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">Assunto *</label>
              <select 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
                className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors appearance-none"
              >
                <option value="">Selecione um assunto</option>
                <option value="Projeto">Projeto</option>
                <option value="Ideia">Ideia</option>
                <option value="Serviço">Serviço</option>
                <option value="Oportunidade">Oportunidade</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="serviceType" className="text-sm font-medium text-gray-300">Tipo de Serviço *</label>
              <select 
                id="serviceType" 
                name="serviceType" 
                value={formData.serviceType}
                onChange={handleChange}
                required 
                className="w-full bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors appearance-none"
              >
                <option value="">Selecione um serviço</option>
                <option value="Frontend">Desenvolvimento Frontend</option>
                <option value="Backend">Desenvolvimento Backend</option>
                <option value="FullStack">Desenvolvimento Full Stack</option>
                <option value="API">Desenvolvimento de APIs</option>
                <option value="Outros">Outros / Consultoria</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-300">Descrição do Projeto *</label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description}
              onChange={handleChange}
              required 
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-colors resize-none"
              placeholder="Descreva seu projeto, objetivos e requisitos..."
            ></textarea>
          </div>

          <Button type="submit" disabled={status === 'loading'} className="w-full md:w-auto mt-4">
            {status === 'loading' ? 'Enviando...' : 'Enviar Briefing'}
            <Send size={18} />
          </Button>
          
          {status === 'success' && (
            <p className="text-green-400 text-sm mt-4">Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-4">Erro ao enviar a mensagem. Tente novamente mais tarde.</p>
          )}
        </form>
      </GlassCard>
    </motion.div>
  );
};

export default ContactForm;
