# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website built with Vite and Tailwind CSS. The portfolio features animated sections, a custom cursor, responsive navigation, and is deployed to GitHub Pages.

## Common Development Commands

```bash
# Development server with hot reload
npm run dev

# Build for production (default)
npm run build

# Build for GitHub Pages deployment
npm run build:github

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Run tests (Vitest - currently no test files exist)
npm run test

# Deploy to GitHub Pages
npm run deploy
```

Note: When deploying, the predeploy hook automatically runs before the deploy command.

## Architecture & Structure

### Framework & Tools
- **React 18** with functional components and hooks
- **Vite** as build tool and dev server
- **React Router DOM** v6 for routing (single-page scrolling layout)
- **Tailwind CSS** v3 for styling with custom color theme
- **Framer Motion** for animations
- **Eslint** with React-specific plugins

### Folder Structure

```
src/
├── App.jsx                 # Main app component, orchestrates all pages/sections
├── main.jsx                # Entry point, wraps App with BrowserRouter
├── index.css               # Global styles and Tailwind imports
├── assets/                 # Static assets (images, etc.)
│   └── images/            # Image files and index.js for imports
├── components/            # Reusable UI components
│   ├── Header.jsx         # Main header component
│   ├── Footer.jsx         # Footer component
│   ├── MobileNav.jsx      # Mobile navigation drawer
│   ├── NavItems.jsx       # Navigation menu items
│   ├── Socials.jsx        # Social media links
│   ├── Section.jsx        # Wrapper component for page sections
│   ├── Reveal.jsx         # Animation reveal component
│   ├── CommonHeader.jsx   # Shared header for pages
│   └── analytics.js       # Google Analytics integration
├── pages/                 # Main page sections (portfolio content)
│   ├── Hero/              # Hero section with typewriter effect
│   ├── About/             # About section with timeline/certs
│   ├── Services/          # Services offered
│   ├── Skills/            # Skills/tech stack display
│   ├── Projects/          # Project showcase with slider
│   └── ContactUs/         # Contact form
├── context/               # React Context providers
│   └── NavContext.jsx     # Navigation state (active link, mobile menu)
├── hooks/                 # Custom React hooks
│   ├── useNav.jsx         # Hook for scroll-based active nav
│   └── useOnScreen.jsx    # Intersection Observer hook
├── utils/                 # Utility functions
│   └── variants.jsx       # Framer Motion animation variants
└── data/                  # Static data files
    ├── aboutData.js
    ├── contactData.js
    ├── experienceData.js
    ├── languagesData.js
    ├── projectsData.js
    ├── serviceData.js
    └── techStack.js
```

### Key Patterns

**Routing:** Uses React Router but implements a single-page scrolling layout. All sections are rendered directly in `App.jsx` with `react-animated-cursor` overlaying the entire page.

**Navigation State:** `NavContext` provides:
- `activeLinkId`: Currently visible section (updated via `useNav` hook and IntersectionObserver)
- `isMobileMenuOpen`: Mobile navigation drawer state
- `setActiveLinkId` & `setIsMobileMenuOpen`: State setters

**Scroll Tracking:** The `useNav` hook attaches a ref to each section element and uses `useOnScreen` (IntersectionObserver) to detect when a section enters the viewport, automatically updating the active navigation link.

**Animation:** Framer Motion is used extensively with predefined animation variants in `utils/variants.jsx`. Sections use `framer-motion`'s `motion` components for entrance animations.

**Styling:** Tailwind CSS with custom color scheme defined in `tailwind.config.js`:
- primary: `#04171e` (dark blue)
- secondary: `#393A47` (gray)
- accent: `#00a376` (green)
- bl/blLight: Dark purple variants

Images are served from AWS S3 via `VITE_IMAGE_URL` environment variable.

### Environment Variables

Required in `.env` (not committed):
```
VITE_ACCESS_KEY=68b7bf4c-6fce-4f63-b1b4-923e8a6799d2
VITE_IMAGE_URL=https://kv-portfolio.s3.ca-central-1.amazonaws.com/
VITE_GA_ID=G-RD6DZN58VR
```

## Important Implementation Notes

- **Deployment:** The `deploy` script uses `gh-pages` to push the `dist/` folder to GitHub Pages. The `build:github` script sets Vite mode to "github" which changes the base path to `/portfolio/` (configured in `vite.config.js`).
- **Mobile Navigation:** Mobile menu is handled by `MobileNav.jsx` with backdrop and slide-in animation.
- **Analytics:** Google Analytics integration in `components/analytics.js` with `pageview` tracking on route changes.
- **Image Optimization:** Images are converted to WebP format and stored on S3.
- **No test files currently exist**, but `npm test` uses Vitest through Vite.

## When Making Changes

- Update data files in `src/data/` for content changes
- Modify section components in `src/pages/` for layout/functionality changes
- Add new reusable UI to `src/components/`
- Maintain responsive design using Tailwind's breakpoint utilities
- Use existing animation patterns from `utils/variants.jsx` for consistency
- Run `npm run lint` before committing to catch ESLint errors
