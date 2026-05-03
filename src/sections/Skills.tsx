import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="bg-ink-900/70 py-20">
      <div className="section-shell">
        <SectionHeading title="Skills" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="glass-panel rounded-lg p-5"
              aria-labelledby={`${group.title}-heading`}
            >
              <h3
                id={`${group.title}-heading`}
                className="text-lg font-semibold text-white"
              >
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={`${group.title}-${skill}`}
                    className="rounded-md border border-white/10 bg-ink-800 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
