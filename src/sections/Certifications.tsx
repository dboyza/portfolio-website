import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="section-shell">
        <SectionHeading title="Certifications" />
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certification) => (
            <a
              key={certification.name}
              href={certification.href}
              className="glass-panel rounded-lg p-5 transition hover:-translate-y-1 hover:border-gold-500/50"
            >
              <p className="mb-4 w-fit rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-400">
                View Credential
              </p>
              <h3 className="text-lg font-semibold text-white">
                {certification.name}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Issued by {certification.issuer}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
