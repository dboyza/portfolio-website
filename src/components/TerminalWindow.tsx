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
import './TerminalWindow.css';

type TerminalEntry = {
  id: number;
  command: string;
  output: string[];
};

const promptUser = 'visitor';
const promptHost = '@dylan-portfolio';
const quickCommands = ['help', 'career', 'current', 'skills', 'contact'];
const availableCommands = [
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
  'looking',
  'focus',
  'learning',
  'certifications',
  'degrees',
  'connect',
  'whoami',
  'ls',
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
  const [hasUsedTerminal, setHasUsedTerminal] = useState(false);
  const [completionMessage, setCompletionMessage] = useState('');
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
        'Available commands:',
        '  about      career     current    skills',
        '  projects   certs      education  contact',
        '  email      resume     clear      help',
        '',
        'Run a command to print that section here.',
        'Try: career',
        'Try: current',
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
        'Current role: Software Engineer working on MLOps at JPMorganChase',
        careerDirection.lookingFor,
        `Currently sharpening: ${careerDirection.currentlyBuilding.join(', ')}`,
      ];
    }

    if (
      normalized === 'current' ||
      normalized === 'focus' ||
      normalized === 'learning'
    ) {
      return [
        'Current role: Software Engineer working on MLOps at JPMorganChase',
        '',
        'Currently sharpening:',
        ...careerDirection.currentlyBuilding.map((item) => `- ${item}`),
      ];
    }

    if (normalized === 'skills') {
      return skillGroups.map(
        (group) => `${group.title}: ${group.items.join(', ')}`,
      );
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
      return [
        'about  career  current  projects  skills  certifications  education  contact',
      ];
    }

    return [
      `command '${rawCommand}' was not found. Type 'help' to list available commands.`,
    ];
  };

  const submitCommand = (rawCommand: string) => {
    const submittedCommand = rawCommand.trim();

    if (!submittedCommand) {
      return;
    }

    setHasUsedTerminal(true);

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
    setCompletionMessage('');
    historyIndexRef.current = null;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitCommand(command);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Tab') {
      if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }

      const prefix = command.trim().toLowerCase();
      if (!prefix || availableCommands.includes(prefix)) {
        return;
      }

      const matches = availableCommands.filter((item) =>
        item.startsWith(prefix),
      );
      if (matches.length === 0) {
        return;
      }

      const commonPrefix = matches.reduce((shared, item) => {
        let length = 0;
        while (length < shared.length && shared[length] === item[length]) {
          length += 1;
        }
        return shared.slice(0, length);
      });

      // Only consume Tab when it can advance the command. A second Tab always
      // leaves the field if completion is finished or needs another letter.
      if (commonPrefix.length > prefix.length) {
        event.preventDefault();
        setHasUsedTerminal(true);
        setCommand(commonPrefix);
        historyIndexRef.current = null;
      }

      setCompletionMessage(
        matches.length === 1
          ? `Completed: ${matches[0]}. Press Enter to run.`
          : `Matches: ${matches.join(', ')}. Type another letter to narrow them down.`,
      );
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setCompletionMessage('');
      if (history.length === 0) {
        return;
      }

      const current = historyIndexRef.current;
      const nextIndex =
        current === null ? history.length - 1 : Math.max(0, current - 1);
      historyIndexRef.current = nextIndex;
      setHasUsedTerminal(true);
      setCommand(history[nextIndex]);
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setCompletionMessage('');
      const current = historyIndexRef.current;

      if (current === null) {
        return;
      }

      const nextIndex = current + 1;

      if (nextIndex >= history.length) {
        historyIndexRef.current = null;
        setHasUsedTerminal(true);
        setCommand('');
        return;
      }

      historyIndexRef.current = nextIndex;
      setHasUsedTerminal(true);
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

      setHasUsedTerminal(true);
      setCommand(nextCommand);
      setCompletionMessage('');
      requestAnimationFrame(() => {
        inputRef.current?.setSelectionRange(
          nextCursorPosition,
          nextCursorPosition,
        );
      });
    } catch {
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className="terminal-shell premium-surface motion-lift mx-auto min-w-0 w-full max-w-[790px] overflow-hidden rounded-lg border text-left"
      onClick={(event) => {
        if (
          hasActiveTextSelection() ||
          (event.target instanceof Element && event.target.closest('button'))
        ) {
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
        <div
          ref={scrollRef}
          className="terminal-divider mt-4 max-h-64 overflow-y-auto border-t pt-4"
        >
          {entries.map((entry) => (
            <div key={entry.id} className="mb-4">
              <p className="terminal-line terminal-prompt">
                <span className="terminal-prompt-user">{promptUser}</span>
                <span className="terminal-prompt-host">{promptHost}</span>
                <span className="terminal-path">:~$</span>{' '}
                <span className="terminal-command-text">{entry.command}</span>
              </p>
              <div className="terminal-output mt-2 space-y-1">
                {entry.output.map((line, index) => (
                  <p key={`${entry.id}-${index}`} className="terminal-line">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <form
            onSubmit={handleSubmit}
            className="terminal-line flex min-w-0 items-center"
          >
            <label
              htmlFor="terminal-command"
              className="terminal-prompt shrink-0"
            >
              <span className="terminal-prompt-user">{promptUser}</span>
              <span className="terminal-prompt-host">{promptHost}</span>
              <span className="terminal-path">:~$</span>
            </label>
            <input
              ref={inputRef}
              id="terminal-command"
              value={command}
              onChange={(event) => {
                if (event.target.value.length > 0) {
                  setHasUsedTerminal(true);
                }

                setCommand(event.target.value);
                setCompletionMessage('');
                historyIndexRef.current = null;
              }}
              onKeyDown={handleKeyDown}
              className="terminal-input ml-1 min-w-0 flex-1 bg-transparent outline-none"
              placeholder={
                hasUsedTerminal
                  ? undefined
                  : "Type 'help' to list available commands."
              }
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command"
              aria-describedby="terminal-keyboard-hint"
            />
          </form>
        </div>
        <div className="terminal-controls">
          <div
            className="terminal-quick-commands"
            role="group"
            aria-label="Quick terminal commands"
          >
            <span className="terminal-quick-label">Try</span>
            {quickCommands.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => submitCommand(item)}
                aria-label={`Run ${item} command`}
              >
                {item}
              </button>
            ))}
          </div>
          <p id="terminal-keyboard-hint" className="terminal-keyboard-hint">
            Tab to complete · ↑↓ for history
          </p>
          <p
            className="terminal-completion-message"
            role="status"
            aria-atomic="true"
          >
            {completionMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
