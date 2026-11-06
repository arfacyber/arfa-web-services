import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { OrderInquiryPayload } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateWhatsAppMessage(
  payload: Partial<OrderInquiryPayload>
): string {
  const serviceName = payload.serviceType || "Website";

  const intro = `Halo ARFA.DEV, saya ingin konsultasi pembuatan ${serviceName}. Saya ingin mengetahui estimasi biaya dan fitur yang bisa dibuat.`;

  const details = [
    payload.name ? `• Nama: ${payload.name}` : null,
    payload.organization
      ? `• Bisnis / Organisasi: ${payload.organization}`
      : null,
    payload.serviceType ? `• Layanan: ${payload.serviceType}` : null,
    payload.budget ? `• Estimasi Anggaran: ${payload.budget}` : null,
    payload.whatsappContact
      ? `• Kontak WhatsApp: ${payload.whatsappContact}`
      : null,
    payload.description
      ? `\nDeskripsi Kebutuhan:\n${payload.description}`
      : null,
  ].filter(Boolean);

  if (details.length === 0) {
    return intro;
  }

  return `${intro}\n\nRincian Kebutuhan:\n${details.join("\n")}`;
}

export function buildWhatsAppUrl(
  rawPhone: string,
  payload?: Partial<OrderInquiryPayload>
): string | null {
  const sanitizedPhone = rawPhone.replace(/[^0-9]/g, "");
  if (!sanitizedPhone) {
    return null;
  }

  const message = generateWhatsAppMessage(payload || {});
  return `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(message)}`;
}