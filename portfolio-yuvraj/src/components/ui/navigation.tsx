import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const location = useLocation();

  const links = [
    { name: "Services", href: "/services" },
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={cn(
            "nav-link transition-colors",
            location.pathname === link.href && "text-portfolio-accent"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;