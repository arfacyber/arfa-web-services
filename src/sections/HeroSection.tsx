\"use client\";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Globe,
  Code2,
  Database,
} from "lucide-react";
import { SITE_CONFIG, SERVICE_CATEGORIES } from "@/config/site";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <Badge>ARFA.DEV Services — Website &amp; Web App Development</Badge>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[52px] lg:leading-[1.15]">
              Build Your Digital Presence With{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-electric-500 to-cyan-300 bg-clip-text text-transparent">
                ARFA.DEV
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {SITE_CONFIG.hero.subheadline}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                UMKM &amp; Bisnis Lokal
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Sekolah, Organisasi &amp; Komunitas
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                Portfolio &amp; Sistem Aplikasi Web
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400"
              >
                <span>{SITE_CONFIG.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4 text-cyan-400" />
                <span>{SITE_CONFIG.hero.secondaryCta}</span>
              </a>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:max-w-xl">
              <div>
                <p className="font-mono text-[11px] uppercase text-slate-400">
                  Landing Page
                </p>
                <p className="mt-0.5 text-base font-extrabold text-cyan-400 sm:text-lg">
                  Mulai Rp350rb
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase text-slate-400">
                  Company Profile
                </p>
                <p className="mt-0.5 text-base font-extrabold text-cyan-400 sm:text-lg">
                  Mulai Rp750rb
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase text-slate-400">
                  Web Application
                </p>
                <p className="mt-0.5 text-base font-extrabold text-cyan-400 sm:text-lg">
                  Mulai Rp1,5jt
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-lg rounded-2xl border border-white/15 bg-navy-900/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="rounded border border-white/10 bg-navy-950 px-2.5 py-1 font-mono text-[11px] text-cyan-300">
                  services.wawansugianto.my.id
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="font-mono text-xs font-semibold text-slate-300 uppercase">
                    Katalog Layanan &amp; Harga Awal
                  </span>
                  <span className="rounded bg-cyan-500/15 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                    Starting From
                  </span>
                </div>

                <div className="space-y-2">
                  {SERVICE_CATEGORIES.slice(0, 4).map((item) => (
                    <a
                      key={item.id}
                      href="#pricing"
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-navy-950/80 px-3.5 py-2.5 transition hover:border-cyan-500/40"
                    >
                      <div>
                        <p className="text-xs font-bold text-white sm:text-sm">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {item.estimatedDuration}
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold text-cyan-400 sm:text-sm">
                        {item.startingPrice}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                    <Globe className="h-4 w-4 text-cyan-400" />
                    <p className="mt-1.5 text-[11px] font-semibold text-white">
                      Web &amp; UI
                    </p>
                    <p className="text-[10px] text-slate-400">
                      HTML, Tailwind, JS
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                    <Code2 className="h-4 w-4 text-cyan-400" />
                    <p className="mt-1.5 text-[11px] font-semibold text-white">
                      Backend
                    </p>
                    <p className="text-[10px] text-slate-400">PHP &amp; Laravel</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                    <Database className="h-4 w-4 text-cyan-400" />
                    <p className="mt-1.5 text-[11px] font-semibold text-white">
                      Database
                    </p>
                    <p className="text-[10px] text-slate-400">MySQL Relational</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
