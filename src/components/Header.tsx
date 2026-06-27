"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/navigation";
import { site } from "@/content/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on route change without an effect that calls setState
  // directly (React's recommended "derive during render" pattern over watching a prop
  // in useEffect).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 animate-nav-reveal motion-reduce:animate-none"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-navy-950/70 backdrop-blur-md px-4 py-2.5 sm:px-5">
          {/* Left: avatar + name */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0 flex-shrink-0">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 flex-shrink-0">
              <span className="font-[family-name:var(--font-heading)] text-xs font-bold text-emerald-300">
                AO
              </span>
            </span>
            <span className="hidden sm:inline text-sm font-semibold text-white truncate">
              Dr. {site.shortTitle}
            </span>
          </Link>

          {/* Center: pill nav, desktop only */}
          <nav
            className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-grey-400 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button — no right-side CTA per the brief (no Hire Me, no nav CTA;
              all CTAs live in the hero now). */}
          <button
            type="button"
            className="lg:hidden text-white p-2 -mr-1.5 flex-shrink-0"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu — simple stacked list, no dramatic full-screen overlay per the brief */}
        {isMenuOpen && (
          <nav
            className="lg:hidden mt-2 rounded-2xl border border-white/10 bg-navy-950/95 backdrop-blur-md px-5 py-4"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`min-h-[44px] flex items-center px-2 rounded-lg text-base transition-colors ${
                      isActive ? "text-white bg-white/10 font-medium" : "text-grey-300 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
