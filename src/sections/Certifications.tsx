import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolio';

const Certifications = () => (
  <section id="certifications" className="section-rule">
    <div className="wide-shell">
      <SectionHeading title="Certifications" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((certification, index) => (
          <article
            key={certification.name}
            className="premium-surface motion-lift reveal-on-scroll flex flex-col rounded-2xl p-6"
            data-reveal
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <div className="mb-8 flex h-24 items-center">
              <img
                src={certification.badge}
                alt=""
                className="h-24 w-24 object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-base font-medium leading-7 tracking-tight text-slate-100">
              {certification.name}
            </h3>
            <p className="mt-3 text-xs leading-6 text-slate-400">
              Issued by {certification.issuer}
            </p>
            <div className="mt-auto pt-7">
              <a
                href={certification.href}
                className="group inline-flex items-center gap-2 py-1 text-xs text-slate-300 transition hover:text-sky-200"
              >
                View Credential
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
