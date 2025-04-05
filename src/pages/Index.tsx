
import React, { useState, useEffect, Suspense } from "react";
import PageLayout from "@/components/common/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the 3D component with a more descriptive comment
const TechGlobe = React.lazy(() => 
  import("@/components/home/TechGlobe" /* webpackChunkName: "tech-globe" */)
);

// Enhanced fallback component when the 3D globe is loading
const GlobeFallback = () => (
  <div className="w-full my-16">
    <div className="container-custom">
      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900">
        <Skeleton className="w-full h-full absolute inset-0 bg-blue-900/30" />
        <div className="absolute top-0 left-0 w-full p-6 z-10 text-center">
          <div className="bg-white/10 w-48 h-8 mx-auto rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

// Simple error boundary component
class Globe3DErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log("3D Globe failed to load, showing fallback");
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <GlobeFallback />;
    }
    return this.props.children;
  }
}

const Index = () => {
  const [showGlobe, setShowGlobe] = useState(false);
  
  // Improved idle callback with clear timing
  useEffect(() => {
    const loadGlobe = () => setShowGlobe(true);
    
    // Load after a short delay to prioritize core content
    const timer = setTimeout(loadGlobe, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <PageLayout>
      <HeroSection />
      {showGlobe && (
        <Globe3DErrorBoundary>
          <Suspense fallback={<GlobeFallback />}>
            <TechGlobe />
          </Suspense>
        </Globe3DErrorBoundary>
      )}
      <ServicesSection />
      <AboutPreview />
      <TestimonialsSection />
      <CtaSection />
    </PageLayout>
  );
};

export default Index;
