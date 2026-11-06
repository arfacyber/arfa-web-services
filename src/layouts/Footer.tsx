import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS, SERVICE_CATEGORIES } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="font-mono tracking-wider">
                ARFA<span className="text-cyan-400">.DEV</span>{" "}
                <span className="text-xs font-normal text-slate-400">
                  Services
                </span>
              </span>
            </a>

            <p className="mt-3.5 max-w-md text-sm leading-relaxed text-slate-400">
              Layanan pembuatan website dan aplikasi berbasis web untuk UMKM,
              bisnis lokal, sekolah, organisasi, komunitas, dan individu di
              Indonesia dengan informasi harga awal yang transparan.
            </p>

            <div className="mt-5 space-y-1 text-xs text-slate-400">
              <p>
                Developer:{" "}
                <span className="font-semibold text-slate-200">
                  {SITE_CONFIG.developerName}
                </span>
              </p>
              <p>
                Domain Layanan:{" "}
                <span className="font-mono text-cyan-400">
                  services.wawansugianto.my.id
                </span>
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Layanan Tersedia
            </h3>
            <ul className="mt-3.5 space-y-2 text-sm">
              {SERVICE_CATEGORIES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#pricing"
                    className="transition hover:text-cyan-400"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Navigasi &amp; Portal Utama
            </h3>
            <div className="mt-3.5 grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <a
                href={SITE_CONFIG.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-2 text-xs font-mono text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
              >
                <span>Portfolio Utama: wawansugianto.my.id</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 ARFA.DEV Services. All Rights Reserved.</p>
          <p className="font-mono text-slate-400">
            HTML5 • Tailwind CSS • Next.js • PHP • Laravel • MySQL
          </p>
        </div>
      </div>
    </footer>
  );
}