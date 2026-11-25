import Image from "next/image";
import {
  BarChart3,
  Compass,
  Cpu,
  Film,
  Layers,
  PenTool,
  Search,
  TrendingUp,
} from "lucide-react";
import { ABOUT_DATA, type CapabilityItem } from "@/data/about";
import { SITE_CONFIG } from "@/data/site";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { Reveal } from "@/components/ui/Reveal";

const ICON_MAP: Record<CapabilityItem["iconKey"], typeof Compass> = {
  compass: Compass,
  trending: TrendingUp,
  layers: Layers,
  search: Search,
  barChart: BarChart3,
  penTool: PenTool,
  film: Film,
  cpu: Cpu,
};

/**
 * Pale Butter-Yellow editorial About section mirroring the scattered
 * asymmetric 3-column distribution and bottom icon strip of the reference.
 */
export function AboutSection() {
  const { whoIAm, myJourney, myApproach, whatIDo } = ABOUT_DATA.blocks;

  return (
    <section
      id="about"
      className="on-yellow scroll-mt-16 bg-[var(--butter-yellow)] text-[var(--burgundy)]"
    >
      <div className="mx-auto px-5 pt-16 pb-10 sm:px-8 md:px-12 md:pt-24 lg:px-14">
        {/* Top Row: Giant ABOUT ME (left) + 01 WHO I AM (right) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-[clamp(3.3rem,6.5vw,5.4rem)] uppercase leading-[0.9] tracking-[0.01em] text-[var(--burgundy)]">
              {ABOUT_DATA.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--muted-burgundy)]">
              {whoIAm.number}
            </span>
            <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.03em] text-[var(--burgundy)]">
              {whoIAm.title}
            </h3>
            <div className="mt-3 space-y-2.5 text-[12px] leading-relaxed uppercase tracking-[0.04em] text-[var(--burgundy-dark)]/85">
              {whoIAm.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Middle Asymmetric Cluster: 02 MY JOURNEY above centered portrait + 03 MY APPROACH on right */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Center Column: 02 MY JOURNEY + Central Burgundy Plate */}
          <div className="lg:col-span-4 lg:col-start-5">
            <Reveal delay={0.05}>
              <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--muted-burgundy)]">
                {myJourney.number}
              </span>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.03em] text-[var(--burgundy)]">
                {myJourney.title}
              </h3>
              <div className="mt-3 space-y-2 text-[12px] leading-relaxed uppercase tracking-[0.04em] text-[var(--burgundy-dark)]/85">
                {myJourney.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-8">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--burgundy)]">
                <Image
                  src={SITE_CONFIG.images.aboutPlate}
                  alt={SITE_CONFIG.images.aboutPlateAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 32vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: 03 MY APPROACH + Dark Burgundy CTA */}
          <Reveal
            delay={0.14}
            className="lg:col-span-4 lg:col-start-9 lg:self-center"
          >
            <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--muted-burgundy)]">
              {myApproach.number}
            </span>
            <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.03em] text-[var(--burgundy)]">
              {myApproach.title}
            </h3>
            <div className="mt-3 space-y-2.5 text-[12px] leading-relaxed uppercase tracking-[0.04em] text-[var(--burgundy-dark)]/85">
              {myApproach.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-6">
              <EditorialButton variant="on-yellow" href="#projects">
                EXPLORE WORK
              </EditorialButton>
            </div>
          </Reveal>
        </div>

        {/* Lower-Left Block: 04 WHAT I DO + Minimalist Capability List */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:-mt-28 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-4">
            <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--muted-burgundy)]">
              {whatIDo.number}
            </span>
            <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.03em] text-[var(--burgundy)]">
              {whatIDo.title}
            </h3>
            <p className="mt-2.5 text-[12px] leading-relaxed uppercase tracking-[0.04em] text-[var(--burgundy-dark)]/85">
              {whatIDo.paragraphs[0]}
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--burgundy)]/20 pt-4">
              {ABOUT_DATA.capabilities.map((cap) => {
                const Icon = ICON_MAP[cap.iconKey];
                return (
                  <li
                    key={cap.label}
                    className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.07em] text-[var(--burgundy)]"
                  >
                    <Icon
                      className="h-3.5 w-3.5 shrink-0 text-[var(--muted-burgundy)]"
                      aria-hidden="true"
                    />
                    <span>{cap.label}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Bottom Capability Strip separated by thin editorial rules */}
      <div className="mt-10 border-y border-[var(--burgundy)]/20 px-5 py-6 sm:px-8 md:px-12 lg:px-14">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          {ABOUT_DATA.stripLabels.map((item) => {
            const Icon = ICON_MAP[item.iconKey];
            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 text-[var(--burgundy)]/90"
              >
                <Icon className="h-4 w-4 text-[var(--burgundy)]" aria-hidden="true" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.14em] sm:text-[13px]">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
