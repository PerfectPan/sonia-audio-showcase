import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SpecsSection } from "@/components/SpecsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <SpecsSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
