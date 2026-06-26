import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-lg border border-grey-200 bg-white p-6">
      <div className="flex flex-wrap gap-2 mb-3">
        {project.category.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-grey text-navy-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-base font-semibold text-navy-950 mb-2">{project.title}</h3>
      <p className="text-sm text-grey-600 leading-relaxed mb-4 flex-1">{project.summary}</p>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-500"
      >
        View Project
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </div>
  );
}
