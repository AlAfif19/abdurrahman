import portfolioAiCertificate from '../assets/certificate-portfolio-ai.png'
import humasCertificate from '../assets/certificate-humas.png'
import itLearnCertificate from '../assets/certificate-it-learn.png'
import ombakCertificate from '../assets/certificate-ombak.png'
import ragDashboard from '../assets/project-rag-dashboard.png'
import segmentasiDashboard from '../assets/project-segmentasi-dashboard.png'
import transcriptImage from '../assets/transkrip-nilai.png'
import projectDiagnoMed from '../assets/project-diagnomed.png'
import projectPosWarung from '../assets/project-pos-warung.png'
import projectAliyaWedding from '../assets/project-aliya-wedding.png'
import projectKuromiCare from '../assets/project-kuromi-care.png'

export const portfolio = {
  profile: {
    name: 'Al Afif Abdurrahman',
    email: 'alafifabdurrahman8@gmail.com',
    phone: '081398180712',
    location: 'Bandung, Indonesia',
    linkedin: 'https://linkedin.com/in/al-afif19',
    github: 'https://github.com/AlAfif19',
    cvHref: '/assets/CV_Afif_2026.docx',
  },
  contacts: [
    { label: 'Email', href: 'mailto:alafifabdurrahman8@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/al-afif19' },
    { label: 'GitHub', href: 'https://github.com/AlAfif19' },
    { label: 'WhatsApp', href: 'https://wa.me/6281398180712' },
  ],
  modeCopy: {
    professional: {
      role: 'Pengembang AI/ML dan Lulusan Teknik Informatika',
      nav: [
        ['Beranda', '#top'],
        ['Tentang', '#about'],
        ['Skill', '#skills'],
        ['Project', '#projects'],
        ['Pengalaman', '#experience'],
        ['Pendidikan', '#education'],
        ['Sertifikat', '#certificates'],
        ['Kontak', '#contact'],
      ],
      summary:
        'Fresh graduate Teknik Informatika dengan fokus Machine Learning, NLP, RAG, LLM, data science, integrasi web, dan software quality.',
      switchLabel: 'Alih ke mode casual',
      switchText: 'Profesional',
      primaryLabel: 'Unduh CV',
      secondaryLabel: 'Lihat Project IT',
    },
    casual: {
      role: 'Penggerak Organisasi, Pembicara, dan Performer',
      nav: [
        ['Beranda', '#top'],
        ['Tentang', '#about'],
        ['Organisasi', '#organization'],
        ['Galeri', '#gallery'],
        ['Sertifikat', '#certificates'],
        ['Kontak', '#contact'],
      ],
      summary:
        'Pengalaman memimpin organisasi, menyusun regulasi, mengelola acara, menjadi pembicara, dan tampil di depan audiens.',
      switchLabel: 'Alih ke mode profesional',
      switchText: 'Casual',
      primaryLabel: 'Unduh CV',
      secondaryLabel: 'Lihat Galeri',
    },
  },
  content: {
    professional: {
      about:
        'Berdedikasi dalam pengembangan solusi berbasis Machine Learning, Natural Language Processing, Retrieval-Augmented Generation, dan Large Language Model. Menggunakan Python, K-Means, CNN, SVM, serta CRISP-DM untuk menghasilkan insight bisnis, menemukan pola data, dan membangun otomatisasi layanan melalui aplikasi web.',
      highlights: [
        { value: '3,90', label: 'IPK dari 4,00, predikat Cumlaude' },
        { value: 'AI/ML', label: 'RAG, LLM, NLP, K-Means, CNN, SVM' },
        { value: '2026', label: 'Target kelulusan Teknik Informatika' },
        { value: '2x', label: 'Pengalaman magang dan pelayanan' },
      ],
      skills: {
        tech: ['Python', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
        ai: ['RAG', 'LLM', 'NLP', 'K-Means', 'CNN', 'SVM', 'CRISP-DM'],
        tools: ['React', 'Vite', 'Tailwind CSS', 'Flask', 'FastAPI', 'Microsoft Office'],
        soft: ['Komunikasi', 'Manajemen Waktu', 'Pemecahan Masalah', 'Kerja Sama Tim'],
        languages: ['Indonesia - Penutur asli', 'Inggris - Kemampuan membaca profesional'],
      },
      projects: [
        {
          title: 'Digitalisasi Pelayanan Desa berbasis RAG',
          summary:
            'Mengembangkan sistem chatbot pelayanan desa berbasis Retrieval-Augmented Generation untuk membantu masyarakat mendapatkan informasi layanan secara cepat, ringkas, dan relevan dengan memanfaatkan LLM.',
          tags: ['RAG', 'LLM', 'FastAPI', 'Dashboard', 'WhatsApp'],
          github: 'https://github.com/AlAfif19/RAGchatbot-desa.git',
          image: ragDashboard,
          imageAlt: 'Pratinjau dashboard RAG Chatbot Desa',
          featured: true,
        },
        {
          title: 'Tugas Akhir: Web Clustering Customer',
          summary:
            'Mengembangkan sistem web segmentasi pelanggan yang mengintegrasikan algoritma clustering (Python K-Means Plus) dan visualisasi data untuk mendukung pengambilan keputusan bisnis dengan standar keamanan data.',
          tags: ['K-Means Plus', 'CRISP-DM', 'React', 'Flask', 'MySQL'],
          github: 'https://github.com/AlAfif19/segmentasi__pelanggan.git',
          image: segmentasiDashboard,
          imageAlt: 'Pratinjau dashboard Segmentasi Pelanggan',
          featured: true,
        },
        {
          title: 'DiagnoMed RuleBasedMedic',
          summary:
            'Sistem pakar swamedikasi awal menggunakan metode inferensi Rule-Based Reasoning, Forward Chaining, Backward Chaining, dan Certainty Factor berbasis Laravel, MySQL, Tailwind CSS, dan Vite.',
          tags: ['Laravel', 'MySQL', 'Tailwind CSS', 'Vite', 'Rule-Based Reasoning', 'Forward Chaining', 'Certainty Factor'],
          github: 'https://github.com/AlAfif19/rulebasedmedic',
          image: projectDiagnoMed,
          imageAlt: 'Pratinjau landing page DiagnoMed',
          featured: true,
        },
        {
          title: 'Warung HPP',
          summary:
            'Platform digital pendukung operasional warung dan UMKM dengan modul kalkulator HPP untuk manajemen menu, pricing, dan analisis profitabilitas berbasis Next.js dan FastAPI.',
          tags: ['Next.js', 'FastAPI', 'MySQL', 'Business Intelligence', 'HPP Calculator'],
          github: 'https://github.com/AlAfif19/warung',
          image: projectPosWarung,
          imageAlt: 'Pratinjau dashboard Warung HPP',
          featured: true,
        },
        {
          title: 'JourneyHil Magical',
          summary:
            'Website interaktif bertema Magical Kuromi yang mengintegrasikan profil, story, pemutar musik, dan mini game Kuromi Care (virtual pet) dengan Framer Motion dan local storage.',
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Virtual Pet'],
          github: 'https://github.com/AlAfif19/journeyhil',
          image: projectKuromiCare,
          imageAlt: 'Pratinjau dashboard JourneyHil Magical',
          featured: true,
        },
        {
          title: 'Aliya Wedding Organizer',
          summary:
            'Landing page premium untuk wedding organizer dengan optimasi visual branding, UX, parallax scrolling, dan asset compression untuk meningkatkan user engagement.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Parallax Scrolling', 'Landing Page'],
          github: 'https://github.com/AlAfif19/wedding',
          image: projectAliyaWedding,
          imageAlt: 'Pratinjau landing page Aliya Wedding',
          featured: true,
        },
        {
          title: 'Project Software Quality Assurance',
          summary:
            'Melakukan black-box testing dan security testing pada aplikasi web untuk memastikan bebas dari bug kritis sebelum deployment.',
          tags: ['QA Tester', 'Black-box Testing', 'Security Testing'],
        },
      ],
      experience: [
        {
          title: 'IT Support Intern',
          meta: 'PT DiAntara Inter Media / Sep - Okt 2025',
          description:
            'Memelihara dan melakukan troubleshooting infrastruktur jaringan serta software, berkolaborasi dengan developer menjaga kestabilan sistem, dan membantu instalasi serta konfigurasi perangkat lunak.',
        },
        {
          title: 'Bagian Pelayanan dan Operator',
          meta: 'Kantor Kecamatan Kertasari / Jan - Jun 2021',
          description:
            'Melayani administrasi masyarakat, mengelola data kependudukan pada SIAK, serta mendukung pencetakan dokumen dan perekaman KTP elektronik.',
        },
      ],
      education: [
        {
          title: 'S1 Teknik Informatika',
          meta: 'Universitas Kebangsaan Republik Indonesia / 2022 - 2026',
          description:
            'IPK 3,90 / 4,00 (Cumlaude). Peraih nilai tertinggi mata kuliah Artificial Intelligence. Fokus implementasi model AI dengan CRISP-DM dan tugas akhir Web Clustering Customer.',
          image: transcriptImage,
          imageAlt: 'Pratinjau transkrip nilai Al Afif Abdurrahman',
          actionHref: '/assets/Transkrip_Nilai.png',
          actionLabel: 'Unduh Transkrip Nilai',
        },
      ],
      certificates: [
        { title: 'Trial Bootcamp Data Science & AI', meta: 'Intelligo ID, 2025', previewType: 'pdf', href: '/assets/Intelligo_Data_Science_AI.pdf' },
        { title: 'Praktek Kerja Industri', meta: 'PT DiAntara Inter Media, 2025', previewType: 'pdf', href: '/assets/Praktek_Kerja_Industri_DiAntara.pdf' },
        { title: 'Build Your Modern Portfolio Website with an AI Chatbot', meta: 'HMIF x HMSI UKRI, 2026', image: portfolioAiCertificate, href: '/assets/AI_Al_Afif_Abdurrahman.pdf' },
        { title: 'The Bits and Bytes of Computer Networking', meta: 'Coursera, 2025', previewType: 'pdf', href: '/assets/Coursera_IT_Support.pdf' },
        { title: 'Private Cloud Berbasis Ubuntu untuk UMKM', meta: 'Teknik Informatika UKRI, 2025' },
        { title: 'Software Development Seminar', meta: 'Teknik Informatika UKRI, 2024' },
        { title: 'AI in Science: Pioneering Research and Applications', meta: 'International Seminar, 2025' },
        { title: 'Humanoid Robots, AI, dan Lake Data', meta: 'Teknik Informatika UKRI, 2024' },
      ],
    },
    casual: {
      about:
        'Kepemimpinan, advokasi, public speaking, manajemen acara, dan seni pertunjukan membentuk kemampuan komunikasi serta kolaborasi. Pengalaman ini melengkapi sisi teknis dengan empati, struktur kerja, dan kepercayaan diri di hadapan audiens.',
      highlights: [
        { value: 'DPM', label: 'Ketua Komisi I Bidang Legislasi' },
        { value: 'IT X FAIR', label: 'Ketua pelaksana kegiatan kampus' },
        { value: 'Speaker', label: 'Voyage of Discovery 2025' },
        { value: 'Artist', label: 'Performer Teater Lima Wajah' },
      ],
      organizations: [
        {
          title: 'Ketua Komisi I Bidang Legislasi',
          meta: 'DPM UKRI / Jan - Des 2025',
          description:
            'Mengawasi SOP dan regulasi, memimpin sidang paripurna, menjalankan advokasi mahasiswa, serta membangun tata kelola organisasi yang transparan, akuntabel, dan terstruktur.',
        },
        {
          title: 'Ketua Pelaksana IT X FAIR HMIF UKRI',
          meta: 'Juli 2024',
          description:
            'Memimpin perencanaan, timeline, eksekusi, koordinasi divisi, monitoring, evaluasi, kunjungan sosial, seminar, hingga ceremony Dies Natalis HMIF.',
        },
        {
          title: 'Speaker - Voyage of Discovery',
          meta: 'Association of English Literature / Nov 2025',
          description:
            'Menyampaikan materi secara interaktif, membangun komunikasi dua arah melalui diskusi, dan menciptakan suasana pembelajaran yang aktif serta kolaboratif.',
        },
        {
          title: 'Performer Artist',
          meta: 'Open House Teater Lima Wajah / Okt 2023',
          description:
            'Tampil dalam pertunjukan vokal dan musik, berkolaborasi dengan tim kreatif, serta menunjukkan kemampuan komunikasi dan kepercayaan diri di depan audiens.',
        },
      ],
      certificates: [
        { title: 'BOMS Speaker', meta: 'Public speaking dan kontribusi acara', previewType: 'pdf', href: '/assets/BOMS_Speaker.pdf' },
        { title: 'OMBAK 2022', meta: 'Penghargaan kegiatan mahasiswa', image: ombakCertificate, href: ombakCertificate },
        { title: 'Webinar Dasar-dasar Humas', meta: 'Komunikasi publik, 2025', image: humasCertificate, href: humasCertificate },
        { title: 'IT Learn 2022', meta: 'Kegiatan mahasiswa Informatika', image: itLearnCertificate, href: itLearnCertificate },
      ],
    },
  },
}
