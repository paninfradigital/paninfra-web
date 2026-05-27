export type ProjectCategory = "Residential Plots" | "Premium Villas" | "Gated Community" | "Commercial" | "Open Villa Plots";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;
  heroImage: string;
  location: string;
  year: string;
  client: string;
  area: string;
  description: string;
  gallery: string[];
  highlights?: string[];
  masterLayoutPdf?: string;
  videos?: string[];
};

export const SITE = {
  name: "Pan Infra",
  legalName: "Pan Infra.",
  siteUrl: "https://paninfra.com",
  email: "info@paninfra.com",
  phone: "+91 8999 666 888",
  whatsapp: "https://api.whatsapp.com/send/?phone=918999666888&text=Hi%2C%0D%0AHow+can+we+help+you+today%21&type=phone_number&app_absent=0",
  address: "A1, 7th floor Dallas Centre, 83/1, Knowledge City Rd, Rai Durg, Hyderabad, Telangana 500032",
  social: {
    instagram: "https://www.instagram.com/paninfra/",
    facebook: "https://www.facebook.com/PanInfra/",
    linkedin: "https://www.linkedin.com/company/paninfra-space-private-limited/?originalSubdomain=in",
    twitter: "https://x.com/paninfra",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-paninfra", label: "Why Paninfra" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    title: "Residential Plots",
    description: "HMDA & DTCP approved premium residential plots in Hyderabad's most sought-after growth corridors.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Premium Villas",
    description: "Architect-designed luxury 3 & 4 BHK villas with world-class amenities and gated security.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Gated Communities",
    description: "Integrated townships with clubhouse, parks, and premium lifestyle amenities.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Commercial Spaces",
    description: "Prime commercial plots and office spaces in Hyderabad's key business districts.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Villa Plots",
    description: "Large-format villa plots offering freedom to build your dream home with custom architecture.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Investment Properties",
    description: "High-appreciation investment plots in upcoming micro-markets with strong ROI potential.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "NRI Corner",
    description: "Dedicated NRI services — transparent transactions, virtual tours, and assisted documentation.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Property Management",
    description: "End-to-end property management, documentation support, and resale assistance.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We bought a plot in the Janwada Project and the entire process was completely transparent. The team guided us through every step. Best investment we've made.",
    name: "R. Sharma",
    role: "Plot Owner, Janwada Project",
  },
  {
    quote:
      "Our villa in Dukes Western County exceeded expectations. Premium construction quality, beautiful landscaping, and an amazing community to live in.",
    name: "K. Reddy",
    role: "Villa Owner, Dukes Western County — Mokila",
  },
  {
    quote:
      "As an NRI investor, I was initially skeptical about buying property remotely. Pan Infra made it seamless with Kakatiya Daimond Heights.",
    name: "S. Patel",
    role: "NRI Investor, Shadnagar",
  },
] as const;

export const TEAM = [
  {
    name: "Ramesh Gupta",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Priya Nair",
    role: "Director — Sales & Marketing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Anil Kumar",
    role: "Head of Projects",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
] as const;

export const TIMELINE = [
  { year: "2010", text: "Pan Infra founded with a vision to redefine affordable luxury real estate in Hyderabad." },
  { year: "2015", text: "First 500+ plot community launched in Shadnagar — sold out within 60 days." },
  { year: "2019", text: "Expanded into premium villas and gated communities across ORR growth corridors." },
  { year: "2024", text: "1,000+ families housed across 15+ projects spanning 800+ acres in Hyderabad." },
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "janwada-project",
    title: "Janwada Farmhouse",
    category: "Open Villa Plots",
    coverImage: "/covers/NEOPOLIS_JANWADA.png",
    heroImage: "/covers/NEOPOLIS_JANWADA.png",
    location: "Janwada, Hyderabad",
    year: "2024",
    client: "Open for Booking",
    area: "85 Acres · 450 Plots",
    description:
      "Janwada Farmhouse offers premium open farmhouse plots in the serene, green belt of Janwada — one of Hyderabad's most sought-after villa corridors. Escape the city without leaving it behind. These HMDA-approved farmhouse plots are ideal for weekend retreats, private farmsteads, or long-term investment in appreciating land.",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  {
    slug: "kumbasthala-tech-city",
    title: "KumbaSthala Tech City",
    category: "Gated Community",
    coverImage: "/covers/KAKATIYA.png",
    heroImage: "/covers/KAKATIYA.png",
    location: "Kadthal, Hyderabad",
    year: "2024",
    client: "Ready to Move",
    area: "110 Acres · 600 Apartments",
    description:
      "Kakatiya Diamond Heights is a ready-to-move premium apartment community nestled in the lush surroundings of Velimala. Thoughtfully designed residences with world-class amenities, landscaped gardens, and excellent connectivity make this an ideal choice for families seeking immediate possession and a superior quality of life.",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  {
    slug: "dukes-urban-village",
    title: "PAN Dukes Urban Village",
    category: "Open Villa Plots",
    coverImage: "/covers/DUKES_URBAN_VILLAGE.png",
    heroImage: "/covers/DUKES_URBAN_VILLAGE.png",
    location: "Kothur, Hyderabad",
    year: "2024",
    client: "Open for Booking",
    area: "90 Acres · 500 Plots",
    description:
      "PAN Dukes Urban Village is a premium open villa plots community located on the high-growth Kothur corridor, directly highway-facing with seamless access to Hyderabad's southern growth belt. Designed for those who value space, privacy, and strong appreciation — these DTCP-approved villa plots offer the freedom to build your dream home at your own pace.",
    gallery: [
      "/current/WhatsApp Image 2026-03-11 at 15.10.29.jpeg",
      "/current/WhatsApp Image 2026-03-11 at 15.10.30 (1).jpeg",
      "/current/WhatsApp Image 2026-03-11 at 15.10.30.jpeg",
      "/current/WhatsApp Image 2026-03-11 at 15.10.31 (1).jpeg",
      "/current/WhatsApp Image 2026-03-11 at 15.10.31.jpeg",
      "/current/WhatsApp Image 2026-03-11 at 15.10.32.jpeg",
    ],
    highlights: [
      "L.V Prasad Eye Hospital - 5 mins",
      "Samshabad international airport -20 mins",
      "Symbiosis business management college - 8 mins",
      "Shadnagar - 7 mins",
      "Highway facing project",
    ],
    masterLayoutPdf: "/current/DUV_P1P2_28th Jan 26 Updated.pdf",
    videos: [
      "/current/WhatsApp Video 2026-03-11 at 15.10.29 (1).mp4",
      "/current/WhatsApp Video 2026-03-11 at 15.10.29.mp4",
      "/current/WhatsApp Video 2026-03-11 at 15.10.30 (1).mp4",
      "/current/WhatsApp Video 2026-03-11 at 15.10.30.mp4",
    ],
  },
  {
    slug: "dukes-county",
    title: "Dukes County",
    category: "Open Villa Plots",
    coverImage: "/covers/DukesCounty_Velimala.png",
    heroImage: "/covers/DukesCounty_Velimala.png",
    location: "Velimala, Hyderabad",
    year: "2024",
    client: "Open for Booking",
    area: "120 Acres · 900 Plots",
    description:
      "Dukes County is a landmark open villa plots community in Velimala — a prime investment destination in Hyderabad's southern growth corridor. Spanning over 120 acres with wide internal roads, landscaped greens, and DTCP approval, Dukes County is crafted for buyers who want premium land at a compelling value with strong long-term appreciation.",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
    ],
  },
];

export const PROJECT_FILTERS: Array<ProjectCategory | "All"> = [
  "All",
  "Open Villa Plots",
  "Residential Plots",
  "Premium Villas",
  "Gated Community",
  "Commercial",
];
