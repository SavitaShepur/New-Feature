# New-Feature

Test bed for a screenshot-to-production flow driven by Claude.

**How it works**
1. Open Claude (web at claude.ai/code, or the Code tab in the Claude mobile app), pick this repo,
   attach a screenshot and describe the change you want.
2. Claude makes the change on a `claude/...` branch and opens a pull request.
3. GitHub Actions runs typecheck, lint and build. Vercel posts a preview link on the PR.
4. When checks pass the PR auto-merges into `main` and Vercel deploys the production site.

PRs that touch `.github/`, `CLAUDE.md` or the package files are held for a human review.

**Local**
```
npm install
npm run dev
```
