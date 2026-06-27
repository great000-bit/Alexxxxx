// 6-item nav for the floating pill menu, per the nav/hero rebuild brief — this is
// deliberately a smaller set than the full sitemap (Services/Impact/Insights/Speaking
// still exist as real pages, just not in this particular nav; they're still reachable via
// the footer). Do not add Services/Impact/Insights back here without checking whether
// that brief is still in effect — this was an intentional, explicit reduction.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
] as const;

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
