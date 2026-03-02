"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig, products } from "@/data/siteData";

export function ContactForm() {
    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

                    {/* Left info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Get In Touch</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-fg mb-4 leading-tight">
                                Partner with {siteConfig.brandName}
                            </h2>
                            <p className="text-muted leading-relaxed">
                                Looking for a reliable spice exporter? Reach out for bulk pricing, product specs, private label options, or documentation support.
                            </p>
                        </div>

                        <div className="space-y-5">
                            <div className="p-5 bg-bg rounded-2xl border border-border">
                                <p className="text-xs font-bold text-muted uppercase tracking-wider mb-1.5">📍 Registered Address</p>
                                <p className="text-sm text-fg font-medium">{siteConfig.location.address}</p>
                                <p className="text-xs text-primary mt-1.5 font-medium">{siteConfig.location.nearBy}</p>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center gap-3 p-4 bg-bg rounded-xl border border-border">
                                    <span className="text-lg">📞</span>
                                    <div>
                                        <p className="text-xs text-muted font-medium">Phone / WhatsApp</p>
                                        <p className="text-sm font-semibold text-fg">{siteConfig.contact.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-bg rounded-xl border border-border">
                                    <span className="text-lg">✉️</span>
                                    <div>
                                        <p className="text-xs text-muted font-medium">Email</p>
                                        <p className="text-sm font-semibold text-fg">{siteConfig.contact.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-bg rounded-xl border border-border">
                                    <span className="text-lg">🕐</span>
                                    <div>
                                        <p className="text-xs text-muted font-medium">Export Hours</p>
                                        <p className="text-sm font-semibold text-fg">Mon – Sat, 9 AM – 6 PM (IST)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 bg-bg p-8 md:p-10 rounded-3xl border border-border shadow-soft"
                    >
                        <h3 className="text-xl font-bold text-fg mb-6">Send an Inquiry</h3>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-fg mb-1.5">Full Name *</label>
                                    <input id="name" type="text" required className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-fg text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="Your full name" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-fg mb-1.5">Company Name</label>
                                    <input id="company" type="text" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-fg text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="Your company" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-fg mb-1.5">Work Email *</label>
                                    <input id="email" type="email" required className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-fg text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="you@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-fg mb-1.5">Phone / WhatsApp</label>
                                    <input id="phone" type="tel" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-fg text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="product" className="block text-sm font-medium text-fg mb-1.5">Product of Interest</label>
                                <select id="product" className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-fg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                                    <option value="">Select a category...</option>
                                    {products.map(p => (
                                        <option key={p.slug} value={p.name}>{p.name}</option>
                                    ))}
                                    <option value="multiple">Multiple Categories</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-fg mb-1.5">Message *</label>
                                <textarea id="message" rows={5} required className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-fg text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" placeholder="Please describe the product you need, quantity (MT), destination country, and any specific certifications required..." />
                            </div>

                            <Button type="submit" size="lg" className="w-full sm:w-auto rounded-full px-10">
                                Submit Inquiry
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
