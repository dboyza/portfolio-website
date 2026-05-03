import { terminalLines } from '../data/portfolio';

const TerminalWindow = () => {
  return (
    <div className="glass-panel overflow-hidden rounded-lg">
      <div className="flex items-center gap-2 border-b border-white/10 bg-black/28 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-gold-500" />
        <span className="h-3 w-3 rounded-full bg-mint-500" />
        <span className="ml-3 truncate font-mono text-xs text-slate-400">
          portfolio@cloud-resume - zsh
        </span>
      </div>
      <div className="min-h-52 space-y-4 p-5 font-mono text-sm leading-7 text-slate-300 sm:p-6">
        {terminalLines.map((line, index) => (
          <p key={line} className={index === terminalLines.length - 1 ? 'terminal-cursor' : ''}>
            <span className="text-mint-500">{index === 0 ? '$ ' : '> '}</span>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TerminalWindow;
