import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

// ─── Shared keyword bank ─────────────────────────────────────────────────────
export const KEYWORDS = [
  "Pan Infra", "Pan Infra Hyderabad", "Pan Infra realty",
  "real estate company Hyderabad", "best real estate company Hyderabad",
  "plots for sale Hyderabad", "villas for sale Hyderabad",
  "premium plots Hyderabad", "premium villas Hyderabad",
  "residential plots Hyderabad", "gated community Hyderabad",
  "HMDA approved plots Hyderabad", "DTCP approved plots Hyderabad",
  "plots near ORR Hyderabad", "investment plots Hyderabad",
  "plots in Shadnagar", "plots near Shadnagar Hyderabad",
  "plots in Mokila", "gated community Mokila",
  "villas in Kokapet", "plots in Kokapet Hyderabad",
  "plots in Adibatla", "villa plots Adibatla",
  "plots in Tukkuguda", "real estate Tukkuguda",
  "plots in Kompally", "plots in Shamirpet",
  "NRI plots Hyderabad", "NRI investment Hyderabad real estate",
  "commercial plots Gachibowli", "commercial real estate Hyderabad",
  "luxury villas Hyderabad", "3 BHK villa Hyderabad",
  "4 BHK villa Hyderabad", "independent house Hyderabad",
  "township Hyderabad", "integrated township Hyderabad",
  "property in Hyderabad", "buy property Hyderabad",
  "real estate investment Hyderabad", "property developer Hyderabad",
  "Telangana real estate", "RERA approved plots Hyderabad",
];

const BASE_DESCRIPTION =
  "Pan Infra — Hyderabad's most trusted real estate developer. HMDA & DTCP approved premium residential plots, luxury villas, and gated communities across Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda and all Hyderabad growth corridors. 1,000+ families housed. 15+ projects. 800+ acres.";

const OG_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=630";

// ─── Default (root layout) metadata ─────────────────────────────────────────
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: `${SITE.name} | Best Real Estate Company in Hyderabad | Premium Plots & Villas`,
    template: `%s | ${SITE.name}`,
  },
  description: BASE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: SITE.name, url: SITE.siteUrl }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Real Estate",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/images/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.siteUrl,
    siteName: SITE.name,
    title: `${SITE.name} | Best Real Estate Company in Hyderabad | Premium Plots & Villas`,
    description: BASE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE.name} — premium plots and villas in Hyderabad, Telangana` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@paninfra",
    creator: "@paninfra",
    title: `${SITE.name} | Premium Plots & Villas Hyderabad`,
    description: BASE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: `${SITE.name} — premium real estate developer, Hyderabad` }],
  },
  alternates: { canonical: "/" },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad, Telangana, India",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867",
    "coverage": "Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda, Kompally, Shamirpet, Gachibowli, Hyderabad, Telangana",
    "classification": "Real Estate, Property Developer, Residential Plots, Villas",
    "language": "English",
    "revisit-after": "7 days",
    "rating": "general",
    "DC.language": "en-IN",
    "DC.coverage": "Hyderabad, Telangana, India",
    "DC.subject": "Real Estate, Residential Plots, Premium Villas, Gated Communities, Hyderabad",
  },
};

// ─── Per-page metadata builder ───────────────────────────────────────────────
type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export const buildMetadata = ({ title, description, path = "/", image = OG_IMAGE, keywords }: SeoProps): Metadata => ({
  title,
  description,
  keywords: keywords ?? KEYWORDS,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | ${SITE.name}`,
    description,
    url: `${SITE.siteUrl}${path}`,
    images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${SITE.name}, Premium Real Estate Hyderabad` }],
  },
  twitter: {
    title: `${title} | ${SITE.name}`,
    description,
    images: [image],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad, Telangana, India",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867",
    "coverage": "Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda, Gachibowli, Hyderabad",
    "classification": "Real Estate, Residential Plots, Premium Villas",
    "language": "English",
  },
});

// ─── Organization / LocalBusiness JSON-LD ───────────────────────────────────
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE.siteUrl}/#organization`,
  name: SITE.legalName,
  alternateName: ["Pan Infra", "Pan Infra", "Pan Infra Realty"],
  url: SITE.siteUrl,
  email: SITE.email,
  telephone: SITE.phone,
  foundingDate: "2010",
  description: BASE_DESCRIPTION,
  image: OG_IMAGE,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7th floor Dallas Centre, 83/1, Knowledge City Rd, Rai Durg",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500032",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "17.4126", longitude: "78.4071" },
  areaServed: [
    { "@type": "City", name: "Hyderabad", sameAs: "https://en.wikipedia.org/wiki/Hyderabad" },
    { "@type": "Neighborhood", name: "Shadnagar", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Mokila", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Kokapet", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Adibatla", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Tukkuguda", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Kompally", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Shamirpet", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Gachibowli", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Rai Durg", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Jubilee Hills", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Narsingi", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Nanakramguda", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Maheshwaram", containedInPlace: "Hyderabad" },
    { "@type": "Neighborhood", name: "Ghatkesar", containedInPlace: "Hyderabad" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Properties & Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Plots", description: "HMDA & DTCP approved premium residential plots in Shadnagar, Mokila, Adibatla, Tukkuguda and top Hyderabad growth corridors." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Premium Villas", description: "Architect-designed luxury 3 & 4 BHK villas in gated communities across Hyderabad's most prestigious locations." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gated Communities", description: "Integrated gated townships with clubhouse, parks, and resort-style amenities near ORR Hyderabad." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Plots", description: "Prime commercial real estate plots in Gachibowli, HITEC City and key business districts of Hyderabad." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Villa Plots", description: "Large-format villa plots in exclusive enclaves — build your dream home on your terms." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI Investment", description: "Dedicated NRI real estate services with virtual site visits, transparent documentation, and hassle-free transactions." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Investment Properties", description: "High-appreciation real estate investments in upcoming Hyderabad micro-markets with 3–5× growth potential." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Management", description: "Comprehensive property management including documentation, legal assistance, and resale support across Hyderabad." } },
    ],
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312", bestRating: "5", worstRating: "1" },
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
};

// ─── Breadcrumb JSON-LD helper ───────────────────────────────────────────────
export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE.siteUrl}${item.url}`,
  })),
});

// ─── FAQ JSON-LD helper ──────────────────────────────────────────────────────
export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});
