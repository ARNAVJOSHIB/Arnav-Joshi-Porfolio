"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { BrandMonogram } from "@/components/ui/BrandMonogram";

/**
 * Magazine-finale Footer replicating the reference's pale butter-yellow outer panel
 * framing a deep burgundy monolith, 3-column index, and bottom decorative ticker strip.
 */
export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { github, linkedin, email } = SITE_CONFIG.socialLinks;

  return (
    <footer id="footer" className="bg-[var(--burgundy)]">
      {/* Pale yellow outer framing band wrapping the burgundy editorial monolith */}
      <div className="bg-[var(--butter-yellow)] p-4 sm:p-8 md:p-12">
        <div className="bg-[var(--burgundy)] px-6 py-14 text-[var(--butter-yellow)] sm:px-10 md:px-14 md:py-16">
          {/* Monumental centered closing headline */}
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="font-display text-[clamp(2.9rem,6vw,4.9rem)] uppercase leading-[0.9] tracking-[0.01em] text-[var(--butter-yellow)]">
              LET&apos;S BRING
              <br />
              IDEAS TO LIFE.
            </h2>

            <div className="mt-6">
              <EditorialButton href="#contact">CONTACT ME</EditorialButton>
            </div>
          </div>

          {/* 3-column structured index matching reference */}
          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[var(--butter-yellow)]/15 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                SITEMAP
              </h3>
              <ul className="mt-4 space-y-2.5">
                {SITE_CONFIG.footerSitemap.map((item) => (
                  <li key={item.href + item.label}>
                    <a
                      href={item.href}
                      className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--butter-yellow)] transition-colors hover:text-[var(--cream)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:text-center">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                DISCIPLINES
              </h3>
              <ul className="mt-4 space-y-2.5">
                {SITE_CONFIG.footerDisciplines.map((disc) => (
                  <li
                    key={disc}
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--butter-yellow)]/90"
                  >
                    {disc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:text-right">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                CONNECT
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs font-semibold uppercase tracking-[0.14em]">
                <li>
                  <a
                    href={github.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--butter-yellow)] hover:text-[var(--cream)]"
                  >
                    <span>GITHUB · ARNAVJOSHIB</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://the-chronicle-finance.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--butter-yellow)] hover:text-[var(--cream)]"
                  >
                    <span>CHRONICLE FINANCE</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ARNAVJOSHIB/Aurelian-OS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--butter-yellow)] hover:text-[var(--cream)]"
                  >
                    <span>AURELIAN OS</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  {linkedin.href ? (
                    <a
                      href={linkedin.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--butter-yellow)] hover:text-[var(--cream)]"
                    >
                      LINKEDIN
                    </a>
                  ) : (
                    <span className="text-[var(--cream)]/55">
                      LINKEDIN · CONFIGURABLE
                    </span>
                  )}
                </li>
                <li>
                  {email.href ? (
                    <a
                      href={email.href}
                      className="text-[var(--butter-yellow)] hover:text-[var(--cream)]"
                    >
                      {email.value}
                    </a>
                  ) : (
                    <span className="text-[var(--cream)]/55">
                      EMAIL · CONFIGURABLE
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Legal & Return-to-Top bar */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--butter-yellow)]/15 pt-6 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--cream)]/70">
            <p>© {SITE_CONFIG.copyrightYear} ARNAV JOSHI. ALL RIGHTS RESERVED.</p>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex cursor-pointer items-center gap-1.5 text-[var(--butter-yellow)] transition-colors hover:text-[var(--cream)]"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom full-bleed decorative marquee strip matching reference bottom ribbon */}
      <div
        aria-label="Core disciplines ticker"
        className="marquee-wrapper overflow-hidden border-t border-[var(--butter-yellow)]/10 bg-[var(--burgundy-dark)] py-3"
      >
        <div className="animate-editorial-marquee flex w-max items-center">
          {[0, 1].map((dupIdx) => (
            <div
              key={dupIdx}
              aria-hidden={dupIdx === 1}
              className="flex shrink-0 items-center"
            >
              {SITE_CONFIG.marqueeKeywords.map((word) => (
                <div key={`${dupIdx}-${word}`} className="flex items-center">
                  <span className="font-display text-3xl uppercase tracking-[0.04em] text-[var(--butter-yellow)]/22 sm:text-5xl">
                    {word}
                  </span>
                  <BrandMonogram className="mx-5 h-5 w-7 text-[var(--butter-yellow)]/20 sm:mx-8 sm:h-6 sm:w-9" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
