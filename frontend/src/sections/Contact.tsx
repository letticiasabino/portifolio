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
        badge="Contato" 
        title="Vamos Trabalhar Juntos?" 
        subtitle="Sinta-se à vontade para entrar em contato diretamente ou me enviar uma mensagem."
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-light italic text-center text-gray-200 flex flex-col items-center justify-center tracking-wide leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <span className="text-sm font-semibold not-italic text-purple-500 uppercase tracking-wider mb-3 font-sans">Briefing</span>
          Tem uma ideia, projeto ou oportunidade?<br className="hidden sm:block" /> Me envie um briefing.
        </h3>
      </motion.div>
      
      <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-7xl mx-auto mb-16">
        {/* Coluna 1: Informações de Contato */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <GlassCard className="p-8 md:p-10 flex flex-col items-start h-full justify-center group hover:border-purple-500/30 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Contato Direto</h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              Disponível para novos projetos, consultorias e oportunidades. Respondo e-mails em até 24 horas úteis.
            </p>
            
            <div className="space-y-4 w-full">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">Email</p>
                <a href={`mailto:${resumeData.contact.email}`} className="text-lg font-medium text-white hover:text-purple-300 transition-colors break-all">
                  {resumeData.contact.email}
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">WhatsApp</p>
                <a href="https://wa.me/5521989280182" target="_blank" rel="noreferrer" className="text-lg font-medium text-white hover:text-green-400 transition-colors break-all">
                  (21) 9 8928-0182
                </a>
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
          className="lg:col-span-7 flex flex-col justify-center h-full"
        >
          <ContactForm />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <LinkedInBadge />
        <GitHubBadge />
      </div>

    </section>
  );
};

export default Contact;
