// ============================================================
//  DEV IMPEX – Single Source of Truth Data Layer
// ============================================================

export const siteConfig = {
    brandName: "Dev Impex",
    tagline: "Delivering Natural & High-Quality Seed Spices Worldwide",
    description: "Established in 1996, Dev Impex is a trusted spice manufacturer and exporter based in Mehsana, Gujarat. We source high quality seeds including cumin, mustard, fenugreek, coriander, sesame and ajwain directly from farmers, ensuring natural purity and food grade quality. Our products cater to global buyers requiring reliable supply, consistent purity and timely delivery.",
    location: {
        city: "Mehsana",
        district: "Mehsana",
        state: "Gujarat",
        country: "India",
        pincode: "384120",
        nearBy: "",
        address: "Plot No. 30, Dev Industrial Park, Behind Utkarsh Vidhyalay, Ahmedabad Palanpur Highway Road, Moti Dau, Mehsana, Gujarat - 384120, India",
    },
    contact: {
        phone: "+91 00000 00000",
        email: "info@devimpex.com",
        whatsapp: "+91 00000 00000",
    },
    social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
    },
};

export const products = [
    {
        slug: "cumin-seeds",
        name: "Cumin Seeds",
        description: "High-quality cumin seed with 97%+ purity sourced from local farms, suitable for culinary, medicinal and industrial uses.",
        items: ["Premium Cumin", "Sortex Cleaned", "High Purity", "Food Grade"],
        image: "/assets/products/product-1.png",
        seoKeywords: ["cumin seeds export India", "cumin exporter Gujarat", "premium cumin exporter"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "mustard-seeds",
        name: "Mustard Seeds",
        description: "Premium mustard seeds with natural flavor and high food grade quality, packed hygienically for export.",
        items: ["Premium Mustard", "Sortex Cleaned", "High Purity", "Food Grade"],
        image: "/assets/products/product-2.png",
        seoKeywords: ["mustard seeds export India", "mustard exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "fenugreek-seeds",
        name: "Fenugreek Seeds",
        description: "Natural fenugreek seeds with excellent aroma and consistent sizing, ideal for spice blends and international cuisines.",
        items: ["Premium Fenugreek", "Sortex Cleaned", "High Purity", "Food Grade"],
        image: "/assets/products/product-3.png",
        seoKeywords: ["fenugreek seeds export India", "fenugreek exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "coriander-seeds",
        name: "Coriander Seeds",
        description: "Top-grade coriander seeds with robust flavor profiles, processed and packaged to meet export standards.",
        items: ["Premium Coriander", "Sortex Cleaned", "High Purity", "Food Grade"],
        image: "/assets/products/product-4.png",
        seoKeywords: ["coriander seeds export India", "coriander exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "sesame-seeds",
        name: "Sesame Seeds",
        description: "Black and white sesame seeds with high purity, suitable for oil extraction and culinary export markets.",
        items: ["Black Sesame", "White Sesame", "Sortex Cleaned", "Food Grade"],
        image: "/assets/products/product-5.png",
        seoKeywords: ["sesame seeds export India", "sesame exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "ajwain-seeds",
        name: "Ajwain (Carom) Seeds",
        description: "Fresh and quality verified ajwain seeds with consistent purity, processed for bulk export.",
        items: ["Premium Ajwain", "Sortex Cleaned", "High Purity", "Food Grade"],
        image: "/assets/products/product-6.png",
        seoKeywords: ["ajwain seeds export India", "ajwain exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "anise-seeds",
        name: "Anise Seeds",
        description: "Premium anise seeds sourced and prepared for export with strict quality adherence.",
        items: ["Premium Anise", "Sortex Cleaned", "High Purity", "Food Grade"],
        image: "/assets/products/product-7.png",
        seoKeywords: ["anise seeds export India", "anise exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    }
];

export const certifications = [
    { name: "FSSAI", fullName: "Food Safety and Standards Authority of India", icon: "🏛️" },
];

export const exportMarkets = [
    { name: "UAE", region: "Middle East", location: [23.4241, 53.8478], size: 0.05, flag: "🇦🇪" },
    { name: "Saudi Arabia", region: "Middle East", location: [23.8859, 45.0792], size: 0.05, flag: "🇸🇦" },
    { name: "Kenya", region: "Africa", location: [-1.2921, 36.8219], size: 0.05, flag: "🇰🇪" },
    { name: "Nigeria", region: "Africa", location: [9.0820, 8.6753], size: 0.05, flag: "🇳🇬" },
    { name: "Bangladesh", region: "South Asia", location: [23.6850, 90.3563], size: 0.05, flag: "🇧🇩" },
    { name: "Sri Lanka", region: "South Asia", location: [7.8731, 80.7718], size: 0.05, flag: "🇱🇰" },
    { name: "Vietnam", region: "Southeast Asia", location: [14.0583, 108.2772], size: 0.05, flag: "🇻🇳" },
    { name: "Poland", region: "Eastern Europe", location: [51.9194, 19.1451], size: 0.05, flag: "🇵🇱" },
    { name: "Romania", region: "Eastern Europe", location: [45.9432, 24.9668], size: 0.05, flag: "🇷🇴" },
];

export const whyChooseUs = [
    {
        title: "Direct Sourcing",
        description: "We source our seeds directly from farmers in Mehsana, ensuring the freshest origin materials.",
        icon: "MapPin",
    },
    {
        title: "High Purity Standards",
        description: "Our seeds undergo stringent cleaning to ensure up to 99% purity levels for global requirements.",
        icon: "ShieldCheck",
    },
    {
        title: "Food Grade Quality",
        description: "All products are natural, hygienic, and processed to food-grade quality standards.",
        icon: "Route",
    },
    {
        title: "Reliable Supply",
        description: "Consistent supply capacity with timely delivery and flexible packaging options.",
        icon: "Box",
    },
];

export const exportProcess = [
    { step: 1, title: "Farm Sourcing", description: "Direct procurement of raw seeds from trusted farmers in Mehsana, Gujarat." },
    { step: 2, title: "Cleaning & Grading", description: "Mechanical and sortex cleaning to remove impurities and ensure uniform sizing and high purity." },
    { step: 3, title: "Quality Inspection", description: "Testing for moisture, purity, and overall food-grade compliance before packaging." },
    { step: 4, title: "Packaging", description: "Hygienic packing in new sacks or custom packaging based on buyer requirements." },
    { step: 5, title: "Shipping", description: "Efficient dispatch with proper moisture-proof containers directly to global destinations." },
];

export const blogPosts = [
];
