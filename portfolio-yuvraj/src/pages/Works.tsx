import Header from "@/components/layout/header";
import { ExternalLink, Github } from "lucide-react";

const Works = () => {
  const projects = [
    {
      title: "Mentor Connect",
      description: "Full-stack mentorship platform",
      details: "Google OAuth, dashboards, bookings",
      category: "Full-Stack Development",
      status: "Completed"
    },
    {
      title: "Fire License Automation",
      description: "SIH 2024 project",
      details: "Real-time license approval dashboards for Delhi Govt",
      category: "Government Solution",
      status: "Hackathon Winner"
    },
    {
      title: "Health Care Management System",
      description: "Healthcare platform",
      details: "Hackathon project at IIT Indore Fluxus 2025",
      category: "Healthcare Tech",
      status: "Recent"
    },
    {
      title: "Cluby",
      description: "College event management platform",
      details: "RSVP and real-time updates",
      category: "Event Management",
      status: "Live"
    },
    {
      title: "Movie Recommendation System",
      description: "ML-powered recommendations",
      details: "Content-based recommendation engine using Python & ML",
      category: "Machine Learning",
      status: "Completed"
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
              Works
            </h1>
            <p className="text-lg text-dark-accent max-w-2xl">
              Selected projects showcasing full-stack development, IoT solutions, and innovative problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`group cursor-pointer animate-fade-in-up delay-${index + 1}`}>
                <div className="border border-dark-border rounded-lg p-6 bg-dark-hover/20 hover:bg-dark-hover transition-all duration-500 card-hover backdrop-blur-sm relative overflow-hidden">
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-glow-primary/10 to-glow-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-xs font-medium text-dark-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-dark-background bg-dark-accent px-2 py-1 rounded">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Project Info */}
                  <h3 className="text-xl font-bold text-dark-foreground mb-2 group-hover:text-glow-accent transition-colors duration-300 relative z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-dark-accent mb-3 relative z-10">
                    {project.description}
                  </p>
                  
                  <p className="text-sm text-dark-foreground leading-relaxed mb-4 opacity-90 relative z-10">
                    {project.details}
                  </p>

                  {/* Action Icons */}
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                    <ExternalLink className="h-4 w-4 text-dark-accent hover:text-glow-accent transition-colors cursor-pointer transform hover:scale-110" />
                    <Github className="h-4 w-4 text-dark-accent hover:text-glow-accent transition-colors cursor-pointer transform hover:scale-110" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default Works;