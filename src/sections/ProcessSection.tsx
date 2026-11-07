\"use client\";

import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative border-t border-white/10 bg-navy-900/35 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work Process"
          title="Tahapan Pengerjaan Proyek"
          subtitle="Proses kerja yang terstruktur dari diskusi awal hingga website siap digunakan."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-navy-900/75 p-5 transition hover:border-cyan-500/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500 font-mono text-sm font-extrabold text-navy-950">
                    {step.number}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    TAHAP {step.number}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 border-t border-white/10 pt-3">
                <span className="block font-mono text-[10px] uppercase text-cyan-400">
                  Hasil Tahapan:
                </span>
                <span className="text-xs font-medium text-slate-200">
                  {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
