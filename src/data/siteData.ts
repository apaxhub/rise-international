// ============================================================
//  DEV IMPEX – Single Source of Truth Data Layer
// ============================================================

export const siteConfig = {
    brandName: "Rise International",
    tagline: "Spice & Oilseed Exporter from Unjha, Gujarat | Supplying Quality Spices and Oilseeds to Global Buyers",
    description: "Rise International is an established spice and oilseed exporter and supplier based in Unjha, Mehsana, Gujarat. Founded in 2015 and registered with GSTIN 24ASPPP2380M1Z6, we cater to bulk buyers of spice seeds, chili, turmeric, fennel and oilseeds such as mustard and sesame. Our operations focus on dependable supply, quality consistency and fulfilling export orders for food processors, distributors and international partners.",
    location: {
        city: "Unjha",
        district: "Mehsana",
        state: "Gujarat",
        country: "India",
        pincode: "384170",
        nearBy: "",
        address: "Bhakti Nagar, Visnagar Road, Unjha, Mehsana, Gujarat - 384170, India",
    },
    contact: {
        phone: "",
        email: "",
        whatsapp: "",
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
        description: "Export-grade cumin seeds selected for high aroma and purity suitable for culinary, industrial and processing uses.",
        items: ["Premium Cumin", "High Purity", "Food Grade"],
        image: "/public/assets/products/product-1.png",
        seoKeywords: ["cumin seeds export India", "cumin exporter Unjha", "premium cumin exporter"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "fennel-seeds",
        name: "Fennel Seeds",
        description: "Premium fennel seeds with natural flavour and uniform size, processed and packaged for export standards.",
        items: ["Premium Fennel", "Uniform Size", "Export Quality"],
        image: "/public/assets/products/product-2.png",
        seoKeywords: ["fennel seeds export India", "fennel exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "coriander-seeds",
        name: "Coriander Seeds",
        description: "High-quality coriander seeds with balanced flavour profile, ideal for global spice markets.",
        items: ["Premium Coriander", "Balanced Flavour", "Export Quality"],
        image: "/public/assets/products/product-3.png",
        seoKeywords: ["coriander seeds export India", "coriander exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "turmeric",
        name: "Turmeric",
        description: "Processed turmeric roots for bulk spice export, meeting general industry quality expectations.",
        items: ["Bulk Export", "Processed Roots", "Industry Standard"],
        image: "/public/assets/products/product-4.png",
        seoKeywords: ["turmeric export India", "turmeric exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "mustard-seeds",
        name: "Mustard Seeds",
        description: "Yellow and black mustard seeds with consistent grade for culinary and oil extraction markets.",
        items: ["Yellow Mustard", "Black Mustard", "Consistent Grade"],
        image: "/public/assets/products/product-5.png",
        seoKeywords: ["mustard seeds export India", "mustard exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    },
    {
        slug: "sesame-seeds",
        name: "Sesame Seeds",
        description: "Natural white and black sesame seeds selected for export with reliable quality checks.",
        items: ["White Sesame", "Black Sesame", "Reliable Quality"],
        image: "/public/assets/products/product-6.png",
        seoKeywords: ["sesame seeds export India", "sesame exporter Gujarat"],
        color: "bg-surface",
        accent: "#E4E4E7",
    }
];

export const certifications = [];

export const exportMarkets = [
    { name: "UAE", region: "Middle East", location: [23.4241, 53.8478], size: 0.05, flag: "🇦🇪" },
    { name: "Kenya", region: "Africa", location: [-1.2921, 36.8219], size: 0.05, flag: "🇰🇪" },
    { name: "Vietnam", region: "Asia", location: [14.0583, 108.2772], size: 0.05, flag: "🇻🇳" },
    { name: "Poland", region: "Europe", location: [51.9194, 19.1451], size: 0.05, flag: "🇵🇱" },
    { name: "USA", region: "North America", location: [37.0902, -95.7129], size: 0.05, flag: "🇺🇸" }
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
