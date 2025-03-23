
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

  // Local business schema for local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TVM IT Solutions",
    "image": "https://tvmitsolution.com/lovable-uploads/c5702016-5beb-46a8-8730-e158f8e3e8e7.png",
    "telephone": "+91-9309917269",
    "email": "futuretech@tvmitsolution.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chandan Apartment, Rana Nagar, Seven Hills",
      "addressLocality": "Aurangabad",
      "addressRegion": "Maharashtra",
      "postalCode": "431001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.8762",
      "longitude": "75.3433"
    },
    "url": "https://tvmitsolution.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "₹₹"
  };

  // Breadcrumb schema for better navigation structure
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tvmitsolution.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://tvmitsolution.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://tvmitsolution.com/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://tvmitsolution.com/contact"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TVM IT Solutions" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Aurangabad" />
        <meta name="geo.position" content="19.8762;75.3433" />
        <meta name="ICBM" content="19.8762, 75.3433" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
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
