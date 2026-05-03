import { terminalLines } from '../data/portfolio';

const TerminalWindow = () => {
  return (
    <div className="mx-auto w-full max-w-[790px] overflow-hidden rounded-lg border border-white/10 bg-[#151617] text-left shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
      <div className="grid h-9 grid-cols-[1fr_auto_1fr] items-center bg-[#333535] px-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <p className="font-mono text-xs font-semibold text-slate-500">
          portfolio@cloud-resume - zsh
        </p>
        <span />
      </div>

      <div className="px-5 py-6 font-mono text-sm sm:px-7">
        <pre className="terminal-ascii" aria-label="Terminal heading">
{`TERMINAL
TERMINAL`}
        </pre>
        <p className="mt-3 font-bold text-mint-500">{terminalLines[0]}</p>
        <p className="mt-3 text-slate-500">
          Type <span className="font-bold text-[#ff6d6d]">'help'</span> to list available commands.
        </p>
        <div className="mt-4 border-t border-white/8 pt-4">
          <p className="terminal-cursor font-bold text-slate-100">
            <span className="text-mint-500">portfolio</span>
            <span className="text-signal-400">@cloud-resume</span>:~$
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
