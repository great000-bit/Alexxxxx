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

// NOTE: No final publication list was provided. These are clearly-marked placeholder
// entries (isPlaceholder: true) so the section has a real, populated feel rather than an
// empty state, while making it unambiguous that this is not real bibliographic data.
// Replace with the real publication list — see TODO at the bottom of this file.
export const publications: Publication[] = [
  {
    title: "PhD Thesis: Blue Hydrogen and the UK Net Zero Transition",
    category: "Technical Report",
    year: null,
    venue: "Robert Gordon University",
    isPlaceholder: true,
  },
  {
    title: "Placeholder: peer-reviewed journal article on blue hydrogen value chains",
    category: "Peer-Reviewed Journal Article",
    year: null,
    venue: "TODO: add journal name",
    isPlaceholder: true,
  },
  {
    title: "Placeholder: conference paper on hydrogen policy pathways",
    category: "Conference Paper",
    year: null,
    venue: "TODO: add conference name",
    isPlaceholder: true,
  },
  {
    title: "Placeholder: technical report on industrial decarbonisation",
    category: "Technical Report",
    year: null,
    venue: "TODO: add commissioning body, if applicable",
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

// TODO: replace this entire file's placeholder entries with Alexander's real publication
// list (peer-reviewed articles, conference papers, technical reports, white papers) once
// provided. Keep isPlaceholder: false on real entries so the UI can stop showing the
// "placeholder" indicator once genuine data is in place.
