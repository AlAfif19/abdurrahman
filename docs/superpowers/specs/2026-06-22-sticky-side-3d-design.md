# Sticky Side 3D Design

## Tujuan

Memindahkan aset chip dan kertas dari hero menjadi ornamen sisi viewport yang menetap selama pengunjung menjelajahi konten portfolio.

## Perilaku

- Aset tidak dirender secara visual di dalam area hero.
- Aset muncul setelah bagian hero terlewati.
- Mode Profesional menampilkan chip dari sisi kanan viewport.
- Mode Casual menampilkan kertas dari sisi kiri viewport.
- Aset tetap menempel pada viewport selama scroll dan tidak menangkap input pointer.
- Pergantian mode langsung mengganti jenis aset dan sisi penempatannya.

## Tampilan

- Sebagian aset berada di luar viewport sehingga terlihat menjembul dari sisi layar.
- Rotasi sumbu X dan Z, perspective, serta drop shadow menciptakan kedalaman 3D ke arah atas.
- Opasitas dibatasi agar aset tidak bersaing dengan isi portfolio.
- Pada layar kecil, ukuran dan opasitas diturunkan serta posisi dijaga agar tidak menutup tombol atau teks.
- Preferensi reduced motion menonaktifkan gerakan mengambang.

## Implementasi

- `Floating3DAssets` menerima status apakah hero sudah terlewati.
- `App` mengamati hero dengan `IntersectionObserver` dan meneruskan status tersebut.
- Gambar menggunakan satu kelas dasar dengan atribut mode untuk sisi dan transformasi berbeda.
- Aset dekoratif memiliki `aria-hidden="true"`.

## Verifikasi

- Tes memastikan aset tersembunyi saat hero terlihat.
- Tes memastikan aset muncul setelah hero terlewati.
- Tes memastikan chip berada di kanan dan kertas berada di kiri.
- Tes yang ada untuk pergantian persona tetap lulus.
- Build produksi dan pemeriksaan visual desktop/mobile harus berhasil.
