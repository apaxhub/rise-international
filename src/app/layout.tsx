import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | Premium Indian Spices & Agro Commodities`,
  description: siteConfig.description,
  keywords: [
    "Indian agri exporter",
    "spices export India",
    "bulk spice supplier India",
    "FSSAI certified spice exporter",
    "cumin export Gujarat",
    "oil seeds exporter India",
    "millets exporter India",
    "HACCP certified exporter",
    "Unjha spice exporter",
    "Gujarat agri export company",
  ],
  openGraph: {
    title: `${siteConfig.brandName} | Premium Indian Spices & Agro Commodities`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased font-ibm bg-bg text-fg">
        <Navbar />
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
