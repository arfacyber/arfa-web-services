import {
  Rocket,
  UserCheck,
  Building2,
  LayoutDashboard,
  Code2,
  Wrench,
  Smartphone,
  Sliders,
  FolderGit2,
  MessageSquare,
  BadgeCheck,
} from "lucide-react";
import type {
  NavItem,
  ServiceCategory,
  PortfolioProject,
  TechStackCategory,
  WhyChooseItem,
  ProcessStep,
  FaqItem,
} from "@/types";

export const SITE_CONFIG = {
  productName: "ARFA.DEV Services",
  brandName: "ARFA.DEV",
  developerName: "Muhammad Arfadhia Rizqitamma Giari",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://services.wawansugianto.my.id",
  portfolioUrl: "https://wawansugianto.my.id",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  emailAddress: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  hero: {
    headline: "Build Your Digital Presence With ARFA.DEV",
    subheadline:
      "Kami membantu bisnis, organisasi, dan individu membangun website modern, responsif, dan sesuai kebutuhan.",
    primaryCta: "Lihat Layanan",
    secondaryCta: "Konsultasikan Proyek",
  },
  pricingDisclaimer:
    "Harga merupakan estimasi awal. Harga akhir mengikuti kompleksitas dan kebutuhan fitur.",
  pricingAdditionalNote:
    "Domain, hosting, dan biaya pihak ketiga dihitung terpisah. Fitur tambahan mengikuti kesepakatan. Batas pekerjaan maintenance dijelaskan sebelum proyek dimulai.",
  seoKeywords: [
    "ARFA.DEV Services",
    "Jasa pembuatan website",
    "Jasa pembuatan website UMKM",
    "Jasa pembuatan landing page murah",
    "Jasa pembuatan company profile",
    "Jasa pembuatan aplikasi web PHP Laravel",
    "Web developer Indonesia",
  ],
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#services" },
  { label: "Harga", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Teknologi", href: "#technologies" },
  { label: "Proses", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    startingPrice: "Rp350.000",
    shortDescription: "Halaman promosi satu halaman (single-page) yang fokus menampilkan informasi produk, jasa, atau kegiatan secara ringkas dan terarah.",
    targets: ["Promosi produk", "Promosi jasa", "Acara dan kegiatan", "Kampanye digital"],
    features: ["Responsive design", "Hero section", "Informasi produk atau jasa", "Call-to-action", "Kontak WhatsApp", "Basic SEO"],
    estimatedDuration: "Estimasi 3 – 5 Hari Kerja",
    deliverablesInfo: "Cocok untuk pelaku usaha atau penyelenggara acara yang membutuhkan halaman informasi cepat dengan tombol arah langsung ke WhatsApp.",
    icon: Rocket,
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    startingPrice: "Rp500.000",
    shortDescription: "Website profil personal untuk menampilkan rekam jejak karya, keahlian, dan kontak profesional secara rapi.",
    targets: ["Programmer", "Pelajar", "Freelancer", "Profesional"],
    features: ["Profil personal", "About me", "Skills", "Portfolio projects", "Contact section", "Responsive design"],
    estimatedDuration: "Estimasi 4 – 7 Hari Kerja",
    deliverablesInfo: "Dirancang untuk membangun kredibilitas individu saat melamar pekerjaan, menawarkan jasa freelance, atau mendokumentasikan karya.",
    icon: UserCheck,
  },
  {
    id: "company-profile",
    name: "Company Profile",
    startingPrice: "Rp750.000",
    shortDescription: "Website identitas resmi untuk memperkenalkan profil usaha, daftar layanan, dokumentasi kegiatan, dan kontak kepada publik.",
    targets: ["UMKM", "Perusahaan", "Sekolah", "Organisasi", "Komunitas"],
    features: ["Homepage", "About company", "Services", "Portfolio atau galeri", "Contact information", "WhatsApp integration", "Responsive design"],
    estimatedDuration: "Estimasi 7 – 14 Hari Kerja",
    deliverablesInfo: "Pilihan ideal bagi UMKM, sekolah, maupun organisasi yang membutuhkan representasi digital resmi yang informatif dan mudah diakses.",
    icon: Building2,
    isRecommended: true,
  },
  {
    id: "web-application",
    name: "Web Application",
    startingPrice: "Rp1.500.000",
    shortDescription: "Aplikasi berbasis web untuk membantu pencatatan data, administrasi internal, dan pengelolaan operasional secara terstruktur.",
    targets: ["Sistem administrasi", "Sistem manajemen data", "Dashboard internal", "Aplikasi pengelolaan operasional"],
    features: ["Authentication", "Dashboard", "CRUD management", "Database integration", "Role-based access", "Admin panel", "Responsive interface"],
    estimatedDuration: "Estimasi 2 – 4 Minggu",
    deliverablesInfo: "Cakupan fitur dasar dan struktur tabel database disesuaikan dengan alur administrasi yang disepakati pada tahap analisis kebutuhan.",
    icon: LayoutDashboard,
  },
  {
    id: "custom-web-development",
    name: "Custom Web Development",
    startingPrice: "Berdasarkan Kebutuhan",
    shortDescription: "Pengembangan sistem web dengan alur kerja khusus, penambahan fitur spesifik, atau integrasi API di luar paket standar.",
    targets: ["Sistem informasi khusus", "Integrasi API", "Pengembangan fitur tambahan", "Aplikasi web sesuai kebutuhan bisnis"],
    features: ["Analisis alur kerja khusus", "Perancangan skema database", "Pengembangan frontend / backend", "Integrasi layanan/API", "Dokumentasi sistem"],
    estimatedDuration: "Menyesuaikan Proyek",
    deliverablesInfo: "Biaya dan jadwal pengerjaan ditentukan setelah diskusi rincian teknis dan ruang lingkup fitur yang ingin dibangun.",
    icon: Code2,
  },
  {
    id: "website-maintenance",
    name: "Website Maintenance",
    startingPrice: "Rp100.000",
    priceUnit: "/bulan",
    shortDescription: "Layanan pemeliharaan berkala untuk menjaga website tetap berjalan baik, memperbarui konten, dan menangani kendala teknis ringan.",
    targets: ["Pemilik website aktif", "UMKM & Organisasi", "Website sekolah / komunitas", "Bantuan teknis rutin"],
    features: ["Pemeriksaan website", "Perbaikan bug ringan", "Pembaruan konten", "Pemeriksaan fungsi", "Bantuan teknis dasar"],
    estimatedDuration: "Layanan Bulanan",
    deliverablesInfo: "Batas pekerjaan dan jumlah pembaruan konten setiap bulan ditentukan secara jelas dalam kesepakatan awal.",
    icon: Wrench,
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "ecoguard",
    title: "EcoGuard",
    category: "Environmental & Educational Web",
    description: "Platform web interaktif bertema lingkungan dengan konsep edukasi dan gamifikasi.",
    imagePath: "/images/portfolio/ecoguard.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    keyFeatures: ["Konsep edukasi pelestarian alam", "Elemen gamifikasi interaktif", "Desain responsif perangkat pintar"],
    demoUrl: "https://ecoguard.wawansugianto.my.id",
    statusLabel: "Live Demo",
  },
  {
    id: "ascenso",
    title: "ASCENSO CLASS",
    category: "Class Information Website",
    description: "Website informasi kelas dengan desain modern dan responsif untuk menampilkan profil, struktur, anggota, album, dan informasi kelas.",
    imagePath: "/images/portfolio/ascenso.png",
    techStack: ["HTML5", "Tailwind CSS", "JavaScript"],
    keyFeatures: ["Desain antarmuka modern", "Struktur dan profil anggota kelas", "Album memori interaktif"],
    demoUrl: "https://ascenso-class.pages.dev",
    statusLabel: "Live Demo",
  },
];

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    id: "frontend",
    categoryName: "Frontend Development",
    description: "Teknologi utama untuk membangun tata letak antarmuka, penataan gaya, dan interaktivitas website.",
    items: [
      { name: "HTML5", role: "Struktur semantik halaman web" },
      { name: "CSS3", role: "Penataan gaya visual antarmuka" },
      { name: "JavaScript", role: "Interaktivitas sisi klien (Client-side)" },
      { name: "Blade", role: "Laravel templating engine" },
      { name: "Tailwind CSS", role: "Utility-first CSS framework modern" },
      { name: "Alpine.js", role: "Lightweight JavaScript framework" },
      { name: "React.js", role: "Pustaka antarmuka pengguna berbasis komponen" },
    ],
  },
  {
    id: "backend",
    categoryName: "Backend Development",
    description: "Pemrosesan logika sistem, manajemen autentikasi, dan pengaturan hak akses pengguna secara dinamis.",
    items: [
      { name: "PHP", role: "Bahasa pemrograman server-side utama" },
      { name: "Laravel", role: "Framework PHP arsitektur MVC" },
      { name: "Eloquent ORM", role: "Object-Relational Mapping (ORM)" },
      { name: "Authentication", role: "Sistem keamanan login dan registrasi" },
      { name: "Role-Based Access Control (RBAC)", role: "Manajemen otorisasi pengguna" },
    ],
  },
  {
    id: "database",
    categoryName: "Database",
    description: "Penyimpanan dan pengelolaan data relasional secara terstruktur, aman, dan dapat diskalakan.",
    items: [
      { name: "MySQL", role: "Relational Database Management System (RDBMS)" },
      { name: "Database Migrations", role: "Pengelolaan versi skema database" },
      { name: "Relational Data Modeling", role: "Pemodelan entitas dan relasi" },
    ],
  },
  {
    id: "tools",
    categoryName: "Development Tools",
    description: "Perangkat pendukung produktivitas, manajemen versi, pengujian, dan bundling sumber daya.",
    items: [
      { name: "Git", role: "Sistem pengontrol versi (Version control)" },
      { name: "GitHub", role: "Manajemen repositori dan kolaborasi" },
      { name: "Vite", role: "Frontend build tool modern yang cepat" },
      { name: "XAMPP", role: "Lingkungan server lokal (Apache, MySQL, PHP)" },
    ],
  },
  {
    id: "learning",
    categoryName: "Currently Learning",
    description: "Teknologi pengembangan web modern yang saat ini sedang dalam tahap pembelajaran dan eksplorasi aktif.",
    items: [
      { name: "Next.js", role: "React Framework untuk performa dan SEO tinggi", status: "learning" },
      { name: "TypeScript", role: "JavaScript dengan pengetikan statis (Static typing)", status: "learning" },
    ],
  }
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: "responsive-design",
    title: "Desain Responsif",
    description: "Tampilan website disesuaikan agar tetap rapi dan nyaman digunakan baik melalui layar smartphone, tablet, maupun komputer desktop.",
    icon: Smartphone,
  },
  {
    id: "custom-fit",
    title: "Pengembangan Sesuai Kebutuhan",
    description: "Pemilihan teknologi dan fitur disesuaikan dengan tujuan proyek Anda—mulai dari landing page sederhana hingga aplikasi administrasi.",
    icon: Sliders,
  },
  {
    id: "organized-code",
    title: "Struktur Kode Terorganisasi",
    description: "Penulisan kode disusun secara rapi dan terstruktur agar website lebih mudah dikelola atau dikembangkan kembali di kemudian hari.",
    icon: FolderGit2,
  },
  {
    id: "clear-communication",
    title: "Komunikasi Proyek yang Jelas",
    description: "Diskusi kebutuhan, penyampaian progres pengerjaan, hingga tahapan revisi dilakukan secara langsung dan mudah dipahami.",
    icon: MessageSquare,
  },
  {
    id: "transparent-pricing",
    title: "Informasi Harga Transparan",
    description: "Estimasi biaya awal, cakupan fitur dasar, serta rincian biaya tambahan dijelaskan di awal sebelum pengerjaan dimulai.",
    icon: BadgeCheck,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: "01", title: "Konsultasi Kebutuhan", description: "Calon pelanggan menyampaikan tujuan pembuatan website, referensi, dan fitur.", deliverable: "Catatan Proyek" },
  { number: "02", title: "Analisis dan Penawaran", description: "Kami menganalisis kompleksitas halaman/fitur dan memberikan rincian estimasi biaya.", deliverable: "Penawaran Harga" },
  { number: "03", title: "Desain dan Pengembangan", description: "Proses pembuatan tata letak antarmuka dan penulisan kode program sesuai spesifikasi.", deliverable: "Progres Website" },
  { number: "04", title: "Testing dan Revisi", description: "Pemeriksaan fungsi halaman, uji tampilan di perangkat mobile/desktop, serta revisi.", deliverable: "Website Teruji" },
  { number: "05", title: "Deployment dan Serah Terima", description: "Peluncuran website ke domain/hosting yang disiapkan serta penyerahan panduan.", deliverable: "Serah Terima" },
];

export const FAQ_DATA: FaqItem[] = [
  { question: "Berapa biaya pembuatan website?", answer: "Biaya pembuatan website menggunakan sistem estimasi awal (Mulai dari): Landing Page Rp350.000, Personal Portfolio Rp500.000, Company Profile Rp750.000, Web Application Rp1.500.000. Harga akhir bergantung pada kompleksitas dan kebutuhan fitur." },
  { question: "Apakah harga bisa disesuaikan?", answer: "Bisa. Anda dapat mendiskusikan anggaran dan prioritas fitur yang paling dibutuhkan terlebih dahulu. Kami akan membantu menyesuaikan cakupan halaman atau modul fitur agar selaras dengan kebutuhan dan anggaran Anda." },
  { question: "Berapa lama pengerjaan?", answer: "Waktu pengerjaan bergantung pada jenis layanan dan kesiapan materi (teks/foto) dari pelanggan. Sebagai gambaran: Landing Page 3–5 hari kerja, Company Profile 7–14 hari kerja, dan Web Application 2–4 minggu sesuai kompleksitas." },
  { question: "Apakah bisa menggunakan domain sendiri?", answer: "Sangat bisa. Jika Anda sudah memiliki domain atau layanan hosting sendiri, kami dapat membantu menghubungkannya. Jika belum, domain, hosting, dan biaya pihak ketiga akan dihitung secara terpisah sesuai ekstensi domain yang Anda pilih." },
  { question: "Apakah tersedia layanan maintenance?", answer: "Ya, tersedia layanan Website Maintenance mulai dari Rp100.000/bulan yang mencakup pemeriksaan website berkala, perbaikan bug ringan, pembaruan konten, dan bantuan teknis. Batas pekerjaan maintenance dijelaskan sebelum proyek dimulai." },
];

export const BUDGET_OPTIONS = [
  "Mulai Rp350.000 (Landing Page)",
  "Rp500.000 – Rp1.000.000 (Portfolio / Company Profile)",
  "Rp1.000.000 – Rp2.500.000 (Web App Dasar / Custom)",
  "Di atas Rp2.500.000 (Web Application Kompleks)",
  "Layanan Maintenance Bulanan (Rp100.000/bulan)",
  "Belum ditentukan (Ingin diskusi terlebih dahulu)",
];