"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      style={{
        maxWidth: "1280px", margin: "0 auto", padding: "3rem 2.5rem",
        display: "grid", gap: "3rem",
        alignItems: "center"
      }}
      className="grid-cols-1 md:grid-cols-[1fr_0.8fr]"
      aria-label="About Pan Infra"
    >
      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ position: "relative" }}
      >
        <div style={{ position: "relative", height: "640px", overflow: "hidden", borderRadius: "0.25rem" }}>
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
            alt="Pan Infra — Premium Real Estate Development Hyderabad"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        {/* Year badge */}
        <div style={{
          position: "absolute", bottom: "-2rem", right: "2rem",
          background: "#005c97", padding: "2rem", textAlign: "center",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}>
          <span style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "2.5rem", color: "#ffffff", lineHeight: 1 }}>2010</span>
          <p style={{ fontSize: "0.5rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.7)", marginTop: "0.4rem" }}>Est. Since</p>
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#ee2e22", marginBottom: "1.5rem" }}>About Us</p>
        <h2 style={{ fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)", fontSize: "clamp(2.5rem,5.5vw,4.5rem)", lineHeight: 0.95, color: "#005c97", marginBottom: "2.5rem", fontWeight: 800 }}>
          Building Dreams <br /> Across Hyderabad
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2d6a9f", marginBottom: "1.5rem" }}>
          Pan Infra is Hyderabad&apos;s most trusted real estate developer, delivering HMDA &amp; DTCP approved premium plots, luxury villas, and gated communities since 2010.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#2d6a9f", marginBottom: "3rem" }}>
          From carefully chosen growth corridors to transparent transactions and clear title deeds — we deliver real estate that creates lasting wealth and exceptional living experiences.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "3.5rem", marginBottom: "3rem" }}>
          {[{ n: "1,000+", l: "Families" }, { n: "800+", l: "Acres" }, { n: "15+", l: "Projects" }].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "2.25rem", color: "#005c97", fontWeight: 600, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "0.55rem", letterSpacing: "0.15em", color: "#ee2e22", marginTop: "0.4rem" }}>{s.l}</div>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            fontSize: "0.75rem", letterSpacing: "0.25em",
            textDecoration: "none", color: "#005c97", borderBottom: "2px solid #005c97",
            paddingBottom: "4px", transition: "color 0.25s, border-color 0.25s",
            fontWeight: 800,
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "#ee2e22"; e.currentTarget.style.borderColor = "#ee2e22"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "#005c97"; e.currentTarget.style.borderColor = "#005c97"; }}
        >
          Discover Our Story →
        </Link>
      </motion.div>
    </section>
  );
}
