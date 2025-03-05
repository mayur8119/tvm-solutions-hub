
import PageLayout from "@/components/common/PageLayout";
import AboutHero from "@/components/about/AboutHero";
import OurMission from "@/components/about/OurMission";
import CompanyHistory from "@/components/about/CompanyHistory";
import OurTeam from "@/components/about/OurTeam";

const AboutPage = () => {
  return (
    <PageLayout>
      <AboutHero />
      <OurMission />
      <CompanyHistory />
      <OurTeam 
        teamMembers={[
          {
            name: "Mayur Bodkhe",
            role: "CEO & Founder",
            bio: "Passionate tech enthusiast with expertise in IT solutions and business strategy. Leads TVM IT Solutions with a vision to transform businesses through innovative technology.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            socialLinks: {
              twitter: "https://twitter.com",
              linkedin: "https://linkedin.com",
              github: "https://github.com"
            }
          },
          {
            name: "Tejas Kale",
            role: "CTO",
            bio: "Technical genius behind TVM's innovative solutions. Specializes in software architecture and cutting-edge development practices to deliver high-quality digital products.",
            image: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            socialLinks: {
              twitter: "https://twitter.com",
              linkedin: "https://linkedin.com",
              github: "https://github.com"
            }
          },
          {
            name: "Vijay Kakde",
            role: "Marketing Director",
            bio: "Marketing strategist with a creative mind. Oversees digital marketing campaigns and influencer partnerships to help clients achieve maximum reach and engagement.",
            image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            socialLinks: {
              twitter: "https://twitter.com",
              linkedin: "https://linkedin.com",
              github: "https://github.com"
            }
          }
        ]}
      />
    </PageLayout>
  );
};

export default AboutPage;
