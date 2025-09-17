import { Link, useLocation } from "react-router-dom";
import Navigation from "@/components/ui/navigation";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isHomePage 
        ? "bg-background/80 border-portfolio-border" 
        : "bg-dark-background/80 border-dark-border"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <Link 
            to="/" 
            className={`hero-title transition-colors ${
              isHomePage 
                ? "text-portfolio-accent hover:text-foreground" 
                : "text-dark-accent hover:text-dark-foreground"
            }`}
          >
            Full-Stack Developer & IoT Engineer
          </Link>

          {/* Navigation */}
          <Navigation className="hidden md:flex" />

          {/* Mobile menu button - can be added later */}
          <div className="md:hidden">
            {/* Mobile menu toggle */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;