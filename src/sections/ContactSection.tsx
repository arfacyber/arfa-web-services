"use client";

import React, { useState, useCallback, useEffect } from "react";
import { MessageCircle, Mail, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { SERVICE_CATEGORIES, BUDGET_OPTIONS, SITE_CONFIG } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useInquirySelection } from "@/hooks/useInquirySelection";
import { buildWhatsAppUrl, generateWhatsAppMessage } from "@/lib/utils";
import type { OrderInquiryPayload } from "@/types";

export function ContactSection() {
  const [formData, setFormData] = useState<OrderInquiryPayload>({
    name: "",
    organization: "",
    serviceType: SERVICE_CATEGORIES[2].name,
    budget: BUDGET_OPTIONS[1],
    whatsappContact: "",
    description: "",
  });

  const [selectedNotice, setSelectedNotice] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const mapBudgetToService = (serviceName: string) => {
    const lName = serviceName.toLowerCase();
    if (lName.includes("landing")) return BUDGET_OPTIONS[0];
    if (lName.includes("portfolio")) return BUDGET_OPTIONS[1];
    if (lName.includes("company")) return BUDGET_OPTIONS[1];
    if (lName.includes("application")) return BUDGET_OPTIONS[2];
    if (lName.includes("custom")) return BUDGET_OPTIONS[3];
    if (lName.includes("maintenance")) return BUDGET_OPTIONS[4];
    return BUDGET_OPTIONS[5];
  };

  const handleExternalSelection = useCallback(
    (detail: { serviceType?: string; budget?: string }) => {
      setFormData((prev) => {
        const newService = detail.serviceType || prev.serviceType;
        const newBudget = detail.budget || mapBudgetToService(newService);
        return {
          ...prev,
          serviceType: newService,
          budget: newBudget,
        };
      });
      if (detail.serviceType) {
        setSelectedNotice(
          `Konteks layanan "${detail.serviceType}" telah ditambahkan ke formulir.`
        );
      }
    },
    []
  );

  useInquirySelection(handleExternalSelection);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "serviceType") {
        next.budget = mapBudgetToService(value);
      }
      return next;
    });
  };

  const whatsappUrl = isClient ? buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, formData) : null;
  const messagePreview = generateWhatsAppMessage(formData);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!whatsappUrl) return;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative border-t border-white/10 bg-navy-900/35 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Konsultasi & Order"
          title="Mulai Konsultasi Proyek Anda"
          subtitle="Isi rincian kebutuhan Anda. Sistem akan menyusun pesan secara otomatis dan mengarahkan Anda ke WhatsApp ARFA.DEV."
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-navy-900/80 p-5 sm:p-6 w-full max-w-full overflow-hidden">
              <h3 className="text-lg font-bold text-white">
                Kontak & Informasi Layanan
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Konsultasi awal tidak dipungut biaya. Silakan tanyakan estimasi harga, rincian fitur, atau durasi pengerjaan.
              </p>

              <div className="mt-5 space-y-3.5 border-t border-white/10 pt-5 text-sm">
                <div>
                  <span className="block font-mono text-xs uppercase text-cyan-400">Developer</span>
                  <span className="font-semibold text-white">{SITE_CONFIG.developerName}</span>
                </div>

                {SITE_CONFIG.emailAddress && (
                  <div>
                    <span className="block font-mono text-xs uppercase text-cyan-400">Email</span>
                    <a href={`mailto:${SITE_CONFIG.emailAddress}`} className="inline-flex items-center gap-1.5 text-slate-200 hover:text-cyan-400 truncate">
                      <Mail className="h-4 w-4 shrink-0 text-cyan-400" />
                      <span className="truncate">{SITE_CONFIG.emailAddress}</span>
                    </a>
                  </div>
                )}

                <div>
                  <span className="block font-mono text-xs uppercase text-cyan-400">Portfolio Utama</span>
                  <a href={SITE_CONFIG.portfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-300 underline decoration-cyan-500/30 underline-offset-4 hover:text-cyan-200 truncate max-w-full">
                    <span className="truncate">{SITE_CONFIG.portfolioUrl}</span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <span className="block font-mono text-xs uppercase text-cyan-400">Preview Pesan WhatsApp:</span>
                <div className="mt-2.5 rounded-xl border border-white/10 bg-navy-950 p-3.5 w-full overflow-x-auto">
                  <pre className="whitespace-pre-wrap break-words font-sans text-xs leading-relaxed text-slate-300">
                    {messagePreview}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="rounded-2xl border border-white/10 bg-navy-900/80 p-5 sm:p-8 w-full">
              {selectedNotice && (
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-2.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-3 text-xs text-cyan-200 sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                  <span>{selectedNotice}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                    Nama Lengkap <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                    placeholder="Nama Anda"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-200">
                    Nama Organisasi <span className="text-xs text-slate-400">(Opsional)</span>
                  </label>
                  <input
                    id="organization" name="organization" type="text" value={formData.organization} onChange={handleChange}
                    placeholder="Contoh: Toko Berkah"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-slate-200">
                    Jenis Layanan <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    {SERVICE_CATEGORIES.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="whatsappContact" className="block text-sm font-medium text-slate-200">
                    Nomor WhatsApp <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="whatsappContact" name="whatsappContact" type="tel" required value={formData.whatsappContact} onChange={handleChange}
                    placeholder="Contoh: 0812xxxxxxxx"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="budget" className="block text-sm font-medium text-slate-200">
                  Estimasi Anggaran <span className="text-cyan-400">*</span>
                </label>
                <select
                  id="budget" name="budget" value={formData.budget} onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="description" className="block text-sm font-medium text-slate-200">
                  Deskripsi Kebutuhan Proyek <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="description" name="description" rows={4} required value={formData.description} onChange={handleChange}
                  placeholder="Jelaskan secara singkat fitur yang dibutuhkan atau target waktu..."
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-y"
                />
              </div>

              <div className="mt-6">
                {isClient && whatsappUrl ? (
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
                    <MessageCircle className="h-5 w-5 shrink-0" />
                    <span>Lanjutkan Konsultasi ke WhatsApp</span>
                  </button>
                ) : isClient ? (
                  <div className="flex items-start gap-2.5 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-xs text-amber-200">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>
                      Sistem mendeteksi <strong>NEXT_PUBLIC_WHATSAPP_NUMBER</strong> belum diatur di file <code className="font-mono">.env.local</code>. Mohon buat file tersebut menggunakan kode negara 62.
                    </span>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}