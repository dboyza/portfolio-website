import TerminalWindow from '../components/TerminalWindow';
import { profile, socialLinks } from '../data/portfolio';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:min-h-screen lg:pb-24"
    >
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="relative mx-auto mb-8 h-48 w-48 sm:h-56 sm:w-56 lg:mx-0">
            <div className="absolute inset-0 rounded-[2rem] bg-signal-500/20 blur-2xl" />
            <img
              src={profile.avatar}
              alt="Profile placeholder"
              className="relative h-full w-full rounded-[2rem] border border-white/14 object-cover shadow-2xl shadow-black/40"
            />
          </div>

          <p className="font-mono text-sm font-semibold tracking-[0.18em] text-signal-400 uppercase">
            {profile.greeting}
          </p>
          <h1 className="text-balance mt-4 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.title}
          </h1>
          <p className="mt-4 text-lg text-slate-300">{profile.location}</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            {profile.tagline}
          </p>
          <p className="mt-2 font-mono text-sm text-gold-500">{profile.focus}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-md bg-signal-500 px-5 py-3 text-center font-semibold text-ink-950 transition hover:bg-signal-400"
            >
              Hire Me
            </a>
            <a
              href={profile.resumeHref}
              className="rounded-md border border-white/14 bg-white/6 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-signal-500/60 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <TerminalWindow />
      </div>
    </section>
  );
};

export default Hero;
