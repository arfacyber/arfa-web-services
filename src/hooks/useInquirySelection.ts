"use client";

import { useEffect } from "react";

const INQUIRY_EVENT_NAME = "arfa:select-inquiry";

export interface InquirySelectionDetail {
  serviceType?: string;
  budget?: string;
}

export function triggerInquirySelection(detail: InquirySelectionDetail) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent<InquirySelectionDetail>(INQUIRY_EVENT_NAME, { detail })
  );

  const contactEl = document.getElementById("contact");
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: "smooth" });
  }
}

export function useInquirySelection(
  onSelect: (detail: InquirySelectionDetail) => void
) {
  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<InquirySelectionDetail>;
      if (customEvent.detail) {
        onSelect(customEvent.detail);
      }
    };

    window.addEventListener(INQUIRY_EVENT_NAME, handler);
    return () => window.removeEventListener(INQUIRY_EVENT_NAME, handler);
  }, [onSelect]);
}
