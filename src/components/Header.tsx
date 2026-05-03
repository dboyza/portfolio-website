import { Eye, Globe, Menu, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, profile } from '../data/portfolio';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/95 backdrop-blur">
      <div className="page-shell grid h-[3.25rem] grid-cols-[1fr_auto_1fr] items-center">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-start text-slate-400 transition hover:text-white"
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={30} strokeWidth={2.1} /> : <Menu size={32} strokeWidth={2.1} />}
        </button>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <Eye size={14} />
          <span>Views: {profile.views}</span>
        </div>

        <div className="flex justify-end gap-6 text-slate-400">
          <a href="#home" aria-label="Language" className="transition hover:text-white">
            <Globe size={23} />
          </a>
          <a href="#home" aria-label="Theme" className="transition hover:text-white">
            <Sun size={25} />
          </a>
        </div>
      </div>

      {isOpen && (
        <nav
          id="site-menu"
          className="absolute left-3 top-14 w-56 rounded-lg border border-white/12 bg-ink-900/98 p-2 shadow-2xl shadow-black/50"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/6 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
