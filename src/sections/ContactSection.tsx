"use client";

import React, { useState, useCallback } from "react";
import { Send, MessageCircle, AlertCircle, CheckCircle2, Server } from "lucide-react";
import { SERVICES_DATA, BUDGET_OPTIONS, SITE_CONFIG } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useInquirySelection } from "@/hooks/useInquirySelection";
import { buildWhatsAppUrl } from "@/lib/utils";
import { isLaravelApiConfigured, submitInquiryToLaravel } from "@/lib/api";
import type { ContactInquiryPayload } from "@/types";

export function ContactSection() {
  const [formData, setFormData] = useState<ContactInquiryPayload>({
    name: "",
    email: "",
    websiteType: SERVICES_DATA[0].title,
    budget: BUDGET_OPTIONS[0],
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleExternalSelection = useCallback(
    (detail: { websiteType?: string; budget?: string }) => {
      setFormData((prev) => ({
        ...prev,
        websiteType: detail.websiteType || prev.websiteType,
        budget: detail.budget || prev.budget,
      }));
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });
    setIsSubmitting(true);

    const result = await submitInquiryToLaravel(formData);
    setIsSubmitting(false);

    if (result.success) {
      setStatus({ type: "success", message: result.message });
      setFormData({
        name: "",
        email: "",
        websiteType: SERVICES_DATA[0].title,
        budget: BUDGET_OPTIONS[0],
        description: "",
      });
    } else {
      setStatus({ type: "error", message: result.message });
    }
  };

  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.whatsappNumber, formData);
  const apiReady = isLaravelApiConfigured();

  return (
    <section id="contact" className="relative border-t border-white/10 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Start Your Project"
          title="Diskusikan Kebutuhan Website Anda"
          subtitle="Lengkapi rincian kebutuhan proyek Anda pada formulir di bawah ini atau lanjutkan percakapan langsung melalui WhatsApp."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Info Panel */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-7">
              <h3 className="text-xl font-bold text-white">
                Informasi Konsultasi &amp; Integrasi
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Setiap proyek diawali dengan pemetaan kebutuhan yang jelas agar
                solusi teknis dan anggaran sesuai dengan target bisnis Anda.
              </p>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm">
                <div>
                  <p className="font-mono text-xs uppercase text-cyan-400">
                    Developer
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    {SITE_CONFIG.developerName}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase text-cyan-400">
                    Official Portfolio
                  </p>
                  <a
                    href={SITE_CONFIG.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-mono text-sm text-cyan-300 underline decoration-cyan-500/30 underline-offset-4 hover:text-cyan-200"
                  >
                    {SITE_CONFIG.portfolioUrl}
                  </a>
                </div>

                <div className="rounded-xl border border-white/10 bg-navy-950 p-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Server className="h-4 w-4 text-cyan-400" />
                    <span>
                      Status Backend API:{" "}
                      {apiReady ? (
                        <strong className="text-emerald-400">Terhubung</strong>
                      ) : (
                        <strong className="text-amber-300">
                          Menunggu Konfigurasi (.env)
                        </strong>
                      )}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {apiReady
                      ? "Formulir terhubung langsung ke endpoint Laravel REST API."
                      : "Pada Tahap 1 (Frontend), isi NEXT_PUBLIC_LARAVEL_API_URL di .env.local setelah backend Laravel aktif."}
                  </p>
                </div>
              </div>

              {/* WhatsApp Direct Button */}
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Jalur Komunikasi Cepat
                </p>
                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-emerald-400"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Kirim Rincian Ini via WhatsApp</span>
                  </a>
                ) : (
                  <div className="mt-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-xs leading-relaxed text-amber-200">
                    <strong>Nomor WhatsApp Belum Diisi:</strong> Atur variabel{" "}
                    <code className="font-mono">NEXT_PUBLIC_WHATSAPP_NUMBER</code>{" "}
                    pada file <code className="font-mono">.env.local</code> atau{" "}
                    <code className="font-mono">src/config/site.ts</code> untuk
                    mengaktifkan tombol WhatsApp dengan nomor resmi Anda.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-navy-900/70 p-7 sm:p-9"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@perusahaan.com"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="websiteType"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Jenis Website
                  </label>
                  <select
                    id="websiteType"
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    {SERVICES_DATA.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Paket Starter">Paket Starter</option>
                    <option value="Paket Professional">Paket Professional</option>
                    <option value="Paket Custom">Paket Custom</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Estimasi Skala / Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-slate-200"
                >
                  Deskripsi Kebutuhan Proyek
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Jelaskan gambaran bisnis Anda, fitur utama yang dibutuhkan, serta target waktu peluncuran..."
                  className="mt-2 w-full rounded-xl border border-white/15 bg-navy-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              {status.type !== "idle" && (
                <div
                  className={`mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
                    status.type === "success"
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                      : "border-amber-500/40 bg-amber-500/10 text-amber-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="mt-7">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 text-sm font-bold text-navy-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  <span>
                    {isSubmitting
                      ? "Mengirim ke Server API..."
                      : "Kirim Permintaan Konsultasi"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}