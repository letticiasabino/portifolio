import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import { ExternalLink, Star } from 'lucide-react';
import { useGithubProjects } from '../hooks/useGithubProjects';
const Projects: React.FC = () => {
  const { repos, loading } = useGithubProjects('letticiasabino');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8, filter: 'blur(8px)', rotateX: 15 },
    visible: { 
      opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', rotateX: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <SectionHeading 
        badge="Portfólio" 
        title="Projetos no GitHub" 
        subtitle="Repositórios recentes e contribuições em tempo real."
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mx-auto mb-16 px-4"
      >
        <GlassCard className="p-4 sm:p-6 overflow-x-auto flex flex-col items-center group">
          <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Activity Heatmap</h4>
          <div className="w-full min-w-[700px] flex justify-center">
            <img 
              src="https://ghchart.rshah.org/a855f7/letticiasabino" 
              alt="Lettícia Sabino's GitHub Contributions" 
              className="w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              style={{ filter: 'drop-shadow(0 0 10px rgba(168,85,247,0.2))' }}
            />
          </div>
        </GlassCard>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin neon-glow"></div>
        </div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {repos.map((repo) => {
            const imageUrl = `https://opengraph.githubassets.com/1/letticiasabino/${repo.name}`;
            
            return (
              <motion.div 
                key={repo.id} 
                variants={itemVariants} 
                whileHover={{ scale: 1.05 }} 
                className="perspective-1000 h-full"
              >
                <GlassCard hoverEffect className="overflow-hidden flex flex-col h-full group">
                  <div className="h-48 overflow-hidden relative border-b border-border-glass">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={imageUrl} 
                      alt={repo.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-gray-950', 'to-purple-950', 'flex', 'items-center', 'justify-center');
                        if (e.currentTarget.parentElement) {
                           e.currentTarget.parentElement.innerHTML = `<div class="text-center p-6"><div class="text-white/20 mb-3 flex justify-center"><svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></div><h4 class="text-[var(--text-main)] font-bold text-lg leading-tight line-clamp-2">${repo.name}</h4><div class="mt-4 w-12 h-1 bg-purple-500/50 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div></div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col bg-bg-glass">
                    <h4 className="text-xl font-bold text-[var(--text-main)] mb-2 truncate group-hover:text-purple-400 transition-colors">{repo.name}</h4>
                    <p className="text-muted text-sm flex-1 mb-6 line-clamp-3">{repo.description || 'Sem descrição disponível.'}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-glass">
                      <div className="flex gap-4">
                        {repo.language && (
                          <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-main)]">
                            <span className="w-2 h-2 rounded-full bg-purple-500 neon-glow"></span>
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-xs font-medium text-muted">
                          <Star size={14} className="text-yellow-500" /> {repo.stargazers_count}
                        </span>
                      </div>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all text-muted"
                        aria-label="Ver no GitHub"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
