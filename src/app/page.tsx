import React from "react";
import { Navbar } from "@/layouts/Navbar";
import { Footer } from "@/layouts/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { PricingSection } from "@/sections/PricingSection";
import { PortfolioPreviewSection } from "@/sections/PortfolioPreviewSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { FaqSection } from "@/sections/FaqSection";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <PortfolioPreviewSection />
        <WhyChooseSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}