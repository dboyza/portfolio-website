const Footer = () => (
  <footer className="border-t border-white/10 py-8">
    <div className="content-shell flex flex-col justify-between gap-3 text-center text-[10px] leading-6 text-slate-500 lg:flex-row lg:text-left">
      <p>
        Made by Dylan w/ Codex GPT-5.5 · Inspired by{' '}
        <a
          href="https://firasbennacib.com/"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 transition hover:text-white"
        >
          this portfolio website
        </a>
      </p>
      <p>React 19 · TypeScript · Vite · Tailwind CSS · lucide-react · ESLint</p>
    </div>
  </footer>
);

export default Footer;
