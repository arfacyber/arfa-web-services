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
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://services.wawansugianto.my.id",
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
    "Harga merupakan estimasi awal. Harga akhir bergantung pada kompleksitas dan kebutuhan fitur.",
  pricingAdditionalNote:
    "Domain, hosting, dan biaya layanan pihak ketiga dihitung terpisah.",
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
    shortDescription:
      "Halaman promosi satu halaman (single-page) yang fokus menampilkan informasi produk, jasa, atau kegiatan secara ringkas dan terarah.",
    targets: [
      "Promosi produk",
      "Promosi jasa",
      "Acara dan kegiatan",
      "Kampanye digital",
    ],
    features: [
      "Responsive design",
      "Hero section",
      "Informasi produk atau jasa",
      "Call-to-action",
      "Kontak WhatsApp",
      "Basic SEO",
    ],
    estimatedDuration: "Estimasi 3 – 5 Hari Kerja",
    deliverablesInfo:
      "Cocok untuk pelaku usaha atau penyelenggara acara yang membutuhkan halaman informasi cepat dengan tombol arah langsung ke WhatsApp.",
    icon: Rocket,
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    startingPrice: "Rp500.000",
    shortDescription:
      "Website profil personal untuk menampilkan rekam jejak karya, keahlian, dan kontak profesional secara rapi.",
    targets: ["Programmer", "Pelajar", "Freelancer", "Profesional"],
    features: [
      "Profil personal",
      "About me",
      "Skills",
      "Portfolio projects",
      "Contact section",
      "Responsive design",
    ],
    estimatedDuration: "Estimasi 4 – 7 Hari Kerja",
    deliverablesInfo:
      "Dirancang untuk membangun kredibilitas individu saat melamar pekerjaan, menawarkan jasa freelance, atau mendokumentasikan karya.",
    icon: UserCheck,
  },
  {
    id: "company-profile",
    name: "Company Profile",
    startingPrice: "Rp750.000",
    shortDescription:
      "Website identitas resmi untuk memperkenalkan profil usaha, daftar layanan, dokumentasi kegiatan, dan kontak kepada publik.",
    targets: ["UMKM", "Perusahaan", "Sekolah", "Organisasi", "Komunitas"],
    features: [
      "Homepage",
      "About company",
      "Services",
      "Portfolio atau galeri",
      "Contact information",
      "WhatsApp integration",
      "Responsive design",
    ],
    estimatedDuration: "Estimasi 7 – 14 Hari Kerja",
    deliverablesInfo:
      "Pilihan ideal bagi UMKM, sekolah, maupun organisasi yang membutuhkan representasi digital resmi yang informatif dan mudah diakses.",
    icon: Building2,
    isRecommended: true,
  },
  {
    id: "web-application",
    name: "Web Application",
    startingPrice: "Rp1.500.000",
    shortDescription:
      "Aplikasi berbasis web untuk membantu pencatatan data, administrasi internal, dan pengelolaan operasional secara terstruktur.",
    targets: [
      "Sistem administrasi",
      "Sistem manajemen data",
      "Dashboard internal",
      "Aplikasi pengelolaan operasional",
    ],
    features: [
      "Authentication",
      "Dashboard",
      "CRUD management",
      "Database integration",
      "Role-based access sesuai kebutuhan",
      "Admin panel",
      "Responsive interface",
    ],
    estimatedDuration: "Estimasi 2 – 4 Minggu (Menyesuaikan Fitur)",
    deliverablesInfo:
      "Cakupan fitur dasar dan struktur tabel database disesuaikan dengan alur administrasi yang disepakati pada tahap analisis kebutuhan.",
    icon: LayoutDashboard,
  },
  {
    id: "custom-web-development",
    name: "Custom Web Development",
    startingPrice: "Berdasarkan Kebutuhan",
    shortDescription:
      "Pengembangan sistem web dengan alur kerja khusus, penambahan fitur spesifik, atau integrasi API di luar paket standar.",
    targets: [
      "Sistem informasi khusus",
      "Integrasi API",
      "Pengembangan fitur tambahan",
      "Aplikasi web sesuai kebutuhan bisnis",
    ],
    features: [
      "Analisis alur kerja khusus",
      "Perancangan skema database sesuai proses bisnis",
      "Pengembangan backend (PHP / Laravel) atau frontend modern",
      "Integrasi layanan/API pihak ketiga bila diperlukan",
      "Dokumentasi penggunaan sistem",
    ],
    estimatedDuration: "Menyesuaikan Ruang Lingkup Proyek",
    deliverablesInfo:
      "Biaya dan jadwal pengerjaan ditentukan setelah diskusi rincian teknis dan ruang lingkup fitur yang ingin dibangun.",
    icon: Code2,
  },
  {
    id: "website-maintenance",
    name: "Website Maintenance",
    startingPrice: "Rp100.000",
    priceUnit: "/bulan",
    shortDescription:
      "Layanan pemeliharaan berkala untuk menjaga website tetap berjalan baik, memperbarui konten, dan menangani kendala teknis ringan.",
    targets: [
      "Pemilik website aktif",
      "UMKM & Organisasi",
      "Website sekolah / komunitas",
      "Klien yang membutuhkan bantuan teknis rutin",
    ],
    features: [
      "Pemeriksaan website",
      "Perbaikan bug ringan",
      "Pembaruan konten",
      "Pemeriksaan fungsi",
      "Bantuan teknis dasar",
    ],
    estimatedDuration: "Layanan Bulanan (Batas pekerjaan sesuai kesepakatan)",
    deliverablesInfo:
      "Batas pekerjaan dan jumlah pembaruan konten setiap bulan ditentukan secara jelas dalam kesepakatan awal.",
    icon: Wrench,
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "ecoguard",
    title: "EcoGuard",
    category: "Environmental & Educational Web",
    description:
      "Website bertema lingkungan yang menyajikan konten edukasi pelestarian alam dengan antarmuka interaktif dan responsif.",
    imagePath: "/images/portfolio/ecoguard.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    keyFeatures: [
      "Materi edukasi lingkungan terstruktur",
      "Komponen interaksi pengguna",
      "Tata letak responsif mobile & desktop",
    ],
    demoUrl: "https://ecoguard.wawansugianto.my.id",
    statusLabel: "Live Demo Tersedia",
  },
  {
    id: "ascenso",
    title: "Ascenso Class",
    category: "Modern Class & Community Web",
    description:
      "Website yang dikembangkan dengan tampilan modern untuk menyajikan profil, informasi kegiatan, dan struktur anggota secara elegan.",
    imagePath: "/images/portfolio/ascenso.png",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    keyFeatures: [
      "Desain antarmuka modern & bersih",
      "Navigasi informasi terstruktur",
      "Optimal di perangkat mobile",
    ],
    demoUrl: "https://ascenso-class.pages.dev",
    statusLabel: "Live Demo Tersedia",
  },
  {
  id: "laundry-management",
  title: "Laundry Management System",
  category: "Business Management System",
  description:
    "Aplikasi manajemen laundry berbasis web menggunakan Laravel dan MySQL untuk membantu pengelolaan operasional laundry secara terstruktur.",
  imagePath: "/images/portfolio/laundry.png",
  techStack: [
    "PHP",
    "Laravel",
    "MySQL",
    "Blade",
    "Tailwind CSS",
    "JavaScript",
  ],
  keyFeatures: [
    "Autentikasi pengguna",
    "Manajemen hak akses Admin dan Staff (RBAC)",
    "Dashboard berdasarkan role pengguna",
    "Pengelolaan data operasional laundry",
  ],
  demoUrl: "https://laundry-management-system-production-1a6d.up.railway.app/",
  statusLabel: "Business Management Application",
},
];

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    id: "frontend",
    categoryName: "Frontend Development",
    description:
      "Teknologi utama untuk membangun tata letak antarmuka, penataan gaya, dan interaktivitas website.",
    items: [
      { name: "HTML", role: "Struktur semantik halaman web" },
      { name: "CSS", role: "Penataan gaya visual antarmuka" },
      { name: "JavaScript", role: "Interaktivitas sisi klien (Client-side)" },
      { name: "Blade", role: "Laravel templating engine" },
      { name: "Tailwind CSS", role: "Utility-first CSS framework" },
      { name: "Alpine.js", role: "Lightweight JavaScript framework" },
      { name: "Next.js", role: "React Framework untuk web modern", status: "learning" },
    ],
  },
  {
    id: "backend",
    categoryName: "Backend Development",
    description:
      "Pemrosesan logika sistem, manajemen autentikasi, dan pengaturan hak akses pengguna secara dinamis.",
    items: [
      { name: "PHP", role: "Bahasa pemrograman server-side utama" },
      { name: "Laravel", role: "Framework PHP untuk arsitektur aplikasi web" },
      { name: "Eloquent ORM", role: "Object-Relational Mapping (ORM) dinamis" },
      { name: "Authentication", role: "Sistem keamanan login dan registrasi" },
      { name: "Role-Based Access Control (RBAC)", role: "Manajemen hak akses pengguna" },
    ],
  },
  {
    id: "database",
    categoryName: "Database",
    description:
      "Penyimpanan dan pengelolaan data relasional secara terstruktur, aman, dan mudah dimodifikasi.",
    items: [
      { name: "MySQL", role: "Relational Database Management System (RDBMS)" },
      { name: "Database Migrations", role: "Pengelolaan versi skema database (Laravel)" },
      { name: "Relational Data Modeling", role: "Pemodelan hubungan antar entitas data" },
    ],
  },
  {
    id: "tools",
    categoryName: "Development Tools",
    description:
      "Perangkat pendukung manajemen versi kode, pengaturan repositori, bundling, dan pengujian server lokal.",
    items: [
      { name: "Git", role: "Version control system" },
      { name: "GitHub", role: "Manajemen repositori & kolaborasi" },
      { name: "Vite", role: "Frontend build tool modern" },
      { name: "XAMPP", role: "Lingkungan server lokal (PHP, MySQL, Apache)" },
    ],
  },
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: "responsive-design",
    title: "Desain Responsif",
    description:
      "Tampilan website disesuaikan agar tetap rapi dan nyaman digunakan baik melalui layar smartphone, tablet, maupun komputer desktop.",
    icon: Smartphone,
  },
  {
    id: "custom-fit",
    title: "Pengembangan Sesuai Kebutuhan",
    description:
      "Pemilihan teknologi dan fitur disesuaikan dengan tujuan proyek Anda—mulai dari landing page sederhana hingga aplikasi administrasi berbasis PHP/Laravel.",
    icon: Sliders,
  },
  {
    id: "organized-code",
    title: "Struktur Kode Terorganisasi",
    description:
      "Penulisan kode disusun secara rapi dan terstruktur agar website lebih mudah dikelola atau dikembangkan kembali di kemudian hari.",
    icon: FolderGit2,
  },
  {
    id: "clear-communication",
    title: "Komunikasi Proyek yang Jelas",
    description:
      "Diskusi kebutuhan, penyampaian progres pengerjaan, hingga tahapan revisi dilakukan secara langsung dan mudah dipahami.",
    icon: MessageSquare,
  },
  {
    id: "transparent-pricing",
    title: "Informasi Harga Transparan",
    description:
      "Estimasi biaya awal, cakupan fitur dasar, serta rincian biaya tambahan (seperti domain atau fitur ekstra) dijelaskan di awal sebelum pengerjaan dimulai.",
    icon: BadgeCheck,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Konsultasi Kebutuhan",
    description:
      "Calon pelanggan menyampaikan tujuan pembuatan website, referensi tampilan, serta fitur yang dibutuhkan melalui WhatsApp atau formulir konsultasi.",
    deliverable: "Catatan Kebutuhan Proyek",
  },
  {
    number: "02",
    title: "Analisis dan Penawaran",
    description:
      "Kami menganalisis kompleksitas halaman/fitur dan memberikan rincian estimasi biaya, waktu pengerjaan, serta ruang lingkup kerja yang disepakati.",
    deliverable: "Rincian Fitur & Penawaran Harga",
  },
  {
    number: "03",
    title: "Desain dan Pengembangan",
    description:
      "Proses pembuatan tata letak antarmuka dan penulisan kode program sesuai spesifikasi layanan yang telah disetujui.",
    deliverable: "Progres Website / Aplikasi Web",
  },
  {
    number: "04",
    title: "Testing dan Revisi Sesuai Kesepakatan",
    description:
      "Pemeriksaan fungsi halaman, uji tampilan di perangkat mobile/desktop, serta penyesuaian revisi berdasarkan ruang lingkup kesepakatan.",
    deliverable: "Website Teruji & Siap Rilis",
  },
  {
    number: "05",
    title: "Deployment dan Serah Terima",
    description:
      "Peluncuran website ke domain/hosting yang disiapkan serta penyerahan akses atau panduan penggunaan kepada pelanggan.",
    deliverable: "Website Online & Serah Terima",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Berapa biaya pembuatan website?",
    answer:
      "Biaya pembuatan website menggunakan sistem Starting From (mulai dari): Landing Page mulai Rp350.000, Personal Portfolio mulai Rp500.000, Company Profile mulai Rp750.000, Web Application mulai Rp1.500.000, dan Website Maintenance mulai Rp100.000/bulan. Biaya akhir menyesuaikan jumlah halaman, tingkat kerumitan fitur, dan kebutuhan proyek.",
  },
  {
    question: "Apakah harga bisa disesuaikan?",
    answer:
      "Bisa. Anda dapat mendiskusikan anggaran dan prioritas fitur yang paling dibutuhkan terlebih dahulu. Kami akan membantu menyesuaikan cakupan halaman atau modul fitur agar selaras dengan kebutuhan dan anggaran Anda.",
  },
  {
    question: "Berapa lama pengerjaan?",
    answer:
      "Waktu pengerjaan bergantung pada jenis layanan dan kesiapan materi (teks/foto) dari pelanggan. Sebagai gambaran awal, Landing Page berkisar 3–5 hari kerja, Personal Portfolio 4–7 hari kerja, Company Profile 7–14 hari kerja, dan Web Application mulai dari 2–4 minggu sesuai kompleksitas fitur.",
  },
  {
    question: "Apakah bisa menggunakan domain sendiri?",
    answer:
      "Sangat bisa. Jika Anda sudah memiliki domain atau layanan hosting sendiri, kami dapat membantu menghubungkannya. Jika belum memiliki, biaya pembelian domain dan sewa hosting akan dihitung secara terpisah dan transparan sesuai ekstensi domain (.com, .id, .my.id, dll.) yang Anda pilih.",
  },
  {
    question: "Apakah tersedia layanan maintenance?",
    answer:
      "Ya, tersedia layanan Website Maintenance mulai dari Rp100.000/bulan yang mencakup pemeriksaan website berkala, perbaikan bug ringan, pembaruan konten, pemeriksaan fungsi, dan bantuan teknis dasar sesuai batas pekerjaan yang disepakati.",
  },
  {
    question: "Apakah bisa membuat aplikasi web custom?",
    answer:
      "Bisa. Melalui layanan Web Application dan Custom Web Development, kami melayani pembuatan sistem informasi khusus, aplikasi administrasi berbasis PHP/Laravel & MySQL, dashboard pengelolaan data, maupun penambahan fitur khusus.",
  },
  {
    question: "Bagaimana proses pembayaran?",
    answer:
      "Pembayaran dilakukan secara bertahap. Setelah ruang lingkup fitur dan estimasi biaya disepakati, pengerjaan dimulai setelah pembayaran uang muka (DP). Pelunasan dilakukan setelah website selesai diuji dan siap diserahterimakan.",
  },
];

export const BUDGET_OPTIONS = [
  "Mulai Rp350.000 – Rp500.000 (Landing Page / Portfolio Dasar)",
  "Rp500.000 – Rp1.000.000 (Portfolio / Company Profile)",
  "Rp1.000.000 – Rp2.500.000 (Company Profile / Web App)",
  "Di atas Rp2.500.000 (Web Application / Custom System)",
  "Layanan Maintenance Bulanan (Mulai Rp100.000/bulan)",
  "Belum ditentukan (Ingin diskusi estimasi biaya terlebih dahulu)",
];
