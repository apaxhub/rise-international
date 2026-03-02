"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteData";

const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Export Process", href: "/export-process" },
    { name: "About", href: "/about" },
    { name: "Certifications", href: "/certifications" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-bg/95 backdrop-blur-md border-b border-border py-4"
                    : "bg-bg py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Minimal Logo */}
                <Link href="/" className="flex flex-col leading-tight group">
                    <span className="text-lg font-bold tracking-tight text-fg">
                        {siteConfig.brandName.split(" ")[0]}.
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-muted group-hover:text-fg transition-colors">
                        {siteConfig.brandName.split(" ").slice(1).join(" ")}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-fg transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="text-sm font-semibold text-fg hover:text-primary transition-colors ml-4">
                        Contact Us &rarr;
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-fg"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-bg border-b border-border absolute top-full left-0 w-full">
                    <nav className="flex flex-col p-6 gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-muted font-medium py-3 border-b border-border hover:text-fg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="text-fg font-semibold py-3 hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Us &rarr;
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
