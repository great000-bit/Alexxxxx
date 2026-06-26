"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { navLinks, navCTAs } from "@/content/navigation";
import { site } from "@/content/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on route change without a useEffect: track the pathname we
  // last rendered for, and reset state directly during render if it changed. This is
  // React's recommended pattern over "setState inside an effect that watches a prop",
  // which causes an extra unnecessary render pass.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-lg font-bold text-white hover:text-emerald-400 transition-colors"
          >
            {site.shortTitle}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-emerald-400" : "text-grey-200 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={navCTAs.secondary.href}
              className="text-sm font-medium text-white hover:text-emerald-400 transition-colors"
            >
              {navCTAs.secondary.label}
            </Link>
            <Link
              href={navCTAs.primary.href}
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-navy-950 hover:bg-emerald-400 transition-colors"
            >
              <Download size={16} aria-hidden="true" />
              {navCTAs.primary.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-white/10">
          <nav className="px-6 py-6 flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`min-h-[44px] flex items-center text-base transition-colors ${
                    isActive ? "text-emerald-400 font-medium" : "text-grey-200 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={navCTAs.primary.href}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-3 text-sm font-semibold text-navy-950"
              >
                <Download size={16} aria-hidden="true" />
                {navCTAs.primary.label}
              </Link>
              <Link
                href={navCTAs.secondary.href}
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white"
              >
                {navCTAs.secondary.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
