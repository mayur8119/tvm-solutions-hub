
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import PromotionPopup from "./PromotionPopup";
import { Helmet } from "react-helmet";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const PageLayout = ({ 
  children, 
  className = "",
  title = "TVM IT Solutions | Affordable IT Services & Web Development",
  description = "Affordable IT solutions with rapid delivery. We offer website development, Android apps, digital marketing, SEO, and end-to-end IT support for businesses.",
  keywords = "IT solutions, affordable IT services, web development, Android app developers, budget website design, SEO services, IT maintenance",
  canonicalUrl = "https://tvmitsolution.com"
}: PageLayoutProps) => {
  // Organization schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TVM IT Solutions",
    "url": "https://tvmitsolution.com",
    "logo": "https://tvmitsolution.com/lovable-uploads/c5702016-5beb-46a8-8730-e158f8e3e8e7.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9309917269",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chandan Apartment, Rana Nagar, Seven Hills",
      "addressLocality": "Aurangabad",
      "addressRegion": "Maharashtra",
      "postalCode": "431001",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/in/tvm-it-solutions-91544a355",
      "https://www.facebook.com/tvmitsolutions",
      "https://twitter.com/tvmitsolutions"
    ]
  };

  // Service schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Solutions",
    "provider": {
      "@type": "Organization",
      "name": "TVM IT Solutions"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Maintenance"
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      <Navigation />
      <main className={`flex-grow ${className}`}>{children}</main>
      <Footer />
      <PromotionPopup />
    </div>
  );
};

export default PageLayout;
