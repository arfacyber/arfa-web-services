"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, Info, ShoppingBag, X, AlertCircle } from "lucide-react";
import { SERVICE_CATEGORIES, SITE_CONFIG } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { triggerInquirySelection } from "@/hooks/useInquirySelection";
import type { ServiceCategory } from "@/types";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  return (
    <section id="pricing" className="relative border-t border-white/10 bg-navy-900/35 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Starting From Pricing"
          title="Daftar Harga Awal Setiap Layanan"
          subtitle="Harga ditampilkan secara transparan sebagai estimasi awal untuk memudahkan Anda merencanakan anggaran pembuatan website."
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: index * 0.05 }}
              className={cn(
                "relative flex flex-col justify-between rounded-2xl border p-5 sm:p-6 transition-all",
                item.isRecommended ? "border-cyan-400/70 bg-gradient-to-b from-navy-800/95 to-navy-900 shadow-xl shadow-cyan-500/10" : "border-white/10 bg-navy-900/60 hover:border-white/25"
              )}
            >
              {item.isRecommended && (
                <div className="absolute -top-3 right-4 sm:right-6 rounded-full bg-cyan-400 px-3 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wider text-navy-950 uppercase">
                  Pilihan Umum
                </div>
              )}

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  {item.shortDescription}
                </p>

                <div className="mt-5 rounded-xl border border-cyan-500/25 bg-navy-950/90 p-4">
                  <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400">
                    Harga Mulai Dari
                  </span>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-xl font-extrabold tracking-tight text-cyan-400 sm:text-3xl">
                      {item.startingPrice}
                    </span>
                    {item.priceUnit && (
                      <span className="text-xs sm:text-sm font-medium text-slate-300">
                        {item.priceUnit}
                      </span>
                    )}
                  </div>

                  <div className="mt-2.5 flex items-center gap-1.5 border-t border-white/10 pt-2.5 text-xs text-slate-300">
                    <Clock className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                    <span>{item.estimatedDuration}</span>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Fitur yang Termasuk:
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedService(item)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-2 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-white sm:text-sm"
                >
                  <Info className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  <span className="truncate">Detail</span>
                </button>

                <button
                  type="button"
                  onClick={() => triggerInquirySelection({ serviceType: item.name })}
                  className={cn(
                    "inline-flex items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-xs font-bold transition sm:text-sm",
                    item.isRecommended ? "bg-cyan-500 text-navy-950 hover:bg-cyan-400" : "bg-cyan-500/90 text-navy-950 hover:bg-cyan-400"
                  )}
                >
                  <ShoppingBag className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">Konsultasi</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-cyan-500/30 bg-navy-900/80 p-5 sm:p-6">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
            <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed text-slate-200">
              <p className="font-semibold text-white">Catatan Ketentuan Estimasi Harga:</p>
              <p>{SITE_CONFIG.pricingDisclaimer}</p>
              <p className="text-slate-300">{SITE_CONFIG.pricingAdditionalNote}</p>
            </div>
          </div>
        </div>
      </div>

      {selectedService && (
        <div role="dialog" aria-modal="true" aria-labelledby="service-modal-title" className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-cyan-500/40 bg-navy-900 p-5 sm:p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-cyan-400 uppercase">Detail Layanan</span>
                <h3 id="service-modal-title" className="mt-1 text-xl sm:text-2xl font-bold text-white">
                  {selectedService.name}
                </h3>
              </div>
              <button type="button" onClick={() => setSelectedService(null)} className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-300 hover:text-white shrink-0">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-baseline justify-between rounded-xl border border-white/10 bg-navy-950 p-3.5">
                <span className="text-xs text-slate-400">Harga Awal:</span>
                <span className="text-lg sm:text-xl font-extrabold text-cyan-400">
                  {selectedService.startingPrice}{selectedService.priceUnit || ""}
                </span>
              </div>
              <p>{selectedService.deliverablesInfo}</p>
              <div>
                <p className="font-semibold text-white">Estimasi Pengerjaan:</p>
                <p className="mt-1 text-slate-300">{selectedService.estimatedDuration}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Fitur Dasar yang Termasuk:</p>
                <ul className="mt-2 space-y-1.5">
                  {selectedService.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="rounded-lg border border-white/10 bg-navy-950 p-3 text-[10px] sm:text-xs text-slate-400">
                {SITE_CONFIG.pricingDisclaimer} {SITE_CONFIG.pricingAdditionalNote}
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={() => setSelectedService(null)} className="w-full sm:w-1/3 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10">
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  const chosen = selectedService.name;
                  setSelectedService(null);
                  triggerInquirySelection({ serviceType: chosen });
                }}
                className="w-full sm:w-2/3 rounded-xl bg-cyan-500 py-3 text-sm font-bold text-navy-950 hover:bg-cyan-400"
              >
                Konsultasikan Layanan Ini
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}