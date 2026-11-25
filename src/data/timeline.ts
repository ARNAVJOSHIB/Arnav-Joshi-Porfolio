export interface TimelineMilestone {
  id: string;
  year: string;
  yearSuffix?: string;
  heading: string;
  body: string;
  secondaryTag?: string;
  variant: "dark" | "yellow";
}

export const TIMELINE_DATA = {
  heading: "BUILT THROUGH\nEXPERIENCE",
  intro:
    "An evolving chronology shaped by scientific foundations, undergraduate business education, campus event coordination, industry exposure, and independent technical and creative builds.",
  milestones: [
    {
      id: "2023-earlier",
      year: "2023",
      yearSuffix: "& EARLIER",
      heading: "FOUNDATIONS",
      body: "Academic foundations, scientific education, analytical thinking and early explorations across computing, visual design and creative expression.",
      variant: "dark",
    },
    {
      id: "2024",
      year: "2024",
      heading: "DISCOVERING BUSINESS",
      body: "Beginning undergraduate business education—exploring business management, marketing, economics, organisational behaviour and structured strategic thinking.",
      variant: "yellow",
    },
    {
      id: "2025",
      year: "2025",
      heading: "BUILDING & EXPLORING",
      body: "Expanding practical work across programming, quantitative finance, digital projects, creative production and college-level event coordination including Ranangan.",
      secondaryTag: "EXTRACURRICULAR · RANANGAN COORDINATION",
      variant: "dark",
    },
    {
      id: "2026",
      year: "2026",
      heading: "BUILDING WITH PURPOSE",
      body: "Developing independent platforms Chronicle Finance and AURELIAN OS alongside hands-on internship exploration at Retrofilm Engineering Services Private Limited across Human Resource Management, Management Information Systems, and Marketing Management.",
      secondaryTag: "INTERNSHIP · RETROFILM ENGINEERING SERVICES PVT. LTD.",
      variant: "dark",
    },
  ] satisfies TimelineMilestone[],
};
