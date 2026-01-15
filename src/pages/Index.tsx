import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { ProcessSection } from "@/components/ProcessSection";
import { StatsSection } from "@/components/StatsSection";
import { GalleryPreview } from "@/components/GalleryPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <FeaturedEvents />
      <ProcessSection />
      <StatsSection />
      <GalleryPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
