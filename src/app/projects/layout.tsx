import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Projects | Hydrogen, Sustainability & Energy Systems Research" },
  description:
    "Selected projects and research by Dr. Alexander Oburoh across blue hydrogen, refinery hydrogen use, value chain analysis, renewable diesel, and hydrogen mobility.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
