"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, contactCTA } from "@/content/navigation";
import { site } from "@/content/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on route change without an effect that calls setState
  // directly (React's recommended "derive during render" pattern over watching a prop
  // in useEffect).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  // Nav surface becomes slightly stronger once the page has scrolled past the hero/first
  // section, per the iOS-style glass nav spec — a real scroll listener is unavoidable
  // here (there's no CSS-only way to react to scroll position for a fixed element), but
  // it's a single cheap boolean threshold check, not per-pixel work.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // iOS-style translucent glass: blur + saturate combined, not opaque, per direct
  // correction that the previous nav (bg-navy-950/60 + backdrop-blur-md) was "too
  // strong/opaque." Exact rgba values from the brief; saturate(140%) keeps colour behind
  // the glass looking rich rather than washed out, which plain blur alone tends to do.
  const navSurfaceStyle = {
    backgroundColor: isScrolled ? "rgba(5,8,12,0.62)" : "rgba(5,8,12,0.42)",
    backdropFilter: "blur(22px) saturate(140%)",
    WebkitBackdropFilter: "blur(22px) saturate(140%)",
    border: "1px solid rgba(255,255,255,0.10)",
    transition: "background-color 200ms ease-out",
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 animate-nav-reveal motion-reduce:animate-none"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div
          className="flex items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-5"
          style={navSurfaceStyle}
        >
          {/* Left: avatar + name */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0 flex-shrink-0">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/15 flex-shrink-0">
              <span className="font-[family-name:var(--font-heading)] text-xs font-bold text-emerald-300">
                AO
              </span>
            </span>
            <span className="hidden sm:inline font-[family-name:var(--font-logo)] text-sm font-semibold text-white truncate">
              Dr. {site.shortTitle}
            </span>
          </Link>

          {/* Center: pill nav, desktop only — Contact intentionally excluded, it has its
              own button on the right (contactCTA below). */}
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

          {/* Right: Contact button (desktop only) + mobile menu toggle. No Hire Me, no
              other CTA here — Contact is the only thing on the right. */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href={contactCTA.href}
              className="hidden lg:inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-navy-950 border border-white/40 transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              {contactCTA.label}
            </Link>

            <button
              type="button"
              className="lg:hidden text-white p-2 -mr-1.5"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu — simple stacked list, no dramatic full-screen overlay per the brief */}
        {isMenuOpen && (
          <nav
            className="lg:hidden mt-2 rounded-2xl px-5 py-4"
            style={{ ...navSurfaceStyle, backgroundColor: "rgba(5,8,12,0.72)" }}
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
              {/* Contact stays accessible on mobile too, styled like the desktop button */}
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
