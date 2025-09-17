import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactButton = () => {
  return (
    <Link to="/contact">
      <Button 
        size="lg" 
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 font-medium tracking-wide transition-all duration-300 hover:scale-105 glow-button shadow-lg hover:shadow-xl"
      >
        CONTACT
        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
    </Link>
  );
};

export default ContactButton;