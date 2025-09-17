import Header from "@/components/layout/header";
import { Code, Database, Smartphone, Palette, Award, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", icon: Code },
    { name: "React", icon: Code },
    { name: "Node.js", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Flask", icon: Code },
    { name: "SQL", icon: Database },
    { name: "IoT (Arduino/ESP32)", icon: Smartphone },
    { name: "Figma", icon: Palette },
    { name: "Git", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "Tailwind CSS", icon: Palette }
  ];

  return (
    <div className="min-h-screen dark-theme">
      <Header />
      
      <main className="pt-24 pb-12 page-transition">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-black text-dark-foreground mb-4 animate-glow">
              About
            </h1>
            <p className="text-lg text-dark-accent max-w-2xl">
              Full-Stack Developer & IoT Engineer passionate about building innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column - Bio & Education */}
            <div className="space-y-12 animate-fade-in-left delay-2">
              
              {/* Bio */}
              <div>
                <h2 className="text-2xl font-bold text-dark-foreground mb-6">Bio</h2>
                <div className="space-y-4 text-dark-foreground leading-relaxed">
                  <p>
                    I'm Yuvraj Singh Chandel, a B.Tech IoT student at MITS Gwalior (RGPV Bhopal). 
                    I specialize in full-stack development and IoT engineering, combining web technologies 
                    with embedded systems.
                  </p>
                  <p>
                    Skilled in Python, JavaScript, React, Node.js, MongoDB, and hardware prototyping 
                    with ESP32/Arduino. Strong track record in hackathons, innovation challenges, and 
                    building scalable solutions that bridge hardware and software.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-dark-foreground mb-6">Education</h2>
                <div className="border border-dark-border rounded-lg p-6 glass">
                  <h3 className="font-semibold text-dark-foreground mb-2">B.Tech in Internet of Things (IoT)</h3>
                  <p className="text-dark-accent mb-1">MITS Gwalior, RGPV Bhopal</p>
                  <p className="text-sm text-dark-accent">Expected Graduation: 2026</p>
                </div>
              </div>

            </div>

            {/* Right Column - Skills */}
            <div className="animate-fade-in-up delay-3">
              <h2 className="text-2xl font-bold text-dark-foreground mb-6">Skills & Technologies</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-2 bg-dark-hover/30 rounded-lg px-3 py-2 hover:bg-dark-hover transition-all duration-300 card-hover animate-fade-in-up delay-${index + 4}`}
                  >
                    <skill.icon className="h-4 w-4 text-glow-accent" />
                    <span className="text-sm font-medium text-dark-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="mt-12 animate-fade-in-up delay-5">
                <h3 className="text-lg font-semibold text-dark-foreground mb-4">Key Achievements</h3>
                <ul className="space-y-3 text-dark-foreground">
                  <li className="flex items-start space-x-2 hover:text-glow-accent transition-colors duration-300">
                    <Award className="h-5 w-5 text-glow-accent mt-0.5" />
                    <span>Winner - Smart India Hackathon 2024</span>
                  </li>
                  <li className="flex items-start space-x-2 hover:text-glow-accent transition-colors duration-300">
                    <Users className="h-5 w-5 text-glow-accent mt-0.5" />
                    <span>Participant - Accenture Innovation Challenge</span>
                  </li>
                  <li className="flex items-start space-x-2 hover:text-glow-accent transition-colors duration-300">
                    <Award className="h-5 w-5 text-glow-accent mt-0.5" />
                    <span>Multiple National Hackathon Participations</span>
                  </li>
                  <li className="flex items-start space-x-2 hover:text-glow-accent transition-colors duration-300">
                    <Code className="h-5 w-5 text-glow-accent mt-0.5" />
                    <span>Published IoT Research Projects</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default About;