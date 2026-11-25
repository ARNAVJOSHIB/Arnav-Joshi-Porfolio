export type AssetSourceKind =
  | "authentic-portrait"
  | "authentic-capture"
  | "authentic-brand"
  | "art-directed";

export interface PortfolioImageAsset {
  src: string;
  alt: string;
  caption: string;
  sourceKind: AssetSourceKind;
  width: number;
  height: number;
}

/**
 * Central visual asset manifest mapping every section and project gallery
 * to domain-organized, WebP-optimized local files under /public/images.
 */
export const portfolioImages = {
  hero: {
    primary: {
      src: "/images/hero/arnav-hero.webp",
      alt: "Portrait of Arnav Joshi wearing a black formal tuxedo and bow tie under warm editorial studio lighting",
      caption: "Authentic personal portrait (source preserved in arnav-original.png)",
      sourceKind: "authentic-portrait",
      width: 682,
      height: 1024,
    },
  },
  about: {
    primary: {
      src: "/images/about/about-editorial.webp",
      alt: "Editorial still life of a linen architectural notebook, 35mm rangefinder camera, and brass drafting compass on a deep burgundy plinth",
      caption: "Disciplines in dialogue: systems, craft, and inquiry",
      sourceKind: "art-directed",
      width: 896,
      height: 1200,
    },
  },
  skills: {
    primary: {
      src: "/images/skills/skills-editorial.webp",
      alt: "Matte burgundy monolith blocks, brushed brass lens cylinder, and amber prism against a pale butter-yellow backdrop",
      caption: "Structured form & multidisciplinary balance",
      sourceKind: "art-directed",
      width: 1024,
      height: 1024,
    },
  },
  chronicleFinance: {
    dashboard: {
      src: "/images/chronicle-finance/dashboard.webp",
      alt: "Authentic live capture of The Chronicle Finance landing page featuring its three-column quantitative broadsheet and research modules",
      caption: "Live Interface Capture · Front Page (/)",
      sourceKind: "authentic-capture",
      width: 1024,
      height: 640,
    },
    aboutEditorial: {
      src: "/images/chronicle-finance/about-editorial.webp",
      alt: "Authentic live capture of The Chronicle Finance About page showcasing its masthead, ecosystem note, and evolving system card",
      caption: "Live Interface Capture · Editorial Mission (/about)",
      sourceKind: "authentic-capture",
      width: 1024,
      height: 817,
    },
    gateway: {
      src: "/images/chronicle-finance/gateway.webp",
      alt: "Authentic live capture of The Chronicle Finance Quantitative Research Gateway authentication broadsheet view",
      caption: "Live Interface Capture · Research Gateway (/auth)",
      sourceKind: "authentic-capture",
      width: 1024,
      height: 817,
    },
    brandMark: {
      src: "/images/chronicle-finance/brand-mark.webp",
      alt: "Authentic brand emblem of The Chronicle Finance featuring serif typography over archival statistical curves",
      caption: "Repository Brand Emblem (public/LOGO.jpeg)",
      sourceKind: "authentic-brand",
      width: 1440,
      height: 1440,
    },
    modelingStillLife: {
      src: "/images/chronicle-finance/modeling-still-life.webp",
      alt: "Editorial studio still life of a burgundy leather analytical ledger, stepped bronze prisms, and brass compass needle on butter yellow",
      caption: "Editorial Concept · Quantitative Modelling Study",
      sourceKind: "art-directed",
      width: 1200,
      height: 896,
    },
  },
  aurelianOS: {
    monoliths: {
      src: "/images/aurelian-os/monoliths.webp",
      alt: "Brutalist dark burgundy-bronze architectural monoliths with recessed golden light channels representing AURELIAN OS",
      caption: "Art-Directed Concept · Cognitive Architecture Monoliths",
      sourceKind: "art-directed",
      width: 896,
      height: 1200,
    },
    systemsFlow: {
      src: "/images/aurelian-os/systems-flow.webp",
      alt: "Intersecting beveled dark obsidian glass planes, brass grid rods, and amber optical light pathways on deep burgundy",
      caption: "Art-Directed Concept · Kernel Signal & Agency Flow",
      sourceKind: "art-directed",
      width: 1200,
      height: 896,
    },
  },
  research: {
    quantitativeStudy: {
      src: "/images/research/quantitative-study.webp",
      alt: "Dark burgundy glass hyperbolic form and frosted crystal spheres casting golden refractive light on a cream plinth",
      caption: "Art-Directed Concept · Probabilistic & Market Inquiry",
      sourceKind: "art-directed",
      width: 896,
      height: 1200,
    },
  },
  creative: {
    mediumFormat: {
      src: "/images/creative/medium-format.webp",
      alt: "Vintage medium-format cinema camera with burgundy leatherette body and prime lens on a seamless pale butter-yellow backdrop",
      caption: "Art-Directed Studio Plate · Replaceable Personal Photography Slot",
      sourceKind: "art-directed",
      width: 896,
      height: 1200,
    },
  },
  direction: {
    strategyDesk: {
      src: "/images/direction/strategy-desk.webp",
      alt: "Folded off-white architectural grid sheets, matte burgundy fountain pen, and brushed brass scale ruler on butter yellow",
      caption: "Strategy & Systems Planning",
      sourceKind: "art-directed",
      width: 1024,
      height: 1024,
    },
    cinemaReel: {
      src: "/images/direction/cinema-reel.webp",
      alt: "Anodized deep burgundy 16mm film reel, brushed brass light meter, and amber optical filter on butter yellow",
      caption: "Cinematography, Film & Visual Direction",
      sourceKind: "art-directed",
      width: 1024,
      height: 1024,
    },
  },
  timeline: {
    milestone2026: {
      src: "/images/timeline/milestone-2026.webp",
      alt: "Dark burgundy modular synthesizer, black linen hardcover notebook, and brass calipers on butter yellow",
      caption: "2026 · Engineering, Business & Sound Synthesis",
      sourceKind: "art-directed",
      width: 1200,
      height: 896,
    },
  },
} as const satisfies Record<string, Record<string, PortfolioImageAsset>>;
