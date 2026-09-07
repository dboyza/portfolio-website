# Repository guidance

- Use normal hyphens, never em dashes.
- Create local commits after changes, without agent co-author attribution.
- Push only when the user explicitly requests it.
- Never manually edit changelogs or files marked as generated.
- Keep this document concise, current, and deduplicated.
- In long Markdown documents, place each full sentence on its own line.
- Prefer quality, simplicity, robustness, scalability, and maintainability when choosing implementations.
- Reproduce bugs through the end-user experience before fixing them.
- Inspect desktop and mobile layouts in the browser after visual changes.
- Fix clearly visible UI defects and encountered lint or test failures, including flaky checks.
- Use scoped subagents when independent work or review materially improves quality or completion time.
- Suggest a useful next step after completing a major task.

## Project conventions

- This is a React and TypeScript portfolio built with Vite and Tailwind CSS.
- Portfolio content lives in `src/data/portfolio.ts`; preserve factual accuracy and label unfinished projects honestly.
- Run `npm run lint` and `npm run build` before committing implementation changes.
- Respect reduced-motion preferences and maintain keyboard accessibility when adding animation or interaction.
- Visual redesigns must preserve existing text, including terminal output and text inside SVG assets.
- Keep the procedural galaxy isolated in `AnimatedBackground.tsx`; pause it offscreen, in hidden tabs, and for reduced motion.
- The galaxy hero stays dark in both themes; the theme toggle changes navigation and reading sections.
