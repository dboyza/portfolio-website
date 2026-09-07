import { ChevronDown, ExternalLink } from 'lucide-react';
import type { Project } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  revealDelay?: number;
};

const ProjectCard = ({
  project,
  isExpanded,
  onToggle,
  revealDelay = 0,
}: ProjectCardProps) => {
  const stackId = `${project.id}-stack`;
  const linkClassName =
    'motion-pill inline-flex items-center gap-2 rounded-full border border-white/12 px-3.5 py-2 text-xs text-slate-300 transition hover:border-sky-200/50 hover:text-white';

  return (
    <article
      className="premium-surface reveal-on-scroll min-w-0 overflow-hidden rounded-2xl"
      data-reveal
      style={{ transitionDelay: `${revealDelay}ms` }}
    >
      <div className="project-art overflow-hidden border-b border-white/8 bg-[#080c13]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 sm:p-8">
        {(project.labType || project.status) && (
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em]">
            {project.labType && (
              <span className="text-slate-400">{project.labType}</span>
            )}
            {project.status && (
              <span className="inline-flex items-center gap-2 text-sky-200">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-sky-200"
                  aria-hidden="true"
                />
                {project.status}
              </span>
            )}
          </div>
        )}
        <h3 className="text-2xl font-medium leading-snug tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>
        {project.details?.map((detail) => (
          <p key={detail} className="mt-3 text-sm leading-7 text-slate-400">
            {detail}
          </p>
        ))}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-6">
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) =>
              link.href === '#' ? (
                <button
                  key={`${project.id}-${link.label}`}
                  type="button"
                  disabled
                  title="Coming soon"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/8 px-3.5 py-2 text-xs text-slate-500"
                >
                  {link.label}
                  <ExternalLink size={12} aria-hidden="true" />
                </button>
              ) : (
                <a
                  key={`${project.id}-${link.label}`}
                  href={link.href}
                  className={linkClassName}
                >
                  {link.label}
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              ),
            )}
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 py-2 text-xs text-slate-300 transition hover:text-sky-200"
            aria-controls={stackId}
            aria-expanded={isExpanded}
            onClick={onToggle}
          >
            View stack
            <ChevronDown
              size={15}
              className={`transition-transform motion-reduce:transition-none ${isExpanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
        <div id={stackId} hidden={!isExpanded}>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <span
                key={`${project.id}-${tool}`}
                className="rounded-full border border-sky-200/15 bg-sky-200/5 px-3 py-1.5 text-xs text-sky-100"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
