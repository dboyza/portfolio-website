import { Award, Cloud, ExternalLink, Shield } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section id="certifications" className="section-rule py-10 sm:py-16">
      <div className="wide-shell">
        <SectionHeading title="Certifications" />

        <div className="mt-12 grid gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => {
            const SmallIcon =
              certification.icon === 'aws'
                ? Cloud
                : certification.icon === 'kube'
                  ? Shield
                  : Award;

            return (
              <article key={certification.name} className="text-center">
                <img
                  src={certification.badge}
                  alt=""
                  className="mx-auto h-32 w-32 object-contain"
                  loading="lazy"
                />

                <h3 className="mx-auto mt-7 flex max-w-72 items-start justify-center gap-2 text-lg font-semibold leading-7 text-slate-200">
                  <SmallIcon size={18} className="mt-1 shrink-0 text-gold-500" />
                  <span>{certification.name}</span>
                </h3>

                <p className="mt-3 text-sm font-bold text-slate-500">
                  Issued by {certification.issuer}
                </p>

                <a
                  href={certification.href}
                  className="mt-5 inline-flex items-center gap-3 rounded-md border border-white/16 px-4 py-2 text-xs font-extrabold text-slate-200 transition hover:border-gold-500/60 hover:text-white"
                >
                  <ExternalLink size={15} className="text-gold-500" />
                  View Credential
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
