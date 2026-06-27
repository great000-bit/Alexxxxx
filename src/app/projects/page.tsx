"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectCategories } from "@/content/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <section className="bg-navy-950/80 -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold text-emerald-400 mb-3">Projects</p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Research, analysis, and technical projects
          </h1>
          <p className="text-lg text-grey-200 leading-relaxed">
            Real examples of research, analysis, and technical thinking across hydrogen, sustainability, and
            industrial decarbonisation.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-sm p-8 sm:p-10">
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by category">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              aria-pressed={activeCategory === "All"}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                activeCategory === "All"
                  ? "bg-navy-950 text-white border-navy-950"
                  : "bg-white text-grey-600 border-grey-200 hover:border-navy-950"
              }`}
            >
              All
            </button>
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-navy-950 text-white border-navy-950"
                    : "bg-white text-grey-600 border-grey-200 hover:border-navy-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-grey-600">No projects match this filter yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
