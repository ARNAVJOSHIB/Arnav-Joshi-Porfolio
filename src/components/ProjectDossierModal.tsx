"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, GitBranch, X } from "lucide-react";
import { PROJECTS_DATA, type ProjectItem } from "@/data/projects";
import {
  AurelianArchitectureDiagram,
  ChronicleArchitectureDiagram,
} from "@/components/ProjectArchitectureVisuals";

interface ProjectDossierModalProps {
  activeProject: ProjectItem | null;
  initialPlateIndex?: number;
  onSelectProject: (project: ProjectItem) => void;
  onClose: () => void;
}

const SOURCE_BADGE: Record<string, string> = {
  "authentic-portrait": "AUTHENTIC PERSONAL PORTRAIT",
  "authentic-capture": "AUTHENTIC LIVE CAPTURE",
  "authentic-brand": "AUTHENTIC REPO BRAND ASSET",
  "art-directed": "SUPPLEMENTARY EDITORIAL CONCEPT",
};

/**
 * Interactive multi-asset editorial dossier modal displaying all curated plates,
 * source provenance badges, and factual architectural blueprints per project.
 */
export function ProjectDossierModal({
  activeProject,
  initialPlateIndex = 0,
  onSelectProject,
  onClose,
}: ProjectDossierModalProps) {
  const [plateIdx, setPlateIdx] = useState(initialPlateIndex);

  useEffect(() => {
    if (!activeProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeProject, onClose]);

  if (!activeProject) return null;

  const plates = activeProject.galleryPlates;
  const activePlate = plates[plateIdx] ?? plates[0];
  const isWideCapture =
    activePlate.width > activePlate.height ||
    activePlate.sourceKind === "authentic-brand";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${activeProject.title} project dossier`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--black)]/80 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-[var(--butter-yellow)]/25 bg-[var(--burgundy-dark)] text-[var(--butter-yellow)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top project switcher bar */}
        <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--butter-yellow)]/15 bg-[var(--burgundy-dark)]/95 px-5 py-4 backdrop-blur-sm sm:px-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {PROJECTS_DATA.map((p) => {
              const selected = p.id === activeProject.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onSelectProject(p)}
                  className={`cursor-pointer border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                    selected
                      ? "border-[var(--butter-yellow)] bg-[var(--butter-yellow)] text-[var(--burgundy-dark)]"
                      : "border-[var(--butter-yellow)]/25 text-[var(--cream)]/75 hover:border-[var(--butter-yellow)]/60 hover:text-[var(--butter-yellow)]"
                  }`}
                >
                  {p.number} · {p.title.split(/[\s,]+/)[0]}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project dossier"
            className="flex h-9 w-9 cursor-pointer items-center justify-center border border-[var(--butter-yellow)]/30 text-[var(--butter-yellow)] transition-colors hover:bg-[var(--butter-yellow)] hover:text-[var(--burgundy-dark)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-12">
          {/* Left multi-asset visual stage & thumbnail selector */}
          <div className="lg:col-span-6">
            <div
              className={`relative overflow-hidden ${
                isWideCapture ? "aspect-[4/3]" : "aspect-[3/4]"
              } ${
                activePlate.sourceKind === "authentic-capture" ||
                activePlate.sourceKind === "authentic-brand"
                  ? "bg-[var(--butter-yellow)] p-3 sm:p-4"
                  : "bg-[var(--burgundy)]"
              }`}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={activePlate.src}
                  alt={activePlate.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className={
                    activePlate.sourceKind === "authentic-capture" ||
                    activePlate.sourceKind === "authentic-brand"
                      ? "object-contain object-center"
                      : "object-cover object-center"
                  }
                />
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--butter-yellow)]/15 pb-3 text-[10px] font-semibold uppercase tracking-[0.14em]">
              <span className="text-[var(--cream)]/85">
                {activePlate.caption}
              </span>
              <span className="border border-[var(--gold)]/40 px-2 py-0.5 text-[9px] text-[var(--gold)]">
                {SOURCE_BADGE[activePlate.sourceKind]}
              </span>
            </div>

            {/* Plate thumbnail selector when a project has multiple visuals */}
            {plates.length > 1 && (
              <div className="mt-4">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                  PROJECT VISUAL ARCHIVE ({plates.length} PLATES)
                </p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {plates.map((plate, idx) => {
                    const isCurrent = idx === plateIdx;
                    return (
                      <button
                        key={plate.src}
                        type="button"
                        onClick={() => setPlateIdx(idx)}
                        aria-label={`View plate ${idx + 1}: ${plate.caption}`}
                        className={`relative aspect-[4/3] cursor-pointer overflow-hidden border transition-all ${
                          isCurrent
                            ? "border-[var(--butter-yellow)] ring-1 ring-[var(--butter-yellow)]"
                            : "border-[var(--butter-yellow)]/20 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={plate.src}
                          alt={plate.alt}
                          fill
                          sizes="110px"
                          className="object-cover object-center"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right structured narrative + authentic architectural diagram */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                <span>
                  PROJECT {activeProject.number} · {activeProject.statusNote}
                </span>
                <span>{activeProject.categoryMeta}</span>
              </div>

              <h3 className="mt-3 font-display text-4xl uppercase leading-[0.92] tracking-[0.01em] text-[var(--butter-yellow)] sm:text-5xl">
                {activeProject.title}
              </h3>
              <p className="mt-2 font-serif text-xl italic text-[var(--cream)]/90">
                {activeProject.subtitle}
              </p>

              <p className="mt-4 text-[13px] leading-relaxed text-[var(--cream)]/88">
                {activeProject.extendedSummary}
              </p>

              {activeProject.diagramType === "aurelian" && (
                <div className="mt-5">
                  <AurelianArchitectureDiagram />
                </div>
              )}

              {activeProject.diagramType === "chronicle" && (
                <div className="mt-5">
                  <ChronicleArchitectureDiagram />
                </div>
              )}

              <div className="mt-6 border-t border-[var(--butter-yellow)]/15 pt-5">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                  DISCIPLINES &amp; COMPONENTS EXPLORED
                </h4>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activeProject.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-[11px] uppercase tracking-[0.06em] text-[var(--cream)]/85"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-[var(--butter-yellow)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-[var(--butter-yellow)]/15 pt-5">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                  STACK &amp; METHODOLOGY
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[var(--butter-yellow)]/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--butter-yellow)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {activeProject.architectureNote && (
                  <p className="mt-3 text-[11px] leading-relaxed text-[var(--cream)]/70">
                    {activeProject.architectureNote}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[var(--butter-yellow)]/15 pt-5">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--butter-yellow)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--burgundy-dark)] transition-colors hover:bg-[var(--cream)]"
                >
                  <span>VISIT LIVE PLATFORM</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}

              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--butter-yellow)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--burgundy-dark)] transition-colors hover:bg-[var(--cream)]"
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  <span>INSPECT REPOSITORY</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer border border-[var(--butter-yellow)]/30 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--butter-yellow)] transition-colors hover:border-[var(--butter-yellow)]"
              >
                RETURN TO GALLERY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
