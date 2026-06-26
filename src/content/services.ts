export type Service = {
  slug: string;
  title: string;
  forWho: string;
  canSupport: string[];
  deliverables: string[];
  relatedExpertiseSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "sustainability-consulting",
    title: "Sustainability Consulting",
    forWho:
      "Organisations seeking to understand their sustainability position and define a practical way forward.",
    canSupport: [
      "Sustainability strategy development",
      "Materiality and impact assessment",
      "Sustainability research and benchmarking",
    ],
    deliverables: ["Strategy brief", "Research report", "Presentation deck"],
    relatedExpertiseSlugs: ["sustainability-carbon-management"],
  },
  {
    slug: "carbon-net-zero-strategy",
    title: "Carbon & Net Zero Strategy",
    forWho:
      "Organisations seeking to understand emissions, define sustainability priorities, and develop practical net-zero pathways.",
    canSupport: [
      "Carbon management research",
      "Net-zero planning",
      "Sustainability strategy",
      "Reporting support",
      "Industrial decarbonisation analysis",
    ],
    deliverables: [
      "Strategy brief",
      "Research report",
      "Carbon management recommendations",
      "Policy or technical memo",
      "Presentation deck",
    ],
    relatedExpertiseSlugs: ["net-zero-planning", "industrial-decarbonisation"],
  },
  {
    slug: "life-cycle-assessment",
    title: "Life Cycle Assessment",
    forWho:
      "Organisations needing a rigorous understanding of environmental impact across a product, process, or value chain.",
    canSupport: [
      "LCA methodology and execution",
      "Environmental impact evaluation",
      "Sensitivity and trade-off analysis",
    ],
    deliverables: ["LCA report", "Technical memo", "Data and methodology documentation"],
    relatedExpertiseSlugs: ["life-cycle-assessment"],
  },
  {
    slug: "hydrogen-advisory",
    title: "Hydrogen Advisory",
    forWho:
      "Organisations and teams navigating hydrogen strategy, production pathways, or market positioning.",
    canSupport: [
      "Hydrogen pathway research",
      "Blue hydrogen analysis",
      "Industrial hydrogen use cases",
      "Market and policy context",
    ],
    deliverables: ["Strategy brief", "Technical report", "Stakeholder briefing"],
    relatedExpertiseSlugs: ["hydrogen-strategy"],
  },
  {
    slug: "policy-analysis",
    title: "Policy Analysis",
    forWho:
      "Organisations and stakeholders needing to understand policy pathways and implementation implications.",
    canSupport: [
      "Policy pathway evaluation",
      "Implementation strategy analysis",
      "Regulatory context research",
    ],
    deliverables: ["Policy brief", "Technical report", "Briefing deck"],
    relatedExpertiseSlugs: ["energy-policy"],
  },
  {
    slug: "research-collaboration",
    title: "Research Collaboration",
    forWho: "Academic and technical partners working on hydrogen, sustainability, or energy systems research.",
    canSupport: [
      "Collaborative research design",
      "Co-authored research outputs",
      "Cross-institutional projects",
    ],
    deliverables: ["Joint research output", "Conference paper", "Technical report"],
    relatedExpertiseSlugs: ["research-collaboration", "research-project-management"],
  },
  {
    slug: "technical-report-writing",
    title: "Technical Report Writing",
    forWho: "Organisations needing clear, evidence-based technical reporting for internal or external use.",
    canSupport: [
      "Technical report drafting",
      "Evidence synthesis",
      "Stakeholder-facing communication",
    ],
    deliverables: ["Technical report", "Executive summary", "Presentation deck"],
    relatedExpertiseSlugs: ["technical-advisory"],
  },
  {
    slug: "sustainability-reporting",
    title: "Sustainability Reporting",
    forWho: "Organisations needing to communicate their sustainability position clearly and credibly.",
    canSupport: [
      "Sustainability disclosure",
      "Reporting framework alignment",
      "Data and narrative structuring",
    ],
    deliverables: ["Sustainability report draft", "Disclosure mapping", "Reporting recommendations"],
    relatedExpertiseSlugs: ["sustainability-reporting"],
  },
  {
    slug: "industrial-decarbonisation-advisory",
    title: "Industrial Decarbonisation Advisory",
    forWho: "Hard-to-abate industrial sectors evaluating decarbonisation pathways.",
    canSupport: [
      "Decarbonisation pathway analysis",
      "Technology and feasibility assessment",
      "Strategic advisory",
    ],
    deliverables: ["Pathway analysis report", "Feasibility memo", "Strategic recommendations"],
    relatedExpertiseSlugs: ["industrial-decarbonisation"],
  },
  {
    slug: "stakeholder-value-chain-mapping",
    title: "Stakeholder and Value Chain Mapping",
    forWho: "Organisations needing clarity on dependencies, risk, and opportunity across a value chain.",
    canSupport: [
      "Stakeholder mapping",
      "Dependency and risk analysis",
      "Value chain optimisation",
    ],
    deliverables: ["Value chain map", "Risk and dependency report", "Recommendations memo"],
    relatedExpertiseSlugs: ["value-chain-analysis", "stakeholder-engagement"],
  },
];
