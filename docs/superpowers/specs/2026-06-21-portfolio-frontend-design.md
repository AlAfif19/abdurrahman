# Split Personality Portfolio Frontend Design

Date: 2026-06-21
Repo: https://github.com/AlAfif19/abdurrahman

## Goal

Build the first usable version of Al Afif Abdurrahman's portfolio as a static, responsive, single-page website. The site presents two personality modes:

- Professional Mode: dark, technical, recruiter-facing, focused on AI/ML and software development.
- Casual Mode: warm, friendly, community-facing, focused on leadership, speaking, and creative identity.

The first implementation prioritizes the frontend experience because the PRD defines a static website with no database, no authentication, and no Docker.

## Scope

Included:

- Vite React app in `frontend/`.
- TailwindCSS styling.
- Portfolio sections: hero, about, skills, projects, experience, organization, certificates, contact.
- Theme/personality switch with smooth visual transition.
- Profile imagery sourced from the existing `foto/` folder.
- Centralized portfolio data file for content updates.
- `run.py` single command entry point for local development.
- README with setup and run instructions.
- Git initialization and remote connection to `AlAfif19/abdurrahman`.

Deferred:

- FastAPI backend beyond a possible later static helper.
- Database, authentication, admin editing, CMS, and Docker.
- Production image conversion pipeline; the first version may use existing JPEG assets, with optimization noted for later.

## Architecture

The project will use this structure:

```text
portfolio/
  backend/
    main.py
  frontend/
    src/
      assets/
      components/
      data/
      hooks/
      utils/
      App.jsx
      main.jsx
    index.html
    package.json
    vite.config.js
  docs/
    superpowers/
      specs/
  foto/
  run.py
  README.md
```

The first build will keep backend behavior minimal. `run.py` will launch the frontend development server so the user can run the portfolio with one command.

## Frontend Design

The app is a single-page layout with anchored sections. The first viewport will immediately signal the portfolio owner through the hero name, role, profile image, and mode switch.

Key components:

- `ModeProvider` or local app state for `professional` / `casual`.
- `Navbar` with section links and personality switch.
- `HeroSection` with profile image, headline, short summary, and CTA buttons.
- `SectionShell` for consistent spacing and responsive constraints.
- `SkillGroup`, `ProjectCard`, `TimelineItem`, `CertificateCard`, and `ContactLinks`.
- `ModeBackdrop` for mode-specific visual atmosphere without interfering with content readability.

Mode behavior:

- Professional Mode uses `#020617`, `#38BDF8`, `#6366F1`, and `#E2E8F0`.
- Casual Mode uses `#FFF7ED`, `#F97316`, `#EC4899`, and `#1F2937`.
- Switching mode updates colors, labels, short supporting copy, and selected visual accents.

## Data Flow

Static portfolio content lives in `frontend/src/data/portfolio.js`.

Expected data groups:

- `profile`
- `skills`
- `projects`
- `experience`
- `organizations`
- `certificates`
- `contacts`
- `modeCopy`

Components receive data through props from `App.jsx`. This keeps UI components reusable and makes content editing simple.

## Interaction And Motion

Motion should feel polished but not heavy:

- Smooth mode color transition.
- Subtle section reveal animation.
- Hover states for project cards, badges, and contact buttons.
- Reduced-motion support through CSS media query or motion checks.

No animation should block reading, shift layout unexpectedly, or make the page feel like a demo instead of a professional portfolio.

## Responsive Behavior

Breakpoints follow the design-system document:

- Mobile: 320px+
- Tablet: 768px+
- Laptop: 1024px+
- Desktop: 1440px+
- Large display: 1920px+

The layout should be mobile-first. Navigation compresses on smaller screens, sections stack vertically, and cards use stable dimensions to avoid layout jumps.

## Error Handling

The site is static, so runtime error handling is limited:

- Missing optional data should render empty states or skip the block.
- Broken images should fall back to a styled fallback block.
- Contact links should be ordinary links with clear labels.

## Testing And Verification

Implementation should include practical verification:

- Install/build check: `npm run build` inside `frontend/`.
- Basic render smoke test if the chosen tooling supports it without adding heavy setup.
- Manual browser verification through the local dev server.
- Responsive screenshot or viewport checks for desktop and mobile after the UI exists.

## Acceptance Criteria

- `python run.py` starts the local portfolio experience.
- The first screen clearly presents Al Afif Abdurrahman and the split-personality concept.
- All PRD sections exist on the page.
- Professional and Casual modes both work and visibly differ.
- The app is responsive on mobile and desktop.
- Content can be updated from `frontend/src/data/portfolio.js`.
- The project is connected to `https://github.com/AlAfif19/abdurrahman`.
