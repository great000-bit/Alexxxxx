import Link from "next/link";
import { Mail, ExternalLink, BookOpen, FileText, ArrowUpRight } from "lucide-react";
import { footerLinks } from "@/content/navigation";
import { site, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Large rounded CTA pill, top-center */}
        <div className="pt-20 sm:pt-24 pb-14 sm:pb-18 flex flex-col items-center text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-navy-950 transition-[transform,box-shadow,color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(255,255,255,0.25)] hover:text-[#0e6b57]"
          >
            Let&apos;s Start a Conversation
            <ArrowUpRight
              size={20}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-14 sm:pb-18">
          <div>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.06] border border-white/15 mb-4">
              <span className="font-[family-name:var(--font-heading)] text-sm font-bold" style={{ color: "#5ac8a7" }}>
                AO
              </span>
            </span>
            <p className="font-[family-name:var(--font-logo)] text-lg font-bold mb-1.5" style={{ color: "#ffffff" }}>
              Dr. {site.shortTitle}
            </p>
            <p className="text-sm mb-1" style={{ color: "#cbd5e1" }}>
              Sustainability &amp; Energy Systems Analyst
            </p>
            <p className="text-sm mb-3" style={{ color: "#94a3b8" }}>
              Hydrogen &amp; Net Zero Consultant
            </p>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#94a3b8" }}>
              {site.footerStatement}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#ffffff" }}>
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.quick.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors [color:#94a3b8] hover:[color:#5ac8a7]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#ffffff" }}>
              Expertise
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.expertise.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors [color:#94a3b8] hover:[color:#5ac8a7]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#ffffff" }}>
              Research &amp; Connect
            </h4>
            <div className="flex flex-col gap-3 text-sm [color:#94a3b8]">
              {footerLinks.research.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:[color:#5ac8a7]">
                  {link.label}
                </Link>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition-colors break-all hover:[color:#5ac8a7]"
              >
                <Mail size={14} className="flex-shrink-0" aria-hidden="true" />
                <span className="break-all">{site.email}</span>
              </a>
              <div className="flex gap-4 mt-3">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="transition-colors hover:[color:#5ac8a7]"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
                <a
                  href={socials.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar profile (opens in a new tab)"
                  className="transition-colors hover:[color:#5ac8a7]"
                >
                  <BookOpen size={16} aria-hidden="true" />
                </a>
                <a
                  href={socials.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium profile (opens in a new tab)"
                  className="transition-colors hover:[color:#5ac8a7]"
                >
                  <FileText size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Large soft brand wordmark */}
        <div
          aria-hidden="true"
          className="relative w-full overflow-hidden select-none pointer-events-none flex justify-center"
          style={{ height: "clamp(40px, 8vw, 110px)" }}
        >
          <span
            className="font-[family-name:var(--font-logo)] absolute top-1/2 whitespace-nowrap font-bold leading-none"
            style={{ fontSize: "6vw", transform: "translateY(-38%)", color: "rgba(255,255,255,0.04)" }}
          >
            Dr. Alexander Oburoh
          </span>
        </div>

        {/* Subtle divider + copyright — soft gradient line instead of hard border */}
        <div className="relative">
          <div
            className="absolute top-0 left-[10%] right-[10%] h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }}
            aria-hidden="true"
          />
          <div className="pb-8 pt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
            <p>
              © {new Date().getFullYear()} {site.shortTitle}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:[color:#5ac8a7]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
