import { profile } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-8">
      <div className="section-shell flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Made by {profile.name} © 2026</p>
        <p>Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
