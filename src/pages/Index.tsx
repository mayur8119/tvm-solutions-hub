
import { useState, useEffect } from "react";
import PageLayout from "@/components/common/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import TechGlobe from "@/components/home/TechGlobe";

const Index = () => {
  const [showGlobe, setShowGlobe] = useState(false);
  
  // Delay loading the 3D component to ensure the main content loads first
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlobe(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <PageLayout>
      <HeroSection />
      {showGlobe && <TechGlobe />}
      <ServicesSection />
      <AboutPreview />
      <TestimonialsSection />
      <CtaSection />
    </PageLayout>
  );
};

export default Index;
