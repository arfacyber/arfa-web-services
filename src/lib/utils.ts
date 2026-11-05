import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ContactInquiryPayload } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Menghasilkan URL WhatsApp resmi hanya jika nomor WhatsApp telah dikonfigurasi.
 */
export function buildWhatsAppUrl(
  rawPhone: string,
  payload?: Partial<ContactInquiryPayload>
): string | null {
  const sanitizedPhone = rawPhone.replace(/[^0-9]/g, "");
  if (!sanitizedPhone) {
    return null;
  }

  const lines = [
    "Halo *ARFA.DEV*, saya ingin berkonsultasi mengenai pembuatan website.",
    "",
    payload?.name ? `• *Nama:* ${payload.name}` : null,
    payload?.email ? `• *Email:* ${payload.email}` : null,
    payload?.websiteType ? `• *Jenis Website:* ${payload.websiteType}` : null,
    payload?.budget ? `• *Estimasi Skala/Budget:* ${payload.budget}` : null,
    payload?.description ? `\n*Deskripsi Kebutuhan:*\n${payload.description}` : null,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${sanitizedPhone}?text=${text}`;
}