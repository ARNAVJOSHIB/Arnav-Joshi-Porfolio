import Image from "next/image";
import { TIMELINE_DATA, type TimelineMilestone } from "@/data/timeline";
import { SITE_CONFIG } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

function MilestoneCard({
  milestone,
  className = "",
}: {
  milestone: TimelineMilestone;
  className?: string;
}) {
  const isYellow = milestone.variant === "yellow";

  return (
    <article
      className={`group flex flex-col justify-between border p-6 transition-colors duration-300 sm:p-7 ${
        isYellow
          ? "on-yellow border-[var(--burgundy)]/20 bg-[var(--butter-yellow)] text-[var(--burgundy)]"
          : "border-[var(--butter-yellow)]/10 bg-[var(--burgundy-card)]/88 text-[var(--butter-yellow)] hover:border-[var(--butter-yellow)]/28"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-2">
        {milestone.yearSuffix ? (
          <span
            className={`pt-1 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.16em] ${
              isYellow ? "text-[var(--muted-burgundy)]" : "text-[var(--gold)]"
            }`}
          >
            {milestone.yearSuffix}
          </span>
        ) : (
          <span />
        )}
        <span
          className={`font-display text-6xl leading-none tracking-[0.02em] select-none sm:text-7xl ${
            isYellow ? "numeral-outline-dark" : "numeral-outline-light"
          }`}
        >
          {milestone.year}
        </span>
      </div>

      <div className="mt-10">
        {milestone.secondaryTag && (
          <p
            className={`mb-2 text-[10px] font-bold uppercase tracking-[0.18em] ${
              isYellow ? "text-[var(--muted-burgundy)]" : "text-[var(--gold)]"
            }`}
          >
            {milestone.secondaryTag}
          </p>
        )}
        <h3 className="font-display text-2xl uppercase tracking-[0.03em]">
          {milestone.heading}
        </h3>
        <p
          className={`mt-2.5 text-[11px] leading-relaxed uppercase tracking-[0.05em] ${
            isYellow
              ? "text-[var(--burgundy-dark)]/85"
              : "text-[var(--cream)]/82"
          }`}
        >
          {milestone.body}
        </p>
      </div>
    </article>
  );
}

/**
 * Asymmetric mosaic timeline mirroring the reference BUILT THROUGH EXPERIENCE section,
 * featuring large hollow outlined years, a contrasting pale yellow 2024 anchor, and a 2026 visual plate.
 */
export function TimelineSection() {
  const [m2023, m2024, m2025, m2026] = TIMELINE_DATA.milestones;

  return (
    <section
      id="journey"
      className="scroll-mt-16 bg-[var(--burgundy)] px-5 py-20 text-[var(--butter-yellow)] sm:px-8 md:px-12 md:py-28 lg:px-14"
    >
      <div className="mx-auto space-y-5">
        {/* Row 1: 2023 card (left) + BUILT THROUGH EXPERIENCE headline block (right) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-4">
            <MilestoneCard milestone={m2023} />
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6 lg:pt-2">
            <h2 className="whitespace-pre-line font-display text-[clamp(3rem,5.8vw,4.9rem)] uppercase leading-[0.9] tracking-[0.01em] text-[var(--butter-yellow)]">
              {TIMELINE_DATA.heading}
            </h2>
            <p className="mt-4 max-w-lg text-[12px] leading-relaxed uppercase tracking-[0.06em] text-[var(--cream)]/82">
              {TIMELINE_DATA.intro}
            </p>
          </Reveal>
        </div>

        {/* Row 2: Offset Pale Yellow 2024 block + Dark 2025 block */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Reveal delay={0.06} className="lg:col-span-4 lg:col-start-3">
            <MilestoneCard milestone={m2024} className="h-full" />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <MilestoneCard milestone={m2025} className="h-full" />
          </Reveal>
        </div>

        {/* Row 3: Wide 2026 block (with Retrofilm Engineering Services internship) + Right 4:3 visual plate */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-3">
            <MilestoneCard milestone={m2026} className="h-full" />
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-[4/3] h-full min-h-[240px] w-full overflow-hidden bg-[var(--butter-yellow)]">
              <Image
                src={SITE_CONFIG.images.timelinePlate}
                alt={SITE_CONFIG.images.timelinePlateAlt}
                fill
                sizes="(max-width: 1024px) 92vw, 32vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
