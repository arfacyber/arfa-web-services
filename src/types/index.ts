import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  startingPrice: string;
  priceUnit?: string;
  shortDescription: string;
  targets: string[];
  features: string[];
  estimatedDuration: string;
  deliverablesInfo: string;
  icon: LucideIcon;
  isRecommended?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  imagePath: string;
  techStack: string[];
  keyFeatures: string[];
  demoUrl?: string;
  statusLabel: string;
}

export interface TechStackCategory {
  id: string;
  categoryName: string;
  description: string;
  items: {
    name: string;
    role: string;
    status?: "mastered" | "learning";
  }[];
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

export interface OrderInquiryPayload {
  name: string;
  organization: string;
  serviceType: string;
  budget: string;
  whatsappContact: string;
  description: string;
}
