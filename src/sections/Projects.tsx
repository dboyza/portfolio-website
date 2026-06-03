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

        <div className="projects-wip mt-7">
          <div
            className="projects-wip-content grid gap-x-8 gap-y-14 md:grid-cols-2"
            aria-hidden="true"
            inert
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedProject === project.id}
                revealDelay={index * 70}
                onToggle={() =>
                  setExpandedProject((current) =>
                    current === project.id ? null : project.id,
                  )
                }
              />
            ))}
          </div>

          {!showAllProjects && projects.length > INITIAL_PROJECT_COUNT && (
            <div
              className="projects-wip-content mt-12 text-center"
              aria-hidden="true"
              inert
            >
              <button
                type="button"
                className="motion-pill rounded-full border border-white/17 px-5 py-2.5 text-sm font-extrabold text-slate-200 transition hover:border-gold-500/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                onClick={() => setShowAllProjects(true)}
              >
                Show more projects
              </button>
            </div>
          )}

          <div className="projects-wip-overlay" aria-label="Projects work in progress">
            <div className="projects-wip-badge">
              <span>WIP</span>
              <small>Projects in progress</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
