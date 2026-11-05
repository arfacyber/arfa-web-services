"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PRICING_DATA } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { triggerInquirySelection } from "@/hooks/useInquirySelection";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative border-t border-white/10 bg-navy-900/30 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Pricing Packages"
          title="Skema Paket yang Transparan & Fleksibel"
          subtitle="Pilih cakupan paket yang paling sesuai dengan kebutuhan bisnis Anda. Nilai investasi disesuaikan secara jujur berdasarkan spesifikasi dan ruang lingkup proyek."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_DATA.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col justify-between rounded-2xl border p-8 transition-all",
                tier.isHighlighted
                  ? "border-cyan-400/60 bg-gradient-to-b from-navy-800/90 to-navy-900 shadow-xl shadow-cyan-500/10"
                  : "border-white/10 bg-navy-900/50 hover:border-white/25"
              )}
            >
              {tier.isHighlighted && (
                <div className="absolute -top-3.5 left-8 rounded-full bg-cyan-400 px-3.5 py-1 text-xs font-bold tracking-wider text-navy-950 uppercase">
                  Most Popular Scope
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {tier.tagline}
                </p>

                <div className="mt-6 rounded-xl border border-white/10 bg-navy-950/70 p-4">
                  <p className="font-mono text-xs uppercase text-cyan-400">
                    {tier.priceLabel}
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-white">
                    {tier.startingPrice}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{tier.priceNote}</p>
                </div>

                <ul className="mt-7 space-y-3.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-200"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9">
                <button
                  type="button"
                  onClick={() =>
                    triggerInquirySelection({
                      websiteType: `Paket ${tier.name}`,
                      budget: `Skala ${tier.name}`,
                    })
                  }
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all",
                    tier.isHighlighted
                      ? "bg-cyan-500 text-navy-950 hover:bg-cyan-400"
                      : "border border-white/15 bg-white/5 text-white hover:border-cyan-400 hover:bg-cyan-500/15"
                  )}
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}