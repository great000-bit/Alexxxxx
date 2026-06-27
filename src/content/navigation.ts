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
    { label: "About", href: "/about" },
    { label: "Expertise", href: "/expertise" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Services", href: "/services" },
    { label: "Research & Publications", href: "/research" },
    { label: "Leadership & Social Impact", href: "/impact" },
    { label: "Speaking & Media", href: "/speaking" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;
