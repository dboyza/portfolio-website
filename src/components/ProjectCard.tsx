import { ChevronDown, ChevronUp, Code2, ExternalLink } from 'lucide-react';
import type { Project } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
};

const ProjectCard = ({ project, isExpanded, onToggle }: ProjectCardProps) => {
  const stackId = `${project.id}-stack`;

  return (
    <article className="min-w-0">
      <div className="soft-card overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="aspect-[16/9] w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-3 flex justify-center gap-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-gold-500" />
        <span className="h-2.5 w-2.5 rounded-full border border-slate-600" />
        <span className="h-2.5 w-2.5 rounded-full border border-slate-600" />
      </div>

      <h3 className="mt-4 flex items-start gap-2 text-lg font-extrabold leading-snug text-slate-100 sm:text-xl">
        <span>{project.title}</span>
        <Code2 size={24} className="mt-0.5 shrink-0 text-slate-200" />
      </h3>

      <p className="mt-4 text-sm font-medium leading-7 text-slate-400">
        {project.description}
      </p>
      {project.details?.map((detail) => (
        <p key={detail} className="mt-3 text-sm font-medium leading-7 text-slate-400">
          {detail}
        </p>
      ))}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.links.map((link) => (
          <a
            key={`${project.id}-${link.label}`}
            href={link.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/17 px-3 py-2 text-xs font-extrabold text-slate-200 transition hover:border-gold-500/60 hover:text-white"
          >
            {link.label}
            <ExternalLink size={13} />
          </a>
        ))}
      </div>

      <button
        type="button"
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/17 px-3 py-1.5 text-xs font-extrabold text-slate-200 transition hover:border-gold-500/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
        aria-controls={stackId}
        aria-expanded={isExpanded}
        onClick={onToggle}
      >
        View stack
        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
      </button>

      {isExpanded && (
        <div id={stackId} className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <span
              key={`${project.id}-${tool}`}
              className="rounded-full border border-gold-500/35 bg-gold-500/8 px-3 py-1.5 text-xs font-bold text-slate-300"
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
