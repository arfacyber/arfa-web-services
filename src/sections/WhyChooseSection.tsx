"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_CHOOSE_DATA } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyChooseSection() {
  return (
    <section className="relative border-t border-white/10 bg-navy-900/30 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose ARFA.DEV"
          title="Standar Engineering & Desain Tanpa Kompromi"
          subtitle="Kami membangun aset digital jangka panjang dengan kode yang terorganisir, performa terukur, dan komunikasi langsung."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-navy-900/50 p-7 transition-colors hover:border-cyan-500/35"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
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