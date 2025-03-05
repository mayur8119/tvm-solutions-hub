
import { useState } from "react";
import { Star } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";

const initialReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    company: "FutureTech Solutions",
    testimonial: "Working with TVM IT Solutions transformed our business. Their Android app development services were exceptional, delivering a product that exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    service: "Android App Development",
  },
  {
    id: 2,
    name: "Rahul Patel",
    company: "Innovative Startup",
    testimonial: "The digital marketing strategy implemented by TVM IT Solutions helped us increase our online presence significantly. Their team was professional, responsive, and results-driven.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    service: "Digital Marketing",
  },
  {
    id: 3,
    name: "Ananya Desai",
    company: "Boutique Fashion",
    testimonial: "The website developed by TVM IT Solutions for our boutique is not only visually stunning but also user-friendly. We've received numerous compliments from our customers about the improved online shopping experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    service: "Website Development",
  },
  {
    id: 4,
    name: "Vikram Singh",
    company: "Health & Wellness",
    testimonial: "TVM IT Solutions helped us connect with relevant influencers in the health and wellness sector, which significantly increased our brand awareness and customer engagement. Their approach was strategic and effective.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    service: "Influencer Marketing",
  },
  {
    id: 5,
    name: "Neha Joshi",
    company: "Educational Platform",
    testimonial: "We needed a comprehensive Android app for our educational platform, and TVM IT Solutions delivered beyond our expectations. The app is intuitive, feature-rich, and has been instrumental in expanding our reach.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    service: "Android App Development",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    company: "Local Restaurant Chain",
    testimonial: "The website development and digital marketing services provided by TVM IT Solutions have been game-changers for our restaurant chain. We've seen a significant increase in online orders and customer engagement.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    service: "Website Development, Digital Marketing",
  },
];

const ReviewsList = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [filter, setFilter] = useState("All");

  const services = ["All", "Android App Development", "Website Development", "Digital Marketing", "Influencer Marketing"];

  const filteredReviews = filter === "All" 
    ? reviews 
    : reviews.filter(review => review.service.includes(filter));

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Client Reviews"
          subtitle="Read what our clients have to say about their experience working with us."
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map(service => (
            <button
              key={service}
              onClick={() => setFilter(service)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === service
                  ? "bg-tvm-blue text-white"
                  : "bg-tvm-blue/10 text-tvm-darkGray hover:bg-tvm-blue/20"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, index) => (
            <AnimatedCard key={review.id} delay={index * 100} className="h-full">
              <div className="glassmorphism rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-tvm-gray mb-6 flex-grow">{review.testimonial}</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-tvm-gray">{review.company}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-tvm-blue bg-tvm-blue/10 px-2 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsList;
