import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Business", path: "/business" },
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-r from-primary to-primary-glow p-2 rounded-lg group-hover:shadow-lg transition-shadow">
              <img src={logo} alt="LuxeRide" className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-wide">LuxeRide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/booking" className="btn-accent">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "bg-accent/10 text-accent"
                      : "hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="btn-accent mx-4"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
