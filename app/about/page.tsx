import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { TIMELINE } from "@/lib/constants";
import { AboutParallax } from "@/components/AboutParallax/AboutParallax";


export const metadata: Metadata = buildMetadata({
  title: "About Pan Infra | Top Real Estate Developer Hyderabad — 7 Powerful Reasons to Choose Us",
  description: "Pan Infra — Hyderabad's trusted real estate developer since 2010. 1,000+ families. 800+ acres. 15+ projects. HMDA & DTCP approved plots, premium villas, and gated communities across Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda and all Hyderabad growth corridors.",
  path: "/about",
  keywords: [
    "about Pan Infra", "Pan Infra Hyderabad", "real estate developer Hyderabad",
    "best real estate company Hyderabad", "property developer Hyderabad",
    "HMDA approved developer Hyderabad", "DTCP approved plots Hyderabad",
    "trusted real estate Hyderabad", "real estate Shadnagar", "real estate Mokila",
    "real estate Kokapet", "real estate Telangana",
  ],
});

export default function AboutPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Dark hero */}
      <section style={{
        background: "#0A1628",
        padding: "6rem 2.5rem 4rem",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          opacity: 0.08,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <div style={{ width: "28px", height: "1px", background: "#ffffff" }} />
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ffffff" }}>About Pan Infra</p>
            <div style={{ width: "28px", height: "1px", background: "#ffffff" }} />
          </div>
          <h1 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.5rem,7vw,5.5rem)",
            lineHeight: 1, color: "#ffffff",
            margin: "0 auto 2.5rem",
            fontWeight: 700,
          }}>
            Hyderabad&apos;s Most Trusted Real Estate Developer
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", margin: "0 auto", maxWidth: "600px", lineHeight: 1.8 }}>
            Since 2010, Pan Infra has been delivering HMDA &amp; DTCP approved plots, premium villas, and integrated gated communities across Hyderabad&apos;s fastest-growing corridors.
          </p>
        </div>
      </section>

      {/* Philosophy — split layout */}
      <section style={{
        maxWidth: "900px", margin: "0 auto",
        padding: "5rem 2.5rem",
        textAlign: "center",
        background: "#FFFFF2",
      }}>
        <div style={{ marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#ee2e22", marginBottom: "1.5rem" }}>Our Mission</p>
          <h2 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.2rem,5vw,3.75rem)",
            lineHeight: 1.1, color: "#005c97", marginBottom: "2.5rem",
          }}>
            Real Estate That Builds Real Wealth
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#2d6a9f", marginBottom: "1.5rem", maxWidth: "700px", margin: "0 auto 1.5rem" }}>
            At Pan Infra, we believe every family deserves access to premium real estate with complete transparency, legal clarity, and lasting appreciation potential.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#2d6a9f", marginBottom: "3.5rem", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            Every project begins with deep location research — understanding infrastructure pipelines, government master plans, and the long-term growth potential before a single plot is offered.
          </p>
          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ n: "1,000+", l: "Families" }, { n: "800+", l: "Acres" }, { n: "15+", l: "Projects" }].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "2.5rem", color: "#005c97", fontWeight: 600, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#ee2e22", marginTop: "0.5rem" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", marginTop: "3rem" }}>
          <div style={{ position: "relative", height: "380px", overflow: "hidden", borderRadius: "1.5rem", background: "rgba(0,0,0,0.2)" }} className="img-zoom">
            <div className="zoom-inner" style={{ position: "absolute", inset: 0 }}>
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Pan Infra real estate development Hyderabad" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 80vw" />
            </div>
          </div>
          <div style={{
            position: "absolute", top: "2rem", right: "2rem",
            background: "rgba(17,17,17,0.9)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(238, 46, 34,0.3)",
            padding: "1.25rem 1.5rem", textAlign: "center",
            borderRadius: "0.5rem",
          }}>
            <span style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "2.25rem", color: "#ee2e22", lineHeight: 1 }}>2010</span>
            <p style={{ fontSize: "0.5rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginTop: "0.3rem" }}>Est.</p>
          </div>
        </div>
      </section>

      {/* Parallax Content Flow */}
      <AboutParallax />

      {/* Timeline */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2.5rem", background: "#FFFFF2" }} aria-label="Timeline">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", color: "#ee2e22", marginBottom: "1.5rem" }}>Our Journey</p>
          <h2 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.2rem,5vw,3.75rem)",
            lineHeight: 1, color: "#005c97",
          }}>
            Company Milestones
          </h2>
        </div>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {TIMELINE.map((item) => (
              <li key={item.year} style={{
                display: "grid", gridTemplateColumns: "100px 1fr",
                gap: "2rem", padding: "1.75rem 0",
                borderTop: "1px solid rgba(0,92,151,0.12)",
                alignItems: "start",
                textAlign: "left",
              }}>
                <p style={{
                  fontFamily: "var(--font-playfair,Georgia,serif)",
                  fontSize: "1.5rem", color: "#ee2e22", fontWeight: 600,
                  lineHeight: 1,
                }}>{item.year}</p>
                <p style={{ fontSize: "1.05rem", color: "#2d6a9f", lineHeight: 1.85 }}>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: "#0A1628", padding: "4rem 2.5rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem" }}>Book a Site Visit</p>
        <h2 style={{
          fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
          fontSize: "clamp(2rem,4.5vw,3.75rem)",
          color: "#ffffff", marginBottom: "2.5rem", lineHeight: 0.95,
        }}>
          Let&apos;s Find Your Perfect Property
        </h2>
        <Link
          href="/contact"
          className="btn-white-hover"
          style={{
            display: "inline-flex", alignItems: "center",
            fontSize: "0.6rem", letterSpacing: "0.3em",
            textDecoration: "none", padding: "1rem 2.25rem",
            border: "1px solid #ffffff", color: "#ffffff",
          }}
        >
          Contact Us Today →
        </Link>
      </section>
    </>
  );
}
