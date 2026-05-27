import type { Metadata } from "next";
import Landingpage from "@/Landingpages/Landingpage";

export const metadata: Metadata = {
  title: "Prime Real Estate | Elevate Your Living",
  description: "Discover premium properties, expert guidance, and a seamless real estate inquiry experience.",
};

export default function PrimeEstatePage() {
  return <Landingpage />;
}
