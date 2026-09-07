import { ArrowUpRight, Briefcase, Code2, FileText, Mail } from 'lucide-react';
import { profile, socialLinks } from '../data/portfolio';

const socialIcons = {
  GitHub: Code2,
  LinkedIn: Briefcase,
  Resume: FileText,
  Email: Mail,
};

const Contact = () => (
  <section id="contact" className="section-rule relative overflow-hidden">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(113,166,220,0.07),transparent_70%)]"
      aria-hidden="true"
    />
    <div
      className="content-shell reveal-on-scroll relative text-center"
      data-reveal
    >
      <p className="section-eyebrow mb-6">07 / START A CONVERSATION</p>
      <h2 className="text-[clamp(3.1rem,9vw,7rem)] font-medium leading-[1.08] tracking-[-0.065em] text-white">
        Let's Connect
      </h2>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-8 inline-flex max-w-full items-center gap-2 text-[clamp(1rem,3.5vw,1.6rem)] font-light tracking-tight text-slate-400 transition hover:text-sky-200"
      >
        {profile.email}
        <ArrowUpRight
          size={22}
          className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
          aria-hidden="true"
        />
      </a>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {socialLinks.map((link) => {
          const Icon =
            socialIcons[link.label as keyof typeof socialIcons] ?? ArrowUpRight;
          return (
            <a
              key={link.label}
              href={link.href}
              download={
                link.label === 'Resume' ? 'DYLAN_BOYZA_RESUME.pdf' : undefined
              }
              className="motion-pill inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-5 py-3 text-xs text-slate-300 transition hover:border-sky-200/50 hover:text-white"
            >
              <Icon size={15} strokeWidth={1.6} aria-hidden="true" />
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default Contact;
