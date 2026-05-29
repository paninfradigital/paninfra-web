import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Pan Infra",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "10rem 2.5rem 6rem",
        background: "#fffff2",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "720px" }}>
        <h1
          style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(3rem,8vw,6rem)",
            lineHeight: 1,
            color: "#005c97",
            marginBottom: "1.5rem",
          }}
        >
          Thank you
        </h1>
        <p
          style={{
            color: "#1f3f56",
            fontSize: "clamp(1rem,2vw,1.25rem)",
            lineHeight: 1.7,
          }}
        >
          Your data has successfully submitted. Our team will get back you shortly
        </p>
      </div>
    </section>
  );
}
