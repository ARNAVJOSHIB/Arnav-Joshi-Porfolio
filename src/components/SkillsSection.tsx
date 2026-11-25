"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { SKILLS_DATA } from "@/data/skills";
import { SITE_CONFIG } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

const TICK_COUNT = 44;

/**
 * Burgundy Skills & Capabilities section featuring a square butter-yellow framed
 * editorial plate on the left and vertical tick-bar self-assessed indicators on the right.
 */
export function SkillsSection() {
  const [expandedId, setExpandedId] = useState<string>("finance");

  return (
    <section
      id="skills"
      className="scroll-mt-16 bg-[var(--burgundy)] px-5 py-20 text-[var(--butter-yellow)] sm:px-8 md:px-12 md:py-28 lg:px-14"
    >
      <div className="mx-auto grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Left square/portrait editorial plate */}
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-square w-full overflow-hidden bg-[var(--butter-yellow)]">
            <Image
              src={SITE_CONFIG.images.skillsPlate}
              alt={SITE_CONFIG.images.skillsPlateAlt}
              fill
              sizes="(max-width: 1024px) 92vw, 40vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <p className="mt-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--cream)]/60">
            <span>MULTIDISCIPLINARY MATRIX</span>
            <span>{SKILLS_DATA.disclaimer}</span>
          </p>
        </Reveal>

        {/* Right typographic heading + 5 vertical tick-bar skill tracks */}
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="whitespace-pre-line font-display text-[clamp(2.9rem,5.5vw,4.7rem)] uppercase leading-[0.92] tracking-[0.01em] text-[var(--butter-yellow)]">
              {SKILLS_DATA.heading}
            </h2>
            <p className="mt-4 max-w-xl text-[12px] leading-relaxed uppercase tracking-[0.06em] text-[var(--cream)]/82">
              {SKILLS_DATA.intro}
            </p>
          </Reveal>

          <div className="mt-9 space-y-6">
            {SKILLS_DATA.categories.map((cat, idx) => {
              const activeTicks = Math.round((cat.focusRatio / 100) * TICK_COUNT);
              const isOpen = expandedId === cat.id;

              return (
                <Reveal key={cat.id} delay={idx * 0.05}>
                  <div className="border-b border-[var(--butter-yellow)]/12 pb-4">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedId(isOpen ? "" : cat.id)
                      }
                      aria-expanded={isOpen}
                      className="group flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                    >
                      <span className="font-display text-lg uppercase tracking-[0.05em] text-[var(--butter-yellow)] transition-colors group-hover:text-[var(--cream)] sm:text-xl">
                        {cat.label}
                      </span>
                      <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
                        <span>{cat.focusTag}</span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    {/* Signature vertical tick-mark indicator matching reference */}
                    <div
                      role="img"
                      aria-label={`${cat.label}: ${cat.focusTag} (${cat.focusRatio}% relative focus, self-assessed)`}
                      className="mt-2.5 flex w-full items-center justify-between gap-[2px]"
                    >
                      {Array.from({ length: TICK_COUNT }).map((_, tickIdx) => (
                        <span
                          key={tickIdx}
                          className={`h-3 w-[2px] transition-colors duration-300 sm:h-3.5 ${
                            tickIdx < activeTicks
                              ? "bg-[var(--butter-yellow)]"
                              : "bg-[var(--muted-burgundy)]/55"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Inline clean typographic capability list (expanded by default on Finance, toggleable for all) */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "mt-3 grid-rows-[1fr] opacity-100"
                          : "mt-2 grid-rows-[1fr] opacity-75"
                      }`}
                    >
                      <p className="text-[11px] leading-relaxed uppercase tracking-[0.09em] text-[var(--cream)]/80">
                        {cat.items.join("  ·  ")}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
