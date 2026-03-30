"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/constants";

const SECTIONS = [
  {
    imgUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
    subheading: "Our Process",
    heading: "Every property purchase begins with trust.",
    content: {
      heading: "Transparent from Day One",
      tag: "01 — Transparency",
      body: [
        "At Pan Infra, we believe buying real estate should be simple, honest, and stress-free. Every project comes with complete legal documentation, HMDA or DTCP approvals, and clear title deeds — no hidden charges, no last-minute surprises.",
        "Our buying process is structured in four clear steps: Site Visit, Documentation Review, Registration, and Handover. We assign a dedicated relationship manager to guide you at every stage, so you always know exactly where your investment stands.",
        "We believe the best real estate transactions are built on transparency. Our team provides detailed layout maps, government approvals, and payment schedules upfront — because an informed buyer is a confident buyer.",
      ],
      stats: [
        { n: "4", l: "Simple Steps" },
        { n: "100%", l: "Legal Clarity" },
        { n: "0", l: "Hidden Charges" },
      ],
    },
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000",
    subheading: "Our Quality",
    heading: "Infrastructure that stands the test of time.",
    content: {
      heading: "Premium Development Standards",
      tag: "02 — Quality",
      body: [
        "Every Pan Infra project is developed to the highest infrastructure standards — wide BT roads, underground electricity, water supply, drainage, compound walls, and landscaped green spaces. We don't just sell land; we build communities.",
        "Our in-house project management team oversees every phase of development — from land acquisition and layout design to road construction and amenity development. Nothing is compromised in the pursuit of quality.",
        "Quality is a long-term commitment. We remain available post-handover for documentation support, resale assistance, and property management — because our relationship with customers doesn't end at registration.",
      ],
      stats: [
        { n: "800+", l: "Acres Developed" },
        { n: "15+", l: "Projects Delivered" },
        { n: "100%", l: "On-time Handover" },
      ],
    },
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=2000",
    subheading: "Our Vision",
    heading: "Hyderabad's growth corridors are your opportunity.",
    content: {
      heading: "Investing in the Right Locations",
      tag: "03 — Location Strategy",
      body: [
        "Hyderabad is one of India's fastest-growing cities, and our projects are strategically positioned in the micro-markets with the highest appreciation potential — Shadnagar on NH-44, Mokila near the ORR, Kokapet in the Financial District, and Adibatla near the aerospace corridor.",
        "We study infrastructure pipelines, government masterplans, and employment hub growth before acquiring any land. This rigorous location strategy has delivered 3× to 5× appreciation for our early investors across multiple projects.",
        "Our vision is to make premium real estate accessible to every Hyderabad family — whether you're buying your first plot, upgrading to a luxury villa, or seeking high-yield investment opportunities. Every Pan Infra property is a step towards a better future.",
      ],
      stats: [
        { n: "5×", l: "Appreciation in Key Projects" },
        { n: "1,000+", l: "Happy Families" },
        { n: "∞", l: "Growth Potential" },
      ],
    },
  },
];

export const AboutParallax = () => (
  <div style={{ paddingBottom: "2rem" }}>
    {SECTIONS.map((s) => (
      <TextParallaxContent
        key={s.subheading}
        imgUrl={s.imgUrl}
        subheading={s.subheading}
        heading={s.heading}
      >
        <SectionContent {...s.content} />
      </TextParallaxContent>
    ))}
  </div>
);

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}) => (
  /* px-0 on mobile, px-3 on md+ so image is edge-to-edge on small screens */
  <div className="px-0 md:px-3 mb-6 md:mb-0">
    <div className="relative h-[50vh] md:h-[70vh]">
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy heading={heading} subheading={subheading} />
    </div>
    {children}
  </div>
);

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scale,
      }}
      /* rounded-none on mobile, rounded-2xl on md+ */
      className="sticky z-0 overflow-hidden top-3 h-[50vh] md:h-[calc(70vh-24px)] rounded-none md:rounded-2xl"
    >
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
      }} />
      <motion.div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.5)", opacity }} />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-[50vh] md:h-[70vh] w-full flex-col items-center justify-center text-white px-8 md:px-16"
    >
      <p style={{
        fontSize: "0.55rem",
        letterSpacing: "0.4em",
        
        color: "#ee2e22",
        marginBottom: "1.1rem",
        textAlign: "center",
      }}>
        {subheading}
      </p>
      <p style={{
        fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
        fontSize: "clamp(1.6rem,5vw,4.5rem)",
        fontWeight: 700,
        textAlign: "center",
        maxWidth: "680px",
        lineHeight: 1.18,
        padding: "0 1rem",
      }}>
        {heading}
      </p>
    </motion.div>
  );
};

const SectionContent = ({
  heading,
  tag,
  body,
  stats,
}: {
  heading: string;
  tag: string;
  body: string[];
  stats: { n: string; l: string }[];
}) => (
  <div style={{
    maxWidth: "800px",
    margin: "0 auto",
    padding: "4rem 2rem",
    textAlign: "center",
    position: "relative"
  }}>

    {/* Tag */}
    <p style={{
      fontSize: "0.6rem",
      letterSpacing: "0.45em",
      color: "#ee2e22",
      
      marginBottom: "2.5rem",
    }}>
      {tag}
    </p>

    {/* Section Heading */}
    <h3 style={{
      fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
      fontSize: "clamp(2rem, 5vw, 4rem)",
      color: "#005c97",
      lineHeight: 1.1,
      fontWeight: 700,
      marginBottom: "2rem",
    }}>
      {heading}
    </h3>

    {/* Body text */}
    <div style={{ marginBottom: "2.5rem" }}>
      {body.map((para, i) => (
        <p key={i} style={{
          fontSize: "1.1rem",
          lineHeight: 2,
          color: "#2d6a9f",
          marginBottom: "2.5rem",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 2.5rem"
        }}>
          {para}
        </p>
      ))}
    </div>

    {/* Stats — centered row */}
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "3rem",
      marginBottom: "2.5rem"
    }}>
      {stats.map(s => (
        <div key={s.l} style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-playfair,Georgia,serif)",
            fontSize: "2.5rem",
            color: "#005c97",
            fontWeight: 600,
            lineHeight: 1,
          }}>{s.n}</div>
          <div style={{
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            
            color: "#ee2e22",
            marginTop: "0.75rem",
          }}>{s.l}</div>
        </div>
      ))}
    </div>

    {/* CTA button */}
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          fontSize: "0.75rem",
          letterSpacing: "0.25em",
          
          textDecoration: "none",
          padding: "1.5rem 3.5rem",
          background: "#ee2e22",
          color: "#ffffff",
          fontWeight: 800,
          transition: "all 0.4s ease",
          border: "2px solid #ee2e22",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        WhatsApp Us
      </a>
    </div>
  </div>
);
