"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { Facebook, Instagram, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-bg pt-12 pb-6 z-50">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                {/* 
                    Main Footer Container
                    Uses the exact same `bg-surface`, `border-border`, and `rounded-[3rem]` 
                    pattern as the Products/Home page bento boxes.
                */}
                <div className="bg-surface border border-border shadow-soft rounded-[3rem] px-8 md:px-16 py-16 md:py-20 mb-8 overflow-hidden relative">

                    {/* Subtle decorative background element matching the curved theme */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

                        {/* Brand Column */}
                        <div className="lg:col-span-5 flex flex-col justify-between">
                            <div>
                                <Link href="/" className="inline-block mb-8">
                                    <h2 className="text-4xl lg:text-5xl font-black text-fg font-ibm tracking-tight mb-1">{siteConfig.brandName.split(" ")[0]}.</h2>
                                    <p className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">{siteConfig.brandName.split(" ").slice(1).join(" ")}</p>
                                </Link>
                                <p className="text-muted text-base lg:text-lg max-w-sm leading-relaxed mb-10">
                                    {siteConfig.description}
                                </p>
                            </div>

                            {/* Giant CTA Button matching brand style */}
                            <a
                                href={`mailto:${siteConfig.contact.email}`}
                                className="inline-flex w-fit items-center gap-4 bg-bg border border-border px-6 py-4 rounded-full text-fg font-bold hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                            >
                                <span>Get in Touch</span>
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-colors">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </a>
                        </div>

                        {/* Navigation Columns */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-[11px] font-bold tracking-widest text-fg uppercase mb-8 pb-3 border-b border-border inline-block">Company</h4>
                                <ul className="space-y-4">
                                    {[
                                        { name: "About Us", href: "/about" },
                                        { name: "Products Catalog", href: "/products" },
                                        { name: "Export Process", href: "/export-process" },
                                        { name: "Certifications", href: "/certifications" },
                                    ].map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-muted hover:text-primary transition-colors font-medium text-sm flex items-center gap-2 group">
                                                <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors"></span>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="text-[11px] font-bold tracking-widest text-fg uppercase mb-8 pb-3 border-b border-border inline-block">Resources</h4>
                                <ul className="space-y-4">
                                    {[
                                        { name: "Insights Blog", href: "/blog" },
                                        { name: "Contact Hub", href: "/contact" },
                                        { name: "Privacy Policy", href: "/privacy" },
                                        { name: "Terms of Service", href: "/terms" },
                                    ].map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-muted hover:text-primary transition-colors font-medium text-sm flex items-center gap-2 group">
                                                <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors"></span>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Details */}
                            <div>
                                <h4 className="text-[11px] font-bold tracking-widest text-fg uppercase mb-8 pb-3 border-b border-border inline-block">Headquarters</h4>
                                <div className="space-y-6 text-sm text-muted font-medium">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <address className="not-italic leading-relaxed">
                                            {siteConfig.location.address.split(', ').slice(0, 2).join(', ')}<br />
                                            {siteConfig.location.address.split(', ').slice(2).join(', ')}
                                        </address>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-primary shrink-0" />
                                        <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">
                                            {siteConfig.contact.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-primary shrink-0" />
                                        <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                                            {siteConfig.contact.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Social Links matching the curved aesthetic */}
                                <div className="flex gap-3 mt-8">
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-surface hover:border-primary transition-all duration-300">
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-surface hover:border-primary transition-all duration-300">
                                        <Facebook className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 text-[10px] font-bold tracking-widest text-muted/60 uppercase">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
                    <p className="hidden md:block">FSSAI • APEDA • SPICES BOARD REGISTERED</p>
                </div>
            </div>
        </footer>
    );
}
