"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessSection() {
  return (
    <section id="process" className="relative border-t border-white/10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work Process"
          title="Alur Pengerjaan yang Terukur & Sistematis"
          subtitle="Setiap tahapan proyek memiliki tolok ukur dan hasil keluaran (deliverable) yang jelas sejak diskusi pertama hingga peluncuran."
        />

        <div className="relative mt-16">
          {/* Vertical Line on Desktop */}
          <div
            aria-hidden="true"
            className=" hidden lg:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/50 via-white/15 to-transparent"
          />

          <div className="space-y-8 lg:space-y-12">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-12"
                >
                  {/* Left Side (Desktop Alternating) */}
                  <div
                    className={
                      isEven
                        ? "lg:col-span-5 lg:text-right"
                        : "lg:col-span-5 lg:col-start-8 lg:text-left"
                    }
                  >
                    <div className="rounded-2xl border border-white/10 bg-navy-900/70 p-6 transition hover:border-cyan-500/40">
                      <span className="font-mono text-xs font-bold tracking-widest text-cyan-400 uppercase">
                        STEP {step.number}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-white">
                        {step.number} — {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                        {step.description}
                      </p>
                      <div className="mt-4 inline-block rounded-lg border border-white/10 bg-navy-950 px-3 py-1.5 font-mono text-xs text-slate-300">
                        Output: {step.deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden lg:col-span-2 lg:col-start-6 lg:row-start-1 lg:flex lg:justify-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cyan-400 bg-navy-950 font-mono text-xs font-bold text-cyan-300 shadow-lg shadow-cyan-500/20">
                      {step.number}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}