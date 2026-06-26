import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Hydrogen, Sustainability & Industrial Decarbonisation",
  description:
    "Research and technical projects by Alexander Oburoh across hydrogen, life cycle assessment, net zero, and industrial decarbonisation.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
