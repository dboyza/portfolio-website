const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-4">
      <div className="content-shell text-center text-xs font-bold text-slate-500 sm:flex sm:items-center sm:justify-between sm:text-left">
        <p>
          Made by Dylan w/ Codex GPT-5.5 · Inspired by{' '}
          <a
            href="https://firasbennacib.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition hover:text-white"
          >
            this portfolio website
          </a>
        </p>
        <p className="mt-2 sm:mt-0">React 19 · TypeScript · Vite · Tailwind CSS · lucide-react · ESLint</p>
      </div>
    </footer>
  );
};

export default Footer;
