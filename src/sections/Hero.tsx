import { BadgeCheck, Download, MapPin, Send, Terminal } from 'lucide-react';
import TerminalWindow from '../components/TerminalWindow';
import { profile } from '../data/portfolio';

const Hero = () => {
  const titleParts =
    profile.title === 'Cloud & DevOps Engineer'
      ? ['Cloud &', 'DevOps', 'Engineer']
      : [profile.title];

  return (
    <section
      id="home"
      className="grid min-h-screen place-items-center px-4 pt-24 pb-20 text-center"
    >
      <div className="w-full">
        <img
          src={profile.avatar}
          alt={`${profile.name} profile portrait`}
          className="mx-auto h-32 w-32 rounded-full border-4 border-gold-500 bg-ink-900 object-cover"
        />

        <p className="mt-8 text-xl font-extrabold text-slate-500">
          {profile.greeting}
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl text-[2.25rem] font-extrabold leading-[1.08] tracking-tight text-slate-100 min-[420px]:text-[2.6rem] sm:text-5xl">
          {titleParts.map((part, index) => (
            <span key={part} className="block sm:inline">
              {index > 0 && <span className="hidden sm:inline"> </span>}
              {part}
            </span>
          ))}
        </h1>

        <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-center gap-3 text-sm font-bold text-slate-500 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
          <span className="flex w-full max-w-80 items-center justify-center gap-1.5 text-center sm:w-auto sm:max-w-none">
            <MapPin size={17} className="shrink-0" fill="currentColor" />
            <span className="min-w-0 break-words">{profile.location}</span>
          </span>
          <span className="flex w-full max-w-80 items-start justify-center gap-1.5 text-center sm:w-auto sm:max-w-none">
            <BadgeCheck size={17} className="mt-0.5 shrink-0" fill="currentColor" />
            <span className="min-w-0 break-words">{profile.credentialLine}</span>
          </span>
          <span className="flex w-full max-w-80 items-center justify-center gap-1.5 text-center sm:w-auto sm:max-w-none">
            <Terminal size={18} className="shrink-0" />
            <span className="min-w-0 break-words">{profile.focus}</span>
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-11 min-w-28 items-center justify-center gap-2 rounded-md bg-signal-500 px-5 text-sm font-extrabold text-white shadow-lg shadow-signal-500/20 transition hover:bg-signal-400"
          >
            Email me!
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
