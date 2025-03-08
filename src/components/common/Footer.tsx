
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tvm-darkBlue text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex justify-center md:justify-start mb-6">
              <img 
                src="/lovable-uploads/d3c6ba39-b736-4a64-9d5f-2236e85b3f83.png" 
                alt="TVM IT Solutions Logo" 
                className="h-28 w-auto" 
              />
            </div>
            <p className="text-gray-200 mb-4">
              Transforming businesses through innovative IT solutions and cutting-edge technologies.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-200 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#android" className="text-gray-200 hover:text-white transition-colors">
                  Android App Development
                </Link>
              </li>
              <li>
                <Link to="/services#website" className="text-gray-200 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services#digital" className="text-gray-200 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services#influencer" className="text-gray-200 hover:text-white transition-colors">
                  Influencer Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <span className="text-gray-200">
                  Chandan Apartment, Rana Nagar, Seven Hills, CIDCO, Aurangabad, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-white flex-shrink-0" />
                <span className="text-gray-200">+91 9309917269</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <span className="text-gray-200">mayurbodkhe7918@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} TVM IT Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
