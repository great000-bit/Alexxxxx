export type PublicationCategory =
  | "Peer-Reviewed Journal Article"
  | "Conference Paper"
  | "Technical Report"
  | "White Paper";

export type Publication = {
  title: string;
  category: PublicationCategory;
  year: number | null;
  venue: string;
  isPlaceholder: boolean;
};

// NOTE: No final publication list was provided yet. isPlaceholder marks entries whose
// bibliographic details (journal/conference/venue) are still to be confirmed — this flag
// is used internally only (e.g. to decide what copy to show) and is never rendered as
// visible text. Replace these entries with Alexander's real publication list when ready.
export const publications: Publication[] = [
  {
    title: "PhD Thesis: Blue Hydrogen and the UK Net Zero Transition",
    category: "Technical Report",
    year: null,
    venue: "Robert Gordon University",
    isPlaceholder: true,
  },
  {
    title: "Peer-reviewed journal article on blue hydrogen value chains",
    category: "Peer-Reviewed Journal Article",
    year: null,
    venue: "",
    isPlaceholder: true,
  },
  {
    title: "Conference paper on hydrogen policy pathways",
    category: "Conference Paper",
    year: null,
    venue: "",
    isPlaceholder: true,
  },
  {
    title: "Technical report on industrial decarbonisation",
    category: "Technical Report",
    year: null,
    venue: "",
    isPlaceholder: true,
  },
];

export const researchFocusAreas = [
  "Blue hydrogen",
  "UK net-zero transition",
  "Life cycle assessment",
  "Hydrogen value chains",
  "Energy policy",
  "Industrial decarbonisation",
  "Renewable fuels",
  "Sustainability assessment",
] as const;

// Replace these placeholder entries with Alexander's real publication list (peer-reviewed
// articles, conference papers, technical reports, white papers) once provided. Set
// isPlaceholder: false on real entries once genuine data is in place.
