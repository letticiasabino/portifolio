import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from './experience/ExperienceTimeline';
import EducationList from './experience/EducationList';
import CoursesList from './experience/CoursesList';
import LanguagesGrid from './experience/LanguagesGrid';
import SkillsSection from './experience/SkillsSection';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 scroll-mt-20 overflow-hidden">
      <SectionHeading
        badge="Trajetória"
        title="Experiência Profissional"
        subtitle="Conheça minha jornada acadêmica e profissional."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20 items-start">
        {/* Coluna Esquerda: Experiência Profissional */}
        <ExperienceTimeline />

        {/* Coluna Direita: Educação, Cursos, Idiomas */}
        <div className="space-y-12">
          <EducationList />
          <CoursesList />
          <LanguagesGrid />
        </div>
      </div>

      <SkillsSection />
    </section>
  );
};

export default Experience;
