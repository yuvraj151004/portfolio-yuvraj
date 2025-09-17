import Header from "@/components/layout/header";
import { Code, Cpu, Globe, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "React.js, Node.js, MongoDB, Next.js",
      details: "Building modern, responsive web applications with cutting-edge technologies and best practices."
    },
    {
      icon: Cpu,
      title: "IoT Prototyping & Embedded Systems",
      description: "ESP32, Arduino, sensor integration",
      details: "Creating intelligent IoT solutions that bridge the physical and digital worlds."
    },
    {
      icon: Code,
      title: "API Development & Integration",
      description: "Flask, REST APIs, Secure Authentication",
      details: "Developing robust backend systems with secure authentication and seamless integrations."
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      description: "Figma, Tailwind CSS",
      details: "Crafting intuitive user experiences with modern design principles and prototyping tools."
    }
  ];

  return (
    <div className="min-h-screen dark-theme">
      <Header />
      
      <main className="pt-24 pb-12 page-transition">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-black text-dark-foreground mb-4 animate-glow">
              Services
            </h1>
            <p className="text-lg text-dark-accent max-w-2xl">
              Comprehensive solutions spanning web development, IoT engineering, and user experience design.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className={`group animate-fade-in-up delay-${index + 1}`}>
                <div className="border border-dark-border rounded-lg p-8 bg-dark-hover/20 hover:bg-dark-hover transition-all duration-500 card-hover backdrop-blur-sm">
                  <service.icon className="h-8 w-8 text-dark-foreground mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-glow-accent" />
                  
                  <h3 className="text-xl font-bold text-dark-foreground mb-3 group-hover:text-glow-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-dark-accent mb-4 uppercase tracking-wider">
                    {service.description}
                  </p>
                  
                  <p className="text-base text-dark-foreground leading-relaxed opacity-90">
                    {service.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Services;