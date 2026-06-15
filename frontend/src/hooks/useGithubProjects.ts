import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Repo } from '../types';

export const useGithubProjects = (username: string) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`)
      .then(res => {
        const filtered = res.data.filter((r: Repo) => !r.fork);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [username]);

  return { repos, loading };
};
