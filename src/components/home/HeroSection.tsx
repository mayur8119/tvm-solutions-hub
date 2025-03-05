
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-tvm-blue/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tvm-blue/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 stagger-animation">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold bg-tvm-blue/10 text-tvm-blue rounded-full animate-fade-in">
              Innovative IT Solutions
            </span>
            <h1 className="mb-6 animate-fade-in">
              Transform Your Business With Cutting-Edge 
              <span className="text-tvm-blue"> Technology</span>
            </h1>
            <p className="text-tvm-gray text-lg mb-8 max-w-xl animate-fade-in">
              We deliver powerful digital solutions tailored to your business needs. From mobile apps to website development and digital marketing strategies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button asChild size="lg" className="button-animation">
                <Link to="/services">
                  Our Services <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative animate-fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl image-reveal">
              <img 
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Digital Innovation" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-tvm-blue/10 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-tvm-blue/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
