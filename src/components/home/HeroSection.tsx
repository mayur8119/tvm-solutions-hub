
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements - Enhanced with more vibrant colors */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 stagger-animation">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full animate-fade-in">
              Next-Gen IT Solutions
            </span>
            <h1 className="mb-6 animate-fade-in">
              Transform Your Business With
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> Future-Ready Technology</span>
            </h1>
            <p className="text-tvm-gray text-lg mb-8 max-w-xl animate-fade-in">
              We deliver powerful digital solutions tailored to your business needs. From mobile apps to website development and digital marketing strategies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                <Link to="/services">
                  Our Services <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-indigo-500/50 text-indigo-700 hover:bg-indigo-50">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Image - Updated with the new futuristic tech image */}
          <div className="w-full lg:w-1/2 relative animate-fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl image-reveal">
              <img 
                src="/lovable-uploads/01123e7f-efe0-421e-bdf0-ebb3162d694e.png" 
                alt="Digital Innovation Technology" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements with updated colors */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-500/10 rounded-lg -z-10 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-lg -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
