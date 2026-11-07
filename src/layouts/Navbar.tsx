"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Code2, MessageSquare } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-navy-950/90 backdrop-blur-md py-3"
          : "bg-navy-950/60 backdrop-blur-sm py-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-base font-bold tracking-tight text-white sm:text-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-500/20">
            <Code2 className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="font-mono leading-none tracking-wider">
              ARFA<span className="text-cyan-400">.DEV</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase">
              Services
            </span>
          </div>
        </a>

        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex lg:items-center lg:gap-6"
        >
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

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href={SITE_CONFIG.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
          >
            <span>Main Portfolio</span>
            <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-bold text-navy-950 transition hover:bg-cyan-400"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Konsultasi</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Buka Menu Navigasi"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-navy-950/98 px-4 pt-3 pb-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col space-y-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-1 gap-2.5 pt-3 sm:grid-cols-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-bold text-navy-950"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Konsultasikan Proyek</span>
              </a>
              <a
                href={SITE_CONFIG.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white"
              >
                <span>Main Portfolio</span>
                <ExternalLink className="h-4 w-4 text-cyan-400" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
