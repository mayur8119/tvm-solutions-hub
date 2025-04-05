
import React, { useState, useEffect, Suspense } from "react";
import PageLayout from "@/components/common/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the 3D component
const TechGlobe = React.lazy(() => import("@/components/home/TechGlobe"));

// Simple fallback component when the 3D globe fails to load
const GlobeFallback = () => (
  <div className="w-full my-16">
    <div className="container-custom">
      <Skeleton className="w-full h-72 md:h-96 rounded-lg" />
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

  render() {
    if (this.state.hasError) {
      console.log("3D Globe failed to load, showing fallback");
      return <GlobeFallback />;
    }
    return this.props.children;
  }
}

const Index = () => {
  const [showGlobe, setShowGlobe] = useState(false);
  
  // Delay loading the 3D component to ensure the main content loads first
  useEffect(() => {
    // Use requestIdleCallback or setTimeout as a fallback
    const loadGlobe = () => setShowGlobe(true);
    
    if ('requestIdleCallback' in window) {
      // @ts-ignore - TypeScript doesn't have the type for requestIdleCallback
      window.requestIdleCallback(loadGlobe, { timeout: 2000 });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const timer = setTimeout(loadGlobe, 1500);
      return () => clearTimeout(timer);
    }
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
