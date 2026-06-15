import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import { Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import LinkedInBadge from '../components/LinkedInBadge';
import GitHubBadge from '../components/GitHubBadge';
import ContactForm from './contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <SectionHeading 
        badge="Contato & Redes" 
        title="Conecte-se Comigo" 
        subtitle="Sinta-se à vontade para entrar em contato diretamente ou acompanhar meu trabalho nas redes."
      />
      
      <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto mb-20">
        {/* Coluna 1: Informações de Contato */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 flex flex-col items-center text-center h-full justify-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Informações de Contato</h3>
            <p className="text-gray-400 mb-8">
              Estou disponível para novos projetos, consultorias e oportunidades. Geralmente respondo em até 24 horas úteis.
            </p>
            
            <div className="space-y-6 w-full">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Direto</p>
                <a href={`mailto:${resumeData.contact.email}`} className="text-lg font-medium text-purple-400 hover:text-purple-300 transition-colors break-all">
                  {resumeData.contact.email}
                </a>
              </div>
              
              <div className="pt-6 border-t border-white/10 flex flex-col items-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Redes Sociais</p>
                <div className="flex gap-4">
                  <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500/50 transition-colors">
                    GH
                  </a>
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500/50 transition-colors">
                    IN
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Coluna 2: Minhas Redes Profissionais (Badges) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 justify-center"
        >
          <LinkedInBadge />
          <GitHubBadge />
        </motion.div>
      </div>

      <ContactForm />

    </section>
  );
};

export default Contact;
