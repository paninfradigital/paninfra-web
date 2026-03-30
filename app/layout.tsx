import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import Loader from "@/components/Loader/Loader";
import CursorFollower from "@/components/CursorFollower/CursorFollower";
import Providers from "@/components/Providers";
import WhatsAppSticky from "@/components/WhatsAppSticky";
import { defaultMetadata, organizationJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <SmoothScroll>
            <Loader />
            <CursorFollower />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppSticky />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
