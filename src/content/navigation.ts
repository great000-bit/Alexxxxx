// 5-item center nav for the floating pill menu. Contact is intentionally NOT here — it
// has its own dedicated button on the right side of the nav (see contactCTA below),
// per the nav revision brief. Services/Impact/Insights/Speaking still exist as real
// pages, just not in this particular nav; they're still reachable via the footer.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
] as const;

export const contactCTA = { label: "Contact", href: "/contact" } as const;

export const footerLinks = {
  quick: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
  ],
  expertise: [
    { label: "Expertise", href: "/expertise" },
    { label: "Leadership & Social Impact", href: "/impact" },
    { label: "Speaking & Media", href: "/speaking" },
    { label: "Insights", href: "/insights" },
  ],
  research: [
    { label: "Research & Publications", href: "/research" },
    { label: "Download CV", href: "/cv" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;
