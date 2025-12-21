# Personal Site - AI Agent Instructions

## Project Overview
This is a personal portfolio website built with React 19.2 and Vite 7. The project uses modern React patterns (hooks, functional components) and ESM modules.

## Architecture & Structure
- **Entry point**: [index.html](../index.html) → [src/main.jsx](../src/main.jsx) → [src/App.jsx](../src/App.jsx)
- **Component pattern**: Single-file functional components with hooks (see [App.jsx](../src/App.jsx))
- **Styling**: Component-level CSS files (e.g., `App.css`, `index.css`)
- **Assets**: Static files in `/public` (served at root), React imports from `src/assets/`

## Development Workflow
```bash
npm run dev      # Start dev server with HMR at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Code Conventions

### ESLint Configuration
- Uses ESLint v9 flat config ([eslint.config.js](../eslint.config.js))
- Enforces React Hooks rules and React Refresh for HMR
- Custom rule: Unused vars starting with uppercase or underscore are allowed (e.g., `const _DEBUG = true`)
- Build output (`dist/`) is ignored

### Component Style
- Use functional components with hooks (no class components)
- Export default at file end: `export default ComponentName`
- Render with `<StrictMode>` wrapper (see [main.jsx](../src/main.jsx))

### Import Patterns
- Public assets: Use root path `/vite.svg`
- Src assets: Relative imports `./assets/react.svg`
- React hooks: Destructured imports `import { useState } from 'react'`

## Key Files
- [vite.config.js](../vite.config.js): Minimal Vite config with React plugin
- [package.json](../package.json): Scripts and dependencies (React 19.2, Vite 7)
- [eslint.config.js](../eslint.config.js): Flat config with custom unused-vars rule

## Testing & Debugging
- No test framework currently configured
- Use browser DevTools with Vite's source maps
- HMR (Hot Module Replacement) enabled by default in dev mode

## Deployment Considerations
- Build artifacts go to `dist/` (gitignored)
- Vite generates optimized production bundle
- Ensure base path is configured in `vite.config.js` if deploying to subdirectory
