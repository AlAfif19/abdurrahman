# PROMPT — Redesign portofolio Al Afif Abdurrahman (hitam-putih editorial)

Kamu adalah frontend engineer senior. Zip ini berisi kode lengkap situs portofolio saya
(React 19 + Vite + Tailwind v4 + `motion`), tiga foto, dan prompt ini.
Tugasmu: redesign SELURUH tampilan situs ke gaya editorial hitam-putih bergaya majalah fashion,
dengan HERO baru yang mengikuti gambar referensi `FOTO/referensi-hero.png`.
Susunan section, isi konten, link, dan fungsi toggle Profesional/Casual TIDAK berubah.

## 0. Isi zip

```
PROMPT.md                          (prompt ini)
FOTO/hero-professional-cutout.png  foto berjas, PNG transparan  → mode Profesional
FOTO/hero-casual-cutout.png        foto panggung, PNG transparan → mode Casual
FOTO/referensi-hero.png            REFERENSI komposisi hero (ikuti ini)
FOTO/_asli-profesional-berlatar-kotak-kotak.png   arsip, JANGAN dipakai di situs
frontend/                          kode (package.json, index.html, vite.config.js, src/...)
docs/ README.md prd.md design-system.md architecture.md   dokumen proyek lama
```

Tidak disertakan (sudah ada di proyek asli, tetap dipakai apa adanya): `frontend/src/assets/*` (gambar project,
sertifikat, galeri) dan `frontend/public/assets/*` (PDF CV dan sertifikat). Jangan ubah nama import-nya.

## 1. Langkah 0 — baca dulu, jangan langsung mengedit
1. Baca `frontend/src/App.jsx`, `data/portfolio.js`, semua file di `components/`, `index.css`, `index.html`, dan `App.test.jsx`.
2. Tulis ringkasan singkat: (a) cara toggle mode bekerja (`useState('mode')` di `App.jsx`, atribut `data-mode` pada `.app-shell`,
   `copy = portfolio.modeCopy[mode]`, `content = portfolio.content[mode]`), (b) daftar section per mode, (c) komponen yang akan kamu ubah.
3. Struktur yang HARUS dipertahankan:
   - Profesional: Navbar → Hero → AboutSection → `highlight-strip` → SkillsSection → ProjectsSection → TimelineSection (Pengalaman) → TimelineSection (Pendidikan) → CertificatesSection → ContactSection → Footer
   - Casual: Navbar → Hero → AboutSection → `highlight-strip` → TimelineSection (Organisasi) → GallerySection → CertificatesSection → ContactSection → Footer
4. Teks, data, link, dan atribut `id` anchor (`#top`, `#about`, `#skills`, `#projects`, `#experience`, `#education`, `#organization`, `#gallery`, `#certificates`, `#contact`) tidak boleh berubah.

## 2. Aturan yang tidak boleh dilanggar
- Jangan mengubah `data/portfolio.js` (teks, link, daftar nav, label tombol) kecuali menambah field baru bila benar-benar perlu.
- Jangan membuat halaman terpisah per mode. Pakai mekanisme `mode` / `data-mode` yang sudah ada.
- Semua nilai visual lewat CSS variables (design token) di `index.css`, bukan hardcode per komponen.
- Bahasa konten tetap Indonesia. Hormati `prefers-reduced-motion`.
- Setiap perubahan kode ditampilkan dengan konteks sekitarnya (kode di atas dan di bawah bagian yang berubah), bukan potongan terpisah.

## 3. Design system (seluruh situs, kedua mode)
Tanpa warna aksen, tanpa gradient, glow, atau shadow. Hapus tema lama (navy + biru, krem + oranye), gradient pada nama, dan aset
3D mengambang (`Floating3DAssets` dan `floating-paper.png`; lepaskan dari `App.jsx` dan sesuaikan tesnya).

Token (default: kedua mode memakai palet yang sama, supaya cocok dengan foto Casual yang gelap):
```
--bg: #FAFAF8;  --fg: #0A0A0A;  --muted: #6B6B6B;  --soft: #EFEFEA;  --line: #0A0A0A;
```
> OPSI (hapus jika tidak dipakai): mode Casual memakai palet inversi untuk SEMUA section di bawah hero
> (`--bg:#0A0A0A; --fg:#FAFAF8; --muted:#A3A3A3; --soft:#161616; --line:#FAFAF8`), tetapi hero tetap `#FAFAF8` di kedua mode.

Tipografi (tambahkan di `index.html`, buang font yang tidak dipakai lagi):
- Display serif kontras tinggi gaya Didone: **Bodoni Moda** (opsional italic untuk satu kata kunci per heading di Casual).
- Sans: **DM Sans** untuk menu, label, paragraf, tag, tombol.
- Label kecil: huruf kapital, letter-spacing 0.3em, ~13–14px.

Komponen dasar:
- Garis 1px sebagai pembatas section (inset kiri-kanan ~26px).
- Header section: label bernomor kecil + heading serif besar (ubah `SectionShell`).
- Kartu tanpa border-radius, border 1px, tanpa shadow; hover = background dan teks saling invert (200ms).
- Tag/skill: pill outline 1px, hover terisi. Tombol utama: pill solid (hitam), sekunder: pill outline; hover invert.
- Semua gambar konten (project, sertifikat, galeri, transkrip): `filter: grayscale(1) contrast(1.05)`, hover `grayscale(0)`, transisi 400ms.
- Animasi masuk saat scroll: fade + translateY kecil (pakai `motion` yang sudah ada), tanpa menimpa section lain.
  Perbaiki bug tumpang-tindih section Pengalaman/Pendidikan dan kartu project yang tampak ganda jika terbukti bug, dan laporkan.

## 4. HERO — ikuti `FOTO/referensi-hero.png` (canvas 1852×849)
Hero ini sama untuk kedua mode. Yang berbeda hanya: teks (dari `copy.role`, `copy.summary`, `copy.primaryLabel`, `copy.secondaryLabel`),
foto (Profesional: `hero-professional-cutout.png`, Casual: `hero-casual-cutout.png`), dan nav.
Salin kedua foto ke `frontend/src/assets/` dan impor di `HeroSection.jsx` (ganti import lama `hero-professional-target.png` dan `casual-portrait.jpeg`).

Latar `--bg`, tinggi minimal `100vh`, teks `--fg`. Tata letak (persentase dari referensi, terapkan secara fluid):

1. **Navbar** (tinggi ~98px) — monogram "AF" serif italic tipis di kiri (~44px, Bodoni Moda italic); menu di tengah (DM Sans ~17px);
   item aktif diberi underline 1px (scroll-spy sederhana pakai IntersectionObserver, tidak mengubah `navItems`);
   toggle pill outline di kanan: "Profesional [knob hitam] Casual" (pertahankan `button.mode-toggle`, `aria-label`, dan `data-testid="mode-switch-knob"`);
   garis hitam 1px selebar layar (inset ~26px) tepat di bawahnya. Sticky; saat melewati hero, background mengikuti `--bg`.
2. **Eyebrow** — `copy.role` huruf kapital, letter-spacing ±0.35em, ~19px, x≈7.3% (sedikit menjorok), y≈25% tinggi hero.
3. **Nama raksasa dua baris**, "AL AFIF" dan "ABDURRAHMAN" (tetap pertahankan `h1`, `.hero-name-line`, `.hero-name-accent` pada "Abdurrahman"):
   - Bodoni Moda kapital, ukuran fluid dengan `clamp()` (sekitar 10.8vw di desktop) sehingga baris 2 membentang ±86% lebar layar (x 7%–93%).
   - `line-height ≈ 0.8`, `letter-spacing ≈ -0.04em` (huruf nyaris bersentuhan), baris 1 dan 2 rapat.
   - **Teks berada DI ATAS foto dengan `mix-blend-mode: difference` dan warna teks putih**, sehingga huruf tampak hitam di atas latar terang
     dan berbalik putih saat melintasi foto (lihat huruf "RRA" pada referensi). Pastikan stacking context benar.
4. **Foto** (cutout PNG transparan, tanpa bingkai, tanpa radius) — tepat di tengah horizontal (±51%), tinggi ±74% hero,
   lebar mengikuti rasio (±330px di 1852px), bagian atas kepala sejajar eyebrow (y≈23%), bagian bawah terpotong oleh garis penutup hero.
   Di antara latar dan nama (z-index di bawah nama). Crossfade 250ms saat mode berganti.
   Posisi crop dibuat lewat CSS variable (`--hero-photo-x`, `--hero-photo-y`, `--hero-photo-scale`) per mode supaya mudah saya geser.
   Efek warna: default `filter: grayscale(1) contrast(1.05)`, hover `grayscale(0)` (400ms). (Referensi menampilkan foto berwarna; pakai variabel
   `--hero-photo-filter` agar bisa dibalik jadi default berwarna dan hover hitam putih bila saya minta.)
5. **Ornamen (SVG, `aria-hidden`)** — swash lengkung tipis yang menghubungkan huruf "L" di baris 1 turun ke huruf "D" di baris 2;
   elips orbit tipis (1px, miring ±-15°, membentang dari kiri bawah huruf "D" sampai kanan atas foto) dengan titik hitam kecil di ujung kirinya
   dan bintang empat sudut "✦" di ujung kanan; dua asterisk "✱" tebal (~58px) di tepi kiri dan kanan sejajar baris 2 nama.
   Asterisk berputar sangat pelan (20s linear), orbit boleh bergerak tipis; semuanya mati bila `prefers-reduced-motion`.
6. **Subteks** — `copy.summary` di kolom kanan atas (x≈69%–93%, y≈33%–47%), DM Sans ~24px, line-height 1.3, 4 baris.
7. **Dua tombol pill** (tinggi ~70px, font 500 ~22px) di kiri bawah (x≈7%, y≈86%): "Unduh CV" (hitam solid, ikon unduh, `href={profile.cvHref} download`)
   dan tombol kedua `copy.secondaryLabel` (outline, ikon panah; tujuan `#projects` untuk Profesional, `#gallery` untuk Casual — seperti sekarang).
8. **Garis penutup** hitam 1px selebar layar (inset ~26px) di dasar hero. Pertahankan "Scroll untuk menjelajahi" (ikon mouse) bila muat, ukuran kecil di dekat dasar.
9. **Animasi masuk** (motion): nama muncul per baris/huruf (fade + translateY kecil, stagger ±40ms), lalu eyebrow, subteks, tombol; foto naik dengan `clip-path` dari bawah.

Responsif hero:
- ≤1024px: subteks pindah ke bawah nama (lebar penuh), foto mengecil (±40% lebar), orbit disembunyikan.
- ≤640px: nama `clamp()` agar "ABDURRAHMAN" muat satu baris (±13vw), foto ±55% lebar dan di belakang nama, asterisk dan orbit disembunyikan,
  tombol menumpuk vertikal penuh lebar, menu jadi hamburger overlay layar penuh.

## 5. Section lain (terapkan design system, jangan ubah urutan/isi)
- **AboutSection + highlight-strip**: dua kolom (label + heading "Profil" | paragraf besar ~22px); empat sel statistik dengan pembatas 1px, angka besar serif.
- **SkillsSection** (Profesional): baris per kelompok — kiri nama kelompok (label kecil), kanan tag pill outline.
- **ProjectsSection** (Profesional): grid 2 kolom; nomor indeks, gambar grayscale→warna saat hover, label sumber, judul serif, deskripsi, tag teknologi, ikon link.
- **TimelineSection** (Pengalaman, Pendidikan, Organisasi): tabel/timeline editorial dengan garis 1px; periode sebagai label kecil, judul serif, deskripsi sans; jarak antar section ≥ 120px.
- **GallerySection** (Casual): pertahankan fungsi carousel dan thumbnail; caption serif; thumbnail aktif ditandai garis; gambar grayscale→warna saat hover.
- **CertificatesSection**: grid kartu; placeholder `--soft` dengan ikon dokumen bila gambar gagal dimuat; tautan "Unduh Sertifikat" tetap.
- **ContactSection**: baris besar per kanal (Email, LinkedIn, GitHub, WhatsApp) serif ~40px dengan panah; hover underline + geser tipis.
- **Footer + CTA penutup**: blok terbalik (latar `--fg`, teks `--bg`), "Mari membuat sesuatu yang berdampak." serif besar, tombol Unduh CV, tautan "Lihat mode profesional/casual" tetap berfungsi.

## 6. Pengujian
- Perbarui `App.test.jsx` agar mencerminkan hero baru (hapus tes "full background" dan "persona artwork setelah hero", ganti dengan tes foto hero per mode,
  nama tetap ber-class `hero-name-accent`, toggle mode, dan anchor). Semua tes harus lulus: `npm test -- --run`.
- `npm run build` harus sukses tanpa warning impor.
- Cek manual di 390px, 768px, 1280px, dan 1852px; tidak boleh ada overflow horizontal; kontras teks WCAG AA; fokus keyboard terlihat.

## 7. Keluaran yang saya minta
1. Ringkasan analisis (struktur dua mode, mekanisme toggle, bug yang ditemukan dan yang diperbaiki).
2. Daftar file yang diubah, lalu isi LENGKAP tiap file dengan path di baris atas (siap ditimpa), dan jika hanya sebagian berubah,
   tampilkan bagian itu beserta kode di atas dan di bawahnya.
3. Satu zip berisi hanya file yang berubah/ditambah (struktur folder sama dengan proyek) bila lingkunganmu bisa membuat file.
4. Daftar aset/langkah manual yang masih saya perlukan (mis. menempatkan foto di `src/assets/`, menginstal font).
