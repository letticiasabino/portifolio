import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa';
import GlassCard from './GlassCard';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const GitHubBadge: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/letticiasabino')
      .then(res => setUser(res.data))
      .catch(console.error);
  }, []);

  if (!user) return <GlassCard className="h-64 w-full animate-pulse"><div /></GlassCard>;

  return (
    <div className="w-full bg-bg-glass backdrop-blur-md border border-border-glass rounded-xl p-6 transition-colors duration-500 flex flex-col items-center text-center h-full justify-center">
      <div className="relative mb-4">
        <img src={user.avatar_url} alt={user.name} className="w-24 h-24 rounded-full border-4 border-purple-500/30" />
        <div className="absolute bottom-0 right-0 bg-[#0d1117] rounded-full p-1.5 border border-white/10">
          <FaGithub className="text-white" size={16} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-[var(--text-main)]">{user.name}</h3>
      <a href={user.html_url} target="_blank" rel="noreferrer" className="text-sm text-purple-500 hover:text-purple-400 mb-3">
        @{user.login}
      </a>
      
      <p className="text-sm text-muted mb-4 line-clamp-3">
        Residência em Tecnologia SOFTEX PE | ADS - SI | Desenvolvedora Backend | JavaScript | Node.js | API REST | Python | Django | MySQL | Testes | HTML | CSS.
      </p>

      <div className="flex items-center justify-center gap-8 text-sm mt-2 mb-4 w-full">
        <div className="flex flex-col">
          <span className="text-[var(--text-main)] font-bold">{user.public_repos}</span>
          <span className="text-muted text-xs uppercase tracking-wider">Repos</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[var(--text-main)] font-bold">{user.followers}</span>
          <span className="text-muted text-xs uppercase tracking-wider">Followers</span>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-white/5 w-full">
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/5 text-[var(--text-main)] text-sm font-medium transition-all group"
        >
          <FaGithub className="mr-2 group-hover:text-purple-400 transition-colors" />
          Ver GitHub
        </a>
      </div>
    </div>
  );
};

export default GitHubBadge;
