"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { DIRECTION_DATA } from "@/data/direction";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Editorial list-based Creative Direction section with 5-square focus meters,
 * hairline dividers, and expandable discipline rows matching the reference layout.
 */
export function DirectionSection() {
  const [openId, setOpenId] = useState<string>("product-technology");

  return (
    <section
      id="direction"
      className="bg-[var(--burgundy)] px-5 py-20 text-[var(--butter-yellow)] sm:px-8 md:px-12 md:py-28 lg:px-14"
    >
      <div className="mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="whitespace-pre-line font-display text-[clamp(3rem,5.8vw,4.9rem)] uppercase leading-[0.9] tracking-[0.01em] text-[var(--butter-yellow)]">
              {DIRECTION_DATA.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <EditorialButton href="#contact">
              {DIRECTION_DATA.ctaLabel}
            </EditorialButton>
          </Reveal>
        </div>

        {/* Right-aligned structured list matching reference geometry */}
        <div className="mt-12 lg:ml-[28%]">
          <div className="border-t border-[var(--butter-yellow)]/20">
            {DIRECTION_DATA.items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="border-b border-[var(--butter-yellow)]/20 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                  >
                    <div className="max-w-xl">
                      <h3 className="font-display text-2xl uppercase tracking-[0.02em] text-[var(--butter-yellow)] transition-transform duration-300 group-hover:translate-x-1 sm:text-[26px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[11px] leading-relaxed uppercase tracking-[0.06em] text-[var(--cream)]/78">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-4 pt-1.5">
                      {/* 5-square visual focus meter matching reference */}
                      <div
                        className="flex items-center gap-1"
                        aria-hidden="true"
                      >
                        {Array.from({ length: 5 }).map((_, sqIdx) => (
                          <span
                            key={sqIdx}
                            className={`h-2 w-2 transition-colors ${
                              sqIdx < item.level
                                ? "bg-[var(--butter-yellow)]"
                                : "bg-[var(--muted-burgundy)]/55"
                            }`}
                          />
                        ))}
                      </div>

                      <span className="flex h-6 w-6 items-center justify-center border border-[var(--butter-yellow)]/25 text-[var(--butter-yellow)] transition-colors group-hover:border-[var(--butter-yellow)]">
                        {isOpen ? (
                          <Minus className="h-3 w-3" />
                        ) : (
                          <Plus className="h-3 w-3" />
                        )}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pb-7">
                      <div
                        className={`grid grid-cols-1 gap-6 ${
                          item.featuredImages ? "md:grid-cols-12 md:items-center" : ""
                        }`}
                      >
                        {item.featuredImages && (
                          <div className="grid grid-cols-2 gap-3 md:col-span-7">
                            {item.featuredImages.map((img) => (
                              <div
                                key={img.src}
                                className="relative aspect-[4/3] overflow-hidden bg-[var(--butter-yellow)]"
                              >
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  sizes="(max-width: 768px) 44vw, 240px"
                                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        <ul
                          className={`space-y-2 ${
                            item.featuredImages
                              ? "md:col-span-5"
                              : "grid grid-cols-1 gap-2 sm:grid-cols-2"
                          }`}
                        >
                          {item.threads.map((thread) => (
                            <li
                              key={thread}
                              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--cream)]/88"
                            >
                              <span className="text-[var(--gold)]">+</span>
                              <span>{thread}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
