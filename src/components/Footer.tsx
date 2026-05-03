import { profile } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-4">
      <div className="content-shell text-center text-xs font-bold text-slate-500 sm:flex sm:items-center sm:justify-between sm:text-left">
        <p>Made by {profile.name} © 2026</p>
        <p className="mt-2 sm:mt-0">React, Vite, and Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
