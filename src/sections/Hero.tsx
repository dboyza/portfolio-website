import { BadgeCheck, Download, MapPin, Send, Terminal } from 'lucide-react';
import TerminalWindow from '../components/TerminalWindow';
import { profile } from '../data/portfolio';

const Hero = () => {
  return (
    <section
      id="home"
      className="grid min-h-screen place-items-center px-4 pt-24 pb-20 text-center"
    >
      <div className="w-full">
        <img
          src={profile.avatar}
          alt="Profile placeholder"
          className="mx-auto h-32 w-32 rounded-full border-4 border-gold-500 bg-ink-900 object-cover"
        />

        <p className="mt-8 text-xl font-extrabold text-slate-500">
          {profile.greeting}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          {profile.title}
        </h1>

        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-bold text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={17} fill="currentColor" />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BadgeCheck size={17} fill="currentColor" />
            {profile.credentialLine}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Terminal size={18} />
            {profile.focus}
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-11 min-w-28 items-center justify-center gap-2 rounded-md bg-signal-500 px-5 text-sm font-extrabold text-white shadow-lg shadow-signal-500/20 transition hover:bg-signal-400"
          >
            Hire Me!
            <Send size={16} fill="currentColor" />
          </a>
          <a
            href={profile.resumeHref}
            className="inline-flex h-11 min-w-36 items-center justify-center gap-2 rounded-md border border-white/18 px-5 text-sm font-extrabold text-slate-200 transition hover:border-white/35 hover:text-white"
          >
            Download CV
            <Download size={16} />
          </a>
        </div>

        <div className="mt-8">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
