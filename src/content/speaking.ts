export const speakingTopics = [
  "Blue hydrogen and the net-zero transition",
  "Hydrogen value chains",
  "UK hydrogen policy",
  "Industrial decarbonisation",
  "Life cycle assessment",
  "Carbon management",
  "Energy systems and sustainability",
  "Community-led sustainable development",
  "Sustainability education and mentorship",
] as const;

export type SpeakingEngagement = {
  title: string;
  type: "Conference" | "Invited Talk" | "Workshop" | "Panel";
  isPlaceholder: boolean;
};

// NOTE: No confirmed speaking engagements were provided. Placeholder structure only, so
// the page can launch future-ready per the PRD's explicit instruction, without implying
// engagements that haven't happened.
export const speakingEngagements: SpeakingEngagement[] = [
  {
    title: "Speaking engagements will be listed here as they are confirmed.",
    type: "Conference",
    isPlaceholder: true,
  },
];

// TODO: replace with real speaking engagements, talks, workshops, and panels as they're
// confirmed. Remove the placeholder entry once real ones exist.
