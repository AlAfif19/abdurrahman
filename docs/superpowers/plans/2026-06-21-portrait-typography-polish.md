# Portrait Typography Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Differentiate Professional and Casual modes through stronger typography and mode-specific portrait framing.

**Architecture:** Keep the existing React hero component and CSS variable mode system. Add two static portrait assets, choose the active image by `mode`, and let CSS variables control font families, crop, object position, and frame shape.

**Tech Stack:** React, Vite, TailwindCSS v4, Vitest, CSS custom properties.

## Global Constraints

- Professional Mode uses a formal suit portrait.
- Casual Mode uses the existing microphone/performance portrait.
- Portrait frames must not read as plain rectangles.
- Fonts must feel different between Professional and Casual modes.
- Do not permanently destroy or edit original source photos in `foto/`.
- Keep all existing tests and build green.

---

### Task 1: Add mode-specific portrait behavior

**Files:**
- Modify: `frontend/src/App.test.jsx`
- Modify: `frontend/src/App.jsx`
- Modify: `frontend/src/components/HeroSection.jsx`
- Create: `frontend/src/assets/professional-portrait.jpeg`
- Create: `frontend/src/assets/casual-portrait.jpeg`

**Interfaces:**
- `HeroSection({ profile, copy, mode })`
- Professional image alt: `Al Afif Abdurrahman professional portrait`
- Casual image alt: `Al Afif Abdurrahman casual performance portrait`

- [ ] **Step 1: Write failing test for portrait swap**

```jsx
test('uses different portrait treatments for professional and casual modes', async () => {
  const user = userEvent.setup()
  render(<App />)

  expect(screen.getByAltText(/professional portrait/i)).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /switch to casual mode/i }))
  expect(screen.getByAltText(/casual performance portrait/i)).toBeInTheDocument()
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: FAIL because the hero still uses one generic portrait.

- [ ] **Step 3: Implement portrait swap**

Copy source images into `frontend/src/assets/`, pass `mode` from `App.jsx`, and select image/alt in `HeroSection.jsx`.

- [ ] **Step 4: Run test to verify it passes**

Run: `cd frontend && npm run test -- --run src/App.test.jsx`

Expected: PASS.

### Task 2: Apply mode-specific typography and non-rectangular crop

**Files:**
- Modify: `frontend/index.html`
- Modify: `frontend/src/index.css`

**Interfaces:**
- Professional display font: `Space Grotesk`.
- Casual display font: `Plus Jakarta Sans`.
- Body font remains `Inter`.
- `.portrait-frame` and `.portrait-frame img` change shape through `[data-mode]`.

- [ ] **Step 1: Add Google Fonts links**

Add preconnect links and import `Inter`, `Space Grotesk`, and `Plus Jakarta Sans` in `frontend/index.html`.

- [ ] **Step 2: Add CSS font variables**

Use `--font-display` on `.app-shell`, override it in casual mode, and apply it to headings, brand, mode toggle, and CTAs.

- [ ] **Step 3: Add CSS portrait shape variables**

Professional: tall executive silhouette with asymmetric rounded frame and torso-focused crop.

Casual: organic blob-like performer frame with dynamic crop and warmer treatment.

- [ ] **Step 4: Run verification**

Run:

```bash
cd frontend
npm run test -- --run
npm run build
```

Expected: 5 tests pass and build exits 0.
