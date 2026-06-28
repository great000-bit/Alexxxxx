"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import Breadcrumb from "@/components/Breadcrumb";
import { projects, projectCategories } from "@/content/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      <section className="bg-black -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
          <p className="text-sm font-semibold mb-3" style={{ color: "#5ac8a7" }}>
            Projects
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            Research, analysis, and technical projects
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            Real examples of research, analysis, and technical thinking across hydrogen, sustainability, and
            industrial decarbonisation.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by category">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              aria-pressed={activeCategory === "All"}
              className="text-sm font-medium px-4 py-2 rounded-full transition-colors"
              style={
                activeCategory === "All"
                  ? { backgroundColor: "#ffffff", color: "#071a2d", border: "1px solid #ffffff" }
                  : {
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "#cbd5e1",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }
              }
            >
              All
            </button>
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className="text-sm font-medium px-4 py-2 rounded-full transition-colors"
                style={
                  activeCategory === cat
                    ? { backgroundColor: "#ffffff", color: "#071a2d", border: "1px solid #ffffff" }
                    : {
                        backgroundColor: "rgba(255,255,255,0.06)",
                        color: "#cbd5e1",
                        border: "1px solid rgba(255,255,255,0.14)",
                      }
                }
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
            <p style={{ color: "#94a3b8" }}>No projects match this filter yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
