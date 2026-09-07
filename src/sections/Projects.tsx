import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
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
    <section id="projects" className="section-rule" aria-label="Projects">
      <div className="wide-shell projects-wip">
        <div className="projects-wip-content" inert aria-hidden="true">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading title="Projects" />
            <div
              className="flex items-center gap-3 text-sm text-slate-400"
              aria-label="Projects work in progress"
            >
              <span className="rounded-full border border-sky-200/20 bg-sky-200/5 px-3 py-1.5 font-mono text-[10px] tracking-widest text-sky-200">
                WIP
              </span>
              <span>Projects in progress</span>
            </div>
          </div>
          <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
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
            <div className="mt-12 text-center">
              <button
                type="button"
                className="motion-pill inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-slate-200 hover:border-sky-200/50"
                onClick={() => setShowAllProjects(true)}
              >
                Show more projects <ArrowDown size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
        <div className="projects-wip-overlay">
          <h2>WIP</h2>
          <p>Projects in progress</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
