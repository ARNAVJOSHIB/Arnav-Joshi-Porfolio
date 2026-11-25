import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Navigation } from "@/components/Navigation";
import { EditorialSeal } from "@/components/ui/BrandMonogram";

/**
 * Full-bleed burgundy editorial Hero replicating the reference proportions:
 * left micro-rail, rotating circular seal, sculptural focal silhouette, and dominant right-aligned headline.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-t-[18px] bg-[var(--burgundy)] text-[var(--butter-yellow)]"
    >
      <Navigation />

      <div className="relative mx-auto px-5 pt-1 pb-8 sm:px-8 md:px-10 md:pb-11 lg:flex lg:min-h-[calc(86vh-76px)] lg:flex-col lg:justify-center lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-4">
          {/* Far-left editorial micro-rail + circular stamp seal (desktop) */}
          <div className="hidden flex-col justify-between self-stretch py-4 lg:col-span-1 lg:flex">
            <ul
              aria-label="Quick external links"
              className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--butter-yellow)]/80"
            >
              {SITE_CONFIG.heroRailLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="transition-colors hover:text-[var(--cream)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <EditorialSeal className="h-22 w-22 xl:h-24 xl:w-24" />
            </div>
          </div>

          {/* Center-left authentic editorial portrait (2:3 uncropped vertical composition) */}
          <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[340px] lg:col-span-5 lg:mx-0 lg:max-w-[390px] xl:max-w-[435px]">
            <div className="relative aspect-[2/3] w-full overflow-hidden border border-[var(--butter-yellow)]/10 bg-[var(--burgundy-dark)]">
              <Image
                src={SITE_CONFIG.images.heroPortrait}
                alt={SITE_CONFIG.images.heroPortraitAlt}
                fill
                preload={true}
                sizes="(max-width: 640px) 290px, (max-width: 1024px) 340px, 435px"
                className="object-cover object-[50%_12%]"
              />
              {/* Restrained bottom gradient and edge integration into #590D16 without obscuring subject */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(89,13,22,0.72) 0%, rgba(89,13,22,0.18) 10%, transparent 24%)",
                  boxShadow: "inset 0 0 28px rgba(89,13,22,0.45)",
                }}
              />
            </div>

            {/* Mobile/tablet seal badge tucked compactly beside quick links */}
            <div className="mt-2 flex items-center justify-between lg:hidden">
              <EditorialSeal className="h-14 w-14" />
              <div className="flex gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--butter-yellow)]/80">
                {SITE_CONFIG.heroRailLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right editorial bio + monumental stacked display name */}
          <div className="flex flex-col justify-between self-stretch lg:col-span-6 lg:pl-4 lg:pt-8">
            <div className="flex flex-col gap-2 lg:ml-auto lg:max-w-[410px] lg:text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                {SITE_CONFIG.heroEyebrow}
              </p>
              <p className="text-[11px] leading-relaxed uppercase tracking-[0.06em] text-[var(--cream)]/88 sm:text-[13px]">
                {SITE_CONFIG.heroBio}
              </p>
            </div>

            <div className="mt-5 flex flex-col lg:mt-14 lg:items-end">
              <h1 className="relative flex flex-col gap-1 font-display uppercase tracking-[0.01em] text-[var(--butter-yellow)] lg:text-right">
                <span className="inline-flex items-start lg:justify-end">
                  <span
                    aria-hidden="true"
                    className="mr-2 mt-1 font-sans text-xl font-bold leading-none sm:mr-3 sm:mt-3 sm:text-4xl lg:text-5xl"
                  >
                    ©
                  </span>
                  <span className="text-[clamp(3.6rem,13.5vw,10rem)] leading-[0.92]">
                    ARNAV
                  </span>
                </span>
                <span className="text-[clamp(3.6rem,13.5vw,10rem)] leading-[0.92]">
                  JOSHI
                </span>
              </h1>

              <div className="mt-6 flex w-full items-center justify-between border-t border-[var(--butter-yellow)]/15 pt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--cream)]/65">
                <span>PORTFOLIO EDITION · 2026</span>
                <a
                  href="#about"
                  className="inline-flex items-center gap-1.5 text-[var(--butter-yellow)] transition-colors hover:text-[var(--cream)]"
                >
                  <span>SCROLL</span>
                  <ArrowDown className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
