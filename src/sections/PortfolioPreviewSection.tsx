"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Monitor } from "lucide-react";
import { PORTFOLIO_PROJECTS, SITE_CONFIG } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PortfolioPreviewSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section id="portfolio" className="relative border-t border-white/10 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Real Portfolio"
          title="Hasil Pekerjaan & Proyek Nyata"
          subtitle="Berikut adalah daftar website dan platform yang telah dikembangkan secara publik menggunakan teknologi pada portfolio utama."
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PORTFOLIO_PROJECTS.map((project, index) => {
            const hasImageError = imageErrors[project.id];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-navy-900/75 transition hover:border-cyan-500/40"
              >
                <div>
                  <div className="border-b border-white/10 bg-navy-950">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                      </div>
                      <span className="font-mono text-[9px] sm:text-[11px] text-slate-400 truncate mx-2">
                        {project.demoUrl ? project.demoUrl.replace("https://", "") : project.title}
                      </span>
                      <span className="shrink-0 rounded bg-cyan-500/15 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-cyan-300">
                        {project.statusLabel}
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
                      {!hasImageError ? (
                        <img
                          src={project.imagePath} alt={`Screenshot proyek ${project.title}`}
                          onError={() => setImageErrors((prev) => ({ ...prev, [project.id]: true }))}
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                          <Monitor className="h-10 w-10 text-cyan-400/80" />
                          <p className="mt-3 text-sm sm:text-lg font-bold text-white">{project.title}</p>
                          <p className="mt-1 text-[10px] sm:text-xs text-cyan-300">{project.category}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <span className="font-mono text-[10px] sm:text-xs font-semibold text-cyan-400">
                      {project.category}
                    </span>
                    <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-4 sm:mt-5">
                      <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase">
                        Fitur Utama:
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {project.keyFeatures.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-navy-950/50 px-5 py-4 sm:px-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] sm:text-xs text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-navy-950 transition hover:bg-cyan-400"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={SITE_CONFIG.portfolioUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex flex-col sm:flex-row items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 text-xs sm:text-sm font-bold text-cyan-300 transition hover:bg-cyan-500 hover:text-navy-950"
          >
            <span>Lihat Profil & Portfolio Lengkap Developer</span>
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}