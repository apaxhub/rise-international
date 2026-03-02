import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
    title: `Contact Us | Get a Quote | ${siteConfig.brandName}`,
    description: siteConfig.description,
};

export default function ContactPage() {
    return (
        <main className="pt-24 min-h-screen bg-surface">
            <ContactForm />
        </main>
    );
}
