import HeroCarousel from "@/components/HeroCarousel";
import WhoWeAre from "@/components/WhoWeAre";
import PracticeAreas from "@/components/PracticeAreas";
import LegalExperts from "@/components/LegalExperts";
import CTASection from "@/components/CTASection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <HeroCarousel />
      <WhoWeAre />
      <PracticeAreas />
      <LegalExperts />
      <CTASection />
      
    </div>
  );
};

export default Index;
