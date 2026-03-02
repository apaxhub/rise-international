"use client";

import { motion } from "framer-motion";
import { Leaf, Award, Globe, Scale } from "lucide-react";
import Image from "next/image";
import { siteConfig, certifications } from "@/data/siteData";

export function BrandStory() {
    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute -inset-3 bg-primary/5 rounded-3xl transform -rotate-2" />
                        <div className="relative rounded-3xl overflow-hidden border border-border shadow-soft">
                            <Image
                                src="/assets/gallery/farm-1.png"
                                alt={`${siteConfig.brandName} — Gujarat farm`}
                                width={600}
                                height={650}
                                className="object-cover w-full h-[480px]"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-fg text-white p-5 rounded-2xl shadow-glow">
                            <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Established In</p>
                            <p className="text-3xl font-black text-primaryLight">Gujarat</p>
                            <p className="text-xs text-white/60 mt-1">{siteConfig.location.nearBy}</p>
                        </div>
                    </motion.div>

                    {/* Left: Story */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-1 lg:order-2"
                    >
                        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Our Heritage</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-fg mb-6 leading-tight">
                            Rooted in {siteConfig.location.state}.
                            <br />
                            <span className="text-primary">Serving the World.</span>
                        </h2>

                        <div className="space-y-5 text-muted leading-relaxed text-base">
                            <p>
                                <strong className="text-fg">{siteConfig.brandName}</strong> is dedicated to delivering the purest essence of Indian agricultural produce to global markets.
                            </p>
                            <p>
                                {siteConfig.description}
                            </p>
                        </div>

                        {/* Values */}
                        <div className="mt-10 space-y-4">
                            {[
                                { icon: Award, label: "Certified Quality", desc: "FSSAI · HACCP · ISO · KOSHER · Spices Board" },
                                { icon: Globe, label: "Global Compliance", desc: "Meeting EU, FDA, and GCC import standards" },
                                { icon: Scale, label: "Ethical Sourcing", desc: "Fair-trade farmer partnerships in Mahesana" },
                                { icon: Leaf, label: "Natural Products", desc: "No adulteration — genuine Indian origin guaranteed" },
                            ].map((v) => (
                                <div key={v.label} className="flex items-start gap-4 p-4 rounded-xl bg-bg border border-border hover:border-primary/30 transition-colors">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                                        <v.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-fg text-sm">{v.label}</p>
                                        <p className="text-muted text-xs mt-0.5">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
