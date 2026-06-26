export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Services", href: "/services" },
  { label: "Impact", href: "/impact" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const navCTAs = {
  primary: { label: "Download CV", href: "/cv" },
  secondary: { label: "Get in Touch", href: "/contact" },
} as const;

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
