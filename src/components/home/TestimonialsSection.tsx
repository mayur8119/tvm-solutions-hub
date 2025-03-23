
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CTO, TechVision India",
    testimonial: "TVM IT Solutions has been an outstanding partner for our digital transformation journey. Their Android app development team delivered a robust solution that has significantly improved our customer engagement metrics.",
    rating: 5,
    hasPhoto: false,
  },
  {
    id: 2,
    name: "Aisha Patel",
    role: "Founder, GrowthXcel Marketing",
    testimonial: "The digital marketing strategy implemented by TVM IT Solutions doubled our online conversions within three months. Their data-driven approach and continuous optimization made all the difference for our business.",
    rating: 5,
    hasPhoto: false,
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Director, Sunshine Retail Group",
    testimonial: "We approached TVM IT Solutions for our e-commerce website, and they exceeded our expectations. The user experience is seamless, and our customers love the intuitive design. Sales have increased by 45% since launch.",
    rating: 5,
    hasPhoto: false,
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "CEO, InnovateIndia Solutions",
    testimonial: "The SEO services provided by TVM IT Solutions transformed our online presence. Our website now ranks on the first page for all our target keywords, bringing in substantial leads every month at an affordable cost.",
    rating: 5,
    hasPhoto: false,
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Managing Director, Sparkle Retail",
    testimonial: "What impressed me most about TVM IT Solutions was their quick turnaround time. They delivered our complete website with e-commerce functionality in just three weeks, without compromising on quality or features.",
    rating: 5,
    hasPhoto: false,
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
    <section id="testimonials" className="section-padding bg-tvm-darkGray text-white relative">
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
                      <div className="w-12 h-12 rounded-full bg-tvm-blue/20 flex items-center justify-center">
                        <User size={24} className="text-tvm-blue" />
                      </div>
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
              aria-label="Previous testimonial"
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
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>

        {/* Schema markup for reviews (hidden) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "TVM IT Solutions",
          "review": testimonials.map(t => ({
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": t.rating,
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": t.name
            },
            "reviewBody": t.testimonial
          }))
        })}} />

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
