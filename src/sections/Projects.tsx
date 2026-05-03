import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

const INITIAL_PROJECT_COUNT = 4;

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(
    projects[0]?.id ?? null,
  );
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <section id="projects" className="py-20">
      <div className="section-shell">
        <SectionHeading
          title="Projects"
          intro="A close-to-final layout with placeholder project entries, ready for real repositories, demos, and case studies."
        />

        <div className="grid gap-5 md:grid-cols-2">
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
          <div className="mt-9 text-center">
            <button
              type="button"
              className="rounded-md border border-signal-500/50 px-5 py-3 font-semibold text-signal-400 transition hover:bg-signal-500 hover:text-ink-950"
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
