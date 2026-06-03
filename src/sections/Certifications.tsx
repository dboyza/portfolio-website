import { Award, Cloud, ExternalLink, Shield } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section id="certifications" className="section-rule py-10 sm:py-16">
      <div className="wide-shell">
        <SectionHeading title="Certifications" />

        <div className="mt-12 grid gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => {
            const SmallIcon =
              certification.icon === 'aws'
                ? Cloud
                : certification.icon === 'kube' || certification.icon === 'security'
                  ? Shield
                  : Award;

            return (
              <article
                key={certification.name}
                className="premium-surface motion-lift reveal-on-scroll rounded-lg p-5 text-center"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <img
                  src={certification.badge}
                  alt=""
                  className="mx-auto h-32 w-32 object-contain"
                  loading="lazy"
                />

                <h3 className="mx-auto mt-7 max-w-72 text-center text-lg font-semibold leading-7 text-slate-200">
                  <SmallIcon size={18} className="mr-2 inline-block align-[-2px] text-gold-500" />
                  {certification.name}
                </h3>

                <p className="mt-3 text-sm font-bold text-slate-500">
                  Issued by {certification.issuer}
                </p>

                <a
                  href={certification.href}
                  className="motion-pill icon-nudge mt-5 inline-flex items-center gap-3 rounded-md border border-white/16 px-4 py-2 text-xs font-extrabold text-slate-200 transition hover:border-gold-500/60 hover:text-white"
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
