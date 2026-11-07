"use client";

import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK_CATEGORIES } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Monitor, Server, Database, Wrench, BookOpen, Code2 } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "frontend": Monitor,
  "backend": Server,
  "database": Database,
  "tools": Wrench,
  "learning": BookOpen,
};

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="relative border-t border-white/10 bg-navy-900/35 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technology Stack"
          title="Skills & Technologies"
          subtitle="Daftar keahlian dan teknologi disinkronisasikan dengan kompetensi portofolio utama ARFA.DEV."
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TECH_STACK_CATEGORIES.map((cat, index) => {
            const IconComponent = categoryIcons[cat.id] || Code2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex flex-col rounded-2xl border border-white/10 bg-navy-900/70 p-5 sm:p-6"
              >
                <div className="flex items-center gap-3.5 mb-5 border-b border-white/10 pb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {cat.categoryName}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col justify-center rounded-xl border border-white/10 bg-navy-950/80 p-3.5 transition hover:border-cyan-500/40"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-sm font-bold text-cyan-400 truncate">
                          {tech.name}
                        </span>
                        {tech.status === "learning" && (
                          <span className="shrink-0 rounded border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-amber-400 uppercase">
                            Learning
                          </span>
                        )}
                      </div>
                      <span className="mt-1 text-xs leading-relaxed text-slate-300">
                        {tech.role}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}