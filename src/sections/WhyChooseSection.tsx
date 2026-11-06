"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_DATA } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyChooseSection() {
  return (
    <section className="relative border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose ARFA.DEV"
          title="Mengapa Memilih ARFA.DEV Services"
          subtitle="Kami berfokus pada kejelasan informasi, kesesuaian fungsi website dengan kebutuhan pelanggan, serta komunikasi pengerjaan yang terarah."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 transition hover:border-cyan-500/35"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}