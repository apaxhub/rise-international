import { Hero } from "@/components/sections/Hero";
import { FeaturedProductCategories } from "@/components/sections/FeaturedProductCategories";
import { ExportHighlights } from "@/components/sections/ExportHighlights";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SEOTextBlock } from "@/components/sections/SEOTextBlock";
import { siteConfig } from "@/data/siteData";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProductCategories />
      <WhyChooseUs />
      <ExportHighlights />
      <SEOTextBlock
        title={`${siteConfig.brandName} — Premium Agri Export`}
        content={siteConfig.description}
      />
    </main>
  );
}
