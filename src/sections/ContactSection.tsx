"use client";

import React, { useState, useCallback } from "react";
import {
  MessageCircle,
  Mail,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  SERVICE_CATEGORIES,
  BUDGET_OPTIONS,
  SITE_CONFIG,
} from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useInquirySelection } from "@/hooks/useInquirySelection";
import { buildWhatsAppUrl, generateWhatsAppMessage } from "@/lib/utils";
import type { OrderInquiryPayload } from "@/types";

export function ContactSection() {
  const [formData, setFormData] = useState<OrderInquiryPayload>({
    name: "",
    organization: "",
    serviceType: SERVICE_CATEGORIES[2].name, // Default: Company Profile
    budget: BUDGET_OPTIONS[1],
    whatsappContact: "",
    description: "",
  });

  const [selectedNotice, setSelectedNotice] = useState<string | null>(null);

  const handleExternalSelection = useCallback(
    (detail: { serviceType?: string; budget?: string }) => {
      setFormData((prev) => ({
        ...prev,
        serviceType: detail.serviceType || prev.serviceType,
        budget: detail.budget || prev.budget,
      }));
      if (detail.serviceType) {
        setSelectedNotice(
          `Layanan "${detail.serviceType}" telah dipilih pada formulir konsultasi.`
        );
      }
    },
    []
  );

  useInquirySelection(handleExternalSelection);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, formData);
  const messagePreview = generateWhatsAppMessage(formData);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!whatsappUrl) return;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/10 bg-navy-900/35 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Order & Consultation Flow"
          title="Mulai Konsultasi Proyek Website Anda"
          subtitle="Isi informasi kebutuhan proyek Anda di bawah ini. Sistem akan menyusun pesan konsultasi secara otomatis dan menghubungkan Anda langsung ke WhatsApp ARFA.DEV."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Panel Informasi & Preview Pesan Otomatis */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-navy-900/80 p-6">
              <h3 className="text-lg font-bold text-white">
                Informasi Kontak &amp; Konsultasi
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Konsultasi awal tidak dipungut biaya. Anda dapat menanyakan
                estimasi biaya, rincian fitur yang bisa dibuat, maupun waktu
                pengerjaan.
              </p>

              <div className="mt-5 space-y-3.5 border-t border-white/10 pt-5 text-sm">
                <div>
                  <span className="block font-mono text-xs uppercase text-cyan-400">
                    Developer
                  </span>
                  <span className="font-semibold text-white">
                    {SITE_CONFIG.developerName}
                  </span>
                </div>

                {SITE_CONFIG.emailAddress && (
                  <div>
                    <span className="block font-mono text-xs uppercase text-cyan-400">
                      Email
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.emailAddress}`}
                      className="inline-flex items-center gap-1.5 text-slate-200 hover:text-cyan-400"
                    >
                      <Mail className="h-4 w-4 text-cyan-400" />
                      <span>{SITE_CONFIG.emailAddress}</span>
                    </a>
                  </div>
                )}

                <div>
                  <span className="block font-mono text-xs uppercase text-cyan-400">
                    Main Portfolio
                  </span>
                  <a
                    href={SITE_CONFIG.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-300 underline decoration-cyan-500/30 underline-offset-4 hover:text-cyan-200"
                  >
                    <span>{SITE_CONFIG.portfolioUrl}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Pratinjau Pesan WhatsApp Otomatis */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <span className="block font-mono text-xs uppercase text-cyan-400">
                  Preview Pesan WhatsApp Otomatis:
                </span>
                <pre className="mt-2.5 whitespace-pre-wrap rounded-xl border border-white/10 bg-navy-950 p-3.5 font-sans text-xs leading-relaxed text-slate-300">
                  {messagePreview}
                </pre>
              </div>
            </div>
          </div>

          {/* Formulir Order & Konsultasi */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="rounded-2xl border border-white/10 bg-navy-900/80 p-6 sm:p-8"
            >
              {selectedNotice && (
                <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-3 text-xs text-cyan-200 sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                  <span>{selectedNotice}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Nama Lengkap <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Nama Bisnis / Organisasi{" "}
                    <span className="text-xs text-slate-400">(Opsional)</span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Contoh: Toko Berkah / Organisasi"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Jenis Layanan <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    {SERVICE_CATEGORIES.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name} ({service.startingPrice}
                        {service.priceUnit || ""})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="whatsappContact"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Nomor WhatsApp Anda <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="whatsappContact"
                    name="whatsappContact"
                    type="tel"
                    required
                    value={formData.whatsappContact}
                    onChange={handleChange}
                    placeholder="Contoh: 0812xxxxxxxx"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-slate-200"
                >
                  Estimasi Anggaran <span className="text-cyan-400">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-slate-200"
                >
                  Deskripsi Kebutuhan Proyek{" "}
                  <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Jelaskan secara singkat website atau aplikasi yang ingin dibuat, halaman/fitur yang dibutuhkan, atau target waktu..."
                  className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="mt-6">
                {whatsappUrl ? (
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Lanjutkan Konsultasi ke WhatsApp</span>
                  </button>
                ) : (
                  <div className="flex items-start gap-2.5 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-xs text-amber-200">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>
                      Pastikan variabel{" "}
                      <code className="font-mono">
                        NEXT_PUBLIC_WHATSAPP_NUMBER
                      </code>{" "}
                      telah diisi pada file{" "}
                      <code className="font-mono">.env.local</code> untuk
                      mengaktifkan pengiriman ke WhatsApp.
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}