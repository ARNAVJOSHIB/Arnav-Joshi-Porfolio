"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA, type ProjectItem } from "@/data/projects";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectDossierModal } from "@/components/ProjectDossierModal";

function ProjectCaption({
  project,
  align = "left",
  onInspect,
}: {
  project: ProjectItem;
  align?: "left" | "right";
  onInspect: (p: ProjectItem) => void;
}) {
  const externalUrl = project.liveUrl ?? project.githubUrl;

  return (
    <div
      className={`flex flex-col justify-end ${
        align === "right" ? "lg:text-left" : ""
      }`}
    >
      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--gold)]">
        {project.number}
      </span>

      <button
        type="button"
        onClick={() => onInspect(project)}
        className="group mt-2 cursor-pointer text-left"
      >
        <h3 className="font-display text-3xl uppercase leading-[0.92] tracking-[0.01em] text-[var(--butter-yellow)] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
          {project.title}
        </h3>
      </button>

      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--cream)]/70">
        {project.categoryMeta}
      </p>

      <p className="mt-3 max-w-sm text-[12px] leading-relaxed text-[var(--cream)]/82">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.16em]">
        <button
          type="button"
          onClick={() => onInspect(project)}
          className="cursor-pointer border-b border-[var(--butter-yellow)]/45 pb-0.5 text-[var(--butter-yellow)] transition-colors hover:border-[var(--cream)] hover:text-[var(--cream)]"
        >
          READ DOSSIER ↗
        </button>

        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 border-b border-[var(--gold)]/40 pb-0.5 text-[var(--gold)] transition-colors hover:border-[var(--butter-yellow)] hover:text-[var(--butter-yellow)]"
          >
            <span>{project.liveUrl ? "LIVE PLATFORM" : "GITHUB REPO"}</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}

/**
 * Asymmetric staggered 2-column Digital Work Collection matching the visual
 * rhythm, editorial captions, and hover cues of the reference portfolio.
 */
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [initialPlateIndex, setInitialPlateIndex] = useState<number>(0);

  const openDossier = (project: ProjectItem, plateIndex = 0) => {
    setInitialPlateIndex(plateIndex);
    setSelectedProject(project);
  };

  const chronicle = PROJECTS_DATA[0];
  const aurelian = PROJECTS_DATA[1];
  const research = PROJECTS_DATA[2];
  const creative = PROJECTS_DATA[3];

  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-[var(--burgundy)] px-5 py-20 text-[var(--butter-yellow)] sm:px-8 md:px-12 md:py-28 lg:px-14"
    >
      <div className="mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        {/* LEFT EDITORIAL COLUMN: Heading -> Project 02 Aurelian OS -> Project 04 Creative Projects */}
        <div className="flex flex-col gap-16 lg:gap-20">
          <Reveal>
            <h2 className="font-display text-[clamp(3.1rem,6.2vw,5.4rem)] uppercase leading-[0.88] tracking-[0.01em] text-[var(--butter-yellow)]">
              DIGITAL WORK
              <br />
              COLLECTION
            </h2>
            <p className="mt-4 max-w-sm text-[11px] uppercase leading-relaxed tracking-[0.12em] text-[var(--cream)]/72">
              Selected platforms, architectural experiments, quantitative inquiry
              and visual studies.
            </p>
          </Reveal>

          {/* Project 02: Aurelian OS with signature circular VIEW overlay + Systems plate contact strip */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-end">
              <Reveal className="sm:col-span-7">
                <button
                  type="button"
                  onClick={() => openDossier(aurelian, 0)}
                  aria-label={`Inspect ${aurelian.title}`}
                  className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden bg-[var(--burgundy-dark)] text-left"
                >
                  <Image
                    src={aurelian.image}
                    alt={aurelian.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 28vw"
                    className="object-cover object-center opacity-75 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-90"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[var(--burgundy-dark)]/30 transition-opacity duration-500 group-hover:opacity-15"
                  />
                  <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--butter-yellow)] text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--burgundy-dark)] transition-transform duration-300 group-hover:scale-110">
                    VIEW
                  </span>
                </button>
              </Reveal>

              <Reveal delay={0.08} className="sm:col-span-5">
                <ProjectCaption
                  project={aurelian}
                  align="right"
                  onInspect={(p) => openDossier(p, 0)}
                />
              </Reveal>
            </div>

            {/* Secondary plate strip for Aurelian OS */}
            <Reveal delay={0.1}>
              <div className="grid w-full grid-cols-1 gap-3 border-t border-[var(--butter-yellow)]/12 pt-4 sm:grid-cols-2">
                {aurelian.galleryPlates.map((plate, idx) => (
                  <button
                    key={plate.src}
                    type="button"
                    onClick={() => openDossier(aurelian, idx)}
                    className="group flex min-w-0 cursor-pointer items-center gap-2.5 overflow-hidden border border-[var(--butter-yellow)]/15 bg-[var(--burgundy-dark)]/55 p-2 text-left transition-colors hover:border-[var(--butter-yellow)]/45"
                  >
                    <div className="relative h-10 w-12 shrink-0 overflow-hidden bg-[var(--burgundy)]">
                      <Image
                        src={plate.src}
                        alt={plate.alt}
                        fill
                        sizes="60px"
                        className="object-cover object-center"
                      />
                    </div>
                    <span className="min-w-0 break-words text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-[var(--cream)]/82 group-hover:text-[var(--butter-yellow)]">
                      {plate.caption.split("·").pop()?.trim()}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Project 04: Photography, Film & 3D */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-end lg:pt-4">
            <Reveal className="sm:col-span-7">
              <button
                type="button"
                onClick={() => openDossier(creative, 0)}
                aria-label={`Inspect ${creative.title}`}
                className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden bg-[var(--butter-yellow)] text-left"
              >
                <Image
                  src={creative.image}
                  alt={creative.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 28vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>

            <Reveal delay={0.08} className="sm:col-span-5">
              <ProjectCaption
                project={creative}
                align="right"
                onInspect={(p) => openDossier(p, 0)}
              />
            </Reveal>
          </div>
        </div>

        {/* RIGHT EDITORIAL COLUMN (staggered): Project 01 Chronicle Finance -> Project 03 Research -> VIEW ALL WORK */}
        <div className="flex flex-col gap-16 lg:gap-20 lg:pt-6">
          {/* Project 01: Chronicle Finance real broadsheet capture + multi-plate contact sheet */}
          <div>
            <Reveal delay={0.08}>
              <button
                type="button"
                onClick={() => openDossier(chronicle, 0)}
                aria-label={`Inspect ${chronicle.title}`}
                className="group relative block w-full cursor-pointer overflow-hidden bg-[var(--butter-yellow)] p-3 text-left sm:p-4"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--burgundy)]/15 bg-[#FAF8F3]">
                  <Image
                    src={chronicle.image}
                    alt={chronicle.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 44vw"
                    className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--burgundy)] sm:text-[10px]">
                  <span className="whitespace-nowrap">LIVE PLATFORM</span>
                  <span className="whitespace-nowrap">
                    THE-CHRONICLE-FINANCE.VERCEL.APP
                  </span>
                </span>
              </button>
            </Reveal>

            {/* Contact sheet strip showcasing all 4 supplementary Chronicle Finance plates */}
            <Reveal delay={0.1}>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {chronicle.galleryPlates.slice(1).map((plate, idx) => (
                  <button
                    key={plate.src}
                    type="button"
                    onClick={() => openDossier(chronicle, idx + 1)}
                    aria-label={`Open ${plate.caption}`}
                    className="group relative aspect-[4/3] cursor-pointer overflow-hidden border border-[var(--butter-yellow)]/20 bg-[var(--burgundy-dark)] transition-colors hover:border-[var(--butter-yellow)]"
                  >
                    <Image
                      src={plate.src}
                      alt={plate.alt}
                      fill
                      sizes="140px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-6 max-w-md">
              <ProjectCaption
                project={chronicle}
                onInspect={(p) => openDossier(p, 0)}
              />
            </Reveal>
          </div>

          {/* Project 03: Financial & Analytical Research (caption bottom-left, plate right) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-end">
            <Reveal delay={0.08} className="order-2 sm:order-1 sm:col-span-5">
              <ProjectCaption
                project={research}
                onInspect={(p) => openDossier(p, 0)}
              />
            </Reveal>

            <Reveal className="order-1 sm:order-2 sm:col-span-7">
              <button
                type="button"
                onClick={() => openDossier(research, 0)}
                aria-label={`Inspect ${research.title}`}
                className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden bg-[var(--butter-yellow)] text-left"
              >
                <Image
                  src={research.image}
                  alt={research.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 28vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          </div>

          <Reveal
            delay={0.12}
            className="flex items-end justify-start lg:mt-auto lg:justify-end"
          >
            <EditorialButton onClick={() => openDossier(chronicle, 0)}>
              VIEW ALL WORK
            </EditorialButton>
          </Reveal>
        </div>
      </div>

      <ProjectDossierModal
        key={`${selectedProject?.id ?? "none"}-${initialPlateIndex}`}
        activeProject={selectedProject}
        initialPlateIndex={initialPlateIndex}
        onSelectProject={(p) => openDossier(p, 0)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
