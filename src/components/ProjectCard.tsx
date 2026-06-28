import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import GlassCard from "./GlassCard";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  /** Larger, more prominent treatment for a single "hero" project card in a grid. */
  featured?: boolean;
}) {
  return (
    <GlassCard
      as={Link}
      href={`/projects/${project.slug}`}
      className={`flex flex-col block ${featured ? "p-8 sm:p-10" : "p-6"}`}
      style={featured ? { border: "1px solid rgba(90,200,167,0.3)" } : { border: "1px solid rgba(255,255,255,0.12)" }}
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
        className={`leading-relaxed mb-5 flex-1 ${featured ? "text-base" : "text-sm"}`}
        style={{ color: "#94a3b8" }}
      >
        {project.summary}
      </p>

      {/* Pill + rotating circular icon CTA shape, adapted from the reference site's
          project card pattern (studied from its source — the live site itself is
          blocked by this sandbox's network allowlist). Presentational only: the whole
          card is already the clickable <Link>, so this isn't a nested link. */}
      <span className="inline-flex items-stretch w-fit">
        <span
          className="inline-flex items-center text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-l-full"
          style={{ backgroundColor: "#ffffff", color: "#071a2d" }}
        >
          View Project
        </span>
        <span
          className="inline-flex items-center justify-center w-9 aspect-square rounded-full -ml-px transition-transform duration-300 group-hover:rotate-45"
          style={{ backgroundColor: "#5ac8a7", color: "#071a2d" }}
        >
          <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
        </span>
      </span>
    </GlassCard>
  );
}
