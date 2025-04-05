
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-white dark:bg-gray-900 shadow-sm py-3" : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/d3c6ba39-b736-4a64-9d5f-2236e85b3f83.png" 
            alt="TVM IT Solutions Logo" 
            className="h-24 w-auto" 
            width="96"
            height="96"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-tvm-blue bg-tvm-blue/10 dark:text-blue-400 dark:bg-blue-900/30"
                  : "text-tvm-darkGray hover:text-tvm-blue hover:bg-tvm-blue/5 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <Link to="/login">
            <Button variant="outline" size="sm" className="ml-2">
              <User size={16} className="mr-2" />
              Login
            </Button>
          </Link>
          <Button className="ml-2" size="sm" onClick={() => window.location.href = '/login?signup=true'}>
            Sign Up
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-tvm-darkGray dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-3 rounded-md text-sm font-medium ${
                location.pathname === item.path
                  ? "text-tvm-blue bg-tvm-blue/10 dark:text-blue-400 dark:bg-blue-900/30"
                  : "text-tvm-darkGray hover:text-tvm-blue hover:bg-tvm-blue/5 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/login" className="w-full">
            <Button variant="outline" className="w-full flex items-center justify-center" size="sm">
              <User size={16} className="mr-2" />
              Login
            </Button>
          </Link>
          <Link to="/login?signup=true" className="w-full">
            <Button className="w-full" size="sm">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
