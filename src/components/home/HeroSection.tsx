
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Preload the hero image and set dimensions
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/01123e7f-efe0-421e-bdf0-ebb3162d694e.png";
    img.onload = () => setImageLoaded(true);
    
    // Check if the image is already cached
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden" aria-label="Hero Section">
      {/* Background Elements - Enhanced with blue color scheme to match logo */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 stagger-animation">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white rounded-full animate-fade-in">
              Next-Gen IT Solutions
            </span>
            <h1 className="mb-6 animate-fade-in text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              Transform Your Business With
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent"> Future-Ready Technology</span>
            </h1>
            <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 max-w-xl animate-fade-in">
              We deliver powerful digital solutions tailored to your business needs. From mobile apps to website development and digital marketing strategies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                <Link to="/services" aria-label="Explore our services">
                  Our Services <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-500/50 text-blue-700 hover:bg-blue-50">
                <Link to="/contact" aria-label="Contact our team">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Image - Improved loading and aspect ratio */}
          <div className="w-full lg:w-1/2 relative animate-fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl image-reveal">
              <div 
                className={`w-full h-0 pb-[66.67%] relative ${!imageLoaded ? 'bg-slate-200 animate-pulse' : ''}`}
                style={{ aspectRatio: '600/400' }}
              >
                {/* Note the explicit width and height attributes */}
                <img 
                  ref={imgRef}
                  src="/lovable-uploads/01123e7f-efe0-421e-bdf0-ebb3162d694e.png" 
                  alt="Digital Innovation Technology solutions by TVM IT Solutions" 
                  className="absolute inset-0 w-full h-full object-cover"
                  width="600"
                  height="400"
                  loading="eager"
                  onLoad={() => setImageLoaded(true)}
                  style={{ 
                    opacity: imageLoaded ? 1 : 0, 
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                />
              </div>
            </div>
            {/* Decorative elements - Updated with colors to match logo */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-lg -z-10 animate-pulse" aria-hidden="true"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-lg -z-10 animate-pulse" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
