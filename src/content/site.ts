export const site = {
  name: "Alexander Oburoh",
  title: "Dr. Alexander Oburoh | Hydrogen & Net Zero Consultant",
  shortTitle: "Alexander Oburoh",
  ogSiteName: "Dr. Alexander Oburoh",
  professionalTitle:
    "Sustainability & Energy Systems Analyst | Hydrogen & Net Zero Consultant",
  tagline: "Researcher. Consultant. Community Builder.",
  positioningStatement:
    "Driving Sustainable Energy Transitions Through Research, Policy and Innovation.",
  supportingCopy:
    "Helping organisations navigate hydrogen, sustainability and net-zero challenges through evidence-based analysis, research and strategic insight.",
  description:
    "Dr. Alexander Oburoh is a Sustainability and Energy Systems Analyst focused on hydrogen, net-zero transition, life cycle assessment, carbon management, energy policy, and industrial decarbonisation.",
  ogDescription:
    "Research, policy analysis, and strategic advisory across hydrogen, carbon management, life cycle assessment, and net-zero transition.",
  twitterDescription:
    "Sustainability and energy systems expertise across hydrogen, carbon management, life cycle assessment, policy, and industrial decarbonisation.",
  // NOTE: alexanderoburoh.com is the intended production domain per the SEO brief, used
  // here for metadataBase/canonical/OG/sitemap/schema. As of this change it is not yet
  // the live deployed domain — see project notes. Once the real domain is purchased and
  // connected, this continues to be correct with no further changes needed; until then,
  // canonical/OG URLs and the sitemap will reference a domain that isn't live yet.
  url: "https://alexanderoburoh.com",
  email: "ao@alexanderoburoh.com",
  locale: "en_GB",
  footerStatement:
    "Driving sustainable energy transitions through research, policy and innovation.",
} as const;

export const bio = {
  short:
    "Alexander Oburoh is a Sustainability and Energy Systems Analyst specialising in hydrogen, net-zero strategy, life cycle assessment, value chain analysis, and energy policy. He recently completed a PhD at Robert Gordon University focused on the role of blue hydrogen in enabling the UK's net-zero transition.",
  full: [
    "Alexander Oburoh is a Sustainability and Energy Systems Analyst specialising in hydrogen, net-zero strategy, life cycle assessment, value chain analysis, and energy policy. He recently completed a PhD at Robert Gordon University focused on the role of blue hydrogen in enabling the UK's net-zero transition.",
    "His work spans research, consulting, stakeholder engagement, sustainability strategy, and industrial decarbonisation, translating technical analysis into evidence-based insight for organisations navigating the energy transition.",
    "Alongside his technical expertise, Alexander serves as a Trustee and Operations Leader within VolunteerNG, supporting education and community development initiatives through diaspora engagement and sustainable social impact.",
  ],
  beyondResearch:
    "Beyond his technical work, Alexander is passionate about education, mentorship, entrepreneurship, and community development, empowering people alongside technology and policy.",
} as const;

export const credentials = [
  {
    title: "PhD",
    detail: "Robert Gordon University",
  },
  {
    title: "Hydrogen & Net Zero Research",
    detail: "Blue hydrogen and the UK net-zero transition",
  },
  {
    title: "Life Cycle Assessment",
    detail: "Environmental and systems-level analysis",
  },
  {
    title: "Value Chain Analysis",
    detail: "Stakeholder and dependency mapping",
  },
  {
    title: "PRINCE2 Certified",
    detail: "Project management",
  },
  {
    title: "Certified Sustainability Reporting Manager",
    detail: "Sustainability disclosure and reporting",
  },
  {
    title: "Trustee & Operations Leader",
    detail: "VolunteerNG",
  },
] as const;

export const credentialMarqueeItems = [
  "PhD · Robert Gordon University",
  "Hydrogen & Net Zero Research",
  "Life Cycle Assessment",
  "Value Chain Analysis",
  "Energy Policy",
  "PRINCE2 Certified",
  "Certified Sustainability Reporting Manager",
  "Trustee & Operations Leader · VolunteerNG",
  "Industrial Decarbonisation",
  "Carbon Management",
] as const;

export const socials = {
  linkedin: "https://www.linkedin.com/in/alexanderoburoh/",
  googleScholar: "https://scholar.google.com/citations?user=PBVsANgAAAAJ&hl=en",
  medium: "https://medium.com/@alexander-oburoh",
} as const;
