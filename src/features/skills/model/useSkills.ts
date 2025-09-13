import { useState, useEffect } from 'react';
import { skillsApi, type Skill } from '@/entities/skill';

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        setIsLoading(true);
        const skillsData = await skillsApi.getAll();
        setSkills(skillsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load skills');
      } finally {
        setIsLoading(false);
      }
    };

    loadSkills().catch((error) => {
      console.error('Failed to load skills:', error);
      setError(
        error instanceof Error ? error.message : 'Failed to load skills'
      );
      setIsLoading(false);
    });
  }, []);

  return {
    skills,
    isLoading,
    error,
  };
};
