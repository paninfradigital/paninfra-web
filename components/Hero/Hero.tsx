"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const headline = ["Premium", "Plots &", "Villas"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#005c97",
      }}
      aria-label="Hero section"
    >
      {/* ── FULL-BLEED BACKGROUND IMAGE ───────────────────── */}
      <motion.div
        style={{ y: imageY, position: "absolute", inset: "-10% 0", minHeight: "120%", zIndex: 0 }}
      >
        <Image
          src="/image.png"
          alt="Pan Infra – Premium Plots & Villas Hyderabad"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)",
        }} />
      </motion.div>

      {/* ── CONTENT ───────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          padding: "7rem 2.5rem 2.5rem",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <motion.div
          style={{ y: textY, maxWidth: "900px", width: "100%" }}
        >
          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              lineHeight: 0.88,
              color: "#ffffff",
              margin: "0 0 1rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            {headline.map((word, i) => (
              <span
                key={word}
                style={{ display: "block", overflow: "hidden" }}
              >
                <motion.span
                  style={{ display: "block" }}
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.15 * i + 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            {/* Accent word */}
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.15em" }}>
              <motion.span
                style={{ display: "block", color: "#ee2e22", fontStyle: "italic", fontWeight: 800 }}
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              >
                In Hyderabad.
              </motion.span>
            </span>
          </h1>

          {/* Subtitle + Buttons */}
          <motion.div
            style={{
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.75rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "480px",
              lineHeight: 1.75,
            }}>
              HMDA &amp; DTCP approved residential plots, luxury villas, and gated communities across Hyderabad&apos;s fastest-growing corridors.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link
                href="/projects"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.25em",
                  color: "#ffffff",
                  textDecoration: "none",
                  background: "linear-gradient(90deg, #005c97 0%, #1e96d3 100%)",
                  padding: "1.2rem 2.5rem",
                  transition: "all 0.35s",
                  display: "inline-block",
                  fontWeight: 800,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.25em",
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "color 0.25s",
                  display: "inline-block",
                  fontWeight: 800,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
              >
                Enquire →
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <p style={{
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.35)",
            writingMode: "vertical-rl",
            marginBottom: "0.5rem",
          }}>Scroll</p>
          <motion.div
            style={{ width: "1px", height: "56px", background: "#005c97", transformOrigin: "top" }}
            animate={{ scaleY: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

    </section>
  );
}
