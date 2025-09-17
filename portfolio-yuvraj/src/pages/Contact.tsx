import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen dark-theme">
      <Header />
      
      <main className="pt-24 pb-12 page-transition">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-black text-dark-foreground mb-4 animate-glow">
              Contact
            </h1>
            <p className="text-lg text-dark-accent max-w-2xl">
              Let's discuss your next project or collaboration opportunity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-fade-in-left delay-2">
              <form onSubmit={handleSubmit} className="space-y-6 glass rounded-xl p-8">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-dark-foreground">Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    required 
                    className="mt-2 bg-dark-hover/50 border-dark-border text-dark-foreground focus:ring-glow-accent focus:border-glow-accent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-dark-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="mt-2 bg-dark-hover/50 border-dark-border text-dark-foreground focus:ring-glow-accent focus:border-glow-accent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-dark-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={6} 
                    required 
                    className="mt-2 bg-dark-hover/50 border-dark-border text-dark-foreground focus:ring-glow-accent focus:border-glow-accent transition-all duration-300"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-dark-foreground text-dark-background hover:bg-dark-accent rounded-lg font-medium glow-button transition-all duration-300 hover:shadow-glow"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up delay-3">
              <div>
                <h3 className="text-xl font-bold text-dark-foreground mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  
                  <a 
                    href="mailto:yuvrajchandel1510@gmail.com" 
                    className="flex items-center space-x-3 text-dark-foreground hover:text-glow-accent transition-all duration-300 group transform hover:translate-x-2"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>yuvrajchandel1510@gmail.com</span>
                  </a>
                  
                  <a 
                    href="tel:+918887506921" 
                    className="flex items-center space-x-3 text-dark-foreground hover:text-glow-accent transition-all duration-300 group transform hover:translate-x-2"
                  >
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>+91-8887506921</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-dark-foreground hover:text-glow-accent transition-all duration-300 group transform hover:translate-x-2"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>LinkedIn Profile</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-dark-foreground hover:text-glow-accent transition-all duration-300 group transform hover:translate-x-2"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>GitHub Profile</span>
                  </a>
                  
                </div>
              </div>

              {/* Availability */}
              <div className="border border-dark-border rounded-lg p-6 glass animate-fade-in-up delay-4">
                <h4 className="font-semibold text-dark-foreground mb-2">Availability</h4>
                <p className="text-sm text-dark-accent mb-1">Currently available for:</p>
                <ul className="text-sm text-dark-foreground space-y-1">
                  <li>• Full-stack development projects</li>
                  <li>• IoT consulting and prototyping</li>
                  <li>• Hackathon collaborations</li>
                  <li>• Freelance opportunities</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;