"use client";

import { useEffect } from "react";
import Script from "next/script";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO SET UP (free, takes ~2 minutes — exactly like Instagram):
//  1. Go to https://elfsight.com/google-reviews-widget/
//  2. Sign up free → connect your Google Business Profile → copy your App ID
//  3. Paste the App ID below (looks like: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
// ─────────────────────────────────────────────────────────────────────────────
const ELFSIGHT_APP_ID = "e1f64fcf-16f1-4fc5-bb6c-6f7a1b43bd5a";

export default function GoogleReviews() {
  useEffect(() => {
    // Re-process widget if Elfsight script already loaded (page nav)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const eapps = (window as any).eapps;
    if (eapps?.AppsManager?.initialize) {
      eapps.AppsManager.initialize();
    }
  }, []);

  return (
    <section style={{ padding: "5rem 2.5rem", background: "#FFFFF2" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p style={{
            fontSize: "0.7rem", letterSpacing: "0.35em", color: "#ee2e22",
            fontWeight: 700, marginBottom: "1.25rem", textTransform: "uppercase",
          }}>
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
        </div>

        {/* Widget embed — force light theme */}
        <style>{`
          .elfsight-app-${ELFSIGHT_APP_ID},
          .elfsight-app-${ELFSIGHT_APP_ID} * {
            color-scheme: light !important;
          }
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="wrapper"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="container"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="card"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="review"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="item"] {
            background: #ffffff !important;
            background-color: #ffffff !important;
          }
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="text"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="name"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="author"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="title"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="summary"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="total"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="rating-value"],
          .elfsight-app-${ELFSIGHT_APP_ID} [class*="reviews-count"],
          .elfsight-app-${ELFSIGHT_APP_ID} p,
          .elfsight-app-${ELFSIGHT_APP_ID} span,
          .elfsight-app-${ELFSIGHT_APP_ID} h3,
          .elfsight-app-${ELFSIGHT_APP_ID} h4 {
            color: #1a4f7a !important;
          }
        `}</style>
        <div style={{ width: "100%", minHeight: "480px" }}>
          <div
            className={`elfsight-app-${ELFSIGHT_APP_ID}`}
            data-elfsight-app-lazy
          />
        </div>

      </div>

      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
