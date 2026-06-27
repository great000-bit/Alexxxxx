"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, contactCTA } from "@/content/navigation";
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
    <header className="fixed top-0 inset-x-0 z-50 animate-nav-reveal motion-reduce:animate-none">
      {/* ===================== DESKTOP NAV (lg and up) ===================== */}
      <div className="hidden lg:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-navy-950/60 backdrop-blur-md px-4 py-2.5 sm:px-5">
          {/* Left: avatar + name */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0 flex-shrink-0">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/15 flex-shrink-0">
              <span className="font-[family-name:var(--font-heading)] text-xs font-bold text-emerald-300">
                AO
              </span>
            </span>
            <span className="font-[family-name:var(--font-logo)] text-sm font-semibold text-white truncate">
              Dr. {site.shortTitle}
            </span>
          </Link>

          {/* Center: pill nav — Contact intentionally excluded, it has its own button
              on the right. */}
          <nav className="flex items-center gap-1 absolute left-1/2 -translate-x-1/2" aria-label="Primary">
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

          {/* Right: Contact button. No Hire Me, no other CTA here. */}
          <Link
            href={contactCTA.href}
            className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-navy-950 border border-white/40 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white flex-shrink-0"
          >
            {contactCTA.label}
          </Link>
        </div>
      </div>

      {/* ===================== MOBILE NAV (below lg) =====================
          Floating capsule per the Great Emman-Wori mobile reference screenshot:
          centered, compact (not full width), avatar left / hamburger right. A theme
          toggle would normally sit in the middle slot, but no theme system exists
          anywhere in this project — added one would be new scope beyond this brief, so
          that middle slot is intentionally omitted rather than filled with a fake
          non-functional button. */}
      <div className="lg:hidden pt-4 px-4">
        <div className="mx-auto w-fit flex items-center gap-1 rounded-full border border-white/[0.14] bg-white/[0.08] backdrop-blur-[18px] p-1.5">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/15 flex-shrink-0"
            aria-label="Home"
          >
            <span className="font-[family-name:var(--font-heading)] text-xs font-bold text-emerald-300">
              AO
            </span>
          </Link>

          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/15 text-white flex-shrink-0"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu — simple stacked list, no dramatic full-screen overlay */}
        {isMenuOpen && (
          <nav
            className="mt-2 mx-auto max-w-xs rounded-2xl border border-white/10 bg-navy-950/90 backdrop-blur-md px-5 py-4"
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
              {/* Contact lives in the hamburger menu on mobile (and in the hero CTAs) —
                  not inside the floating capsule itself, per the brief. */}
              <Link
                href={contactCTA.href}
                className="min-h-[44px] flex items-center justify-center mt-2 rounded-full bg-white/90 px-4 text-base font-semibold text-navy-950"
              >
                {contactCTA.label}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
