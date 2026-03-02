"use client";

import { motion } from "framer-motion";
import { exportMarkets } from "@/data/siteData";
import { Globe } from "@/components/ui/Globe";

export function ExportHighlights() {
    return (
        <section className="py-24 bg-surface relative overflow-hidden border-y border-border">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-[11px] font-bold tracking-widest text-primary uppercase mb-4">Export Infrastructure</p>
                    <h2 className="text-4xl md:text-5xl font-black text-fg mb-6 tracking-tight">
                        Global Importer Network
                    </h2>
                    <p className="text-muted text-base">
                        Every shipment originates from our processing facility in Unjha, ensuring absolute origin control before traversing established cargo routes to 11+ destination markets.
                    </p>
                </div>

                {/* Global Map Content */}
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">

                    {/* Market List */}
                    <div className="w-full lg:w-1/3 order-2 lg:order-1 flex flex-col gap-4">
                        <div className="bg-bg border border-border rounded-2xl p-6 shadow-soft h-full flex flex-col justify-center">
                            <h3 className="text-lg font-bold text-fg mb-5 border-b border-border pb-3">Our Destinations</h3>
                            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                                {exportMarkets.map((market, idx) => (
                                    <motion.div
                                        key={market.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                                        className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"
                                    >
                                        <span className="text-xl drop-shadow-sm">{market.flag}</span>
                                        <span className="text-sm font-bold text-fg tracking-tight">{market.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Accurate 3D Globe */}
                    <div className="w-full lg:w-2/3 order-1 lg:order-2 flex justify-center items-center">
                        <Globe markers={exportMarkets as any} />
                    </div>
                </div>

                {/* Footnote stats to reinforce the meaning of the map */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
                    <div className="flex gap-4 items-center px-6 py-4 bg-bg border border-border rounded-2xl shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="text-xl">🚢</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-fg">Direct Routes</span>
                            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">No Intermediaries</span>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center px-6 py-4 bg-bg border border-border rounded-2xl shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="text-xl">📦</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-fg">100% Tracking</span>
                            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Port to Port Visibility</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
