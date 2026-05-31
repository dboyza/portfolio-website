# Portfolio Agent Instructions

Use these rules for this repo: `C:\Users\Dylan\Documents\github\portfolio-website`.

## Working Style

- Prefer fast, focused edits over broad planning.
- For small UI/content tweaks, make the change directly, then verify.
- Ask only when the request is genuinely ambiguous or risky.
- Keep changes surgical: touch only files needed for the current request.
- Do not refactor, rename, restyle, or clean up unrelated code unless asked.
- Match the existing React, TypeScript, Vite, and Tailwind patterns.

## Verification

- For code or UI changes, run `npm.cmd run lint` and `npm.cmd run build` when practical.
- For tiny text-only changes, lint/build is still preferred, but do not over-invest in extra checks.
- If a check fails, explain the failure before committing.
- Use the running Vite server when possible instead of restarting it repeatedly.

## Git Workflow

- Stage only files changed for the current task.
- Commit completed changes before ending the turn.
- Use concise imperative commit messages.
- Do not push unless explicitly asked.
- Ignore unrelated untracked or modified files unless they block the task.

## Speed Notes

- Common commands should use persistent approval rules when available:
  - `npm.cmd run dev`
  - `npm.cmd run lint`
  - `npm.cmd run build`
  - `git -c safe.directory=C:/Users/Dylan/Documents/github/portfolio-website`
- Batch small visual changes when possible, then verify and commit once.
