import Link from "next/link";
import { ArrowRight, Flame, Leaf, GitBranch, FileSearch } from "lucide-react";
import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import SectionHeading from "@/components/SectionHeading";
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
    icon: Flame,
    title: "Hydrogen & Energy Transition Strategy",
    description:
      "Helping stakeholders understand hydrogen pathways, policy direction, adoption barriers, and value-chain opportunities.",
  },
  {
    icon: Leaf,
    title: "Net-Zero & Carbon Strategy",
    description:
      "Supporting organisations with carbon management, net-zero planning, sustainability reporting, and decarbonisation thinking.",
  },
  {
    icon: GitBranch,
    title: "Life Cycle & Value Chain Analysis",
    description:
      "Evaluating environmental impact, system dependencies, stakeholder relationships, and sustainability trade-offs.",
  },
  {
    icon: FileSearch,
    title: "Research, Policy & Technical Advisory",
    description:
      "Producing evidence-based insights, technical reports, policy analysis, and research outputs for decision-making.",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 6);
  const featuredExpertise = expertiseAreas.slice(0, 9);

  return (
    <>
      <Hero />
      <CredibilityBar />

      {/* Strategic intro */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="About" title="A research-backed perspective on the energy transition" />
            <p className="mt-5 text-base text-grey-600 leading-relaxed">{bio.short}</p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
            >
              Learn More About Alexander
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* What Alexander helps with */}
      <section className="bg-grey-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="How I Help" title="What Alexander helps with" align="center" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpsWith.map((item) => (
              <div key={item.title} className="rounded-lg border border-grey-200 bg-white p-6">
                <item.icon size={22} className="text-emerald-600 mb-4" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-navy-950 mb-2">{item.title}</h3>
                <p className="text-sm text-grey-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured expertise */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <SectionHeading eyebrow="Expertise" title="Areas of deep technical expertise" />
            <Link href="/expertise" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 inline-flex items-center gap-1.5">
              View all expertise
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExpertise.map((area) => (
              <ExpertiseCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-grey-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <SectionHeading eyebrow="Selected Work" title="Featured projects" />
            <Link href="/projects" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 inline-flex items-center gap-1.5">
              View all projects
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Research & publications preview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <SectionHeading
              eyebrow="Research"
              title="Research & publications"
              description="Peer-reviewed articles, conference papers, technical reports, and ongoing research outputs."
            />
            <Link href="/research" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 inline-flex items-center gap-1.5">
              View Research & Publications
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {publications.map((pub) => (
              <PublicationCard key={pub.title} publication={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & social impact preview */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Leadership & Social Impact"
                title={`${volunteerNG.role}, ${volunteerNG.organisation}`}
                light
              />
              <p className="mt-5 text-base text-grey-200 leading-relaxed">
                Alexander combines technical expertise with people-focused leadership — supporting diaspora
                fundraising, education, and community development through VolunteerNG.
              </p>
              <Link
                href="/impact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Explore Social Impact
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <ul className="space-y-3">
              {volunteerNG.contributions.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-grey-200 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Speaking & media preview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-xl border border-grey-200 bg-grey-50 p-10 text-center">
            <SectionHeading
              eyebrow="Speaking & Media"
              title="Available for talks, panels, and commentary"
              description="On hydrogen, sustainability, net-zero transition, policy, and industrial decarbonisation."
              align="center"
            />
            <Link
              href="/speaking"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
            >
              Invite Alexander to Speak
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="bg-grey-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <SectionHeading eyebrow="Insights" title="Thinking on hydrogen, net zero, and sustainability" />
            <Link href="/insights" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500 inline-flex items-center gap-1.5">
              View all insights
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Let's discuss hydrogen, sustainability, net-zero strategy, or research collaboration." />
    </>
  );
}
