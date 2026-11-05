"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { triggerInquirySelection } from "@/hooks/useInquirySelection";

export function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-white/10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Solusi Website Terstruktur untuk Kebutuhan Bisnis"
          subtitle="Setiap layanan dirancang dengan arsitektur kode bersih, tampilan responsif, serta fondasi SEO yang siap mendukung pertumbuhan bisnis Anda."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-navy-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-navy-900"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-navy-950">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      triggerInquirySelection({ websiteType: service.title })
                    }
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400 hover:bg-cyan-500 hover:text-navy-950"
                  >
                    <span>Konsultasi Layanan Ini</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}