import { BookOpen, CalendarDays, GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { degrees } from '../data/portfolio';

const Degrees = () => {
  return (
    <section id="degrees" className="section-rule py-10 sm:py-16">
      <div className="content-shell">
        <SectionHeading title="Degrees" />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {degrees.map((degree) => (
            <article
              key={degree.title}
              className="rounded-md border border-white/12 bg-white/[0.025] p-6 text-left shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gold-500/45 bg-gold-500/10 text-gold-500">
                  <GraduationCap size={24} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-7 text-slate-100">{degree.title}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm font-bold text-slate-500">
                    <BookOpen size={15} className="shrink-0 text-gold-500" />
                    <span>{degree.school}</span>
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-xs font-extrabold uppercase text-slate-600">
                    <CalendarDays size={14} className="shrink-0 text-gold-500" />
                    <span>{degree.timeframe}</span>
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm font-semibold leading-7 text-slate-400">
                {degree.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {degree.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-md border border-white/12 px-3 py-1 text-xs font-extrabold text-slate-400"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Degrees;
