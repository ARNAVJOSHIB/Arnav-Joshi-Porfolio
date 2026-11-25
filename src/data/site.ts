import { portfolioImages } from "@/data/images";

export interface NavLink {
  label: string;
  href: string;
}

export interface ConfigurableLink {
  label: string;
  value: string;
  href: string | null;
  configured: boolean;
  note?: string;
}

export const SITE_CONFIG = {
  name: "ARNAV JOSHI",
  shortMark: "AJ",
  tagline: "Business. Systems. Finance. Technology. Creativity.",
  heroEyebrow: "BUSINESS · FINANCE · TECHNOLOGY · CREATIVITY",
  heroBio:
    "An independent builder exploring the intersection of business, systems, finance, technology and creative expression.",
  copyrightYear: 2026,
  // Replace entries in src/data/images.ts once genuine personal photography is ready.
  images: {
    heroPortrait: portfolioImages.hero.primary.src,
    heroPortraitAlt: portfolioImages.hero.primary.alt,
    aboutPlate: portfolioImages.about.primary.src,
    aboutPlateAlt: portfolioImages.about.primary.alt,
    skillsPlate: portfolioImages.skills.primary.src,
    skillsPlateAlt: portfolioImages.skills.primary.alt,
    timelinePlate: portfolioImages.timeline.milestone2026.src,
    timelinePlateAlt: portfolioImages.timeline.milestone2026.alt,
  },
  navLinks: [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "JOURNEY", href: "#journey" },
    { label: "CONTACT", href: "#contact" },
  ] satisfies NavLink[],
  heroRailLinks: [
    { label: "GH", href: "https://github.com/ARNAVJOSHIB", external: true },
    { label: "LI", href: "https://www.linkedin.com/in/arnav-joshi-a18993351/", external: true },
    { label: "CF", href: "https://the-chronicle-finance.vercel.app/", external: true },
    { label: "OS", href: "https://github.com/ARNAVJOSHIB/Aurelian-OS", external: true },
    { label: "MAIL", href: "#contact", external: false },
  ],
  socialLinks: {
    github: {
      label: "GITHUB",
      value: "github.com/ARNAVJOSHIB",
      href: "https://github.com/ARNAVJOSHIB",
      configured: true,
    } satisfies ConfigurableLink,
    email: {
      label: "EMAIL",
      value: "dr.arnavjoshi2006@gmail.com",
      href: "mailto:dr.arnavjoshi2006@gmail.com",
      configured: true,
    } satisfies ConfigurableLink,
    linkedin: {
      label: "LINKEDIN",
      value: "linkedin.com/in/arnav-joshi-a18993351",
      href: "https://www.linkedin.com/in/arnav-joshi-a18993351/",
      configured: true,
    } satisfies ConfigurableLink,
    portfolio: {
      label: "PORTFOLIO",
      value: "arnav-joshi · editorial edition",
      href: "#hero",
      configured: true,
    } satisfies ConfigurableLink,
  },
  collaborationAreas: [
    "Digital Products",
    "Financial Technology",
    "Business Research",
    "Product Strategy",
    "Data & Analytics",
    "Creative Projects",
    "Photography",
    "Technology",
  ],
  footerSitemap: [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT ME", href: "#about" },
    { label: "MY WORK", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "JOURNEY", href: "#journey" },
    { label: "CONTACT ME", href: "#contact" },
  ] satisfies NavLink[],
  footerDisciplines: [
    "BUSINESS",
    "FINANCE",
    "TECHNOLOGY",
    "ANALYTICS",
    "CREATIVE",
    "PHOTOGRAPHY",
  ],
  marqueeKeywords: [
    "STRATEGY",
    "FINANCE",
    "TECHNOLOGY",
    "SYSTEMS",
    "CREATIVE",
    "ANALYTICS",
    "IDEAS",
  ],
} as const;
