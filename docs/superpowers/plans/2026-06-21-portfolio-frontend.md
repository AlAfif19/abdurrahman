# Portfolio Frontend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first usable React/Vite portfolio for Al Afif Abdurrahman with Professional and Casual modes.

**Architecture:** The app is a static single-page React application. Content is centralized in `frontend/src/data/portfolio.js`, visual mode state lives in `frontend/src/App.jsx`, and focused components render sections from data props.

**Tech Stack:** React, Vite, TailwindCSS v4 Vite plugin, Vitest, Testing Library, Python `run.py`.

## Global Constraints

- Static Website.
- No Database.
- No Authentication.
- No Docker.
- Single Command Run: `python run.py`.
- Professional Mode colors: background `#020617`, primary `#38BDF8`, accent `#6366F1`, text `#E2E8F0`.
- Casual Mode colors: background `#FFF7ED`, primary `#F97316`, accent `#EC4899`, text `#1F2937`.
- Use existing assets from `foto/`.
- Keep UI mobile-first, responsive from 320px+.
- Follow TDD for behavior-bearing app code.

---

## File Structure

- Create `frontend/package.json`: Vite scripts and dependencies.
- Create `frontend/index.html`: app HTML shell.
- Create `frontend/vite.config.js`: React, Tailwind, and Vitest config.
- Create `frontend/src/main.jsx`: React entry point.
- Create `frontend/src/App.jsx`: mode state and section composition.
- Create `frontend/src/App.test.jsx`: app smoke and mode-switch tests.
- Create `frontend/src/setupTests.js`: Testing Library matcher setup.
- Create `frontend/src/index.css`: Tailwind import, tokens, global styling.
- Create `frontend/src/data/portfolio.js`: profile, sections, and mode copy.
- Create `frontend/src/components/*.jsx`: focused presentational components.
- Create `backend/main.py`: minimal placeholder FastAPI app for future architecture alignment.
- Create `run.py`: single-command frontend launcher.
- Modify `README.md`: setup and run instructions.

---

### Task 1: Scaffold Vite React Test Harness

**Files:**
- Create: `frontend/package.json`
- Create: `frontend/index.html`
- Create: `frontend/vite.config.js`
- Create: `frontend/src/main.jsx`
- Create: `frontend/src/setupTests.js`
- Create: `frontend/src/App.test.jsx`
- Create: `frontend/src/App.jsx`
- Create: `frontend/src/index.css`

**Interfaces:**
- Produces: `App` React component exported as default from `frontend/src/App.jsx`.
- Produces: `npm run test -- --run`, `npm run build`, and `npm run dev` scripts.

- [ ] **Step 1: Write the failing smoke test**

```jsx
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the portfolio owner name', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /al afif abdurrahman/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: FAIL because the project or `App` module is not fully implemented yet.

- [ ] **Step 3: Create minimal project files**

Create `package.json` with scripts:

```json
{
  "name": "abdurrahman-portfolio",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "vite build",
    "preview": "vite preview --host 127.0.0.1",
    "test": "vitest"
  }
}
```

Create `App.jsx` minimal:

```jsx
export default function App() {
  return <h1>Al Afif Abdurrahman</h1>
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add frontend
git commit -m "test: add frontend smoke test"
```

---

### Task 2: Add Portfolio Data And Mode Behavior

**Files:**
- Create: `frontend/src/data/portfolio.js`
- Modify: `frontend/src/App.jsx`
- Modify: `frontend/src/App.test.jsx`

**Interfaces:**
- Produces: `portfolio` object with `profile`, `skills`, `projects`, `experience`, `organizations`, `certificates`, `contacts`, and `modeCopy`.
- Produces: mode switch button with accessible name `/switch to casual mode/i` or `/switch to professional mode/i`.

- [ ] **Step 1: Write the failing mode test**

```jsx
import userEvent from '@testing-library/user-event'

test('switches between professional and casual modes', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByText(/ai\/ml developer/i)).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /switch to casual mode/i }))
  expect(screen.getByText(/community builder/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /switch to professional mode/i })).toBeInTheDocument()
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: FAIL because mode data and switch do not exist.

- [ ] **Step 3: Implement minimal data and mode state**

Create `portfolio.js` with mode copy and core arrays. Update `App.jsx` to use `useState`, render current mode role, and switch modes.

- [ ] **Step 4: Run test to verify it passes**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add frontend/src
git commit -m "feat: add portfolio mode data"
```

---

### Task 3: Build Section Components And Layout

**Files:**
- Create: `frontend/src/components/Navbar.jsx`
- Create: `frontend/src/components/HeroSection.jsx`
- Create: `frontend/src/components/SectionShell.jsx`
- Create: `frontend/src/components/SkillsSection.jsx`
- Create: `frontend/src/components/ProjectsSection.jsx`
- Create: `frontend/src/components/TimelineSection.jsx`
- Create: `frontend/src/components/CertificatesSection.jsx`
- Create: `frontend/src/components/ContactSection.jsx`
- Modify: `frontend/src/App.jsx`
- Modify: `frontend/src/App.test.jsx`

**Interfaces:**
- Consumes: `portfolio` data object.
- Produces: anchored sections with ids `about`, `skills`, `projects`, `experience`, `organization`, `certificates`, `contact`.

- [ ] **Step 1: Write failing section coverage test**

```jsx
test('renders every PRD section', () => {
  render(<App />)

  for (const name of ['About', 'Skills', 'Projects', 'Experience', 'Organization', 'Certificates', 'Contact']) {
    expect(screen.getByRole('heading', { name: new RegExp(name, 'i') })).toBeInTheDocument()
  }
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: FAIL because section components are not present.

- [ ] **Step 3: Implement section components**

Build semantic sections using headings, lists, cards, and links. Use props for data and keep styling through class names.

- [ ] **Step 4: Run test to verify it passes**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add frontend/src
git commit -m "feat: build portfolio sections"
```

---

### Task 4: Apply Visual System And Responsive Polish

**Files:**
- Modify: `frontend/src/index.css`
- Modify: `frontend/src/App.jsx`
- Modify: `frontend/src/components/*.jsx`
- Modify: `frontend/src/App.test.jsx`

**Interfaces:**
- Produces: `data-mode` on the app root.
- Produces: keyboard-focusable nav and mode button.

- [ ] **Step 1: Write failing visual state test**

```jsx
test('marks the app root with the active visual mode', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByTestId('portfolio-app')).toHaveAttribute('data-mode', 'professional')
  await user.click(screen.getByRole('button', { name: /switch to casual mode/i }))
  expect(screen.getByTestId('portfolio-app')).toHaveAttribute('data-mode', 'casual')
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: FAIL because `data-testid` or `data-mode` is missing.

- [ ] **Step 3: Implement styling**

Use CSS variables for mode colors, Tailwind utilities for layout, `text-balance` on headings, `text-pretty` on paragraphs, explicit transition properties, image outlines, and `active:scale-[0.96]` on buttons.

- [ ] **Step 4: Run test to verify it passes**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add frontend/src
git commit -m "style: polish responsive portfolio UI"
```

---

### Task 5: Add Single Command Runner And Docs

**Files:**
- Create: `run.py`
- Create: `backend/main.py`
- Create: `README.md`
- Modify: `.gitignore`

**Interfaces:**
- Produces: `python run.py` command that runs `npm install` when `node_modules` is absent and then starts `npm run dev`.

- [ ] **Step 1: Write runner behavior test**

Use a Python unit test only if a test harness is introduced. Otherwise treat `run.py` as a thin script and verify with `python -m py_compile run.py backend/main.py`.

- [ ] **Step 2: Implement runner**

`run.py` should resolve `frontend/`, verify `package.json`, run `npm install` if needed, then run `npm run dev`.

- [ ] **Step 3: Add docs**

README includes:

```md
# Al Afif Abdurrahman Portfolio

Run locally:

```bash
python run.py
```

Build:

```bash
cd frontend
npm run build
```
```

- [ ] **Step 4: Verify runner syntax and frontend build**

Run:

```bash
python -m py_compile run.py backend/main.py
cd frontend && npm run test -- --run && npm run build
```

Expected: all commands exit 0.

- [ ] **Step 5: Commit**

```bash
git add run.py backend README.md .gitignore frontend
git commit -m "chore: add local runner and docs"
```

---

### Task 6: Final Verification And Remote Prep

**Files:**
- Modify only if verification exposes issues.

**Interfaces:**
- Confirms repo is ready to push to `origin`.

- [ ] **Step 1: Run full verification**

Run:

```bash
cd frontend && npm run test -- --run && npm run build
python -m py_compile run.py backend/main.py
git status --short
```

Expected: tests pass, build exits 0, Python compile exits 0, git status clean.

- [ ] **Step 2: Push initial branch**

Run:

```bash
git branch -M main
git push -u origin main
```

Expected: branch `main` is pushed to `https://github.com/AlAfif19/abdurrahman`.
