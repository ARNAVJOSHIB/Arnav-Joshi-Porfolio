export interface SkillCategory {
  id: string;
  label: string;
  /** Decorative / self-assessed emphasis indicator (1 to 100) — never a certified proficiency score */
  focusRatio: number;
  focusTag: string;
  items: string[];
}

export const SKILLS_DATA = {
  heading: "SKILLS &\nCAPABILITIES",
  intro:
    "Multidisciplinary exploration spanning corporate strategy, quantitative financial modelling, full-stack software systems, visual direction and team coordination. Indicators reflect relative self-assessed focus rather than external certifications.",
  disclaimer: "SELF-ASSESSED FOCUS INDICATORS",
  categories: [
    {
      id: "business",
      label: "BUSINESS & MANAGEMENT",
      focusRatio: 84,
      focusTag: "CORE FOCUS",
      items: [
        "Business Strategy",
        "Management",
        "Marketing",
        "Operations",
        "Human Resource Management",
        "Conflict Management",
        "Business Communication",
      ],
    },
    {
      id: "finance",
      label: "FINANCE & ANALYTICS",
      focusRatio: 86,
      focusTag: "CORE FOCUS",
      items: [
        "Financial Analysis",
        "Financial Modelling",
        "Compound Interest Modelling",
        "Discounted Cash Flow",
        "Monte Carlo Simulation",
        "Probabilistic Analysis",
        "Data Interpretation",
      ],
    },
    {
      id: "technology",
      label: "TECHNOLOGY & PRODUCT",
      focusRatio: 82,
      focusTag: "ACTIVE BUILD",
      items: [
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "FastAPI",
        "Supabase",
        "API Integration",
        "Product Development",
      ],
    },
    {
      id: "creative",
      label: "CREATIVE",
      focusRatio: 78,
      focusTag: "STUDIO PRACTICE",
      items: [
        "Photography",
        "Film Production",
        "VFX",
        "3D Animation",
        "Music Production",
        "Digital Art Direction",
        "Visual Storytelling",
      ],
    },
    {
      id: "leadership",
      label: "LEADERSHIP & COMMUNICATION",
      focusRatio: 80,
      focusTag: "APPLIED PRACTICE",
      items: [
        "Public Speaking",
        "Team Coordination",
        "Problem Solving",
        "Interpersonal Communication",
        "Conflict Management",
        "Social Media Marketing",
      ],
    },
  ] satisfies SkillCategory[],
};
