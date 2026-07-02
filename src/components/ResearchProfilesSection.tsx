import { LinkedInIcon, MediumIcon, GoogleScholarIcon } from "./icons/BrandIcons";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import ResearchProfileCard from "./ResearchProfileCard";
import { socials } from "@/content/site";

const profiles = [
  {
    platform: "Google Scholar",
    description: "Academic publications, citations, and research profile.",
    ctaLabel: "Open Profile",
    href: socials.googleScholar,
    icon: GoogleScholarIcon,
    variant: "scholar" as const,
  },
  {
    platform: "Medium",
    description: "Writing and commentary on sustainability, hydrogen, and energy transition.",
    ctaLabel: "Read Articles",
    href: socials.medium,
    icon: MediumIcon,
    variant: "medium" as const,
  },
  {
    platform: "LinkedIn",
    description: "Professional profile, experience, and network.",
    ctaLabel: "Connect on LinkedIn",
    href: socials.linkedin,
    icon: LinkedInIcon,
    variant: "linkedin" as const,
  },
];

export default function ResearchProfilesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Research Profiles"
            title="Follow the research and connect directly"
            description="Publications, writing, and professional network — all in one place."
            align="center"
          />
        </ScrollReveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:auto-rows-fr">
          {profiles.map((profile, i) => (
            <ScrollReveal key={profile.platform} delayMs={i * 90}>
              <ResearchProfileCard {...profile} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
