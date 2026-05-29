import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
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

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5RC29RH');
`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5RC29RH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
