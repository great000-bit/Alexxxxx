import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  /** Larger, more prominent treatment for a single "hero" project card in a grid. */
  featured?: boolean;
}) {
  return (
    <div
      className={`group flex flex-col rounded-2xl transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 ${
        featured ? "p-8 sm:p-10" : "p-6"
      }`}
      style={{
        backgroundColor: "rgba(7,18,32,0.58)",
        backdropFilter: "blur(20px)",
        border: featured ? "1px solid rgba(90,200,167,0.3)" : "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
      }}
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {project.category.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#cbd5e1" }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3
        className={`font-[family-name:var(--font-heading)] font-semibold mb-2 ${featured ? "text-2xl" : "text-base"}`}
        style={{ color: "#f8fafc" }}
      >
        {project.title}
      </h3>
      <p
        className={`leading-relaxed mb-4 flex-1 ${featured ? "text-base" : "text-sm"}`}
        style={{ color: "#94a3b8" }}
      >
        {project.summary}
      </p>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium"
        style={{ color: "#5ac8a7" }}
      >
        View Project
        <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
