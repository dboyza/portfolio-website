import {
  Boxes,
  Cloud,
  Code2,
  Database,
  Network,
  Server,
  Settings,
  Shield,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SkillLogo from '../components/SkillLogo';
import { coreStack, skillGroups } from '../data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  settings: Settings,
  boxes: Boxes,
  database: Database,
  network: Network,
  server: Server,
  shield: Shield,
};

const Skills = () => (
  <section id="skills" className="section-rule">
    <div className="wide-shell">
      <SectionHeading title="Skills" />
      <div
        className="reveal-on-scroll mt-12 border-y border-white/10 py-7"
        data-reveal
      >
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
          Core Stack
        </p>
        <div className="flex flex-wrap gap-x-7 gap-y-5 sm:gap-x-9">
          {coreStack.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-2.5 text-base font-medium text-slate-200"
            >
              <SkillLogo skill={skill} size={20} />
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.icon] ?? Code2;
          return (
            <section
              key={group.title}
              className="premium-surface motion-lift reveal-on-scroll min-w-0 rounded-2xl p-7 sm:p-8 md:last:col-span-2"
              data-reveal
              style={{ transitionDelay: `${(index % 2) * 70}ms` }}
            >
              <div className="mb-5 flex items-start justify-between gap-5">
                <h3 className="text-lg font-medium leading-7 tracking-tight text-white">
                  {group.title}
                </h3>
                <Icon
                  size={23}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-sky-200/70"
                  aria-hidden="true"
                />
              </div>
              {group.summary && (
                <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-400">
                  {group.summary}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={`${group.title}-${skill}`}
                    className="motion-pill inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-xs leading-5 text-slate-300"
                  >
                    <SkillLogo skill={skill} />
                    <span className="min-w-0">{skill}</span>
                  </span>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
