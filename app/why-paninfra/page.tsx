"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const SERVICES = [
  {
    tag: "01",
    heading: "Residential Plots",
    imgUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    content:
      "HMDA & DTCP approved premium residential plots in Hyderabad's fastest-growing corridors — Shadnagar, Mokila, Adibatla, and Tukkuguda. Wide BT roads, underground utilities, and clear title deeds.",
  },
  {
    tag: "02",
    heading: "Premium Villas",
    imgUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    content:
      "Architect-designed luxury 3 & 4 BHK independent villas with private gardens, smart home automation, premium fixtures, and resort-style community amenities.",
  },
  {
    tag: "03",
    heading: "Gated Communities",
    imgUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
    content:
      "Integrated gated townships with clubhouse, Olympic pool, landscaped parks, children's play areas, jogging tracks, and 24/7 security. 60% open green space guaranteed.",
  },
  {
    tag: "04",
    heading: "Commercial Plots",
    imgUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    content:
      "Prime commercial real estate in Gachibowli, HITEC City, and key Hyderabad business districts — ideal for office buildings, retail outlets, and mixed-use developments.",
  },
  {
    tag: "05",
    heading: "Villa Plots",
    imgUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    content:
      "Large-format villa plots (200–600 sq.yd) in exclusive enclaves — the freedom to build your dream home with your choice of architect and design, on DTCP-approved land.",
  },
  {
    tag: "06",
    heading: "Investment Properties",
    imgUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    content:
      "Strategically located investment plots in upcoming micro-markets with 3× to 5× appreciation potential. Backed by deep infrastructure research and government masterplan analysis.",
  },
  {
    tag: "07",
    heading: "NRI Corner",
    imgUrl:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800",
    content:
      "Dedicated NRI investment services — virtual site tours, power of attorney assistance, FEMA-compliant transactions, and a dedicated relationship manager for your entire journey.",
  },
  {
    tag: "08",
    heading: "Property Management",
    imgUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    content:
      "End-to-end property management services — mutation assistance, EC fetching, resale support, lease management, and property appreciation advisory.",
  },
];

export default function WhyPanInfraPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Why Pan Infra", url: "/why-paninfra" },
  ]);

  const faqData = faqJsonLd([
    { q: "What types of properties does Pan Infra offer in Hyderabad?", a: "Pan Infra offers HMDA & DTCP approved residential plots, luxury 3 & 4 BHK villas, integrated gated communities, commercial plots, villa plots, and investment properties across Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda and all Hyderabad growth corridors." },
    { q: "Are Pan Infra plots HMDA or DTCP approved?", a: "Yes, all Pan Infra projects are fully government-approved — either HMDA (Hyderabad Metropolitan Development Authority) or DTCP (Directorate of Town and Country Planning) approved, with clear title deeds and no legal encumbrances." },
    { q: "Does Pan Infra offer services for NRI buyers?", a: "Yes. Pan Infra has a dedicated NRI Corner with virtual site tours, power of attorney assistance, FEMA-compliant transaction support, and a dedicated relationship manager to make remote property purchase completely hassle-free." },
  ]);

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFF2" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* ── Page header ───────────────────────────── */}
      <section
        style={{
          background: "#005c97",
          padding: "10rem 2.5rem 6rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ width: "28px", height: "1px", background: "#ee2e22" }} />
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22" }}>
              Our Properties
            </p>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2.5rem,7vw,6rem)",
              lineHeight: 0.9,
              color: "#ffffff",
              maxWidth: "800px",
              marginBottom: "2.5rem",
              fontWeight: 700,
            }}
          >
            Plots, Villas &amp;<br />Gated Communities
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", maxWidth: "520px", lineHeight: 1.8 }}>
            Eight specialised real estate offerings — from investment plots to luxury villas — all HMDA &amp; DTCP approved.
          </p>
        </div>
      </section>

      {/* ── Why Choose Pan Infra Section ───────────── */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "8rem 2.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", justifyContent: "center" }}>
            <div style={{ width: "28px", height: "1px", background: "#ee2e22" }} />
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22", textTransform: "uppercase" }}>
              Why Choose Us
            </p>
            <div style={{ width: "28px", height: "1px", background: "#ee2e22" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2.5rem,6vw,4.5rem)",
              lineHeight: 1,
              color: "#005c97",
              marginBottom: "2rem",
              fontWeight: 800,
            }}
          >
            Building Trust, <br />Securing Futures.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#2d6a9f", maxWidth: "800px", margin: "0 auto 3.5rem", lineHeight: 1.8 }}>
            Over a decade of excellence in Hyderabad&apos;s real estate landscape — premium plots, luxury villas, and gated communities with 100% transparent transactions.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <Link
              href="/contact"
              style={{
                background: "#ee2e22",
                color: "#ffffff",
                padding: "1.2rem 2.5rem",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Request a Callback
            </Link>
            <Link
              href="/about"
              style={{
                border: "1px solid rgba(0,92,151,0.35)",
                color: "#005c97",
                padding: "1.2rem 2.5rem",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,92,151,0.05)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", marginBottom: "4rem" }}>
          {[
            {
              title: "100% Legal Compliance",
              desc: "Every Pan Infra project is fully HMDA or DTCP approved. Clear title deeds, zero legal encumbrances, and complete documentation transparency from day one.",
              icon: "✓"
            },
            {
              title: "Prime Locations Only",
              desc: "We handpick locations in Hyderabad's fastest-appreciating corridors — Shadnagar, Kokapet, Mokila, Tukkuguda — backed by deep infrastructure research and government masterplan analysis.",
              icon: "📍"
            },
            {
              title: "World-Class Infrastructure",
              desc: "Wide BT roads (40-60ft), underground electrical lines, water supply pipelines, street lighting, and landscaped parks — all built before handover.",
              icon: "🏗️"
            },
            {
              title: "Transparent Pricing",
              desc: "No hidden costs. No last-minute surprises. What you see is what you pay — plot price, registration, and statutory charges clearly itemized upfront.",
              icon: "💰"
            },
            {
              title: "Post-Sale Support",
              desc: "Dedicated relationship manager for mutation, EC support, resale assistance, and property appreciation advisory. We stay with you long after the sale.",
              icon: "🤝"
            },
            {
              title: "NRI-Friendly Process",
              desc: "Virtual site tours, POA assistance, FEMA-compliant transactions, and dedicated support for overseas buyers. Invest from anywhere in the world.",
              icon: "🌏"
            },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(0,92,151,0.12), 0 0 0 1px rgba(0,92,151,0.2)" }}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,92,151,0.12)",
                padding: "2.5rem 2rem",
                position: "relative",
                borderRadius: "8px",
                cursor: "default",
                transition: "all 0.3s",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#ee2e22" }}>{benefit.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                  fontSize: "1.35rem",
                  color: "#005c97",
                  marginBottom: "1rem",
                  fontWeight: 600,
                }}
              >
                {benefit.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#2d6a9f", margin: 0 }}>
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Numbers & Credibility ─────────────────── */}
      <section style={{ background: "rgba(0,92,151,0.06)", padding: "5rem 2.5rem", borderTop: "1px solid rgba(0,92,151,0.1)", borderBottom: "1px solid rgba(0,92,151,0.1)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "4rem", textAlign: "center" }}>
            {[
              { num: "2500+", label: "Happy Families" },
              { num: "50+", label: "Projects Delivered" },
              { num: "3000", label: "Acres Developed" },
              { num: "100%", label: "HMDA/DTCP Approved" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.06 }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                    fontSize: "clamp(2.5rem,5vw,4rem)",
                    color: "#ee2e22",
                    marginBottom: "0.5rem",
                    fontWeight: 700,
                  }}
                >
                  {stat.num}
                </h3>
                <p style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "#4a7fa3", textTransform: "uppercase", fontWeight: 600 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Pan Infra Journey ───────────────────── */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "6rem 2.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              color: "#005c97",
              marginBottom: "1rem",
              fontWeight: 700,
            }}
          >
            Your Journey with Pan Infra
          </h2>
          <p style={{ fontSize: "1rem", color: "#2d6a9f", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
            From the first site visit to the day you hold your plot documents — a seamless, transparent, and customer-first experience.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem" }}>
          {[
            {
              step: "01",
              title: "Discovery & Consultation",
              desc: "Share your requirements, budget, and investment goals. Our expert advisors help you shortlist the perfect properties.",
            },
            {
              step: "02",
              title: "Site Visit & Selection",
              desc: "Guided site tours with our team. Explore the location, infrastructure, amenities, and neighbourhood — at your pace.",
            },
            {
              step: "03",
              title: "Documentation Review",
              desc: "Complete transparency: HMDA/DTCP approvals, EC, title deed, layout plan, and NOCs — all verified and shared before booking.",
            },
            {
              step: "04",
              title: "Booking & Payment",
              desc: "Transparent pricing with itemized costs. Flexible payment plans. Legal assistance for registration and mutation.",
            },
            {
              step: "05",
              title: "Handover & Beyond",
              desc: "Plot handover with complete documentation. Post-sale support for EC updates, mutation, resale, and property advisory.",
            },
          ].map((phase, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div
                style={{
                  fontSize: "3.5rem",
                  fontFamily: "'Arial Black', 'Impact', sans-serif",
                  color: "#ee2e22",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                }}
              >
                {phase.step}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                  fontSize: "1.3rem",
                  color: "#005c97",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {phase.title}
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#2d6a9f", margin: 0 }}>
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3D Service Cards Grid ─────────────────── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem", background: "rgba(0,92,151,0.04)", borderRadius: "24px", marginBottom: "4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              color: "#005c97",
              marginBottom: "1rem",
              fontWeight: 700,
            }}
          >
            Our Premium Offerings
          </h2>
          <p style={{ fontSize: "1rem", color: "#2d6a9f", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
            Eight specialized real estate solutions designed for every investment need and lifestyle aspiration.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "0",
          }}
        >
          {SERVICES.map((service) => (
            <CardContainer key={service.tag} containerClassName="py-8 px-4">
              <CardBody
                className="relative"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,92,151,0.12)",
                  width: "320px",
                  height: "auto",
                  boxShadow: "0 4px 20px rgba(0,92,151,0.06)",
                  borderRadius: "16px",
                  overflow: "hidden"
                }}
              >
                {/* Image */}
                <CardItem translateZ={80} className="w-full">
                  <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
                    <Image
                      src={service.imgUrl}
                      alt={service.heading}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="320px"
                    />
                  </div>
                </CardItem>

                {/* Tag + Heading */}
                <CardItem
                  translateZ={60}
                  className="w-full"
                  style={{ padding: "1.5rem 1.5rem 0" }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.6rem" }}>
                    <span style={{ color: "#ee2e22", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                      {service.tag}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                        fontSize: "1.25rem",
                        color: "#005c97",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {service.heading}
                    </h2>
                  </div>
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ={40}
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.75,
                    color: "#2d6a9f",
                    padding: "0 1.5rem",
                    margin: 0,
                  }}
                >
                  {service.content}
                </CardItem>

                {/* CTA */}
                <CardItem
                  translateZ={20}
                  style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", justifyContent: "flex-end" }}
                >
                  <Link
                    href="/contact"
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      color: "#ee2e22",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontWeight: 600,
                      borderBottom: "1px solid rgba(238, 46, 34,0.3)",
                      paddingBottom: "2px",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderBottomColor = "#ee2e22"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderBottomColor = "rgba(238, 46, 34,0.3)"; }}
                  >
                    Enquire Now <FiArrowUpRight />
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <section style={{ background: "#005c97", padding: "6rem 2.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", color: "#ee2e22", marginBottom: "1.5rem" }}>
            Ready to invest in Hyderabad real estate?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              color: "#ffffff",
              marginBottom: "2.5rem",
              lineHeight: 1.1,
            }}
          >
            Book a Free Site Visit Today.
          </h2>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.5rem",
              background: "#ee2e22",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              fontWeight: 500,
              borderRadius: "4px",
            }}
          >
            Get In Touch <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
