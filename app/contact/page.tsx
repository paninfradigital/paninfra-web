import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact Pan Infra | Book a Free Site Visit — Plots & Villas Hyderabad",
  description: "Contact Pan Infra — Hyderabad's trusted real estate developer. Book a free site visit for premium plots and villas in Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda and across Hyderabad. Call us or fill in the enquiry form.",
  path: "/contact",
  keywords: [
    "contact Pan Infra", "book site visit Hyderabad", "real estate enquiry Hyderabad",
    "plots enquiry Hyderabad", "villa enquiry Hyderabad",
    "Pan Infra contact", "real estate contact Hyderabad",
    "buy plot Hyderabad contact", "NRI real estate enquiry Hyderabad",
    "property enquiry Shadnagar", "property enquiry Mokila", "property enquiry Kokapet",
  ],
});

export default function ContactPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ background: "#005c97", padding: "10rem 2.5rem 6rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#ee2e22", marginBottom: "2rem" }}>Get In Touch</p>
          <h1 style={{ fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)", fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1, color: "#ffffff" }}>
            Let&apos;s Find Your Perfect Property
          </h1>
        </div>
      </section>

      {/* Body */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 2.5rem", display: "grid", gridTemplateColumns: "1fr", gap: "4rem", background: "#FFFFF2" }} className="md:grid-cols-2">
        {/* Info */}
        <div>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "#ee2e22", marginBottom: "2rem" }}>Corporate Office</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "3rem" }}>
            {[
              { label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
              { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { label: "Address", value: SITE.address, href: undefined },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", color: "#4a7fa3", marginBottom: "0.35rem" }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: "1rem", color: "#005c97", textDecoration: "none", fontWeight: 500 }}>{item.value}</a>
                ) : (
                  <p style={{ fontSize: "1rem", color: "#005c97", fontWeight: 500 }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Map */}
          <div style={{ border: "1px solid rgba(0,92,151,0.15)", overflow: "hidden", borderRadius: "0.25rem" }}>
            <iframe
              title="Pan Infra office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6474385959744!2d78.3759197!3d17.4330803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91232008a82f%3A0x1e38fc6bdd694d76!2sPANINFRA%20SPACE%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              style={{ width: "100%", height: "320px", display: "block", border: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </section>
    </>
  );
}
