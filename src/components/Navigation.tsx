"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { BrandMonogram } from "@/components/ui/BrandMonogram";
import { EditorialButton } from "@/components/ui/EditorialButton";

/**
 * Top minimal editorial navigation bar with sticky compact scroll reveal
 * and accessible full-screen mobile drawer.
 */
export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 560);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header className="relative z-30 flex items-center justify-between px-5 py-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <a
          href="#hero"
          className="group inline-flex shrink-0 items-center gap-2.5 text-[var(--butter-yellow)]"
          aria-label="Arnav Joshi Home"
        >
          <BrandMonogram className="h-5 w-7 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display text-xl tracking-[0.04em] sm:text-2xl">
            {SITE_CONFIG.name}
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-8"
        >
          {SITE_CONFIG.navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--butter-yellow)]/90 transition-colors hover:text-[var(--cream)] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--butter-yellow)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <EditorialButton href="#contact">LET&apos;S CONNECT</EditorialButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center border border-[var(--butter-yellow)]/35 text-[var(--butter-yellow)] transition-colors hover:bg-[var(--butter-yellow)] hover:text-[var(--burgundy-dark)] lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* Compact sticky navigation ribbon on deep scroll */}
      <div
        aria-hidden={!scrolled}
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
          scrolled
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-2 sm:px-5 md:px-7 lg:px-9">
          <div className="flex items-center justify-between border-b border-[var(--butter-yellow)]/15 bg-[var(--burgundy-dark)]/95 px-5 py-3 backdrop-blur-sm md:px-10">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-[var(--butter-yellow)]"
              tabIndex={scrolled ? 0 : -1}
            >
              <BrandMonogram className="h-4 w-6" />
              <span className="font-display text-lg tracking-[0.04em]">
                {SITE_CONFIG.name}
              </span>
            </a>

            <nav
              aria-label="Sticky section navigation"
              className="hidden items-center gap-6 md:flex"
            >
              {SITE_CONFIG.navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  tabIndex={scrolled ? 0 : -1}
                  className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--butter-yellow)]/85 transition-colors hover:text-[var(--cream)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <EditorialButton href="#contact">
                  LET&apos;S CONNECT
                </EditorialButton>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                tabIndex={scrolled ? 0 : -1}
                className="flex h-9 w-9 items-center justify-center border border-[var(--butter-yellow)]/35 text-[var(--butter-yellow)] md:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile full-viewport editorial drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[var(--burgundy-dark)] p-6 text-[var(--butter-yellow)] sm:p-10 lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-[var(--butter-yellow)]/15 pb-5">
            <div className="inline-flex items-center gap-2.5">
              <BrandMonogram className="h-5 w-7" />
              <span className="font-display text-xl tracking-[0.04em]">
                {SITE_CONFIG.name}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center border border-[var(--butter-yellow)]/35 text-[var(--butter-yellow)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            aria-label="Mobile links"
            className="flex flex-col gap-3 py-8"
          >
            {SITE_CONFIG.navLinks.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-baseline gap-4 border-b border-[var(--butter-yellow)]/10 py-3"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted-gold)]">
                  0{idx + 1}
                </span>
                <span className="font-display text-4xl uppercase tracking-[0.02em] transition-transform duration-200 group-hover:translate-x-2">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 border-t border-[var(--butter-yellow)]/15 pt-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--cream)]/70">
              {SITE_CONFIG.tagline}
            </p>
            <div onClick={() => setMobileOpen(false)}>
              <EditorialButton href="#contact">LET&apos;S CONNECT</EditorialButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
