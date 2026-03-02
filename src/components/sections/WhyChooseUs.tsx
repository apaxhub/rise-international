"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Leaf, Globe2, Activity } from "lucide-react";
import { siteConfig } from "@/data/siteData";

const features = [
    {
        title: "Unjha Origin Sourcing",
        description: "Located at the epicenter of Asia's spice trade. We bypass middlemen, ensuring first-pick quality from pristine Mahesana farms.",
        icon: Leaf,
    },
    {
        title: "100% Traceability",
        description: "Every shipment is coded. We can trace your bulk order back to the exact farming community that grew it.",
        icon: Activity,
    },
    {
        title: "MRL & Aflatoxin Safe",
        description: "Processed in advanced HACCP facilities with strict Sortex cleaning, eliminating physical and chemical impurities.",
        icon: ShieldCheck,
    },
    {
        title: "Private Label Ready",
        description: "From 50kg bulk gunny bags to 100g retail stand-up pouches, we adapt to your specific import and branding requirements.",
        icon: Globe2,
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-surface relative overflow-hidden">

            {/* Decorative Spice floats */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-24 -left-10 w-40 h-40 opacity-80 mix-blend-multiply pointer-events-none hidden lg:block"
            >
                <Image src="/assets/spices/cinnamon.png" alt="" fill className="object-contain" />
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 w-32 h-32 opacity-90 mix-blend-multiply pointer-events-none hidden xl:block z-0"
            >
                <Image src="/assets/spices/anise.png" alt="" fill className="object-contain" />
            </motion.div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="text-[11px] font-bold tracking-widest text-primary uppercase mb-4">The {siteConfig.brandName} Standard</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-fg mb-6 tracking-tight leading-[1.1]">
                        We Don't Just Export.<br />
                        <span className="text-muted font-medium italic">We Engineer Quality.</span>
                    </h2>
                </div>

                {/* Modern Minimal Layout: Large visual left, precise features right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Modern typography & imagery mix */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] rounded-3xl overflow-hidden group"
                    >
                        <Image
                            src="/assets/gallery/farm-1.png"
                            alt="Harvest"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        {/* Soft gradient overlay so text is legible */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-8 left-8 right-8 bg-surface/90 backdrop-blur border border-border p-6 rounded-2xl shadow-soft transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <h3 className="text-xl font-bold text-fg mb-2">The Unjha Edge</h3>
                            <p className="text-sm text-muted font-medium">Being situated right beside the world's largest spice hub gives us a permanent advantage in sourcing the purest, most potent crops before they hit the general market.</p>
                        </div>
                    </motion.div>

                    {/* Right: Crisp, borderless feature list */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center space-y-12"
                    >
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex gap-6 group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 rounded-2xl bg-bg border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-sm">
                                        <feature.icon className="w-5 h-5 text-fg group-hover:text-surface transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-fg mb-2">{feature.title}</h4>
                                    <p className="text-muted text-base leading-relaxed tracking-wide">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
