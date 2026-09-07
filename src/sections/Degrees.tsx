import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { degrees } from '../data/portfolio';

const Degrees = () => (
  <section id="education" className="section-rule">
    <div className="content-shell">
      <SectionHeading title="Education" />
      <div className="mt-12 grid gap-5">
        {degrees.map((education) => (
          <article
            key={`${education.school}-${education.timeframe}`}
            className="premium-surface reveal-on-scroll rounded-2xl p-7 sm:p-10"
            data-reveal
          >
            <div className="flex flex-col justify-between gap-8 md:flex-row">
              <div>
                <GraduationCap
                  size={30}
                  strokeWidth={1.3}
                  className="mb-6 text-sky-200"
                  aria-hidden="true"
                />
                <h3 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  {education.school}
                </h3>
                <div className="mt-5 space-y-2">
                  {education.programs.map((program) => (
                    <p
                      key={program}
                      className="text-sm leading-6 text-slate-300"
                    >
                      {program}
                    </p>
                  ))}
                </div>
              </div>
              <p className="h-fit w-fit rounded-full border border-white/10 px-3.5 py-2 font-mono text-xs tracking-wide text-slate-400">
                {education.timeframe}
              </p>
            </div>
            <p className="mt-7 text-sm leading-7 text-slate-400">
              {education.description}
            </p>
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sky-200">
                Academic Focus
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {education.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="motion-pill rounded-full border border-white/10 px-3.5 py-1.5 text-xs leading-5 text-slate-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Degrees;
