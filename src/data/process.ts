export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_DATA = {
  heading: "MY CREATIVE &\nANALYTICAL PROCESS",
  subtitle:
    "Every inquiry moves through a disciplined loop—from grounding in context and breaking down underlying mechanisms to building tangible artefacts and refining through feedback.",
  steps: [
    {
      number: "01",
      title: "OBSERVE",
      description:
        "Understand the problem, identify structural patterns, gather quantitative and qualitative context, and question surface assumptions.",
    },
    {
      number: "02",
      title: "ANALYSE",
      description:
        "Decompose the system into clear components, evaluate constraints, test competing hypotheses and formulate a deliberate approach.",
    },
    {
      number: "03",
      title: "BUILD",
      description:
        "Translate abstract concepts into working implementations—financial models, software architectures, products or visual outputs.",
    },
    {
      number: "04",
      title: "REFINE",
      description:
        "Test against reality, critique hierarchy and edge cases, evaluate behaviour under edge conditions and iterate cleanly.",
    },
  ] satisfies ProcessStep[],
};
