"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { PORTFOLIO_SLOTS, SITE_CONFIG } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PortfolioPreviewSection() {
  return (
    <section id="portfolio" className="relative border-t border-white/10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Portfolio Showcase"
          title="Eksplorasi Karya & Dokumentasi Teknis"
          subtitle="Kami mengutamakan transparansi. Seluruh rekam jejak proyek, eksperimen antarmuka, dan karya asli Muhammad Arfadhia Rizqitamma Giari dapat diakses langsung melalui portal portfolio utama."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PORTFOLIO_SLOTS.map((slot, index) => (
            <motion.article
              key={slot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-navy-900/60 p-7 transition-all hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-cyan-400">
                    {slot.category}
                  </span>
                  {slot.isPlaceholder ? (
                    <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 font-mono text-[11px] text-amber-300">
                      Configurable Slot
                    </span>
                  ) : (
                    <span className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                      Live Portal
                    </span>
                  )}
                </div>

                <div className="mt-5 flex h-36 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-4">
                  <div className="text-center">
                    <FolderGit2 className="mx-auto h-8 w-8 text-cyan-400" />
                    <p className="mt-2 font-mono text-xs text-slate-300">
                      {slot.externalUrl.replace("https://", "")}
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">{slot.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {slot.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex flex-wrap gap-2">
                  {slot.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={slot.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  <span>Buka di Portal Portfolio</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Main CTA Button to Official Portfolio */}
        <div className="mt-14 text-center">
          <a
            href={SITE_CONFIG.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 text-sm font-bold tracking-wider text-navy-950 uppercase shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
          >
            <span>VIEW FULL PORTFOLIO</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="mt-3 font-mono text-xs text-slate-400">
            Direct Link: {SITE_CONFIG.portfolioUrl}
          </p>
        </div>
      </div>
    </section>
  );
}