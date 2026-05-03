import SectionHeading from '../components/SectionHeading';
import { profile, socialLinks } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="bg-ink-900/70 py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            title="Let's Connect"
            intro="Replace these placeholder links with your real inbox, profiles, resume, and preferred call to action."
          />

          <div className="glass-panel rounded-lg p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal-400">
              Contact
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block break-words text-2xl font-bold text-white transition hover:text-signal-400"
            >
              {profile.email}
            </a>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold text-slate-200 transition hover:border-signal-500/60 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
