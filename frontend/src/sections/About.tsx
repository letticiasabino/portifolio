import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30, filter: 'blur(5px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6 } }
  };

  const codeVariants = {
    hidden: { opacity: 0, x: 30, filter: 'blur(5px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 scroll-mt-20">
      <SectionHeading 
        badge="Minha Jornada" 
        title="Construindo em Público" 
        subtitle="De vendas e suporte técnico para a criação de soluções em código."
      />
      
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto mb-24">
        {/* Narrativa */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 space-y-6 text-lg text-muted leading-relaxed"
        >
          <motion.p variants={textVariants}>
            Sou <span className="text-[var(--text-main)] font-semibold">Lettícia Sabino</span>, desenvolvedora em transição de carreira com foco em Backend (Node.js/Python) e atualmente cursando Análise e Desenvolvimento de Sistemas (5º período - último).
          </motion.p>
          
          <motion.p variants={textVariants}>
            Antes da programação, construí uma sólida bagagem de mais de 5 anos em <span className="text-purple-400">Suporte Técnico, Vendas B2B e Atendimento Consultivo</span>, desenvolvendo um perfil orientado à resolução de problemas e comunicação técnica assertiva.
          </motion.p>

          <motion.p variants={textVariants}>
            Tenho experiência prática no desenvolvimento de APIs RESTful, integração de bancos de dados e metodologias ágeis. Busco uma oportunidade como <span className="text-[var(--text-main)] font-medium">Desenvolvedora Júnior, Estagiária em Backend, Customer Engineer</span> ou Technical Support.
          </motion.p>

          <motion.p variants={textVariants} className="text-[var(--text-main)] font-medium border-l-4 border-purple-500 pl-4 py-1 italic cursor-blink">
            "Acredito que boas soluções nascem da combinação entre pensamento analítico, aprendizado contínuo e compreensão das necessidades reais das pessoas."
          </motion.p>
        </motion.div>

        {/* Bloco de Código */}
        <motion.div 
          variants={codeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 perspective-1000 h-full w-full"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="h-full">
            <GlassCard className="p-0 overflow-hidden h-full flex flex-col font-mono text-xs sm:text-sm md:text-base shadow-[0_0_30px_rgba(168,85,247,0.15)] border-white/10 group terminal-block">
              {/* Cabeçalho da janela do Mac */}
              <div className="bg-[#0d1117]/80 px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs text-muted/70">letticia.ts</span>
              </div>
              <div className="p-4 md:p-6 flex-1 overflow-x-auto text-left whitespace-pre-wrap break-words">
                <span className="text-pink-500">const</span> <span className="text-blue-400">letticia</span> <span className="text-white">=</span> <span className="text-yellow-300">{`{`}</span><br/>
                {'  '}<span className="text-purple-300">focus</span><span className="text-white">:</span> <span className="text-green-400">"Backend / Full Stack Development"</span><span className="text-white">,</span><br/>
                {'  '}<span className="text-purple-300">status</span><span className="text-white">:</span> <span className="text-green-400">"building in public — shipping to production"</span><span className="text-white">,</span><br/>
                {'  '}<span className="text-purple-300">currently</span><span className="text-white">: [</span><span className="text-green-400">"Node.js"</span><span className="text-white">, </span><span className="text-green-400">"Python"</span><span className="text-white">, </span><span className="text-green-400">"Next.js"</span><span className="text-white">],</span><br/>
                {'  '}<span className="text-purple-300">education</span><span className="text-white">: [</span><span className="text-green-400">"ADS — FAM"</span><span className="text-white">, </span><span className="text-green-400">"SI — Uni-FACEF"</span><span className="text-white">],</span><br/>
                {'  '}<span className="text-purple-300">background</span><span className="text-white">: [</span><span className="text-green-400">"Customer Engineer"</span><span className="text-white">, </span><span className="text-green-400">"Tech Sales"</span><span className="text-white">, </span><span className="text-green-400">"Technical Support"</span><span className="text-white">],</span><br/>
                {'  '}<span className="text-purple-300">superpower</span><span className="text-white">:</span> <span className="text-green-400">"resolução de problemas e entrega de soluções escaláveis"</span><br/>
                <span className="text-yellow-300">{`}`}</span><span className="text-white">;</span>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Vozes que me inspiram */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-[var(--text-main)] mb-10 flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-pink-500"></span>
          Vozes que me inspiram
          <span className="w-12 h-px bg-pink-500"></span>
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Grace Hopper", quote: "A frase mais perigosa na nossa língua é 'sempre fizemos assim'." },
            { name: "Katherine Johnson", quote: "A matemática é a mesma não importa o que aconteça. Não deixe ninguém dizer o contrário." },
            { name: "Gladys West", quote: "Sempre acreditei que, se eu focasse e fizesse o meu melhor, tudo se resolveria." },
            { name: "Kimberly Bryant", quote: "Não queremos apenas consumir tecnologia; queremos ser as criadoras dela." },
            { name: "Marian Croak", quote: "Mantenha o olhar no horizonte, no impossível. E dê o primeiro passo." }
          ].map((voice, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] perspective-1000"
            >
              <GlassCard hoverEffect className="p-6 h-full flex flex-col justify-between group hover:border-pink-500/30 transition-all duration-500">
                <p className="text-muted text-sm italic mb-6">"{voice.quote}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-px bg-pink-500/50 group-hover:bg-pink-400 transition-colors"></div>
                  <span className="font-bold text-[var(--text-main)] text-sm">{voice.name}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
