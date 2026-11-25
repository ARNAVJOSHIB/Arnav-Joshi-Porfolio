export interface AboutBlock {
  number: string;
  title: string;
  paragraphs: string[];
}

export interface CapabilityItem {
  label: string;
  iconKey:
    | "compass"
    | "trending"
    | "layers"
    | "search"
    | "barChart"
    | "penTool"
    | "film"
    | "cpu";
}

export const ABOUT_DATA = {
  heading: "ABOUT ME",
  blocks: {
    whoIAm: {
      number: "01",
      title: "WHO I AM",
      paragraphs: [
        "I am a business student with a strong interest in finance, technology, management, analytical thinking, product development and creative disciplines.",
        "My interests extend beyond conventional business education. I enjoy exploring how technology, financial models, strategy, design and human behaviour interact through curiosity, analysis, experimentation and execution.",
      ],
    } satisfies AboutBlock,
    myJourney: {
      number: "02",
      title: "MY JOURNEY",
      paragraphs: [
        "My journey has involved exploring multiple disciplines, developing practical projects, participating in academic and extracurricular activities, and building independent digital products.",
        "From business management and finance to programming, digital design, photography, filmmaking, VFX and music, I focus on understanding the mechanisms behind different disciplines and how they work together.",
      ],
    } satisfies AboutBlock,
    myApproach: {
      number: "03",
      title: "MY APPROACH",
      paragraphs: [
        "I value structured thinking, practical execution, independent learning, experimentation and problem-solving.",
        "I prefer turning concepts into tangible projects rather than limiting exploration to theory — building systems, developing products, understanding markets and creating meaningful digital experiences.",
      ],
    } satisfies AboutBlock,
    whatIDo: {
      number: "04",
      title: "WHAT I DO",
      paragraphs: [
        "Connecting business frameworks, quantitative analysis, software engineering and visual direction into coherent projects.",
      ],
    } satisfies AboutBlock,
  },
  capabilities: [
    { label: "Business Strategy", iconKey: "compass" },
    { label: "Financial Modelling", iconKey: "trending" },
    { label: "Product Development", iconKey: "layers" },
    { label: "Market Research", iconKey: "search" },
    { label: "Data Analysis", iconKey: "barChart" },
    { label: "Digital Design", iconKey: "penTool" },
    { label: "Creative Production", iconKey: "film" },
    { label: "Problem Solving", iconKey: "cpu" },
  ] satisfies CapabilityItem[],
  stripLabels: [
    { label: "STRATEGY", iconKey: "compass" },
    { label: "FINANCE", iconKey: "trending" },
    { label: "TECHNOLOGY", iconKey: "cpu" },
    { label: "ANALYTICS", iconKey: "barChart" },
    { label: "PRODUCT", iconKey: "layers" },
    { label: "CREATIVE", iconKey: "film" },
    { label: "SYSTEMS", iconKey: "search" },
  ] satisfies CapabilityItem[],
};
