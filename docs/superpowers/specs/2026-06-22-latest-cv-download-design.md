# Latest CV Download Design

## Tujuan

Memastikan tombol **Unduh CV** di website langsung mengunduh dokumen `CV_Afif_2026.docx` versi terbaru.

## Kondisi Saat Ini

- Tombol CV pada hero dan footer sudah menggunakan atribut `download`.
- Kedua tombol mengarah ke `/assets/CV_Afif_2026.docx` melalui `profile.cvHref`.
- File terbaru berada di `foto/CV_Afif_2026.docx`.
- Salinan di `frontend/public/assets/CV_Afif_2026.docx` masih merupakan versi lama.

## Desain

- Salin file terbaru dari `foto/CV_Afif_2026.docx` untuk menggantikan file dengan nama yang sama di `frontend/public/assets/`.
- Pertahankan URL publik, nama file, data profil, serta komponen tombol yang sudah ada.
- Saat tombol pada hero atau footer diklik, browser mengunduh DOCX terbaru dengan nama `CV_Afif_2026.docx`.
- Tidak ada perubahan visual atau perilaku lain pada website.

## Penanganan Kegagalan

- Implementasi harus memastikan aset sumber tersedia sebelum penyalinan.
- Build harus memuat dokumen pada output produksi di jalur `/assets/CV_Afif_2026.docx`.

## Verifikasi

- Pastikan file publik identik dengan file terbaru menggunakan hash SHA-256.
- Jalankan tes frontend yang memeriksa atribut `download` dan URL CV.
- Jalankan build produksi dan pastikan dokumen CV tersedia dalam hasil build.
