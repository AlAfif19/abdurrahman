# Sticky Side 3D Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menampilkan chip dan kertas sebagai ornamen sisi viewport setelah hero terlewati, dengan perspektif 3D yang menjembul ke atas.

**Architecture:** `App` mengamati elemen `#top` memakai `IntersectionObserver` dan menyimpan status `heroPassed`. Status diteruskan ke `Floating3DAssets`, yang menandai artwork sebagai visible atau hidden; CSS menangani sisi, perspektif, transisi, responsive sizing, dan reduced motion.

**Tech Stack:** React 19, Motion, CSS, Vitest, Testing Library

---

### Task 1: Status hero dan kontrak komponen

**Files:**
- Modify: `frontend/src/App.test.jsx`
- Modify: `frontend/src/App.jsx`
- Modify: `frontend/src/components/Floating3DAssets.jsx`

- [ ] **Step 1: Write the failing tests**

Tambahkan observer palsu dan pastikan artwork tersembunyi saat hero terlihat, lalu muncul setelah callback melaporkan hero tidak terlihat. Pastikan atribut sisi bernilai `right` untuk Profesional dan `left` untuk Casual.

```jsx
test('shows persona artwork only after the hero has passed', () => {
  let observerCallback
  global.IntersectionObserver = class {
    constructor(callback) { observerCallback = callback }
    observe() {}
    disconnect() {}
  }

  render(<App />)
  expect(screen.getByTestId('persona-3d-artwork')).toHaveAttribute('data-visible', 'false')

  act(() => observerCallback([{ isIntersecting: false, boundingClientRect: { bottom: -1 } }]))
  expect(screen.getByTestId('persona-3d-artwork')).toHaveAttribute('data-visible', 'true')
})
```

- [ ] **Step 2: Run tests to verify failure**

Run: `cd frontend && npm run test -- --run App.test.jsx`

Expected: FAIL karena `data-visible` dan observer belum tersedia.

- [ ] **Step 3: Implement hero observation**

Tambahkan `useEffect`, status `heroPassed`, observer pada `#top`, cleanup `disconnect`, lalu teruskan `visible={heroPassed}` ke `Floating3DAssets`.

```jsx
const [heroPassed, setHeroPassed] = useState(false)

useEffect(() => {
  const hero = document.querySelector('#top')
  if (!hero || !('IntersectionObserver' in window)) return undefined

  const observer = new IntersectionObserver(([entry]) => {
    setHeroPassed(!entry.isIntersecting && entry.boundingClientRect.bottom < 0)
  })
  observer.observe(hero)
  return () => observer.disconnect()
}, [])
```

Pada artwork tambahkan kontrak berikut:

```jsx
data-side={isProfessional ? 'right' : 'left'}
data-visible={visible}
```

- [ ] **Step 4: Run tests to verify green**

Run: `cd frontend && npm run test -- --run App.test.jsx`

Expected: seluruh tes `App.test.jsx` PASS.

### Task 2: Sticky edge dan depth 3D

**Files:**
- Modify: `frontend/src/index.css`

- [ ] **Step 1: Replace hero artwork positioning**

Atur artwork sebagai elemen fixed di tengah sisi viewport, tersembunyi dengan translate keluar layar, dan tampil menggunakan `translate3d`, `rotateX`, serta `rotateZ`.

```css
.persona-3d-artwork {
  position: fixed;
  top: 44vh;
  perspective: 900px;
  transform-origin: center bottom;
  transition-property: opacity, transform, filter;
  transition-duration: 420ms;
}

.persona-3d-artwork[data-side="right"] {
  right: -9rem;
  transform: translate3d(5rem, 2rem, 0) rotateX(56deg) rotateZ(-12deg);
}

.persona-3d-artwork[data-side="left"] {
  left: -8rem;
  transform: translate3d(-5rem, 2rem, 0) rotateX(52deg) rotateZ(12deg);
}

.persona-3d-artwork[data-visible="true"] {
  opacity: 0.7;
}
```

- [ ] **Step 2: Add mobile and reduced-motion rules**

Pada layar maksimal 767px, turunkan lebar dan opasitas. Pada `prefers-reduced-motion`, hilangkan animasi floating dan gunakan transisi instan.

- [ ] **Step 3: Run automated verification**

Run: `cd frontend && npm run test -- --run`

Expected: 21+ tests PASS.

Run: `cd frontend && npm run build`

Expected: Vite build selesai dengan exit code 0.

- [ ] **Step 4: Perform visual verification**

Periksa Profesional dan Casual pada 1440x1000 serta 390x844. Pastikan artwork tidak tampak di hero, muncul setelah scroll, menjembul dari sisi yang benar, dan tidak menutup konten interaktif.

