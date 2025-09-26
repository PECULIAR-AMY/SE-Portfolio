import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import developerHeadshot from "@/assets/developer-headshot.jpg";

const Hero = () => {
  return (
    <section className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Frontend</span>
                <br />
                Developer
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Crafting beautiful, responsive web experiences with modern technologies. 
                Passionate about clean code, user experience, and bringing ideas to life.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="hover-lift">
                <Mail className="h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="elegant" size="lg" className="hover-lift">
                <Download className="h-5 w-5" />
                Download CV
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="hover-glow rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-card to-secondary/30 p-2 rounded-3xl shadow-2xl">
                <img
                  src={developerHeadshot}
                  alt="Frontend Developer"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;