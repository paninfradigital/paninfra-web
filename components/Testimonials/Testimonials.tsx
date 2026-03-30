"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const item = TESTIMONIALS[index];

  return (
    <section
      style={{
        background: "#005c97",
        padding: "7rem 2.5rem",
        overflow: "hidden",
        position: "relative",
      }}
      aria-label="Testimonials"
    >
      {/* Decorative quote mark */}
      <div style={{
        position: "absolute", top: "3rem", left: "2.5rem",
        fontFamily: "var(--font-playfair,Georgia,serif)",
        fontSize: "14rem", color: "rgba(238, 46, 34,0.08)",
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
      }}>
        &ldquo;
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22",  marginBottom: "3rem" }}>
          Client Stories
        </p>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                fontSize: "clamp(1.75rem,4vw,2.75rem)",
                lineHeight: 1.3,
                color: "#ffffff",
                fontWeight: 400,
                fontStyle: "italic",
                marginBottom: "3rem",
              }}
            >
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div style={{ width: "2.5rem", height: "1px", background: "rgba(238, 46, 34,0.5)" }} />
              <div>
                <p style={{ fontSize: "0.85rem", color: "#ffffff", letterSpacing: "0.1em", fontWeight: 500, marginBottom: "0.25rem" }}>{item.name}</p>
                <p style={{ fontSize: "0.6rem", color: "rgba(238, 46, 34,0.7)", letterSpacing: "0.2em", }}>{item.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        {/* Dots */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "2.5rem" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              style={{
                width: i === index ? "2rem" : "0.5rem",
                height: "2px",
                background: i === index ? "#ee2e22" : "rgba(255,255,255,0.25)",
                border: "none",
                padding: 0,
                transition: "all 0.3s",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
