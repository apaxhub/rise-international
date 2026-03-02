"use client";

import { motion } from "framer-motion";
import { products, siteConfig } from "@/data/siteData";
import { SEOTextBlock } from "@/components/sections/SEOTextBlock";
import Image from "next/image";

const localImages: Record<string, string> = {
    "whole-spices": "/assets/products/whole-spices.png",
    "blended-powders": "/assets/products/blended-powders.png",
    "dehydrated-products": "/assets/products/dehydrated-products.png",
    "oil-seeds": "/assets/products/oil-seeds.png",
    "millets-cereals": "/assets/products/millets-cereals.png",
    "specialty": "/assets/products/specialty.png",
};

export default function ProductsPage() {
    return (
        <main className="pt-24 bg-bg min-h-screen">

            {/* Minimal Typography & Editorial Hero Section */}
            <section className="relative px-4 md:px-8 py-16 md:py-24 z-10 border-b border-border">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full mb-8">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Exclusive Catalog</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl lg:text-[80px] font-black text-fg mb-8 tracking-tighter leading-[0.9] font-ibm">
                                    Export <br /> Class. <br />
                                    <span className="text-primary italic font-medium">Ingredients.</span>
                                </h1>

                                <p className="text-muted text-lg md:text-xl leading-relaxed max-w-lg border-l-2 border-primary/30 pl-6">
                                    Direct from our heritage processing facilities in Unjha to the world's most demanding markets.
                                    Discover our FSSAI & APEDA certified agricultural commodities.
                                </p>
                            </motion.div>
                        </div>

                        {/* Image Content */}
                        <div className="w-full lg:w-1/2 relative">
                            {/* Decorative background blur to add visual interest */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative aspect-square md:aspect-[4/3] w-full rounded-[3rem] overflow-hidden border border-border shadow-soft bg-surface z-10"
                            >
                                <Image
                                    src="/assets/products/hero-bg.png"
                                    alt="Premium Spices Abstract"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-color" />

                                {/* Decorative Floating Elements strictly within the hero image */}
                                <motion.div
                                    animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-10 -right-10 w-32 h-32 opacity-90 mix-blend-multiply pointer-events-none hidden md:block"
                                >
                                    <Image src="/assets/spices/leaf.png" alt="" fill className="object-contain" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-8 -left-8 w-28 h-28 opacity-90 mix-blend-multiply pointer-events-none hidden md:block"
                                >
                                    <Image src="/assets/spices/anise.png" alt="" fill className="object-contain" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <span className="text-[9px] font-bold tracking-[0.3em] text-muted uppercase">Scroll to Discover</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 border border-muted/50 rounded-full flex justify-center py-1.5"
                    >
                        <span className="w-1 h-1.5 bg-primary/60 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Static Editorial Catalog Layout (No Parallax, No Sticky) */}
            <section className="bg-bg relative z-20 py-24 md:py-32 overflow-hidden">

                {/* Sprinkled Floating Spices across the entire catalog with proper blending */}
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[5%] right-[5%] w-24 h-24 md:w-40 md:h-40 z-0 hidden lg:block mix-blend-multiply opacity-50 pointer-events-none"
                >
                    <Image src="/assets/spices/leaf.png" alt="" fill className="object-contain" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 25, 0], rotate: [0, -20, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[2%] w-32 h-32 md:w-56 md:h-56 z-0 hidden lg:block mix-blend-multiply opacity-50 pointer-events-none"
                >
                    <Image src="/assets/spices/cinnamon.png" alt="" fill className="object-contain" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 25, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] right-[3%] w-20 h-20 md:w-36 md:h-36 z-0 hidden lg:block mix-blend-multiply opacity-50 pointer-events-none"
                >
                    <Image src="/assets/spices/anise.png" alt="" fill className="object-contain" />
                </motion.div>

                <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 space-y-32 md:space-y-48">
                    {products.map((cat, idx) => {
                        const isEven = idx % 2 === 0;
                        const encodedMessage = encodeURIComponent(`Hello ${siteConfig.brandName}, I am interested in inquiring about your bulk export rates for ${cat.name}. Please share MRL specs and container pricing.`);
                        const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
                        const imageSrc = localImages[cat.slug] || localImages["whole-spices"];

                        return (
                            <div key={cat.slug} id={cat.slug} className="scroll-mt-32">
                                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Large Image Block */}
                                    <div className="w-full lg:w-3/5">
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8 }}
                                            className="relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden border border-border bg-surface block"
                                        >
                                            <Image
                                                src={imageSrc}
                                                alt={cat.name}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-1000"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Overlapping Content Block (Editorial Style) */}
                                    <div className={`w-full lg:w-2/5 flex flex-col justify-center ${isEven ? 'lg:-ml-20' : 'lg:-mr-20'} z-10`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="bg-surface/95 backdrop-blur-xl border border-border shadow-2xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none" />

                                            <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-6 inline-block bg-primary/5 px-4 py-1.5 rounded-full border border-primary/20">
                                                0{idx + 1} // Line Item
                                            </p>

                                            <h2 className="text-3xl md:text-5xl font-black text-fg mb-6 tracking-tight font-ibm">
                                                {cat.name}
                                            </h2>

                                            <p className="text-muted text-lg leading-relaxed mb-8">
                                                {cat.description}
                                            </p>

                                            <div className="mb-10">
                                                <p className="text-[10px] font-bold tracking-widest text-fg/80 uppercase mb-4">Export Inventory</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {cat.items.map((item: string) => (
                                                        <span key={item} className="text-sm font-semibold text-fg bg-bg px-4 py-2 border border-border rounded-xl shadow-sm">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Static CTA Button (No parallax, simple modern styling) */}
                                            <div className="pt-8 border-t border-border">
                                                <a
                                                    href={whatsappLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                                                >
                                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.604 6.02L.053 24l6.105-1.603A11.97 11.97 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm3.832 17.15c-.161.455-.935.845-1.309.893-.374.048-.828.161-2.903-.701-2.497-1.037-4.103-3.6-4.23-3.771-.128-.171-1.01-1.341-1.01-2.559 0-1.218.636-1.817.866-2.074.23-.257.498-.321.664-.321.166 0 .332 0 .476.006.15.006.353-.059.551.417.203.487.695 1.694.755 1.811.059.117.096.256.016.417-.08.16-.123.256-.241.395-.118.14-.246.305-.353.417-.118.118-.246.246-.112.476.134.23 1.54 2.898 3.528 2.624.182-.026.257-.026.353-.133.096-.107.417-.487.524-.653.107-.166.214-.14.364-.086.15.053 1.106.524 1.294.62.187.096.315.14.364.214.048.075.048.428-.113.883z" /></svg>
                                                    <span>Inquire on WhatsApp</span>
                                                </a>
                                            </div>
                                        </motion.div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <SEOTextBlock
                title="Strict Compliance & Direct Origin Sourcing"
                content={`Our product catalog represents the absolute best of Indian agriculture. Every ounce of spice, seed, and millet shipped by ${siteConfig.brandName} is processed in a facility adhering to strict food safety frameworks. Our direct farming infrastructure allows us to completely bypass traditional market yards, ensuring lower microbiological loads, superior essential oil preservation, and direct-factory pricing for our import partners globally.`}
                className="py-24 bg-surface border-t border-border"
            />

        </main>
    );
}
