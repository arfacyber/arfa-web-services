"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Code2 } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-md py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-500/20">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="font-mono tracking-wider">
            ARFA<span className="text-cyan-400">.DEV</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex md:items-center md:gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Dedicated My Portfolio CTA */}
        <div className="hidden md:flex md:items-center md:gap-3">
          <a
            href={SITE_CONFIG.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white"
          >
            <span>My Portfolio</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-navy-950/95 px-4 pt-3 pb-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={SITE_CONFIG.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-cyan-400"
              >
                <span>My Portfolio</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}