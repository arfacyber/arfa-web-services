"use client";

import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK_CATEGORIES } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="relative border-t border-white/10 bg-navy-900/35 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technology Stack"
          title="Teknologi yang Kami Gunakan"
          subtitle="Daftar keahlian teknologi disinkronisasikan secara akurat dengan kompetensi pada portfolio utama ARFA.DEV."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TECH_STACK_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-navy-900/70 p-6"
            >
              <h3 className="text-xl font-bold text-white">
                {cat.categoryName}
              </h3>
              <p className="mt-1.5 text-sm text-slate-300">{cat.description}</p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-xl border border-white/10 bg-navy-950/80 p-3.5 transition hover:border-cyan-500/40"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-sm font-bold text-cyan-400">
                        {tech.name}
                      </p>
                      {tech.status === "learning" && (
                        <span className="rounded border border-amber-500/20 bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-amber-400 uppercase">
                          Learning
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      {tech.role}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
