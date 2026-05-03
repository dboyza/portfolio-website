import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="section-rule py-10 sm:py-16">
      <div className="wide-shell">
        <SectionHeading title="Projects" />

        <div className="mt-7 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProject === project.id}
              onToggle={() =>
                setExpandedProject((current) =>
                  current === project.id ? null : project.id,
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
