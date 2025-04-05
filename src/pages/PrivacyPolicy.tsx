
import React from "react";
import PageLayout from "@/components/common/PageLayout";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <PageLayout 
      title="Privacy Policy | TVM IT Solutions"
      description="Privacy policy for TVM IT Solutions - Learn how we handle your personal information and data in compliance with regulations."
      keywords="privacy policy, data protection, TVM IT Solutions, information security, GDPR compliance"
    >
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
          
          <Separator className="mb-8" />
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">Welcome to TVM IT Solutions ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or interact with us in any way.</p>
            <p>By using our services, you agree to the collection and use of information in accordance with this policy.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
            <p className="mb-4">We may collect personal information that you provide directly to us, such as:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contact information (name, email address, phone number, business address)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information</li>
              <li>Communications you send to us</li>
              <li>Information provided in forms, surveys, or feedback</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3">2.2 Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website or use our services, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP address</li>
              <li>Device information (type, operating system, browser)</li>
              <li>Usage data (pages visited, time spent on pages, links clicked)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and managing your account</li>
              <li>Responding to your inquiries and requests</li>
              <li>Sending administrative information, such as updates or security alerts</li>
              <li>Sending marketing communications (you can opt out at any time)</li>
              <li>Analytics to understand how our services are used</li>
              <li>Protecting our services and users from fraudulent or illegal activity</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners with whom we offer co-branded services</li>
              <li>Legal and regulatory authorities when required by law</li>
              <li>In connection with a business transaction (merger, acquisition, sale of assets)</li>
              <li>With your consent or at your direction</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="mb-4">We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Data portability</li>
              <li>Objection to processing of your personal information</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details provided below.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cookies Policy</h2>
            <p className="mb-4">We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="mb-4">Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without verification of parental consent, we will take steps to remove that information from our servers.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="mb-1"><strong>TVM IT Solutions</strong></p>
              <p className="mb-1">Chandan Apartment, Rana Nagar, Seven Hills</p>
              <p className="mb-1">CIDCO, Aurangabad, Maharashtra, India</p>
              <p className="mb-1">Email: futuretech@tvmitsolution.com</p>
              <p>Phone: +91 9309917269</p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
