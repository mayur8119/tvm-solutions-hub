
import { useState } from "react";
import { Star, User } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";

const initialReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "TechVision India",
    testimonial: "TVM IT Solutions has been an outstanding partner for our digital transformation journey. Their Android app development team delivered a robust solution that has significantly improved our customer engagement metrics.",
    rating: 5,
    hasPhoto: false,
    service: "Android App Development",
  },
  {
    id: 2,
    name: "Aisha Patel",
    company: "GrowthXcel Marketing",
    testimonial: "The digital marketing strategy implemented by TVM IT Solutions doubled our online conversions within three months. Their data-driven approach and continuous optimization made all the difference for our business.",
    rating: 5,
    hasPhoto: false,
    service: "Digital Marketing",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    company: "Sunshine Retail Group",
    testimonial: "We approached TVM IT Solutions for our e-commerce website, and they exceeded our expectations. The user experience is seamless, and our customers love the intuitive design. Sales have increased by 45% since launch.",
    rating: 5,
    hasPhoto: false,
    service: "Website Development",
  },
  {
    id: 4,
    name: "Meera Sharma",
    company: "Wellness Connect",
    testimonial: "The influencer marketing campaign designed by TVM IT Solutions helped us reach our target demographic with precision. Their strategic approach and network of partnerships delivered exceptional ROI for our wellness products.",
    rating: 5,
    hasPhoto: false,
    service: "Influencer Marketing",
  },
  {
    id: 5,
    name: "Arjun Singh",
    company: "EduTech Innovations",
    testimonial: "Our educational app developed by TVM IT Solutions has received outstanding feedback from students and teachers alike. The intuitive interface and performance optimization have made it a valuable tool in our educational ecosystem.",
    rating: 5,
    hasPhoto: false,
    service: "Android App Development",
  },
  {
    id: 6,
    name: "Priyanka Joshi",
    company: "Spice Route Restaurants",
    testimonial: "The comprehensive digital strategy implemented by TVM IT Solutions revolutionized our restaurant chain's online presence. From our website to digital marketing campaigns, every aspect has contributed to our growth.",
    rating: 5,
    hasPhoto: false,
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
                  <div className="w-12 h-12 rounded-full bg-tvm-blue/10 flex items-center justify-center">
                    <User size={20} className="text-tvm-blue" />
                  </div>
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
