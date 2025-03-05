import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";
import { LinkedinIcon, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Mayur Bodkhe",
    role: "Founder & CEO",
    bio: "Mayur is a visionary leader with extensive experience in IT solutions and business strategy. He founded TVM IT Solutions with the goal of helping businesses leverage technology for growth.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Tejas Kale",
    role: "CTO & Lead Developer",
    bio: "Tejas leads our technical team with his exceptional coding skills and innovation in mobile and web development. He ensures our solutions are cutting-edge and reliable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Vijay Kakde",
    role: "Marketing Director",
    bio: "Vijay brings his expertise in digital marketing and influencer strategies to help our clients maximize their online presence and reach their target audiences effectively.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
];

const OurTeam = () => {
  return (
    <section className="section-padding bg-tvm-lightGray">
      <div className="container-custom">
        <SectionHeading
          title="Meet Our Team"
          subtitle="The talented individuals behind TVM IT Solutions who make it all happen."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedCard key={index} delay={index * 100}>
              <div className="glassmorphism rounded-xl overflow-hidden h-full card-hover">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-tvm-blue font-medium mb-4">{member.role}</p>
                  <p className="text-tvm-gray mb-6">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 bg-tvm-blue/10 text-tvm-blue rounded-full hover:bg-tvm-blue hover:text-white transition-colors">
                      <LinkedinIcon size={18} />
                    </a>
                    <a href="#" className="p-2 bg-tvm-blue/10 text-tvm-blue rounded-full hover:bg-tvm-blue hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="p-2 bg-tvm-blue/10 text-tvm-blue rounded-full hover:bg-tvm-blue hover:text-white transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
