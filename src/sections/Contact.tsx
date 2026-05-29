import { FileText, Mail } from 'lucide-react';
import { profile, socialLinks } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="section-rule py-8">
      <div className="content-shell flex flex-col items-center justify-center gap-5 text-center sm:flex-row">
        <p className="text-sm font-extrabold uppercase tracking-wide text-slate-500">
          Let's Connect
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.label === 'Resume' ? 'DYLAN_BOYZA_RESUME.pdf' : undefined}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-white/14 px-3 text-xs font-extrabold text-slate-300 transition hover:border-gold-500/60 hover:text-white"
            >
              {link.label === 'Email' ? <Mail size={15} /> : <FileText size={15} />}
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="text-sm font-bold text-slate-500 transition hover:text-slate-200"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
