
import PageLayout from "@/components/common/PageLayout";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import { Toaster } from "@/components/ui/toaster";

const ContactPage = () => {
  return (
    <PageLayout>
      <ContactHero />
      <ContactForm />
      <div className="container-custom py-16">
        <MapSection 
          address="Chandan Apartment, Rana Nagar, Seven Hills, CIDCO, Aurangabad, Maharashtra, India"
          phone="+91 9309917269 / +91 9730031264"
          email="mayurbodkhe7918@gmail.com"
        />
      </div>
      <Toaster />
    </PageLayout>
  );
};

export default ContactPage;
