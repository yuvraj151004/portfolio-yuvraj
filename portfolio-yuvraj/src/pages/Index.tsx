import Header from "@/components/layout/header";
import ContactButton from "@/components/ui/contact-button";
import AvailabilityBadge from "@/components/ui/availability-badge";
import portraitImage from "@/assets/yuvraj-portrait.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Hero Name */}
              <div className="space-y-4">
                <h1 className="hero-name">
                  YUVRAJ SINGH CHANDEL
                </h1>
              </div>

              {/* Portrait - Mobile */}
              <div className="lg:hidden animate-fade-in-up delay-3">
                <div className="relative w-64 h-80 mx-auto overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105">
                  <img 
                    src={portraitImage}
                    alt="Yuvraj Singh Chandel - Full-Stack Developer & IoT Engineer"
                    className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>
              </div>

              {/* Introduction */}
              <div className="space-y-6 max-w-lg animate-fade-in-up delay-4">
                <p className="text-base lg:text-lg leading-relaxed text-foreground">
                  Full-Stack Developer & IoT Engineer with experience building web apps and embedded systems. 
                  Skilled in React.js, Node.js, MongoDB, Python (Flask), and IoT prototypes. Proven track record 
                  in Smart India Hackathon, Accenture Innovation Challenge, and national hackathons. Passionate 
                  about scalable solutions that make an impact.
                </p>
                
                <div className="animate-fade-in-up delay-5">
                  <ContactButton />
                </div>
              </div>
            </div>

            {/* Right Column - Portrait Desktop */}
            <div className="hidden lg:block animate-fade-in-up delay-3">
              <div className="relative w-full max-w-md ml-auto overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105">
                <img 
                  src={portraitImage}
                  alt="Yuvraj Singh Chandel - Full-Stack Developer & IoT Engineer"
                  className="w-full h-auto object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          {/* Availability Badge - Bottom Right */}
          <div className="fixed bottom-8 right-8 lg:bottom-12 lg:right-12 animate-fade-in-up delay-6">
            <AvailabilityBadge />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
