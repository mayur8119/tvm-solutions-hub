
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "CEO, FutureTech Solutions",
    testimonial: "Working with TVM IT Solutions transformed our business. Their Android app development services were exceptional, delivering a product that exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Marketing Director, Innovative Startup",
    testimonial: "The digital marketing strategy implemented by TVM IT Solutions helped us increase our online presence significantly. Their team was professional, responsive, and results-driven.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Owner, Boutique Fashion",
    testimonial: "The website developed by TVM IT Solutions for our boutique is not only visually stunning but also user-friendly. We've received numerous compliments from our customers about the improved online shopping experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-tvm-darkGray text-white relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tvm-darkGray to-tvm-darkBlue opacity-40 -z-10"></div>
      
      <div className="container-custom">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our valued clients have to say about their experience with TVM IT Solutions."
          titleClassName="text-white"
          subtitleClassName="text-gray-300"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden pb-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/5">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
                        />
                      ))}
                    </div>
                    <p className="text-lg mb-6 text-gray-200 italic">"{testimonial.testimonial}"</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-tvm-blue"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
            >
              <ChevronLeft size={18} />
            </Button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-tvm-blue" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="button-animation bg-tvm-blue hover:bg-tvm-blue/90">
            <Link to="/reviews">
              View All Reviews
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
