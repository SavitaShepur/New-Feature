# New-Feature — test bed for the "PM sends a screenshot, Claude ships it" flow

This is a small Next.js 14 (App Router, TypeScript) demo dashboard. It exists to test
the flow: a product manager attaches a screenshot and describes a change, Claude
implements it, opens a PR, CI runs, the PR auto-merges, and Vercel deploys it.

## Layout
- `app/page.tsx` — the only page (header, three KPI cards, a sites table)
- `app/dashboard.module.css` — styles for that page; `app/globals.css` — colour tokens
- `lib/sites.ts` — the demo data (sites and KPI numbers)

## Commands (run all three before you push)
- `npm run typecheck`
- `npm run lint`
- `npm run build`

## How to deliver a change
1. Work on a branch named `claude/<short-slug>` off `main`.
2. Keep the change focused on what was asked. Do not refactor unrelated code.
3. Run the three commands above; fix anything they report.
4. Push and open a PR against `main` with a plain-English title and a short body:
   what changed, and what the reviewer should look at in the preview.
5. Reply with the PR link. Vercel posts a preview URL on the PR; CI auto-merges the
   PR once checks pass, and the change goes live on the production URL.

## Never
- Do not edit `.github/`, `CLAUDE.md`, `package.json` or `package-lock.json` without
  being asked — PRs touching those are held for a human and will not auto-merge.
- Do not add dependencies unless the task cannot be done without them.
- Do not commit secrets or `.env` files.
