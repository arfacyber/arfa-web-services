import { SITE_CONFIG } from "@/config/site";
import type { ContactInquiryPayload, ApiSubmissionResponse } from "@/types";

export function isLaravelApiConfigured(): boolean {
  return Boolean(SITE_CONFIG.laravelApiUrl && SITE_CONFIG.laravelApiUrl.trim().length > 0);
}

export async function submitInquiryToLaravel(
  payload: ContactInquiryPayload
): Promise<ApiSubmissionResponse> {
  if (!isLaravelApiConfigured()) {
    return {
      success: false,
      message:
        "Endpoint Laravel REST API (NEXT_PUBLIC_LARAVEL_API_URL) belum dihubungkan pada environment tahap ini. Silakan gunakan tombol WhatsApp atau konfigurasi URL API Anda.",
    };
  }

  const endpoint = `${SITE_CONFIG.laravelApiUrl.replace(/\/$/, "")}/inquiries`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        website_type: payload.websiteType,
        budget_range: payload.budget,
        project_description: payload.description,
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        success: false,
        message:
          data?.message ||
          `Gagal mengirim ke server API (HTTP ${response.status}). Pastikan endpoint Laravel aktif.`,
      };
    }

    return {
      success: true,
      message:
        data?.message ||
        "Permintaan konsultasi Anda berhasil tercatat di sistem kami. Kami akan segera menghubungi Anda.",
    };
  } catch {
    return {
      success: false,
      message:
        "Tidak dapat terhubung ke server Laravel REST API. Periksa koneksi jaringan atau konfigurasi CORS pada backend.",
    };
  }
}