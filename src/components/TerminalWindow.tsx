const TerminalWindow = () => {
  return (
    <div className="mx-auto min-w-0 w-full max-w-[790px] overflow-hidden rounded-lg border border-white/10 bg-[#151617] text-left shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
      <div className="overflow-hidden px-5 py-6 font-mono text-sm sm:px-7">
        <pre className="terminal-ascii" aria-label="Terminal heading">
{`BBBB   OOO  Y   Y ZZZZZ  A     OOO   SSS
B   B O   O  Y Y     Z  A A   O   O S
BBBB  O   O   Y     Z  AAAAA  O   O  SSS
B   B O   O   Y    Z   A   A  O   O     S
BBBB   OOO    Y   ZZZZZ A   A  OOO  SSSS`}
        </pre>
        <p className="mt-3 text-slate-500">
          Type <span className="font-bold text-[#ff6d6d]">'help'</span> to list available commands.
        </p>
        <div className="mt-4 border-t border-white/8 pt-4">
          <p className="terminal-cursor break-all font-bold text-slate-100">
            <span className="text-mint-500">visitor</span>
            <span className="text-signal-400">@dylan-portfolio</span>:~$
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
