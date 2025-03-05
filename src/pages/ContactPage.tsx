
import PageLayout from "@/components/common/PageLayout";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";

const ContactPage = () => {
  return (
    <PageLayout>
      <ContactHero />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactForm />
          <MapSection 
            address="Chandan Apartment, Rana Nagar, Seven Hills, CIDCO, Aurangabad, Maharashtra, India"
            phone="+91 9309917269 / +91 9730031264"
            email="mayurbodkhe7918@gmail.com"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
