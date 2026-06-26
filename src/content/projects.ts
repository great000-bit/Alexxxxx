export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string[];
  skills: string[];
  overview: string;
  problem: string;
  approach: string;
  insights: string[];
};

export const projectCategories = [
  "Hydrogen",
  "LCA",
  "Net Zero",
  "Energy Policy",
  "Industrial Decarbonisation",
  "Sustainability",
  "Value Chain Analysis",
  "Renewable Fuels",
] as const;

export const projects: Project[] = [
  {
    slug: "blue-hydrogen-production-uk",
    title: "Blue Hydrogen Production in the UK",
    summary: "Environmental assessment of UK blue hydrogen pathways.",
    category: ["Hydrogen", "LCA", "Net Zero"],
    skills: ["Life Cycle Assessment", "Hydrogen Strategy", "Research Collaboration"],
    overview:
      "An environmental assessment of UK blue hydrogen production pathways, examining the conditions under which blue hydrogen can credibly contribute to the UK's net-zero transition.",
    problem:
      "Blue hydrogen's role in the net-zero transition is contested, and pathway-level environmental performance varies significantly depending on production method, carbon capture rate, and upstream methane leakage.",
    approach:
      "Life cycle assessment methodology applied across UK-relevant blue hydrogen production pathways, with sensitivity analysis on key variables affecting environmental performance.",
    insights: [
      "Environmental performance is highly sensitive to carbon capture rate and upstream methane leakage assumptions.",
      "Pathway-level analysis is necessary — treating blue hydrogen as a single category obscures meaningful performance differences.",
    ],
  },
  {
    slug: "hydrogen-in-refineries",
    title: "Hydrogen Use in Refineries",
    summary: "Comparative assessment of hydrogen and natural gas use.",
    category: ["Hydrogen", "Industrial Decarbonisation"],
    skills: ["Life Cycle Assessment", "Industrial Decarbonisation", "Technical Advisory"],
    overview:
      "A comparative assessment of hydrogen and natural gas use within refinery operations, evaluating decarbonisation potential and the practical constraints of switching feedstocks.",
    problem:
      "Refineries are a hard-to-abate sector with established natural gas infrastructure; understanding the realistic decarbonisation potential of hydrogen substitution required a grounded technical comparison.",
    approach:
      "Comparative technical and environmental assessment of hydrogen versus natural gas use cases within refinery processes.",
    insights: [
      "Hydrogen substitution offers meaningful decarbonisation potential in specific refinery processes, but infrastructure and supply constraints remain significant.",
    ],
  },
  {
    slug: "blue-hydrogen-value-chain",
    title: "Blue Hydrogen Value Chain Analysis",
    summary: "Mapping stakeholders, dependencies, risks, and optimisation opportunities.",
    category: ["Hydrogen", "Value Chain Analysis"],
    skills: ["Value Chain Analysis", "Stakeholder Engagement", "Technical Advisory"],
    overview:
      "A value chain analysis of blue hydrogen, mapping the stakeholders, dependencies, and risks across the production-to-end-use chain.",
    problem:
      "Blue hydrogen value chains involve multiple interdependent stakeholders and infrastructure decisions; understanding where risk and opportunity concentrate required structured value chain mapping.",
    approach:
      "Stakeholder and dependency mapping across the blue hydrogen value chain, identifying risk concentration points and optimisation opportunities.",
    insights: [
      "Risk and dependency are concentrated at specific infrastructure chokepoints rather than distributed evenly across the chain.",
    ],
  },
  {
    slug: "uk-hydrogen-policy",
    title: "UK Hydrogen Policy Analysis",
    summary: "Evaluation of policy pathways and implementation strategies.",
    category: ["Hydrogen", "Energy Policy", "Net Zero"],
    skills: ["Energy Policy", "Net Zero Planning", "Technical Advisory"],
    overview:
      "An evaluation of UK hydrogen policy pathways, assessing implementation strategy and the alignment between policy ambition and delivery mechanisms.",
    problem:
      "UK hydrogen policy has set ambitious targets, but implementation pathways and delivery mechanisms required structured evaluation against realistic deployment timelines.",
    approach:
      "Policy pathway analysis connecting stated targets to implementation mechanisms, identifying alignment gaps and delivery risk.",
    insights: [
      "Policy ambition and delivery mechanism maturity are not always aligned, creating implementation risk for stated targets.",
    ],
  },
  {
    slug: "renewable-diesel-sustainability",
    title: "Renewable Diesel Sustainability Assessment",
    summary: "Assessment of renewable diesel deployment and sustainability implications.",
    category: ["Sustainability", "Renewable Fuels", "LCA"],
    skills: ["Life Cycle Assessment", "Sustainability Reporting"],
    overview:
      "A sustainability assessment of renewable diesel deployment, examining feedstock implications and broader sustainability trade-offs.",
    problem:
      "Renewable diesel deployment raises feedstock and land-use sustainability questions that are not always visible in headline emissions figures.",
    approach:
      "Life cycle and sustainability assessment of renewable diesel pathways, with attention to feedstock sourcing and broader sustainability implications.",
    insights: [
      "Feedstock sourcing materially affects the sustainability case for renewable diesel — headline emissions figures alone are an incomplete picture.",
    ],
  },
  {
    slug: "hydrogen-mobility",
    title: "Hydrogen Mobility Research",
    summary: "Research into stakeholder perceptions and adoption.",
    category: ["Hydrogen", "Sustainability"],
    skills: ["Stakeholder Engagement", "Research Project Management"],
    overview:
      "Research into stakeholder perceptions of hydrogen mobility and the factors influencing adoption.",
    problem:
      "Hydrogen mobility adoption depends on more than technical feasibility — stakeholder perception and trust play a significant, under-examined role.",
    approach:
      "Stakeholder perception research examining the factors that influence trust in and adoption of hydrogen mobility solutions.",
    insights: [
      "Stakeholder trust and perception are significant, often underestimated factors in hydrogen mobility adoption.",
    ],
  },
  {
    slug: "offshore-wind-environmental-assessment",
    title: "Offshore Wind & Environmental Assessment",
    summary: "Energy and environmental assessment connected to offshore wind.",
    category: ["Sustainability", "Net Zero"],
    skills: ["Life Cycle Assessment", "Sustainability Reporting"],
    overview:
      "An energy and environmental assessment connected to offshore wind deployment, examining sustainability implications within the broader energy system.",
    problem:
      "Offshore wind deployment has system-level environmental implications that extend beyond the immediate generation asset.",
    approach:
      "Energy and environmental assessment examining offshore wind within its broader system context.",
    insights: [
      "System-level assessment surfaces environmental considerations that asset-level analysis alone would miss.",
    ],
  },
];
