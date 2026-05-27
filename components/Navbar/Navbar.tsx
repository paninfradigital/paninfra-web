"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pages that start with a dark background hero/parallax section
  const isLandingPage = pathname === "/landingpage" || pathname === "/prime-estate";
  const isDarkPage = pathname === "/" || pathname === "/why-paninfra" || pathname === "/about" || pathname === "/contact";
  const useDarkNav = isDarkPage || isLandingPage;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: isLandingPage
          ? "1px solid rgba(255,255,255,0.05)"
          : scrolled
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid transparent",
        background: isLandingPage ? "#6f5f4c" : scrolled ? "rgba(255,255,242,0.96)" : "transparent",
        backdropFilter: isLandingPage ? "none" : scrolled ? "blur(14px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <nav
        className="px-5 py-2 md:px-10 md:py-3 min-h-[60px] md:min-h-[72px] flex justify-center md:justify-between items-center relative"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none"
          }}
        >
          <Image
            src="/images/Pan-Infra-Logo.png.webp"
            alt="Pan Infra Logo"
            width={180}
            height={60}
            style={{
              objectFit: "contain",
              filter: useDarkNav && !scrolled || isLandingPage ? "brightness(0) invert(1)" : "none",
              transition: "filter 0.3s ease"
            }}
            priority
          />
        </Link>
        {/* Desktop links */}
        <ul
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href || (isLandingPage && item.href === "/");
            const defaultColor = isActive
              ? "#ee2e22"
              : useDarkNav && !scrolled || isLandingPage
                ? "rgba(255,255,255,0.85)"
                : "#005c97";

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    color: defaultColor,
                    transition: "color 0.25s",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ee2e22";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = defaultColor;
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={`tel:${SITE.phone}`}
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
                padding: "0.65rem 1.5rem",
                border: "none",
                background: "#ee2e22",
                color: "#ffffff",
                transition: "all 0.3s ease",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#c41f10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ee2e22";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call Us
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center"
          style={{
            position: "absolute",
            right: "2.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: scrolled ? "1px solid rgba(0,0,0,0.15)" : "1px solid rgba(255,255,255,0.25)",
            borderRadius: "50%",
            width: "42px",
            height: "42px",
            fontSize: "1.3rem",
            color: useDarkNav && !scrolled || isLandingPage ? "#ffffff" : "#005c97",
          }}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "≡"}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: "hidden",
              background: "#FFFFF2",
              borderTop: "1px solid rgba(0,92,151,0.1)",
            }}
          >
            <ul style={{ listStyle: "none", padding: "3rem 1.25rem", margin: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.75rem" }}>
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;
                const mobileDefaultColor = isActive ? "#ee2e22" : "#005c97";

                return (
                  <li key={item.href} style={{ textAlign: "center" }}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      style={{
                        fontFamily: "var(--font-playfair, Georgia, serif)",
                        fontSize: "1.5rem",
                        letterSpacing: "0.05em",
                        color: mobileDefaultColor,
                        textDecoration: "none",
                        transition: "color 0.25s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#ee2e22";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = mobileDefaultColor;
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  );
}
