import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';
import {
  aboutParagraphs,
  careerDirection,
  certifications,
  degrees,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from '../data/portfolio';

type TerminalEntry = {
  id: number;
  command: string;
  output: string[];
};

const promptUser = 'visitor';
const promptHost = '@dylan-portfolio';

const commandNames = [
  'about',
  'career',
  'current',
  'skills',
  'projects',
  'certs',
  'education',
  'contact',
  'email',
  'resume',
  'clear',
  'help',
];

const downloadFile = (href: string) => {
  const link = document.createElement('a');
  link.href = href;
  link.download = href.split('/').pop() ?? 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const hasActiveTextSelection = () => {
  const selection = window.getSelection();

  return Boolean(selection && selection.toString().trim());
};

const TerminalWindow = () => {
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const historyIndexRef = useRef<number | null>(null);

  useEffect(() => {
    const terminalOutput = scrollRef.current;

    if (!terminalOutput) {
      return;
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }, [entries]);

  const runCommand = (rawCommand: string) => {
    const normalized = rawCommand.trim().toLowerCase();

    if (!normalized) {
      return [];
    }

    if (normalized === 'clear') {
      setEntries([]);
      return null;
    }

    if (normalized === 'help') {
      return [
        `Commands: ${commandNames.join(', ')}`,
        'Commands print section details here in the terminal.',
        'Try `career` for role direction or `current` for active focus areas.',
      ];
    }

    if (normalized === 'about') {
      return [
        `${profile.name} - ${profile.title}`,
        `${profile.location} | ${profile.credentialLine}`,
        ...aboutParagraphs,
      ];
    }

    if (normalized === 'career' || normalized === 'looking') {
      return [
        'Career direction:',
        careerDirection.lookingFor,
        `Currently sharpening: ${careerDirection.currentlyBuilding.join(', ')}`,
      ];
    }

    if (normalized === 'current' || normalized === 'focus' || normalized === 'learning') {
      return careerDirection.currentlyBuilding.map((item) => `- ${item}`);
    }

    if (normalized === 'skills') {
      return skillGroups.map((group) => `${group.title}: ${group.items.join(', ')}`);
    }

    if (normalized === 'projects') {
      return projects.flatMap((project) => [
        project.title,
        `  ${project.description}`,
        `  Stack: ${project.stack.join(', ')}`,
        ...(project.details ?? []).map((detail) => `  Note: ${detail}`),
        `  Links: ${project.links.map((link) => `${link.label} (${link.href})`).join(', ')}`,
      ]);
    }

    if (normalized === 'certs' || normalized === 'certifications') {
      return certifications.map(
        (certification) =>
          `${certification.name} - ${certification.issuer} | Verify: ${certification.href}`,
      );
    }

    if (normalized === 'degrees' || normalized === 'education') {
      return degrees.flatMap((degree) => [
        degree.school,
        ...degree.programs.map((program) => `  ${program}`),
        `  ${degree.timeframe}`,
        `  ${degree.description}`,
        `  Academic Focus: ${degree.focusAreas.join(', ')}`,
      ]);
    }

    if (normalized === 'contact' || normalized === 'connect') {
      return [
        `Email: ${profile.email}`,
        ...socialLinks
          .filter((link) => link.label !== 'Email')
          .map((link) => `${link.label}: ${link.href}`),
      ];
    }

    if (normalized === 'email') {
      window.location.href = `mailto:${profile.email}`;
      return [`Opening email composer for ${profile.email}`];
    }

    if (normalized === 'resume') {
      downloadFile(profile.resumeHref);
      return ['Downloading resume...'];
    }

    if (normalized === 'whoami') {
      return [profile.name];
    }

    if (normalized === 'ls') {
      return ['about  career  current  projects  skills  certifications  education  contact'];
    }

    return [`command not found: ${rawCommand}`, "Type 'help' to list available commands."];
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submittedCommand = command.trim();

    if (!submittedCommand) {
      return;
    }

    const output = runCommand(submittedCommand);

    if (output) {
      setEntries((current) => [
        ...current,
        {
          id: Date.now(),
          command: submittedCommand,
          output,
        },
      ]);
    }

    setHistory((current) => [...current, submittedCommand]);

    setCommand('');
    historyIndexRef.current = null;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (history.length === 0) {
        return;
      }

      const current = historyIndexRef.current;
      const nextIndex = current === null ? history.length - 1 : Math.max(0, current - 1);
      historyIndexRef.current = nextIndex;
      setCommand(history[nextIndex]);
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const current = historyIndexRef.current;

      if (current === null) {
        return;
      }

      const nextIndex = current + 1;

      if (nextIndex >= history.length) {
        historyIndexRef.current = null;
        setCommand('');
        return;
      }

      historyIndexRef.current = nextIndex;
      setCommand(history[nextIndex]);
    }
  };

  const handleContextMenu = async (event: MouseEvent<HTMLDivElement>) => {
    if (hasActiveTextSelection()) {
      return;
    }

    event.preventDefault();
    inputRef.current?.focus();

    try {
      const pastedText = await navigator.clipboard.readText();

      if (!pastedText) {
        return;
      }

      const input = inputRef.current;
      const start = input?.selectionStart ?? command.length;
      const end = input?.selectionEnd ?? command.length;
      const normalizedPaste = pastedText.replace(/\r?\n/g, ' ');
      const nextCommand = `${command.slice(0, start)}${normalizedPaste}${command.slice(end)}`;
      const nextCursorPosition = start + normalizedPaste.length;

      setCommand(nextCommand);
      requestAnimationFrame(() => {
        inputRef.current?.setSelectionRange(nextCursorPosition, nextCursorPosition);
      });
    } catch {
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className="mx-auto min-w-0 w-full max-w-[790px] overflow-hidden rounded-lg border border-white/10 bg-[#151617] text-left shadow-[0_18px_50px_rgba(0,0,0,0.26)]"
      onClick={() => {
        if (hasActiveTextSelection()) {
          return;
        }

        inputRef.current?.focus();
      }}
      onContextMenu={handleContextMenu}
    >
      <div className="terminal-screen overflow-hidden px-5 py-6 font-mono text-sm sm:px-7">
        <pre className="terminal-ascii" aria-label="Terminal heading">
{` ____                          ___  ____
| __ )  ___  _   _ _____ __ _ / _ \\/ ___|
|  _ \\ / _ \\| | | |_  / _\` | | | | \\___ \\
| |_) | (_) | |_| |/ / (_| | | |_| |___) |
|____/ \\___/ \\__, /___\\__,_|  \\___/|____/
             |___/`}
        </pre>
        <p className="mt-3 text-slate-500">
          Type <span className="font-bold text-[#ff6d6d]">'help'</span> to list available commands.
        </p>
        <div ref={scrollRef} className="mt-4 max-h-64 overflow-y-auto border-t border-white/8 pt-4">
          {entries.map((entry) => (
            <div key={entry.id} className="mb-4">
              <p className="break-all font-bold text-slate-100">
                <span className="text-mint-500">{promptUser}</span>
                <span className="text-signal-400">{promptHost}</span>:~$ {entry.command}
              </p>
              <div className="mt-2 space-y-1 text-slate-400">
                {entry.output.map((line, index) => (
                  <p key={`${entry.id}-${index}`} className="break-words">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex min-w-0 items-center font-bold">
            <label htmlFor="terminal-command" className="shrink-0 text-slate-100">
              <span className="text-mint-500">{promptUser}</span>
              <span className="text-signal-400">{promptHost}</span>:~$
            </label>
            <input
              ref={inputRef}
              id="terminal-command"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              onKeyDown={handleKeyDown}
              className="ml-1 min-w-0 flex-1 bg-transparent text-slate-100 caret-white outline-none"
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
