"use client";

import { motion } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

const ServiceContent = ({ description }: { description: string }) => (
  <div style={{ padding: "1.5rem 0" }}>
    <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#1a4f7a", marginBottom: "2rem" }}>
      {description}
    </p>
    <Link
      href="/contact"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        fontSize: "0.75rem",
        letterSpacing: "0.2em",
        textDecoration: "none",
        padding: "0.9rem 2rem",
        background: "#ee2e22",
        color: "#ffffff",
        fontWeight: 700,
        borderRadius: "4px",
      }}
    >
      Enquire Now →
    </Link>
  </div>
);

export default function ServicesSection() {
  const cards = SERVICES.map((service, index) => (
    <Card
      key={service.title}
      card={{
        src: service.image,
        title: service.title,
        category: `0${index + 1}`,
        content: <ServiceContent description={service.description} />,
      }}
      index={index}
      layout={true}
      clickable={false}
    />
  ));

  return (
    <section style={{ padding: "3rem 2.5rem" }} aria-label="Services">
      <div style={{ padding: "0 2.5rem", marginBottom: "4rem", maxWidth: "1280px", margin: "0 auto 4rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          <motion.p
            style={{ fontSize: "0.7rem", letterSpacing: "0.45em", color: "#ee2e22", marginBottom: "1.25rem", textTransform: "uppercase" }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2.5rem,5.5vw,4.5rem)",
              lineHeight: 1, color: "#005c97", marginBottom: "1.5rem", fontWeight: 800,
            }}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            Building Trust, Securing Futures.
          </motion.h2>
          <motion.p
            style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#4a7fa3" }}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Over a decade of excellence in Hyderabad&apos;s real estate landscape — premium plots, luxury villas, and gated communities with 100% transparent transactions.
          </motion.p>
        </div>

        <motion.div
          style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
        >
          <Link
            href="/contact"
            style={{
              background: "#ee2e22",
              color: "#ffffff",
              padding: "0.85rem 2.25rem",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 700,
              borderRadius: "4px",
            }}
          >
            Request a Callback
          </Link>
          <Link
            href="/why-paninfra"
            style={{
              fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
              textDecoration: "none", color: "#005c97",
              border: "1px solid rgba(0,92,151,0.3)", padding: "0.85rem 2.25rem",
              borderRadius: "4px",
            }}
          >
            Learn More →
          </Link>
        </motion.div>
      </div>

      <Carousel items={cards} />
    </section>
  );
}
