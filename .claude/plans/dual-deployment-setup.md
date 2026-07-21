---
name: Dual Deployment Setup - Vercel & GitHub Pages
description: Configure portfolio for deployment on both Vercel and GitHub Pages simultaneously
type: project
---

## Context

**Current State:**
- Site is **already deployed on Vercel** (vercel.json exists)
- `vite.config.js` has two modes:
  - Default (Vercel): `base: "/"`
  - GitHub mode: `base: "/portfolio/"`
- `package.json` scripts:
  - `build` → vite build (for Vercel)
  - `build:github` → vite build --mode github
  - `predeploy` → **BUG: currently runs `npm run build` (should be `build:github`)**
  - `deploy` → `gh-pages -d dist`

**Goal:**
Deploy to **both** platforms without conflicts:
- **Vercel**: Root domain (e.g., kushal-vala.vercel.app) → uses base `/`
- **GitHub Pages**: Subdirectory (e.g., username.github.io/portfolio) → uses base `/portfolio/`

**Challenge:**
The two platforms need **different base paths** for assets and routing. The build must be configured appropriately for each.

---

## Solution

### Approach 1: Single Repo, Multiple Deployment Targets (Recommended)

Keep **one codebase**, but create **two separate builds**:

1. **Vercel Deployment** (already working):
   - Vercel runs `npm run build` automatically
   - Base path: `/`
   - No changes needed

2. **GitHub Pages Deployment** (needs setup):
   - Run `npm run build:github` to produce a build with base `/portfolio/`
   - Deploy the `dist/` folder to the `gh-pages` branch
   - Configure GitHub Pages in repo settings to serve from `gh-pages` branch (root)

This approach is clean, simple, and each platform gets an optimized build.

---

## Implementation Plan

### Step 1: Fix Predeploy Script (Critical Bug)

**Problem:** The current `predeploy` script runs `npm run build` which produces a Vercel build (base `/`), but then `deploy` pushes to GitHub Pages which **requires** base `/portfolio/`.

**Fix:** Change `predeploy` to use `build:github`:

```json
"scripts": {
  "predeploy": "npm run build:github",  // ❌ Currently "npm run build"
  "deploy": "gh-pages -d dist",
  "build": "vite build",
  "build:github": "vite build --mode github"
}
```

**Why:** When you run `npm run deploy`, it will:
1. Run `predeploy` → builds with correct GitHub Pages base path
2. Run `deploy` → pushes correctly built `dist/` to `gh-pages` branch

### Step 2: Configure GitHub Pages in Repository Settings

1. Go to GitHub repo: **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` (select root folder `/`)
3. Click **Save**

After this, GitHub will serve your site at:
```
https://vkushal-28.github.io/portfolio/
```

### Step 3: Verify Dual Deployment Setup

**Test locally:**

```bash
# Test Vercel build (root base)
npm run build
# Check dist/index.html - should have src="/assets/..."
ls dist/

# Test GitHub Pages build (subdirectory base)
npm run build:github
# Check dist/index.html - should have src="/portfolio/assets/..."
cat dist/index.html | grep "src="
```

**Deploy to GitHub Pages:**

```bash
npm run deploy
# This will:
# 1. Run predeploy → build:github (produces /portfolio/ paths)
# 2. Push dist/ to gh-pages branch
```

**Deploy to Vercel:**

- Push to GitHub (main branch) → Vercel auto-deploys using `npm run build`
- Or manually trigger deploy in Vercel dashboard

### Step 4: Optional - GitHub Actions for Automated GitHub Pages Deployment

If you want GitHub Pages to auto-deploy on pushes to main (like Vercel does), add a workflow:

**Create `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build for GitHub Pages
        run: npm run build:github

      - name: Deploy to GitHub Pages
        uses: peaceiris/action-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This will automatically deploy to GitHub Pages whenever you push to main, matching Vercel's behavior.

### Step 5: Environment Variables

**Vercel:** Setenv vars in Vercel dashboard (Project Settings → Environment Variables):
- `VITE_ACCESS_KEY`
- `VITE_IMAGE_URL`
- `VITE_GA_ID`

**GitHub Pages:** Use local `.env` file (already in `.gitignore`). The same `.env` will be used during the `npm run build:github` command.

✅ Both platforms will have access to the same env vars (Vercel from dashboard, GitHub from local build).

---

## Deployment Workflow Summary

### Manual Deployment

**Vercel:**
- Push to GitHub → Vercel auto-deploys
- Or trigger manual deploy in Vercel dashboard

**GitHub Pages:**
```bash
npm run deploy
```
(After fixing predeploy script)

### Automated Deployment

**Vercel:** Automatic on push to main (already configured)

**GitHub Pages:** Add the GitHub Actions workflow (Step 4) → auto-deploys on push to main

---

## Potential Issues & Solutions

### Issue 1: Router not working on GitHub Pages (404 on refresh)

**Cause:** Single-page app routing conflicts with GitHub Pages routing.

**Solution:**
Add a `404.html` fallback or use HashRouter instead of BrowserRouter.

Check current router setup: The project uses `BrowserRouter` (from CLAUDE.md). For GitHub Pages subdirectory, you need:

```jsx
// In src/main.jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter basename="/portfolio">
  <App />
</BrowserRouter>
```

**Action:** Verify if `basename` is set properly. If not, we need to:
- Read `base` from `import.meta.env.BASE_URL` (which Vite sets based on `base` config)
- Pass it to BrowserRouter: `<BrowserRouter basename={import.meta.env.BASE_URL}>`

Let me check current main.jsx to see if basename is used.

### Issue 2: Asset paths break on one platform

**Solution:** Ensure Vite `base` config is correct (it is). Test both builds.

### Issue 3: Different env vars needed per platform?

**Solution:** Use same env vars; the only difference is base path.

---

## Files to Modify

1. **package.json** - Fix `predeploy` script (1 line change)
2. **src/main.jsx** - Add `basename` to BrowserRouter (if missing)
3. **.github/workflows/deploy.yml** - Add (optional, for auto-deploy)

---

## Testing Checklist

- [ ] `npm run build` → assets use `/assets/...` (no /portfolio prefix)
- [ ] `npm run build:github` → assets use `/portfolio/assets/...`
- [ ] `npm run deploy` (after fix) → pushes correct build to gh-pages
- [ ] Vercel deployment works (should be unchanged)
- [ ] GitHub Pages URL works: `username.github.io/portfolio`
- [ ] Navigation works (no 404 on refresh)
- [ ] All assets load correctly
- [ ] Contact form submits (env vars present)
- [ ] Analytics work (GA ID correct)

---

## Success Criteria

✅ Both Vercel and GitHub Pages serve the site correctly
✅ No 404 errors on page refresh (SPA routing handled)
✅ All assets (images, CSS, JS) load from correct paths
✅ No code changes needed between deployments (except build command)
✅ Environment variables work on both platforms
✅ Site is fully functional on both URLs

---

## Next Steps After Setup

1. **Monitor** both deployments for errors
2. **Set up custom domains** if needed (both Vercel and GitHub Pages support custom domains)
3. **Add canonical URLs** in meta tags to avoid duplicate content SEO issues
4. **Add redirects** if moving from one platform to another
5. **Update README** with deployment instructions

---

## Questions for User

1. Does your current `main.jsx` use `BrowserRouter` with a `basename` prop?
2. Have you already set up GitHub Pages in repository settings?
3. Do you want automated GitHub Pages deployment via GitHub Actions?
4. Are both deployments pointing to the same domain (just different hosts) or different custom domains?

Answering these will ensure I implement exactly what you need.
