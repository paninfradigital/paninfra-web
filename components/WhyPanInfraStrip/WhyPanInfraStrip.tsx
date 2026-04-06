"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "100% Clear Titles",
    subtitle: "Legally Verified Documentation",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
    title: "HMDA & DTCP Approved",
    subtitle: "Fully Registered & Compliant",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Since 2010",
    subtitle: "Trusted by 1,000+ Families",
  },
];

export default function WhyPanInfraStrip() {
  return (
    <section style={{ background: "#FFFFF2", padding: "3rem 2.5rem", borderTop: "1px solid rgba(0,92,151,0.08)", borderBottom: "1px solid rgba(0,92,151,0.08)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            About Us
          </p>
          <h2 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.2rem,4.5vw,3.75rem)",
            lineHeight: 1.1,
            color: "#005c97",
            fontWeight: 800,
            marginBottom: "1.75rem",
          }}>
            The Best Real Estate Company in{" "}
            <span style={{ color: "#ee2e22" }}>Hyderabad</span>
          </h2>
          <p style={{
            fontSize: "1.05rem", lineHeight: 1.8, color: "#2d6a9f",
            maxWidth: "680px", margin: "0 auto",
          }}>
            Pan Infra offers premium plots, villa lands, and gated community properties. With 15+ years of trusted service and 1,000+ delivered projects, we make investing in Hyderabad real estate simple, secure, and rewarding.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div style={{ display: "grid", gap: "1.5rem" }} className="grid-cols-1 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,92,151,0.12)",
                borderRadius: "0.375rem",
                padding: "2.5rem 2rem",
                textAlign: "center",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,92,151,0.35)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,92,151,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,92,151,0.12)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div style={{ color: "#005c97", marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}>
                {f.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                fontSize: "1.3rem", fontWeight: 700, color: "#005c97", marginBottom: "0.5rem",
              }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#4a7fa3", letterSpacing: "0.03em" }}>
                {f.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
