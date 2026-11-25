import { portfolioImages } from "@/data/images";

export interface DirectionItem {
  id: string;
  title: string;
  description: string;
  /** Decorative focus weight (1-5 squares) */
  level: number;
  threads: string[];
  featuredImages?: { src: string; alt: string }[];
}

export const DIRECTION_DATA = {
  heading: "CREATIVE\nDIRECTION",
  ctaLabel: "DISCUSS A PROJECT",
  items: [
    {
      id: "business-strategy",
      title: "BUSINESS & STRATEGY",
      description:
        "Exploring management, business models, organisational systems, strategic thinking and the relationship between decisions and execution.",
      level: 5,
      threads: [
        "ORGANISATIONAL SYSTEMS & INCENTIVES",
        "COMPETITIVE POSITIONING & BUSINESS MODELS",
        "OPERATIONAL WORKFLOWS & MIS THINKING",
        "FROM STRATEGIC THESIS TO EXECUTION",
      ],
    },
    {
      id: "finance",
      title: "FINANCE",
      description:
        "Exploring valuation, financial models, market behaviour, computational finance and quantitative financial decision-making.",
      level: 5,
      threads: [
        "DISCOUNTED CASH FLOW & VALUATION",
        "MONTE CARLO & STOCHASTIC SIMULATION",
        "COMPOUNDING & CAPITAL ALLOCATION",
        "MARKET REGIME & RISK INTERPRETATION",
      ],
    },
    {
      id: "product-technology",
      title: "PRODUCT & TECHNOLOGY",
      description:
        "Building digital products, experimenting with software development, exploring architectures and integrating technology into practical systems.",
      level: 5,
      threads: [
        "NEXT.JS, TYPESCRIPT & REACT INTERFACES",
        "PYTHON & FASTAPI BACKEND SERVICES",
        "RFC-DRIVEN SYSTEM ARCHITECTURE",
        "SUPABASE DATA MODELLING & INTEGRATION",
      ],
      featuredImages: [
        {
          src: portfolioImages.direction.strategyDesk.src,
          alt: portfolioImages.direction.strategyDesk.alt,
        },
        {
          src: portfolioImages.direction.cinemaReel.src,
          alt: portfolioImages.direction.cinemaReel.alt,
        },
      ],
    },
    {
      id: "data-analytics",
      title: "DATA & ANALYTICS",
      description:
        "Using analytical thinking, structured information, models and computational approaches to understand complex problems.",
      level: 4,
      threads: [
        "PROBABILISTIC DISTRIBUTION INTERPRETATION",
        "DECISION SENSITIVITY & SCENARIO ANALYSIS",
        "STRUCTURED DATA MODELLING",
      ],
    },
    {
      id: "visual-storytelling",
      title: "VISUAL STORYTELLING",
      description:
        "Exploring photography, cinematography, composition, editing and the visual grammar that carries narrative clarity.",
      level: 4,
      threads: [
        "EDITORIAL & STILL-LIFE PHOTOGRAPHY",
        "FRAMING, LIGHT & COLOUR DISCIPLINE",
        "SEQUENCING & RHYTHMIC EDITING",
      ],
    },
    {
      id: "design-experiences",
      title: "DESIGN & DIGITAL EXPERIENCES",
      description:
        "Exploring digital interfaces, typography, information architecture, visual hierarchy and purposeful interaction between form and function.",
      level: 4,
      threads: [
        "EDITORIAL TYPOGRAPHY & GRID SYSTEMS",
        "HIGH-CONTRAST DIGITAL PUBLICATIONS",
        "INTERACTIVE INFORMATION HIERARCHY",
      ],
    },
    {
      id: "film-vfx-3d",
      title: "FILM, VFX & 3D",
      description:
        "Experimenting with filmmaking, visual effects, 3D animation, computer-generated imagery and post-production workflows.",
      level: 4,
      threads: [
        "CINEMATOGRAPHY & NARRATIVE PRODUCTION",
        "VFX COMPOSITING & DIGITAL INTEGRATION",
        "3D SPATIAL LIGHTING & ANIMATION",
      ],
    },
    {
      id: "music",
      title: "MUSIC",
      description:
        "Exploring sound architecture, music production, texture and rhythmic creative experimentation.",
      level: 3,
      threads: [
        "SOUND DESIGN & SYNTHESIS",
        "ARRANGEMENT & RHYTHMIC STRUCTURE",
        "AUDIO-VISUAL MOOD DIRECTION",
      ],
    },
  ] satisfies DirectionItem[],
};
