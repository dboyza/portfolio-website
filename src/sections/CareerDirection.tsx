import { Compass, Wrench } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { careerDirection } from '../data/portfolio';

const CareerDirection = () => (
  <section id="career-direction" className="section-rule">
    <div className="content-shell">
      <SectionHeading title="Career Direction" />
      <div className="mt-12 grid gap-5 md:grid-cols-[1.15fr_1fr]">
        <article
          className="premium-surface motion-lift reveal-on-scroll rounded-2xl p-7 sm:p-10"
          data-reveal
        >
          <Compass
            size={25}
            strokeWidth={1.4}
            className="mb-8 text-sky-200"
            aria-hidden="true"
          />
          <h3 className="text-xl font-medium tracking-tight text-white">
            Where I am headed
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
            {careerDirection.lookingFor}
          </p>
        </article>
        <article
          className="premium-surface motion-lift reveal-on-scroll rounded-2xl p-7 sm:p-10"
          data-reveal
          style={{ transitionDelay: '80ms' }}
        >
          <Wrench
            size={25}
            strokeWidth={1.4}
            className="mb-8 text-sky-200"
            aria-hidden="true"
          />
          <h3 className="text-xl font-medium tracking-tight text-white">
            Currently sharpening
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {careerDirection.currentlyBuilding.map((item) => (
              <span
                key={item}
                className="motion-pill rounded-full border border-white/10 px-3.5 py-2 text-sm text-slate-300"
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

export default CareerDirection;
