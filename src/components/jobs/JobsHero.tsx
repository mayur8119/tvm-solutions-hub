
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const JobsHero = () => {
  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById("application-form");
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-tvm-blue to-tvm-darkBlue text-white pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover exciting career opportunities at TVM IT Solutions. We're looking for talented 
            individuals to help us shape the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-white text-tvm-blue hover:bg-blue-50"
              onClick={scrollToApplicationForm}
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => {
                const jobListings = document.getElementById("job-listings");
                if (jobListings) {
                  jobListings.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsHero;
