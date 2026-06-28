export type ExpertiseArea = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  canHelpWith: string[];
  relatedProjectSlugs: string[];
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "sustainability-carbon-management",
    title: "Sustainability & Carbon Management",
    shortDescription:
      "Carbon management research and sustainability strategy for organisations navigating the energy transition.",
    description:
      "Alexander supports organisations in understanding their carbon position and translating that understanding into a practical sustainability strategy, grounded in evidence rather than generic frameworks.",
    canHelpWith: [
      "Carbon management research",
      "Sustainability strategy development",
      "Emissions and impact assessment",
      "Decarbonisation roadmapping",
    ],
    relatedProjectSlugs: ["renewable-diesel-sustainability", "offshore-wind-environmental-assessment"],
  },
  {
    slug: "life-cycle-assessment",
    title: "Life Cycle Assessment",
    shortDescription:
      "Evaluating environmental impact, system dependencies, and sustainability trade-offs across a product or process lifecycle.",
    description:
      "Life cycle assessment work spans environmental impact evaluation, system boundary definition, and the trade-off analysis that informs sound sustainability decisions.",
    canHelpWith: [
      "LCA methodology and execution",
      "Environmental impact evaluation",
      "System dependency mapping",
      "Trade-off and sensitivity analysis",
    ],
    relatedProjectSlugs: ["blue-hydrogen-production-uk", "renewable-diesel-sustainability"],
  },
  {
    slug: "value-chain-analysis",
    title: "Value Chain Analysis",
    shortDescription:
      "Mapping stakeholders, dependencies, risks, and optimisation opportunities across complex value chains.",
    description:
      "Value chain analysis identifies where risk, dependency, and opportunity sit across a system. This work underpins sound strategy for hydrogen, industrial, and energy value chains.",
    canHelpWith: [
      "Stakeholder mapping",
      "Dependency and risk analysis",
      "Value chain optimisation",
      "Cross-sector system mapping",
    ],
    relatedProjectSlugs: ["blue-hydrogen-value-chain"],
  },
  {
    slug: "hydrogen-strategy",
    title: "Hydrogen Strategy",
    shortDescription:
      "Hydrogen-related research, strategy, and policy understanding across production pathways and industrial use cases.",
    description:
      "Alexander supports hydrogen-related research, strategy, and policy understanding, with a focus on production pathways, value-chain analysis, industrial use cases, and net-zero transition.",
    canHelpWith: [
      "Hydrogen pathway research",
      "Blue hydrogen analysis",
      "Industrial hydrogen use cases",
      "Policy and market analysis",
      "Stakeholder mapping",
      "Technical reporting",
    ],
    relatedProjectSlugs: [
      "blue-hydrogen-production-uk",
      "hydrogen-in-refineries",
      "blue-hydrogen-value-chain",
      "uk-hydrogen-policy",
    ],
  },
  {
    slug: "net-zero-planning",
    title: "Net Zero Planning",
    shortDescription:
      "Carbon management, net-zero planning, sustainability reporting, and decarbonisation thinking for organisations.",
    description:
      "Net-zero planning translates ambition into a credible pathway, combining carbon management, sustainability reporting, and decarbonisation strategy specific to an organisation's context.",
    canHelpWith: [
      "Net-zero pathway development",
      "Carbon management planning",
      "Sustainability reporting support",
      "Decarbonisation strategy",
    ],
    relatedProjectSlugs: ["uk-hydrogen-policy", "offshore-wind-environmental-assessment"],
  },
  {
    slug: "industrial-decarbonisation",
    title: "Industrial Decarbonisation",
    shortDescription:
      "Technical and strategic support for hard-to-abate industrial sectors navigating decarbonisation pathways.",
    description:
      "Industrial decarbonisation work focuses on the technical and strategic questions facing hard-to-abate sectors: which pathways are viable, what they cost, and what they require.",
    canHelpWith: [
      "Industrial decarbonisation pathway analysis",
      "Hard-to-abate sector research",
      "Technology and feasibility assessment",
      "Strategic advisory",
    ],
    relatedProjectSlugs: ["hydrogen-in-refineries", "blue-hydrogen-production-uk"],
  },
  {
    slug: "energy-policy",
    title: "Energy Policy",
    shortDescription:
      "Policy pathway evaluation and implementation strategy for hydrogen and the wider energy transition.",
    description:
      "Energy policy work involves evaluating policy pathways and implementation strategy, connecting technical realities with the policy environment they operate within.",
    canHelpWith: [
      "Policy pathway evaluation",
      "Implementation strategy analysis",
      "Regulatory and market context research",
      "Policy briefing and reporting",
    ],
    relatedProjectSlugs: ["uk-hydrogen-policy"],
  },
  {
    slug: "research-project-management",
    title: "Research Project Management",
    shortDescription:
      "Structured, well-managed research delivery from question definition through to reporting.",
    description:
      "Research project management ensures research delivery is structured and well-governed, from defining the research question through to final reporting.",
    canHelpWith: [
      "Research scoping and planning",
      "Project governance",
      "Stakeholder coordination",
      "Reporting and dissemination",
    ],
    relatedProjectSlugs: ["hydrogen-mobility"],
  },
  {
    slug: "sustainability-reporting",
    title: "Sustainability Reporting",
    shortDescription:
      "Sustainability disclosure and reporting support grounded in recognised frameworks and standards.",
    description:
      "Sustainability reporting support helps organisations communicate their sustainability position clearly and credibly, grounded in recognised frameworks.",
    canHelpWith: [
      "Sustainability disclosure",
      "Reporting framework alignment",
      "Data and narrative structuring",
      "Stakeholder-facing reporting",
    ],
    relatedProjectSlugs: ["renewable-diesel-sustainability"],
  },
  {
    slug: "stakeholder-engagement",
    title: "Stakeholder Engagement",
    shortDescription:
      "Engaging stakeholders across research, policy, industry, and community contexts.",
    description:
      "Stakeholder engagement work draws on experience across research, policy, industrial, and community contexts, building consensus and aligning perspectives around complex topics.",
    canHelpWith: [
      "Stakeholder mapping and analysis",
      "Engagement strategy",
      "Perception and adoption research",
      "Community and partner liaison",
    ],
    relatedProjectSlugs: ["hydrogen-mobility", "blue-hydrogen-value-chain"],
  },
  {
    slug: "technical-advisory",
    title: "Technical Advisory",
    shortDescription:
      "Evidence-based technical insight and reporting to support organisational decision-making.",
    description:
      "Technical advisory work produces evidence-based insights, technical reports, and policy analysis to support decision-making across the energy transition.",
    canHelpWith: [
      "Technical report writing",
      "Evidence-based advisory",
      "Decision-support analysis",
      "Briefing and presentation materials",
    ],
    relatedProjectSlugs: ["uk-hydrogen-policy", "blue-hydrogen-value-chain"],
  },
  {
    slug: "research-collaboration",
    title: "Research Collaboration",
    shortDescription:
      "Collaborative research partnership across hydrogen, sustainability, and energy systems topics.",
    description:
      "Alexander welcomes research collaboration with academic and technical partners working on hydrogen, sustainability, and energy systems topics.",
    canHelpWith: [
      "Collaborative research design",
      "Co-authored publications",
      "Cross-institutional research projects",
      "Technical peer review",
    ],
    relatedProjectSlugs: ["blue-hydrogen-production-uk"],
  },
];
