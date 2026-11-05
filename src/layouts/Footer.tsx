import React from "react";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-6">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="font-mono tracking-wider">
                ARFA<span className="text-cyan-400">.DEV</span>
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Layanan pengembangan website profesional dengan fokus pada desain modern,
              struktur kode bersih, dan kesiapan skala bisnis digital.
            </p>

            <p className="mt-5 text-sm font-medium text-slate-300">
              Designed &amp; Developed by{" "}
              <a
                href={SITE_CONFIG.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline decoration-cyan-500/30 underline-offset-4 transition hover:text-cyan-300"
              >
                {SITE_CONFIG.developerName}
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#home" className="transition hover:text-cyan-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-cyan-400">
                  Services
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-cyan-400"
                >
                  <span>Portfolio</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Official Portfolio Portal */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Official Portfolio
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Jelajahi profil lengkap dan rekam jejak karya developer melalui tautan resmi:
            </p>
            <a
              href={SITE_CONFIG.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-mono text-cyan-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
            >
              <span>wawansugianto.my.id</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 ARFA.DEV. All Rights Reserved.</p>
          <p className="font-mono text-slate-400">
            Next.js • TypeScript • Tailwind CSS • Laravel API Ready
          </p>
        </div>
      </div>
    </footer>
  );
}