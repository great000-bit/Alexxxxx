import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import GlassCard from "@/components/GlassCard";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumb from "@/components/Breadcrumb";
import { projects } from "@/content/projects";
import { expertiseAreas } from "@/content/expertise";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Alexander Oburoh`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const relatedExpertise = expertiseAreas.filter((e) => e.relatedProjectSlugs.includes(project.slug));

  return (
    <>
      <section className="bg-black -mt-24 pt-40 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#5ac8a7" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#f8fafc" }}
          >
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            {project.summary}
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="space-y-10 p-8 sm:p-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#5ac8a7" }}>
                Overview
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#5ac8a7" }}>
                Problem / Context
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                {project.problem}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#5ac8a7" }}>
                Approach / Methodology
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                {project.approach}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#5ac8a7" }}>
                Key Insights
              </h2>
              <ul className="space-y-2">
                {project.insights.map((insight) => (
                  <li key={insight} className="text-base leading-relaxed flex items-start gap-3" style={{ color: "#cbd5e1" }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#5ac8a7" }} />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#5ac8a7" }}>
                Skills & Methods Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#cbd5e1" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {relatedExpertise.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: "#5ac8a7" }}>
                  Related Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {relatedExpertise.map((e) => (
                    <Link
                      key={e.slug}
                      href={`/expertise#${e.slug}`}
                      className="text-sm px-3 py-1.5 rounded-full transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#cbd5e1" }}
                    >
                      {e.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "#5ac8a7" }}
            >
              Discuss a project like this
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <CTASection heading="Interested in research collaboration or a similar project?" />
    </>
  );
}
