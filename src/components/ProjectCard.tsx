import type { Project } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
};

const ProjectCard = ({ project, isExpanded, onToggle }: ProjectCardProps) => {
  return (
    <article className="glass-panel flex h-full flex-col rounded-lg p-5 transition hover:-translate-y-1 hover:border-signal-500/45 sm:p-6">
      {project.featured && (
        <p className="mb-3 w-fit rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-500">
          Featured project
        </p>
      )}
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={`${project.id}-${link.label}`}
            href={link.href}
            className="rounded-md border border-white/12 px-3 py-2 text-sm text-slate-200 transition hover:border-signal-500/70 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-white/8"
        aria-expanded={isExpanded}
        onClick={onToggle}
      >
        <span>View stack</span>
        <span aria-hidden="true">{isExpanded ? '▲' : '▼'}</span>
      </button>

      {isExpanded && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <span
              key={`${project.id}-${tool}`}
              className="rounded-md bg-ink-700/70 px-2.5 py-1.5 text-xs text-slate-300 ring-1 ring-white/10"
            >
              {tool}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
