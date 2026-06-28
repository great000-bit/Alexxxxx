export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  isPlaceholder: boolean;
};

// NOTE: These are the article ideas listed in the PRD, not published articles. Marked as
// placeholders so the Insights page can launch with a populated, credible-looking
// structure while being clear that the articles themselves don't exist yet.
export const blogPosts: BlogPost[] = [
  {
    slug: "is-blue-hydrogen-necessary-for-net-zero",
    title: "Is Blue Hydrogen Necessary for Net Zero?",
    category: "Hydrogen",
    excerpt:
      "Examining the role blue hydrogen could realistically play in the net-zero transition, and the conditions under which that role is credible.",
    readingTime: "6 min read",
    isPlaceholder: true,
  },
  {
    slug: "future-of-hydrogen-in-the-uk",
    title: "The Future of Hydrogen in the UK",
    category: "Hydrogen",
    excerpt:
      "A look at where UK hydrogen policy and infrastructure are heading, and what that means for industry and investment.",
    readingTime: "7 min read",
    isPlaceholder: true,
  },
  {
    slug: "industrial-decarbonisation-pathways",
    title: "Industrial Decarbonisation Pathways",
    category: "Industrial Decarbonisation",
    excerpt:
      "Comparing the technical and strategic pathways available to hard-to-abate industrial sectors.",
    readingTime: "8 min read",
    isPlaceholder: true,
  },
  {
    slug: "carbon-management-hard-to-abate-industries",
    title: "Carbon Management in Hard-to-Abate Industries",
    category: "Carbon Management",
    excerpt:
      "What effective carbon management looks like in sectors where decarbonisation options remain limited.",
    readingTime: "6 min read",
    isPlaceholder: true,
  },
  {
    slug: "energy-security-and-sustainability",
    title: "Energy Security and Sustainability",
    category: "Energy Policy",
    excerpt:
      "How energy security considerations intersect with, and sometimes complicate, sustainability ambitions.",
    readingTime: "5 min read",
    isPlaceholder: true,
  },
];

export const blogCategories = [
  "Hydrogen",
  "Net Zero",
  "Industrial Decarbonisation",
  "Energy Policy",
  "Life Cycle Assessment",
  "Sustainability Reporting",
  "Carbon Management",
  "Community Impact",
] as const;

// TODO: replace placeholder excerpts with real article content once Alexander has written
// and approved the pieces. Set isPlaceholder: false once a post is genuinely published.
