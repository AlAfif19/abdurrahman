# Latest CV Download Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make both website CV buttons download the latest `CV_Afif_2026.docx` document.

**Architecture:** Keep the existing `/assets/CV_Afif_2026.docx` public URL and HTML `download` behavior unchanged. Replace only the stale public DOCX with the newer source document, then verify byte identity, frontend behavior, and production packaging.

**Tech Stack:** React 19, Vite 8, Vitest, PowerShell, SHA-256

## Global Constraints

- Use `foto/CV_Afif_2026.docx` as the authoritative source document.
- Preserve the public URL `/assets/CV_Afif_2026.docx`.
- Preserve the current hero and footer layout and behavior.
- Do not modify unrelated existing worktree changes.

---

### Task 1: Replace and verify the public CV asset

**Files:**
- Source: `foto/CV_Afif_2026.docx`
- Modify: `frontend/public/assets/CV_Afif_2026.docx`
- Test: `frontend/src/App.test.jsx`

**Interfaces:**
- Consumes: `profile.cvHref` value `/assets/CV_Afif_2026.docx` from `frontend/src/data/portfolio.js`
- Produces: a public DOCX at `/assets/CV_Afif_2026.docx` that is byte-identical to `foto/CV_Afif_2026.docx`

- [ ] **Step 1: Verify the current public asset is stale**

Run:

```powershell
rtk powershell -NoProfile -Command "$source=(Get-FileHash 'foto/CV_Afif_2026.docx' -Algorithm SHA256).Hash; $public=(Get-FileHash 'frontend/public/assets/CV_Afif_2026.docx' -Algorithm SHA256).Hash; if ($source -eq $public) { throw 'Expected stale public CV, but hashes already match' }; Write-Output 'RED: public CV differs from latest source'"
```

Expected: command prints `RED: public CV differs from latest source`.

- [ ] **Step 2: Replace the stale public document**

Run:

```powershell
rtk powershell -NoProfile -Command "Copy-Item -LiteralPath 'foto/CV_Afif_2026.docx' -Destination 'frontend/public/assets/CV_Afif_2026.docx' -Force"
```

Expected: command exits with status 0 and changes only the public DOCX.

- [ ] **Step 3: Verify source and public document hashes match**

Run:

```powershell
rtk powershell -NoProfile -Command "$source=(Get-FileHash 'foto/CV_Afif_2026.docx' -Algorithm SHA256).Hash; $public=(Get-FileHash 'frontend/public/assets/CV_Afif_2026.docx' -Algorithm SHA256).Hash; if ($source -ne $public) { throw 'Public CV does not match latest source' }; Write-Output $public"
```

Expected: command prints one SHA-256 hash and exits with status 0.

- [ ] **Step 4: Run the focused download-link test**

Run:

```powershell
rtk npm test -- --run -t "CV and certificate assets are directly downloadable"
```

Working directory: `frontend`

Expected: the focused Vitest test passes, confirming the rendered CV link has `download` and references `CV_Afif_2026.docx`.

- [ ] **Step 5: Build and verify the packaged CV**

Run:

```powershell
rtk npm run build
rtk powershell -NoProfile -Command "$source=(Get-FileHash '../foto/CV_Afif_2026.docx' -Algorithm SHA256).Hash; $built=(Get-FileHash 'dist/assets/CV_Afif_2026.docx' -Algorithm SHA256).Hash; if ($source -ne $built) { throw 'Built CV does not match latest source' }; Write-Output $built"
```

Working directory: `frontend`

Expected: Vite build succeeds, then the command prints the same SHA-256 hash as Step 3.

- [ ] **Step 6: Commit only the updated public CV**

```powershell
rtk git add frontend/public/assets/CV_Afif_2026.docx
rtk git commit -m "fix: publish latest CV document"
```

Expected: commit contains only `frontend/public/assets/CV_Afif_2026.docx`.
