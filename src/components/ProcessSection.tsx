import { PROCESS_DATA } from "@/data/process";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Four-column burgundy process grid featuring oversized hollow outlined numerals
 * and restrained editorial typography matching the reference MY CREATIVE DESIGN PROCESS.
 */
export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-[var(--burgundy)] px-5 py-20 text-[var(--butter-yellow)] sm:px-8 md:px-12 md:py-28 lg:px-14"
    >
      <div className="mx-auto">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="whitespace-pre-line font-display text-[clamp(2.8rem,5.4vw,4.5rem)] uppercase leading-[0.92] tracking-[0.01em] text-[var(--butter-yellow)]">
            {PROCESS_DATA.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[11px] leading-relaxed uppercase tracking-[0.1em] text-[var(--cream)]/78">
            {PROCESS_DATA.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_DATA.steps.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 0.07}>
              <article className="group flex h-full min-h-[280px] flex-col justify-between border border-[var(--butter-yellow)]/10 bg-[var(--burgundy-card)]/85 p-6 transition-colors duration-300 hover:border-[var(--butter-yellow)]/30 hover:bg-[var(--burgundy-card)]">
                <div className="flex items-start justify-end">
                  <span
                    aria-hidden="true"
                    className="numeral-outline-light font-display text-7xl leading-none tracking-[0.02em] select-none sm:text-8xl"
                  >
                    {step.number}
                  </span>
                </div>

                <div className="mt-10 border-t border-[var(--butter-yellow)]/15 pt-5">
                  <h3 className="font-display text-xl uppercase tracking-[0.04em] text-[var(--butter-yellow)]">
                    {step.number}. {step.title}
                  </h3>
                  <p className="mt-2.5 text-[11px] leading-relaxed uppercase tracking-[0.06em] text-[var(--cream)]/80">
                    {step.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
