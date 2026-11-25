import {
  portfolioImages,
  type PortfolioImageAsset,
} from "@/data/images";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  categoryMeta: string;
  description: string;
  extendedSummary: string;
  highlights: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  galleryPlates: PortfolioImageAsset[];
  aspectClass: string;
  frameStyle: "butter-mat" | "dark-veil" | "butter-full";
  liveUrl?: string;
  githubUrl?: string;
  statusNote: string;
  architectureNote?: string;
  diagramType?: "chronicle" | "aurelian";
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "chronicle-finance",
    number: "01",
    title: "CHRONICLE FINANCE",
    subtitle: "SIMULATION-DRIVEN FINANCIAL INTELLIGENCE",
    categoryMeta: "FINTECH · BROADSHEET LAB · 2026",
    description:
      "An independent financial intelligence and simulation platform pairing an editorial broadsheet UI with TypeScript quantitative engines, D3/SVG visualizations, and Supabase persistence.",
    extendedSummary:
      "Built as a luxury financial broadsheet (#F8F5EF paper, #182230 navy, #B69B57 gold), Chronicle Finance runs 8 quantitative models in TypeScript (Compound Interest, DCF, Monte Carlo, Geometric Brownian Motion, Value at Risk, Portfolio Optimization, Correlation Matrix, and Volatility Lab) alongside a Kotlin/Jetpack Compose Android companion in the repository.",
    highlights: [
      "8 Implemented TypeScript Models (DCF, Monte Carlo, GBM, VaR, Efficient Frontier)",
      "7 Visualization Systems (Bubble Ledger, Path Cloud, Frontier, Loss Histogram)",
      "Protected Research Gateway via Supabase SSR & Row-Level Security",
      "Native Kotlin / Jetpack Compose Android Companion Module",
      "AI Interpretation Boundary (Editorial Commentary; Never Primary Math)",
      "Documented FastAPI Python Layer in SYSTEM_ARCHITECTURE.md (Planned Backend)",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "D3.js",
      "Framer Motion",
      "Supabase Auth/DB",
      "Kotlin / Compose",
    ],
    image: portfolioImages.chronicleFinance.dashboard.src,
    imageAlt: portfolioImages.chronicleFinance.dashboard.alt,
    galleryPlates: [
      portfolioImages.chronicleFinance.dashboard,
      portfolioImages.chronicleFinance.aboutEditorial,
      portfolioImages.chronicleFinance.gateway,
      portfolioImages.chronicleFinance.brandMark,
      portfolioImages.chronicleFinance.modelingStillLife,
    ],
    aspectClass: "aspect-[16/10]",
    frameStyle: "butter-mat",
    liveUrl: "https://the-chronicle-finance.vercel.app/",
    githubUrl: "https://github.com/ARNAVJOSHIB/The-Chronicle-Finance",
    statusNote: "LIVE INDEPENDENT PRODUCT",
    architectureNote:
      "Verified against repository source: frontend simulation calculations execute in pure TypeScript (src/features/simulation/models/); FastAPI/Python backend is documented as target architecture in SYSTEM_ARCHITECTURE.md rather than present as a /backend directory.",
    diagramType: "chronicle",
  },
  {
    id: "aurelian-os",
    number: "02",
    title: "AURELIAN OS",
    subtitle: "A COGNITIVE OPERATING SYSTEM",
    categoryMeta: "COGNITIVE KERNEL · ARCH & RFC · 2026",
    description:
      "An independent systems engineering project exploring a local-first personal cognitive operating system built around human agency, formal specifications, and a TypeScript orchestration kernel.",
    extendedSummary:
      "Governed by ADR-001 (Human Operating System), ADR-002 (Local First), and ADR-003 (Agency Over Automation), the repository pairs approved architecture/RFC specifications (ARCH-000, MSS v1.0, RFC-001, RFC-002, SDD-001) with an implemented TypeScript Cognitive Kernel, in-memory Command/Query/Event buses, Engine Registry, and unit test suite.",
    highlights: [
      "Implemented: AurelianKernel State Machine, LocalCommandBus, LocalQueryBus & LocalEventBus",
      "Implemented: LocalEngineRegistry, Playground Stress Engines & 10-Assertion Unit Suite",
      "Specified: ARCH-000 9-Layer Topology Governing Chronicle Subsystems",
      "Specified: RFC-002 Agency Engine Pipeline (Observe → Assess → Recommend → Await User)",
      "Conceptual / Deferred: Agency Engine Runtime, Cognitive Blackboard & UI Dashboard",
    ],
    stack: [
      "TypeScript Kernel",
      "ARCH-000",
      "RFC-001 & RFC-002",
      "ADR-001..003",
      "SDD-001",
    ],
    image: portfolioImages.aurelianOS.monoliths.src,
    imageAlt: portfolioImages.aurelianOS.monoliths.alt,
    galleryPlates: [
      portfolioImages.aurelianOS.monoliths,
      portfolioImages.aurelianOS.systemsFlow,
    ],
    aspectClass: "aspect-[3/4]",
    frameStyle: "dark-veil",
    githubUrl: "https://github.com/ARNAVJOSHIB/Aurelian-OS",
    statusNote: "IMPLEMENTED KERNEL & ARCHITECTURE REPO",
    architectureNote:
      "Source inspection confirms src/kernel/ and src/tests/unit/kernel.test.ts implement Alpha 0.1 kernel orchestration and failure isolation, while higher-order cognitive engines and UI remain documented/conceptual specifications.",
    diagramType: "aurelian",
  },
  {
    id: "quantitative-research",
    number: "03",
    title: "FINANCIAL & ANALYTICAL RESEARCH",
    subtitle: "EVOLVING QUANTITATIVE INQUIRY",
    categoryMeta: "RESEARCH · MODELLING · ONGOING",
    description:
      "Ongoing personal inquiry into financial markets, quantitative modelling, computational finance, market regimes and the intersection of AI with analytical decision-making.",
    extendedSummary:
      "Structured as active working exploration, simulation experiments, and personal study notes rather than completed academic publications—focusing on how stochastic volatility, correlation breakdown, and structured valuation inform clear reasoning under uncertainty.",
    highlights: [
      "Stochastic Market Regime Exploration",
      "Volatility Clustering & Tail Risk Mechanics",
      "Valuation Sensitivity & Cash Flow Structure",
      "Computational Finance Experiments",
      "AI-Assisted Analytical Workflows",
    ],
    stack: ["Python", "Probabilistic Models", "Financial Mathematics", "Data Analysis"],
    image: portfolioImages.research.quantitativeStudy.src,
    imageAlt: portfolioImages.research.quantitativeStudy.alt,
    galleryPlates: [portfolioImages.research.quantitativeStudy],
    aspectClass: "aspect-[3/4]",
    frameStyle: "butter-full",
    statusNote: "DEVELOPING FIELD OF INQUIRY",
    architectureNote:
      "Presented transparently as active conceptual study and modelling exploration rather than peer-reviewed or published papers.",
  },
  {
    id: "creative-projects",
    number: "04",
    title: "PHOTOGRAPHY, FILM & 3D",
    subtitle: "VISUAL STORYTELLING & PRODUCTION",
    categoryMeta: "CREATIVE STUDIO · VISUAL ARTS",
    description:
      "Independent exploration of editorial photography, cinematography, film editing, visual effects, 3D animation, music production and digital visual direction.",
    extendedSummary:
      "Treating visual composition as a deliberate system of rhythm, lighting, framing, and spatial depth. Photography acts as a primary discipline alongside moving-image experimentation, VFX compositing, 3D studies, and sound design.",
    highlights: [
      "Editorial & Street Photography",
      "Cinematography & Visual Composition",
      "Film Editing & Pacing",
      "Visual Effects (VFX) Compositing",
      "3D Animation & Lighting Studies",
      "Music Production & Sound Design",
    ],
    stack: ["Photography", "Cinematography", "VFX", "3D Animation", "Music Production"],
    image: portfolioImages.creative.mediumFormat.src,
    imageAlt: portfolioImages.creative.mediumFormat.alt,
    galleryPlates: [portfolioImages.creative.mediumFormat],
    aspectClass: "aspect-[3/4]",
    frameStyle: "butter-full",
    statusNote: "STUDIO PRACTICE (REPLACEABLE PLACEHOLDER)",
    architectureNote:
      "Curated editorial studio placeholder staged cleanly via src/data/images.ts so original photography, film stills, and 3D renders can be dropped in directly without duplicating section visuals.",
  },
];
