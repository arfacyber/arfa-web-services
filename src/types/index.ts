import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceLabel: string;
  startingPrice: string;
  priceNote: string;
  features: string[];
  isHighlighted?: boolean;
}

export interface PortfolioSlot {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  externalUrl: string;
  isPlaceholder?: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInquiryPayload {
  name: string;
  email: string;
  websiteType: string;
  budget: string;
  description: string;
}

export interface ApiSubmissionResponse {
  success: boolean;
  message: string;
}