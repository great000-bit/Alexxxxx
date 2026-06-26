import Link from "next/link";
import { ExternalLink, BookOpen, FileText, Mail } from "lucide-react";
import { footerLinks } from "@/content/navigation";
import { site, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-3">
              {site.shortTitle}
            </p>
            <p className="text-sm text-grey-400 leading-relaxed max-w-sm">{site.footerStatement}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-grey-400 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">More</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-grey-400 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* TODO: socials are placeholder TODO-prefixed values until real profile URLs
                are provided — see src/content/site.ts */}
            <a
              href={socials.linkedin}
              className="text-grey-400 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn profile"
            >
              <ExternalLink size={18} aria-hidden="true" />
            </a>
            <a
              href={socials.googleScholar}
              className="text-grey-400 hover:text-emerald-400 transition-colors"
              aria-label="Google Scholar profile"
            >
              <BookOpen size={18} aria-hidden="true" />
            </a>
            <a
              href={socials.researchGate}
              className="text-grey-400 hover:text-emerald-400 transition-colors"
              aria-label="ResearchGate profile"
            >
              <FileText size={18} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-grey-400 hover:text-emerald-400 transition-colors"
              aria-label="Email Alexander Oburoh"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs text-grey-400">
              © {new Date().getFullYear()} {site.shortTitle}. All rights reserved.
            </p>
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-grey-400 hover:text-emerald-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
