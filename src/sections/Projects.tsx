import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

const INITIAL_PROJECT_COUNT = 6;

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <section id="projects" className="section-rule py-10 sm:py-16">
      <div className="wide-shell">
        <SectionHeading title="Projects" />

        <div className="mt-7 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {visibleProjects.map((project) => (
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

        {!showAllProjects && projects.length > INITIAL_PROJECT_COUNT && (
          <div className="mt-12 text-center">
            <button
              type="button"
              className="rounded-full border border-white/17 px-5 py-2.5 text-sm font-extrabold text-slate-200 transition hover:border-gold-500/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
              onClick={() => setShowAllProjects(true)}
            >
              Show more projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
