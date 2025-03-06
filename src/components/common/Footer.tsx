
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tvm-darkGray text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/d3c6ba39-b736-4a64-9d5f-2236e85b3f83.png" 
                alt="TVM IT Solutions Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Transforming businesses through innovative IT solutions and cutting-edge technologies.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-tvm-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-tvm-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tvm-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-tvm-blue transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-tvm-blue transition-colors">
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
                <Link to="/services#android" className="text-gray-300 hover:text-tvm-blue transition-colors">
                  Android App Development
                </Link>
              </li>
              <li>
                <Link to="/services#website" className="text-gray-300 hover:text-tvm-blue transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services#digital" className="text-gray-300 hover:text-tvm-blue transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services#influencer" className="text-gray-300 hover:text-tvm-blue transition-colors">
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
                <MapPin size={18} className="text-tvm-blue mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Chandan Apartment, Rana Nagar, Seven Hills, CIDCO, Aurangabad, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-tvm-blue flex-shrink-0" />
                <span className="text-gray-300">+91 9309917269 / +91 9730031264</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-tvm-blue flex-shrink-0" />
                <span className="text-gray-300">mayurbodkhe7918@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} TVM IT Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-tvm-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-tvm-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-tvm-blue transition-colors">
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
