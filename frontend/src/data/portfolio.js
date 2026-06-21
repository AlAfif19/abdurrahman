import portfolioAiCertificate from '../assets/certificate-portfolio-ai.png'
import humasCertificate from '../assets/certificate-humas.png'
import itLearnCertificate from '../assets/certificate-it-learn.png'
import ombakCertificate from '../assets/certificate-ombak.png'
import ragDashboard from '../assets/project-rag-dashboard.png'
import segmentasiDashboard from '../assets/project-segmentasi-dashboard.png'

export const portfolio = {
  profile: {
    name: 'Al Afif Abdurrahman',
    email: 'alafif@example.com',
    location: 'Indonesia',
    github: 'https://github.com/AlAfif19',
    cvHref: '/assets/CV_Afif_2026.docx',
  },
  contacts: [
    { label: 'Email', href: 'mailto:alafif@example.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/AlAfif19' },
  ],
  modeCopy: {
    professional: {
      role: 'Pengembang AI/ML',
      nav: [
        ['Profil', '#about'],
        ['Tech Stack', '#skills'],
        ['Project IT', '#projects'],
        ['Sertifikat', '#certificates'],
        ['Kontak', '#contact'],
      ],
      summary:
        'Portfolio profesional yang menonjolkan project AI, data, dashboard web, kualitas software, dan kesiapan kerja di bidang IT.',
      switchLabel: 'Alih ke mode casual',
      switchText: 'Profesional',
      primaryLabel: 'Unduh CV',
      secondaryLabel: 'Lihat Project IT',
    },
    casual: {
      role: 'Penggerak Organisasi',
      nav: [
        ['Profil', '#about'],
        ['Organisasi', '#organization'],
        ['Galeri', '#gallery'],
        ['Sertifikat', '#certificates'],
        ['Kontak', '#contact'],
      ],
      summary:
        'Sisi casual yang menampilkan pengalaman organisasi, kepemimpinan, public speaking, dan kegiatan non-IT yang membentuk karakter kolaboratif.',
      switchLabel: 'Alih ke mode profesional',
      switchText: 'Casual',
      primaryLabel: 'Unduh CV',
      secondaryLabel: 'Lihat Galeri',
    },
  },
  content: {
    professional: {
      about:
        'Fokus pada pengembangan sistem berbasis AI, analisis data, dashboard web, dan praktik software quality agar project yang dibuat rapi, terukur, dan bisa dipresentasikan secara profesional.',
      highlights: [
        { value: 'AI/ML', label: 'RAG, clustering, dan eksperimen model' },
        { value: 'React', label: 'Dashboard modern berbasis komponen' },
        { value: 'Python', label: 'Backend API dan workflow data' },
        { value: 'QA', label: 'Validasi fitur dan dokumentasi sistem' },
      ],
      skills: {
        tech: ['React', 'Vite', 'Tailwind CSS', 'Python', 'FastAPI', 'Flask'],
        ai: ['Machine Learning', 'RAG', 'K-Means Plus', 'CRISP-DM', 'Prompt Engineering'],
        tools: ['GitHub', 'MySQL', 'scikit-learn', 'CSV/Excel/JSON Export'],
      },
      projects: [
        {
          title: 'RAG Chatbot Desa',
          summary:
            'Sistem chatbot desa berbasis RAG dengan dashboard web, backend API, dan integrasi WhatsApp connector.',
          tags: ['RAG', 'Dashboard', 'API', 'WhatsApp'],
          github: 'https://github.com/AlAfif19/RAGchatbot-desa.git',
          image: ragDashboard,
          imageAlt: 'Pratinjau dashboard RAG Chatbot Desa',
          featured: true,
        },
        {
          title: 'Segmentasi Pelanggan',
          summary:
            'Sistem segmentasi pelanggan menggunakan K-Means Plus, React, Flask, scikit-learn, MySQL, dan export hasil.',
          tags: ['React', 'Flask', 'K-Means Plus', 'MySQL'],
          github: 'https://github.com/AlAfif19/segmentasi__pelanggan.git',
          image: segmentasiDashboard,
          imageAlt: 'Pratinjau dashboard Segmentasi Pelanggan',
          featured: true,
        },
      ],
      experience: [
        {
          title: 'Pengembangan Project AI dan Web',
          meta: 'Fokus profesional',
          description:
            'Membangun project berbasis AI, dashboard web, dan workflow data dengan perhatian pada dokumentasi serta kualitas implementasi.',
        },
      ],
      certificates: [
        {
          title: 'Build Your Modern Portfolio Website with an AI Chatbot',
          meta: 'Sertifikat teknis',
          image: portfolioAiCertificate,
          href: '/assets/AI_Al_Afif_Abdurrahman.pdf',
        },
        {
          title: 'IT Learn 2022',
          meta: 'Kegiatan Informatika',
          image: itLearnCertificate,
          href: itLearnCertificate,
        },
      ],
    },
    casual: {
      about:
        'Di luar sisi teknis, pengalaman organisasi, event, public speaking, dan kerja tim menjadi ruang untuk melatih komunikasi, empati, dan kepemimpinan.',
      highlights: [
        { value: 'DPM', label: 'Pengalaman organisasi kampus' },
        { value: 'MC', label: 'Public speaking dan pembawaan acara' },
        { value: 'Tim', label: 'Kolaborasi lintas kegiatan' },
        { value: 'Event', label: 'Dukungan acara dan komunikasi publik' },
      ],
      organizations: [
        {
          title: 'DPM KEMA UKRI',
          meta: 'Organisasi',
          description:
            'Terlibat dalam kegiatan organisasi, koordinasi tim, komunikasi, dan representasi dalam lingkungan kampus.',
        },
        {
          title: 'Kegiatan dan Acara Kampus',
          meta: 'Non-IT',
          description:
            'Mengikuti dan mendukung kegiatan yang melatih public speaking, kepemimpinan, serta kerja sama tim.',
        },
      ],
      certificates: [
        {
          title: 'OMBAK 2022',
          meta: 'Penghargaan kegiatan mahasiswa',
          image: ombakCertificate,
          href: ombakCertificate,
        },
        {
          title: 'Webinar Dasar-dasar Humas',
          meta: 'Komunikasi publik',
          image: humasCertificate,
          href: humasCertificate,
        },
      ],
    },
  },
}
