"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Terminal, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pb-32"
    >
      {/* Subtle Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-35"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <Badge>Professional Web Development Services</Badge>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
              Build Your Digital Presence With{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-electric-500 to-cyan-300 bg-clip-text text-transparent">
                ARFA.DEV
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              {SITE_CONFIG.hero.subheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold text-navy-950 shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
              >
                <span>{SITE_CONFIG.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={SITE_CONFIG.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-white/10"
              >
                <span>{SITE_CONFIG.hero.secondaryCta}</span>
                <ExternalLink className="h-4 w-4 text-cyan-400" />
              </a>
            </div>

            {/* Technical Stack Highlights */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-lg">
              <div>
                <p className="font-mono text-xs uppercase text-cyan-400">Frontend</p>
                <p className="mt-1 text-sm font-semibold text-white">Next.js &amp; TypeScript</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-cyan-400">Styling</p>
                <p className="mt-1 text-sm font-semibold text-white">Tailwind &amp; Motion</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-cyan-400">API Architecture</p>
                <p className="mt-1 text-sm font-semibold text-white">Laravel REST Ready</p>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Isometric Web Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Background Cyan Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-electric-500/10 to-transparent blur-2xl"
              />

              {/* Main Glassmorphic Browser Window Mockup */}
              <div className="relative rounded-2xl border border-white/15 bg-navy-900/90 p-5 shadow-2xl backdrop-blur-xl">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="rounded-md border border-white/10 bg-navy-950/90 px-3 py-1 font-mono text-[11px] text-cyan-300">
                    https://arfa.dev
                  </div>
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                </div>

                {/* Simulated UI Canvas Inside Mockup */}
                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-navy-800 to-navy-950 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-cyan-400">
                        // ARCHITECTURE_PREVIEW
                      </span>
                      <span className="rounded bg-cyan-500/15 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                        SSR + API
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white">
                      Modular Next.js App Router + Laravel REST Spec
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-lg border border-white/10 bg-white/5 p-2">
                        <div className="h-1.5 w-8 rounded bg-cyan-400/70" />
                        <div className="mt-2 h-1.5 w-12 rounded bg-white/20" />
                      </div>
                      <div className="h-12 rounded-lg border border-white/10 bg-white/5 p-2">
                        <div className="h-1.5 w-10 rounded bg-electric-500/70" />
                        <div className="mt-2 h-1.5 w-8 rounded bg-white/20" />
                      </div>
                      <div className="h-12 rounded-lg border border-white/10 bg-white/5 p-2">
                        <div className="h-1.5 w-6 rounded bg-cyan-400/70" />
                        <div className="mt-2 h-1.5 w-10 rounded bg-white/20" />
                      </div>
                    </div>
                  </div>

                  {/* Code Block Preview */}
                  <div className="rounded-xl border border-white/10 bg-navy-950 p-4 font-mono text-xs leading-relaxed text-slate-300">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                      <span>config/architecture.ts</span>
                    </div>
                    <pre className="mt-2.5 overflow-x-auto text-[11px] text-slate-300">
                      <code>{`export const ArfaBlueprint = {
  brand: "ARFA.DEV",
  frontend: ["Next.js", "TypeScript", "Tailwind"],
  backendReady: "Laravel REST API + MySQL",
  quality: "Clean, Responsive & SEO-Ready"
};`}</code>
                    </pre>
                  </div>

                  {/* Bottom Status Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <Layers className="h-5 w-5 shrink-0 text-cyan-400" />
                      <div>
                        <p className="text-xs font-semibold text-white">Modular UI</p>
                        <p className="text-[11px] text-slate-400">Reusable System</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-cyan-400" />
                      <div>
                        <p className="text-xs font-semibold text-white">Semantic SEO</p>
                        <p className="text-[11px] text-slate-400">Schema.org Ready</p>
                      </div>
                    </div>
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