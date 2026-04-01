"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Prashanth Kumar",
    initial: "P",
    color: "#4285F4",
    time: "16 days ago",
    rating: 5,
    text: "Best for investment. Pan Infra provided excellent plots at great locations. Highly recommend to anyone looking to invest in Hyderabad real estate.",
  },
  {
    name: "M Pravalika",
    initial: "M",
    color: "#34A853",
    time: "19 days ago",
    rating: 5,
    text: "I recently purchased a plot here. I liked the way they treat the customers — the staff were amazing and the documentation process was very smooth and transparent.",
  },
  {
    name: "Sindhu Paladhi",
    initial: "S",
    color: "#EA4335",
    time: "19 days ago",
    rating: 5,
    text: "I recently purchased a plot here. The paperwork is very smooth and the employees were very helpful throughout the entire process. Great experience overall.",
  },
  {
    name: "Honey Ammulu",
    initial: "H",
    color: "#FBBC05",
    time: "1 month ago",
    rating: 5,
    text: "Value for investment, good staff. Got a plot for a reasonable price. The entire team was supportive and made the process very easy for us.",
  },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function GoogleReviews() {
  return (
    <section style={{ padding: "5rem 2.5rem", background: "#FFFFF2" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", color: "#ee2e22", fontWeight: 700, marginBottom: "1.25rem", textTransform: "uppercase" }}>
            Google Reviews
          </p>
          <h2 style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
            color: "#005c97",
            marginBottom: "1.75rem",
            lineHeight: 1,
            fontWeight: 800,
          }}>
            What Our Clients Say
          </h2>
          <div style={{ width: "80px", height: "2px", background: "#ee2e22", margin: "0 auto" }} />
        </motion.div>

        {/* Google Reviews summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            background: "#ffffff",
            border: "1px solid rgba(0,92,151,0.1)",
            borderRadius: "12px",
            padding: "1.25rem 1.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <GoogleLogo />
              <span style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a" }}>Reviews</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1a1a1a" }}>4.7</span>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
              </div>
              <span style={{ fontSize: "0.85rem", color: "#666" }}>(95)</span>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/Pan+Infra+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#ffffff",
              background: "#4285F4",
              padding: "0.6rem 1.25rem",
              borderRadius: "6px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Review us on Google
          </a>
        </motion.div>

        {/* Review cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
        }}>
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,92,151,0.1)",
                borderRadius: "12px",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {/* Reviewer info */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: review.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{review.initial}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a" }}>{review.name}</span>
                    {/* Verified badge */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#4285F4">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#4285F4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "1px" }}>
                    <GoogleLogo />
                    <span style={{ fontSize: "0.72rem", color: "#888" }}>{review.time}</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "2px" }}>
                {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
              </div>

              {/* Review text */}
              <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.65, margin: 0 }}>
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
