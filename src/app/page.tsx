import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import ExpertiseCard from "@/components/ExpertiseCard";
import ProjectCard from "@/components/ProjectCard";
import PublicationCard from "@/components/PublicationCard";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import { bio } from "@/content/site";
import { expertiseAreas } from "@/content/expertise";
import { projects } from "@/content/projects";
import { publications } from "@/content/publications";
import { blogPosts } from "@/content/blog";
import { volunteerNG } from "@/content/impact";

const helpsWith = [
  {
    title: "Hydrogen & Energy Transition Strategy",
    description:
      "Helping stakeholders understand hydrogen pathways, policy direction, adoption barriers, and value-chain opportunities.",
  },
  {
    title: "Net-Zero & Carbon Strategy",
    description:
      "Supporting organisations with carbon management, net-zero planning, sustainability reporting, and decarbonisation thinking.",
  },
  {
    title: "Life Cycle & Value Chain Analysis",
    description:
      "Evaluating environmental impact, system dependencies, stakeholder relationships, and sustainability trade-offs.",
  },
  {
    title: "Research, Policy & Technical Advisory",
    description:
      "Producing evidence-based insights, technical reports, policy analysis, and research outputs for decision-making.",
  },
];

export default function Home() {
  const featuredProject = projects[0];
  const supportingProjects = projects.slice(1, 5);
  const featuredExpertise = expertiseAreas.slice(0, 8);

  return (
    <>
      <Hero />
      <CredibilityBar />

      {/* About / Positioning — editorial split: heading + intro on the left, a glass
          quote-style card with the core positioning statement on the right. */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="About"
                title="A research-backed perspective on the energy transition"
              />
              <p className="mt-5 text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                {bio.short}
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#5ac8a7" }}
              >
                Learn More About Alexander
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delayMs={120}>
              <GlassCard className="p-8">
                <p
                  className="font-[family-name:var(--font-heading)] text-xl leading-snug"
                  style={{ color: "#f8fafc" }}
                >
                  &ldquo;Sustainable energy transition depends on evidence, not assumption &mdash;
                  research and policy analysis that organisations can actually act on.&rdquo;
                </p>
                <div className="mt-6 pt-6 grid grid-cols-2 gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                  <div>
                    <p className="font-[family-name:var(--font-heading)] text-2xl font-bold" style={{ color: "#5ac8a7" }}>
                      PhD
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                      Robert Gordon University
                    </p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-heading)] text-2xl font-bold" style={{ color: "#5ac8a7" }}>
                      3+
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                      Research &amp; advisory areas
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Alexander helps with — four glass cards in a row */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="How I Help" title="What Alexander helps with" align="center" />
          </ScrollReveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {helpsWith.map((item, i) => (
              <ScrollReveal key={item.title} delayMs={i * 100}>
                <GlassCard className="p-6 h-full">
                  <span
                    className="font-[family-name:var(--font-heading)] text-sm font-semibold"
                    style={{ color: "#5ac8a7" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold mb-2" style={{ color: "#f8fafc" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {item.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured expertise — bento grid: first card spans 2 columns, rest are single,
          deliberately uneven sizing rather than a uniform grid. */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <SectionHeading
                eyebrow="Expertise"
                title="Advisory depth across hydrogen, carbon, and energy systems."
                description="A focused set of research and consulting capabilities for organisations navigating the net-zero transition."
              />
              <Link
                href="/expertise"
                className="text-sm font-semibold inline-flex items-center gap-1.5"
                style={{ color: "#5ac8a7" }}
              >
                View all expertise
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:auto-rows-fr">
            {featuredExpertise.map((area, i) => (
              <ScrollReveal
                key={area.slug}
                delayMs={(i % 4) * 90}
                className={i === 0 || i === 5 ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <ExpertiseCard area={area} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects — one large featured card, four smaller supporting cards */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <SectionHeading eyebrow="Selected Work" title="Featured projects" />
              <Link
                href="/projects"
                className="text-sm font-semibold inline-flex items-center gap-1.5"
                style={{ color: "#5ac8a7" }}
              >
                View all projects
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <ProjectCard project={featuredProject} featured />
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {supportingProjects.map((project, i) => (
                <ScrollReveal key={project.slug} direction="right" delayMs={i * 90}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research & publications preview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <SectionHeading
                eyebrow="Research"
                title="Research & publications"
                description="Peer-reviewed articles, conference papers, technical reports, and ongoing research outputs."
              />
              <Link
                href="/research"
                className="text-sm font-semibold inline-flex items-center gap-1.5"
                style={{ color: "#5ac8a7" }}
              >
                View Research & Publications
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {publications.map((pub, i) => (
              <ScrollReveal key={pub.title} delayMs={i * 90}>
                <PublicationCard publication={pub} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & social impact preview — split: story left, stat cards right */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeading
                eyebrow="Leadership & Social Impact"
                title={`${volunteerNG.role}, ${volunteerNG.organisation}`}
              />
              <p className="mt-5 text-base leading-relaxed" style={{ color: "#cbd5e1" }}>
                Alexander combines technical expertise with people-focused leadership &mdash;
                supporting diaspora fundraising, education, and community development through
                VolunteerNG.
              </p>
              <Link
                href="/impact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#5ac8a7" }}
              >
                Explore Social Impact
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right" delayMs={120}>
              <GlassCard className="p-8">
                <ul className="space-y-4">
                  {volunteerNG.contributions.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#5ac8a7" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Speaking & media preview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <GlassCard className="p-10 text-center">
              <SectionHeading
                eyebrow="Speaking & Media"
                title="Available for talks, panels, and commentary"
                description="On hydrogen, sustainability, net-zero transition, policy, and industrial decarbonisation."
                align="center"
              />
              <Link
                href="/speaking"
                className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#5ac8a7" }}
              >
                Invite Alexander to Speak
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Insights preview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <SectionHeading eyebrow="Insights" title="Thinking on hydrogen, net zero, and sustainability" />
              <Link
                href="/insights"
                className="text-sm font-semibold inline-flex items-center gap-1.5"
                style={{ color: "#5ac8a7" }}
              >
                View all insights
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delayMs={i * 100}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Let's discuss hydrogen, sustainability, net-zero strategy, or research collaboration." />
    </>
  );
}
