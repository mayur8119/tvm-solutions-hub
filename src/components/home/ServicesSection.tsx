
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Globe, BarChart2, Users } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";

const services = [
  {
    id: "android",
    title: "Android App Development",
    description: "Custom Android applications tailored to your business requirements with intuitive user interfaces and seamless functionality.",
    icon: Smartphone,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: "website",
    title: "Website Development",
    description: "Responsive and modern websites designed to provide the best user experience across all devices and platforms.",
    icon: Globe,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    id: "digital",
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive traffic, increase conversions, and maximize your online presence.",
    icon: BarChart2,
    color: "bg-green-500/10 text-green-500",
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    description: "Connect with relevant influencers to promote your brand and reach new audiences through authentic partnerships.",
    icon: Users,
    color: "bg-orange-500/10 text-orange-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-tvm-lightGray">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="We offer a comprehensive range of IT solutions to help businesses thrive in the digital landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={service.id} delay={index * 100} className="h-full">
              <Link
                to={`/services#${service.id}`}
                className="block h-full glassmorphism rounded-xl p-6 card-hover group"
              >
                <div className={`p-4 rounded-lg inline-block mb-4 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-tvm-gray mb-4">{service.description}</p>
                <div className="flex items-center text-tvm-blue font-medium group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
