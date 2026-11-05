import {
  Building2,
  Rocket,
  Briefcase,
  ShoppingBag,
  Cpu,
  RefreshCw,
  Sparkles,
  Smartphone,
  Code2,
  Gauge,
  SearchCheck,
  MessageSquareCode,
} from "lucide-react";
import type {
  NavItem,
  ServiceItem,
  PricingTier,
  PortfolioSlot,
  WhyChooseItem,
  ProcessStep,
  FaqItem,
} from "@/types";

export const SITE_CONFIG = {
  brandName: "ARFA.DEV",
  developerName: "Muhammad Arfadhia Rizqitamma Giari",
  portfolioUrl: "https://wawansugianto.my.id",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://arfa.dev",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281359111799",
  laravelApiUrl: process.env.NEXT_PUBLIC_LARAVEL_API_URL || "",
  hero: {
    headline: "Build Your Digital Presence With ARFA.DEV",
    subheadline:
      "We create modern, responsive, and professional websites to help businesses grow in the digital world.",
    primaryCta: "Start Your Project",
    secondaryCta: "Explore My Portfolio",
  },
  seoKeywords: [
    "Jasa pembuatan website",
    "Jasa website profesional",
    "Web developer Indonesia",
    "Jasa pembuatan website bisnis",
    "ARFA.DEV",
    "Muhammad Arfadhia Rizqitamma Giari",
  ],
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "company-profile",
    title: "Company Profile Website",
    description:
      "Representasi digital resmi untuk membangun kredibilitas perusahaan, menampilkan profil korporasi, visi-misi, dan portofolio bisnis secara elegan.",
    features: [
      "Struktur multi-halaman profesional",
      "Desain eksklusif sesuai identitas brand",
      "Optimasi SEO on-page dasar",
      "Integrasi kontak & peta lokasi",
    ],
    icon: Building2,
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description:
      "Halaman tunggal berfokus tinggi pada konversi untuk kampanye produk, peluncuran layanan baru, atau akuisisi prospek (leads).",
    features: [
      "Copywriting hierarchy yang terarah",
      "Kecepatan muat halaman tinggi",
      "Call-to-Action (CTA) strategis",
      "Responsif di seluruh ukuran layar",
    ],
    icon: Rocket,
  },
  {
    id: "business-website",
    title: "Business Website",
    description:
      "Solusi website komprehensif untuk operasional bisnis harian, katalog layanan, dan kanal informasi pelanggan yang terstruktur.",
    features: [
      "Arsitektur informasi skalabel",
      "Integrasi formulir konsultasi/pemesanan",
      "Dokumentasi struktur pengelolaan",
      "Standar keamanan web modern",
    ],
    icon: Briefcase,
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    description:
      "Platform katalog dan transaksi online yang dirancang untuk memudahkan pelanggan menjelajahi produk dan melakukan pemesanan.",
    features: [
      "Manajemen katalog & varian produk",
      "Alur keranjang belanja intuitif",
      "Siap diintegrasikan ke Payment/WhatsApp Checkout",
      "Antarmuka mobile-first untuk pembeli",
    ],
    icon: ShoppingBag,
  },
  {
    id: "custom-web-app",
    title: "Custom Web Application",
    description:
      "Pengembangan aplikasi berbasis web sesuai proses bisnis spesifik menggunakan arsitektur Next.js dan kesiapan backend Laravel REST API.",
    features: [
      "Arsitektur Frontend & REST API terpisah",
      "Perancangan skema database MySQL",
      "Sistem autentikasi & hak akses",
      "Fitur kustom sesuai spesifikasi",
    ],
    icon: Cpu,
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description:
      "Pembaruan menyeluruh tampilan, struktur kode, dan performa website lama Anda agar relevan dengan standar UI/UX dan perangkat saat ini.",
    features: [
      "Audit UI/UX dan performa website lama",
      "Modernisasi antarmuka & tipografi",
      "Peningkatan responsivitas mobile",
      "Refactoring ke teknologi web modern",
    ],
    icon: RefreshCw,
  },
];

/**
 * KONFIGURASI PAKET HARGA
 * Ubah nilai `startingPrice` sesuai kebijakan harga resmi Anda.
 * Tidak menggunakan angka karangan agar tetap transparan.
 */
export const PRICING_DATA: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Solusi esensial untuk kehadiran digital pertama dan kampanye terfokus.",
    priceLabel: "Starting from",
    startingPrice: "Custom Rate — Tier 1",
    priceNote: "Disesuaikan dengan kompleksitas bagian & aset konten",
    features: [
      "Landing Page",
      "Responsive Design",
      "Basic SEO",
      "Contact Integration",
    ],
    isHighlighted: false,
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Dirancang untuk bisnis yang membutuhkan struktur multi-halaman & kredibilitas penuh.",
    priceLabel: "Starting from",
    startingPrice: "Custom Rate — Tier 2",
    priceNote: "Scope ditentukan berdasarkan jumlah halaman & modul",
    features: [
      "Multi-page Website",
      "Modern UI/UX",
      "SEO Optimization",
      "Admin Dashboard (jika termasuk dalam scope)",
    ],
    isHighlighted: true,
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Sistem aplikasi web terintegrasi dengan kebutuhan logika bisnis dan basis data khusus.",
    priceLabel: "Starting from",
    startingPrice: "Berdasarkan Spesifikasi",
    priceNote: "Estimasi dihitung setelah analisis kebutuhan teknis",
    features: [
      "Custom Web Application",
      "Database Integration",
      "Authentication",
      "Custom Features",
    ],
    isHighlighted: false,
  },
];

/**
 * SLOT PORTFOLIO
 * Tidak mengklaim proyek fiktif. Seluruh kartu mengarahkan pengunjung
 * untuk memverifikasi karya asli langsung di https://wawansugianto.my.id
 * atau dapat Anda ganti langsung pada array di bawah ini.
 */
export const PORTFOLIO_SLOTS: PortfolioSlot[] = [
  {
    id: "portfolio-verified-main",
    title: "Verified Developer Portfolio & Case Studies",
    category: "Official Portfolio Portal",
    description:
      "Lihat daftar proyek nyata, eksperimen teknis, dan implementasi antarmuka yang telah dikerjakan langsung melalui portal portfolio utama.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel"],
    externalUrl: "https://wawansugianto.my.id",
    isPlaceholder: false,
  },
  {
    id: "slot-custom-1",
    title: "Project Slot #01 — Configurable Showcase",
    category: "Web Architecture Slot",
    description:
      "Slot ini disiapkan secara transparan pada src/config/site.ts agar dapat diisi dengan studi kasus klien terbaru tanpa perlu mengubah kode komponen.",
    techStack: ["Responsive UI", "Clean Architecture", "SEO Ready"],
    externalUrl: "https://wawansugianto.my.id",
    isPlaceholder: true,
  },
  {
    id: "slot-custom-2",
    title: "Project Slot #02 — Configurable Showcase",
    category: "Web Application Slot",
    description:
      "Slot ini disiapkan secara transparan pada src/config/site.ts untuk menampilkan dokumentasi proyek berikutnya atau diarahkan ke portfolio utama.",
    techStack: ["REST API Ready", "Modern Frontend", "Performance"],
    externalUrl: "https://wawansugianto.my.id",
    isPlaceholder: true,
  },
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: "modern-design",
    title: "Modern Design",
    description:
      "Pendekatan visual minimalis dengan hierarki tipografi tegas, kontras terukur, dan tata letak berstandar agensi teknologi modern.",
    icon: Sparkles,
  },
  {
    id: "responsive-website",
    title: "Responsive Website",
    description:
      "Tampilan beradaptasi secara presisi di layar desktop, tablet, maupun smartphone untuk memastikan kenyamanan akses seluruh pengunjung.",
    icon: Smartphone,
  },
  {
    id: "clean-code",
    title: "Clean Code",
    description:
      "Kode ditulis secara modular menggunakan TypeScript dan komponen terstruktur sehingga mudah dipelihara dan dikembangkan di masa depan.",
    icon: Code2,
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Optimasi aset, pemuatan komponen efisien, dan arsitektur Next.js untuk menjaga waktu muat halaman tetap cepat dan stabil.",
    icon: Gauge,
  },
  {
    id: "seo-friendly",
    title: "SEO Friendly",
    description:
      "Implementasi Semantic HTML, struktur metadata lengkap, Open Graph, Sitemap XML, dan Schema.org agar mudah dikenali mesin pencari.",
    icon: SearchCheck,
  },
  {
    id: "direct-communication",
    title: "Direct Communication",
    description:
      "Komunikasi teknis dan diskusi kebutuhan dilakukan secara langsung dengan developer tanpa perantara berlapis yang menghambat keputusan.",
    icon: MessageSquareCode,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Diskusi awal untuk memahami tujuan bisnis, target audiens, referensi visual, serta cakupan fitur yang dibutuhkan.",
    deliverable: "Ringkasan Kebutuhan & Scope Proyek",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Penyusunan struktur halaman (sitemap), alur navigasi pengguna, serta pemilihan spesifikasi teknis yang paling tepat.",
    deliverable: "Wireframe Konseptual & Jadwal Pengerjaan",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Perancangan antarmuka visual berfokus pada kejelasan informasi, estetika brand, dan kemudahan interaksi di berbagai perangkat.",
    deliverable: "Desain Antarmuka Beresolusi Tinggi",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Implementasi desain ke dalam kode produksi menggunakan Next.js, TypeScript, Tailwind CSS, serta integrasi API bila diperlukan.",
    deliverable: "Staging Website Interaktif",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Pengujian menyeluruh mencakup responsivitas layar, fungsi formulir/navigasi, kecepatan muat, dan validasi struktur SEO.",
    deliverable: "Laporan Kualitas & Revisi Terverifikasi",
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "Peluncuran website ke server produksi, konfigurasi domain/SSL, serta serah terima akses dan panduan penggunaan.",
    deliverable: "Website Live & Dokumentasi Serah Terima",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Berapa lama pembuatan website?",
    answer:
      "Durasi pengerjaan bergantung pada kompleksitas halaman, kesiapan materi konten dari klien, dan fitur yang disepakati. Landing page memiliki waktu pengerjaan lebih singkat dibandingkan website multi-halaman atau aplikasi web kustom. Estimasi jadwal rinci diberikan pada tahap Planning setelah ruang lingkup proyek jelas.",
  },
  {
    question: "Apakah website bisa dibuka di HP?",
    answer:
      "Ya. Seluruh website yang dikembangkan oleh ARFA.DEV menerapkan pendekatan Responsive Design sehingga tata letak, teks, dan tombol navigasi menyesuaikan secara optimal di smartphone, tablet, laptop, maupun monitor desktop.",
  },
  {
    question: "Apakah tersedia domain dan hosting?",
    answer:
      "Pengadaan domain dan layanan hosting/server dapat disertakan dalam paket kesepakatan atau menggunakan akun infrastruktur milik Anda sendiri. Kami akan membantu proses konfigurasi DNS dan deployment hingga website dapat diakses publik dengan aman (HTTPS/SSL).",
  },
  {
    question: "Apakah website bisa dikelola sendiri?",
    answer:
      "Bergantung pada paket dan spesifikasi proyek yang Anda pilih. Untuk website statis/landing page, pembaruan konten dapat dilakukan melalui konfigurasi terstruktur, sedangkan untuk proyek yang mencakup Admin Dashboard atau CMS pada scope pengerjaan, Anda dapat memperbarui data secara mandiri melalui panel admin.",
  },
  {
    question: "Apakah tersedia maintenance?",
    answer:
      "Tersedia opsi dukungan pemeliharaan (maintenance) berdasarkan kesepakatan, mencakup pembaruan berkala, pemantauan ketersediaan sistem, perbaikan bug teknis, maupun penambahan bagian halaman baru seiring perkembangan bisnis Anda.",
  },
  {
    question: "Bagaimana proses pembayaran?",
    answer:
      "Skema pembayaran dilakukan secara bertahap dan transparan berdasarkan pencapaian tahap pengerjaan (milestone), dimulai dari uang muka (down payment) saat kesepakatan proyek dan pelunasan setelah tahapan pengujian selesai sebelum serah terima penuh.",
  },
];

export const BUDGET_OPTIONS = [
  "Belum ditentukan (Butuh konsultasi estimasi)",
  "Skala Starter / Landing Page",
  "Skala Professional / Multi-Page",
  "Skala Custom Web Application",
];