# Skills Section Modernization Plan

## Context
The current Skills section (`src/pages/Skills/index.jsx`) uses a basic grid layout with neumorphic shadow effects. The goal is to transform it into a modern, animated, and visually striking skills showcase that aligns with contemporary UI trends while maintaining consistency with the portfolio's color scheme (blues, purples, indigos).

## Proposed Modern Design Features

### Visual Design
1. **Glassmorphism Cards**: Use backdrop blur, semi-transparent backgrounds with gradient borders
2. **3D Tilt & Glow Effects**: Enhanced hover effects with perspective transforms and colored glows based on skill accent color
3. **Category Badges**: Modern floating badges with icons and gradient backgrounds
4. **Bento-Grid Layout**: Asymmetric card sizes for visual interest (larger cards for high-priority skills)
5. **Background Ambient Effects**: Animated gradient orbs/particles in the section background with subtle motion
6. **Improved Color Scheme**: Use existing accent colors (indigo-400, cyan-400, purple-400) with gradients and glows

### Animation Strategy
- Scroll-triggered entrance with staggered animations per category
- Smooth hover transitions with scale, glow, and border color changes
- Category headers with subtle pulse/glow animation
- Use existing framer-motion patterns from the codebase

## Data Changes Required

**File: `src/data/languagesData.js`**
- Add `priority` field for each skill (1 = high priority/large card, 2 = medium, 3 = small) to determine bento-grid sizing
- Consider adding `category_icon` or ordering metadata

Example addition:
```javascript
frontend: [
  { skill: "react", priority: 1 },
  { skill: "next", priority: 2 },
  // ...
]
```

**File: `src/data/techStack.js`**
- Add `accent_color` field (optional) for dynamic glow effects, otherwise use shadow_color

## Implementation Steps

1. **Update data files** with priority and accent_color metadata
2. **Redesign Skills/index.jsx** with:
   - AmbientBackground component with animated gradient shapes
   - Animation variants (container stagger, card entrance, hover effects)
   - Glassmorphism SkillCard component with 3D tilt & dynamic glow
   - Bento-grid responsive layout with priority-based sizing
   - Category headers with animated badges/icons
3. **Test responsiveness** across breakpoints
4. **Verify animations** and check ESLint

## Files to Modify

1. `src/data/techStack.js` - Add `accent_color` field for glow effects
2. `src/data/languagesData.js` - Add `priority` field for each skill and optionally category icons
3. `src/pages/Skills/index.jsx` - Complete redesign with new animations and layout

## Technical Approach

- Reuse existing framer-motion patterns from `utils/variants.jsx`
- Maintain consistency with Section component usage
- Use Tailwind's backdrop utilities for glass effect
- Use `useInView` or existing `whileInView` patterns for scroll triggering
- Create reusable `SkillCard` subcomponent for clarity
- Use CSS custom properties for dynamic glow effects based on skill color

## Expected Outcome

A visually stunning, modern skills section that:
- Immediately captures attention with ambient animations
- Smoothly reveals on scroll with staggered effects
- Features striking card visuals with glassmorphism and dynamic glows
- Feels cohesive with the rest of the portfolio
- Works seamlessly across all devices

## Verification

1. Run `npm run dev` and scroll to Skills section - verify entrance animations
2. Hover over skill cards - confirm glow and 3D effects
3. Check mobile view - responsive layout should adapt
4. Run `npm run lint` to ensure no ESLint errors
5. Verify all skill images load correctly from S3
