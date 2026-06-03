import { BookOpen, CalendarDays, GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { degrees } from '../data/portfolio';

const Degrees = () => {
  const education = degrees[0];

  if (!education) {
    return null;
  }

  return (
    <section id="education" className="section-rule py-10 sm:py-16">
      <div className="content-shell">
        <SectionHeading title="Education" />

        <article
          className="premium-surface motion-lift reveal-on-scroll mx-auto mt-10 max-w-4xl rounded-md border border-white/12 bg-white/[0.025] p-6 text-left shadow-soft sm:p-7"
          data-reveal
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gold-500/45 bg-gold-500/10 text-gold-500">
                <GraduationCap size={25} />
              </div>

              <div className="min-w-0">
                <h3 className="text-2xl font-black leading-8 text-slate-100">
                  {education.school}
                </h3>
                <div className="mt-3 grid gap-2">
                  {education.programs.map((program) => (
                    <p
                      key={program}
                      className="flex items-start gap-2 text-base font-bold text-slate-300"
                    >
                      <BookOpen size={16} className="mt-1 shrink-0 text-gold-500" />
                      <span>{program}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 px-3 py-2 text-xs font-extrabold uppercase text-slate-500">
              <CalendarDays size={14} className="shrink-0 text-gold-500" />
              <span>{education.timeframe}</span>
            </p>
          </div>

          <p className="mt-6 text-sm font-semibold leading-7 text-slate-400">
            {education.description}
          </p>

          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-gold-500">
              Academic Focus
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {education.focusAreas.map((area) => (
                <span
                  key={area}
                  className="motion-pill rounded-md border border-white/12 px-3 py-1.5 text-xs font-extrabold text-slate-400"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Degrees;
