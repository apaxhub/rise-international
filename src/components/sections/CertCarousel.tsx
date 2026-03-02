"use client";

import { motion } from "framer-motion";
import { siteConfig, certifications } from "@/data/siteData";

export function CertCarousel() {
    return (
        <section className="py-24 md:py-32 bg-primary text-surface overflow-hidden relative border-y-8 border-primary">
            {/* Background glow meant to subconsciously signal "safe" or "verified" */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary blur-[100px] pointer-events-none rounded-full" /> */}

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side: The Bold Promise */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-surface border border-surface/20 text-xs font-bold tracking-widest uppercase mb-8">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                                Verified Export Partner
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
                            100% Guaranteed <br />
                            <span className="text-primary-light italic font-ibm font-medium">Clearance.</span>
                        </h2>

                        <p className="text-surface/70 text-lg leading-relaxed mb-10 font-light pr-0 lg:pr-10">
                            Customs rejection is the silent killer of agricultural trade margins. We eliminate that risk entirely at the source. Every single container leaving {siteConfig.brandName} holds unassailable accreditation.
                        </p>

                        <div className="flex gap-8 border-l-2 border-primary-light/40 pl-6">
                            <div>
                                <p className="text-4xl font-black text-surface tracking-tighter">0%</p>
                                <p className="text-[10px] uppercase tracking-widest text-surface/50 font-bold mt-1">Rejection Rate</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-surface tracking-tighter">11+</p>
                                <p className="text-[10px] uppercase tracking-widest text-surface/50 font-bold mt-1">Global Markets Clear</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: The Undeniable Proof (Badges) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        {/* Dark premium "vault" layout for certs */}
                        <div className="grid grid-cols-2 gap-4">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.name}
                                    className="bg-surface/5 border border-surface/10 p-6 rounded-3xl flex flex-col justify-center items-center text-center hover:bg-surface/10 hover:border-surface/30 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <div className="w-14 h-14 rounded-full bg-bg/90 mb-4 flex items-center justify-center filter grayscale contrast-125 shadow-inner">
                                        <span className="text-2xl">{cert.icon}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-surface mb-1">{cert.name}</h4>
                                    <p className="text-[9px] text-surface/50 font-semibold uppercase tracking-widest text-center leading-tight w-full truncate px-2">{cert.fullName}</p>
                                </div>
                            ))}
                            {/* Optional pending/extra slot to keep grid symmetrical if needed */}
                            {certifications.length % 2 !== 0 && (
                                <div className="bg-surface/5 border border-surface/10 border-dashed p-6 rounded-3xl flex flex-col justify-center items-center text-center">
                                    <div className="w-10 h-10 rounded-full border border-surface/20 mb-4 flex items-center justify-center">
                                        <span className="text-surface/30 text-xl font-light">+</span>
                                    </div>
                                    <h4 className="text-sm font-bold text-surface/40 mb-1">More</h4>
                                    <p className="text-[10px] text-surface/30 font-semibold uppercase tracking-widest">In Progress</p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
