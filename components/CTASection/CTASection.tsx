"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 2.5rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ boxShadow: "0 24px 64px rgba(238,46,34,0.12), 0 0 0 1px rgba(238,46,34,0.2)" }}
        style={{
          background: "linear-gradient(135deg, #004a7c 0%, #005c97 100%)",
          padding: "5rem 4rem",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(0,92,151,0.3)",
          borderRadius: "4px",
        }}
      >
        {/* Decorative element */}
        <div style={{
          position: "absolute", top: 0, right: 0, width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(238,46,34,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-3rem", left: "-3rem", width: "200px", height: "200px",
          border: "1px solid rgba(238, 46, 34, 0.08)", borderRadius: "50%",
          pointerEvents: "none",
        }} />

        <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#ee2e22", marginBottom: "1.5rem" }}>
          Book a Site Visit
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.5rem,5.5vw,5rem)",
            lineHeight: 0.95,
            color: "#ffffff",
            marginBottom: "2.5rem",
            maxWidth: "720px",
            fontWeight: 800,
          }}
        >
          Find your perfect plot or villa in Hyderabad.
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: "480px", lineHeight: 1.75, marginBottom: "3rem" }}>
          Book a free site visit and let our experts guide you to the ideal property in Hyderabad&apos;s most promising growth corridors.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              fontSize: "0.75rem", letterSpacing: "0.2em", 
              textDecoration: "none", padding: "1.2rem 2.75rem",
              background: "#ee2e22", color: "#ffffff",
              transition: "all 0.3s",
              fontWeight: 800,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.65rem", letterSpacing: "0.2em",
              textDecoration: "none", padding: "1.2rem 2.75rem",
              border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff",
              transition: "all 0.3s",
              fontWeight: 800,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            }}
          >
            Enquire →
          </Link>
          <Link
            href="/projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.65rem", letterSpacing: "0.2em",
              textDecoration: "none", padding: "1.2rem 2.5rem",
              border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff",
              transition: "all 0.3s",
              fontWeight: 800,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            }}
          >
            View Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
