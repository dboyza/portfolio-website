import {
  Activity,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Monitor,
  Network,
  Server,
  Settings,
  Shield,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  settings: Settings,
  boxes: Boxes,
  code: Code2,
  activity: Activity,
  database: Database,
  git: GitBranch,
  server: Server,
  network: Network,
  shield: Shield,
  braces: Braces,
  monitor: Monitor,
};

const Skills = () => {
  return (
    <section id="skills" className="section-rule py-10 sm:py-16">
      <div className="wide-shell">
        <SectionHeading title="Skills" />

        <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Code2;

            return (
              <section key={group.title} className="min-w-0">
                <h3 className="mb-4 flex min-h-12 items-start justify-center gap-3 text-center text-lg font-bold leading-6 text-slate-200">
                  <Icon size={22} className="mt-0.5 shrink-0 text-gold-500" />
                  <span>{group.title}</span>
                </h3>

                <div className="grid gap-2">
                  {group.items.map((skill) => (
                    <div
                      key={`${group.title}-${skill}`}
                      className="flex min-h-9 items-center gap-3 rounded-lg border border-white/17 px-3 text-sm font-bold text-slate-300"
                    >
                      <span className="flex h-5 min-w-5 items-center justify-center rounded bg-ink-800 text-[10px] font-black text-gold-500">
                        {skill.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="min-w-0 break-words">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
