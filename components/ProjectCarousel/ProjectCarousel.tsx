"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/constants";

const BADGE_MAP: Record<string, string> = {
  "Open Villa Plots": "HMDA & DTCP Approved",
  "Residential Plots": "HMDA & DTCP Approved",
  "Gated Community": "Open for Registration",
  "Premium Villas": "New Launch",
  "Commercial": "Prime Location",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
    >
      <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div
          className="project-card-hover"
          style={{
            background: "#ffffff",
            borderRadius: "1rem",
            overflow: "hidden",
            border: "1px solid rgba(0,92,151,0.12)",
            transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,92,151,0.35)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(0,92,151,0.1)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,92,151,0.12)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          }}
        >
          {/* Image — 1:1 */}
          <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden" }}>
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
              className="project-img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Badge */}
            <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
              <span style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "#ffffff",
                background: "#ee2e22",
                borderRadius: "9999px",
                padding: "0.35rem 0.9rem",
                whiteSpace: "nowrap",
              }}>
                {BADGE_MAP[project.category] ?? project.category}
              </span>
            </div>
          </div>

          {/* Text */}
          <div style={{ padding: "1.4rem 1.5rem 1.6rem" }}>
            <h3 style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#005c97",
              marginBottom: "0.4rem",
              lineHeight: 1.2,
            }}>
              {project.title}
            </h3>
            <p style={{ fontSize: "0.8rem", color: "#4a7fa3", marginBottom: "0.5rem", letterSpacing: "0.02em" }}>
              {project.location}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#ee2e22", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {project.category}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <section style={{ background: "#FFFFF2", padding: "3rem 2.5rem" }} aria-label="Featured projects">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "3.5rem" }}
      >
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22", textTransform: "uppercase", marginBottom: "1rem" }}>
          Our Projects
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
          fontSize: "clamp(2rem,4vw,3.25rem)",
          fontWeight: 800,
          color: "#005c97",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}>
          Premium Land,{" "}
          <span style={{ color: "#ee2e22" }}>Timeless Value</span>
        </h2>
        <Link
          href="/projects"
          style={{
            fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
            textDecoration: "none", color: "#005c97",
            borderBottom: "1px solid rgba(0,92,151,0.4)", paddingBottom: "3px",
            fontWeight: 600, transition: "color 0.3s, border-color 0.3s",
          }}
        >
          View All →
        </Link>
      </motion.div>

      {/* 2-column grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        maxWidth: "960px",
        margin: "0 auto",
      }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

    </section>
  );
}
