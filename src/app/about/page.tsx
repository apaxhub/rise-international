import type { Metadata } from "next";
import { BrandStory } from "@/components/sections/BrandStory";

import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
    title: `About Us | ${siteConfig.brandName}`,
    description: siteConfig.description,
};

export default function AboutPage() {
    return (
        <main className="pt-24 min-h-screen bg-surface">
            <BrandStory />
        </main>
    );
}
