import { Compass, Wrench } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { careerDirection } from '../data/portfolio';

const CareerDirection = () => {
  return (
    <section id="career-direction" className="section-rule py-10 sm:py-16">
      <div className="content-shell">
        <SectionHeading title="Career Direction" />

        <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-[1.2fr_1fr]">
          <article
            className="premium-surface motion-lift reveal-on-scroll rounded-md border border-white/12 bg-white/[0.025] p-6"
            data-reveal
          >
            <div className="flex items-center gap-3 text-gold-500">
              <Compass size={22} />
              <h3 className="text-lg font-extrabold text-slate-100">
                What I am looking for
              </h3>
            </div>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-400">
              {careerDirection.lookingFor}
            </p>
          </article>

          <article
            className="premium-surface motion-lift reveal-on-scroll rounded-md border border-white/12 bg-white/[0.025] p-6"
            data-reveal
            style={{ transitionDelay: '80ms' }}
          >
            <div className="flex items-center gap-3 text-gold-500">
              <Wrench size={22} />
              <h3 className="text-lg font-extrabold text-slate-100">
                Currently sharpening
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {careerDirection.currentlyBuilding.map((item) => (
                <span
                  key={item}
                  className="motion-pill rounded-md border border-white/12 px-3 py-1 text-xs font-extrabold text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CareerDirection;
