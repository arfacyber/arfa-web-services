\"use client\";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users, ArrowRight } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { triggerInquirySelection } from "@/hooks/useInquirySelection";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative border-t border-white/10 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Service Categories"
          title="Layanan Pembuatan Website & Aplikasi Web"
          subtitle="Kami menyediakan enam kategori layanan yang dirancang untuk kebutuhan promosi usaha, profil institusi, portofolio personal, hingga aplikasi operasional berbasis web."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-navy-900/70 p-6 transition-all hover:border-cyan-500/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="text-right">
                      <span className="block font-mono text-[10px] uppercase text-slate-400">
                        Mulai Dari
                      </span>
                      <span className="font-mono text-sm font-bold text-cyan-400">
                        {service.startingPrice}
                        {service.priceUnit || ""}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {service.shortDescription}
                  </p>

                  <div className="mt-4 rounded-xl border border-white/10 bg-navy-950/70 p-3.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                      <Users className="h-3.5 w-3.5" />
                      <span>Cocok Untuk:</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {service.targets.map((target) => (
                        <span
                          key={target}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-200"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Fitur Dasar:
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-slate-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() =>
                      triggerInquirySelection({ serviceType: service.name })
                    }
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-navy-950"
                  >
                    <span>Konsultasikan {service.name}</span>
                    <ArrowRight className="h-4 w-4" />
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
