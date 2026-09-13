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
      <div className="wide-shell">
        <SectionHeading title="Projects" />
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
    </section>
  );
};

export default Projects;
