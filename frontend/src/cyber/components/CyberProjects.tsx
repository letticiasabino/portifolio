import React from 'react';
import { useGithubProjects } from '../../hooks/useGithubProjects';
import type { Repo } from '../../types';

const CyberProjects: React.FC = () => {
  const { repos, loading } = useGithubProjects('letticiasabino');

  return (
    <div id="projects" className="mb-12">
      <div className="text-xs text-gray-500 mb-4 font-mono">// 01_PROJECTS</div>
      {loading ? (
        <div className="text-green-500 font-mono text-sm animate-pulse">Fetching from GitHub API..._</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo: Repo, index: number) => (
            <a 
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className={`border border-[#1f2937] bg-[#0d1117] rounded-lg p-5 hover:border-green-500/50 transition-colors font-mono block group ${index === 1 ? 'random-glitch' : ''}`}
              style={index === 1 ? { animationDelay: '3.7s' } : {}}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white font-bold group-hover:text-green-400 transition-colors truncate">{repo.name}</h3>
                <span className="text-[10px] px-2 py-0.5 border border-green-500/50 text-green-500 rounded-full flex-shrink-0 ml-2">★ {repo.stargazers_count}</span>
              </div>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{repo.description || 'Sem descrição'}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {repo.language && (
                  <span className="px-2 py-1 bg-[#161b22] border border-[#30363d] rounded text-gray-400">
                    {repo.language}
                  </span>
                )}
                <span className="px-2 py-1 bg-[#161b22] border border-[#30363d] rounded text-gray-500">
                  {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CyberProjects;
