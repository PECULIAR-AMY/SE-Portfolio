import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import developerHeadshot from "@/assets/peculiar.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="pt-24 pb-8 md:pt-28 md:pb-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <p className="text-muted-foreground text-base sm:text-lg font-medium">Hello, I'm Chiamaka Peculiar</p>
              <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-bold leading-tight">
                <span className="gradient-text">Sales Engineer / Solutions Engineer / Software Engineer</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] text-muted-foreground max-w-2xl leading-relaxed">
                I combine software engineering expertise with customer-focused communication to understand customer needs, translate business requirements into technical solutions, and communicate the value of technology to technical and non-technical stakeholders.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="hover-lift" onClick={scrollToContact}>
                <Mail className="h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="elegant" size="lg" className="hover-lift" asChild>
                <a href="/public/Chiamaka_Peculiar_Sales_Engineer_CV_Updated.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Sales Engineer CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover-lift" asChild>
                <a href="/public/Chiamaka_Peculiar_Solutions_Engineer_CV_Updated.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Solutions Engineer CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/PECULIAR-AMY" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                <Button variant="ghost" size="icon" className="hover-glow rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/chiamaka-igbokwe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Button variant="ghost" size="icon" className="hover-glow rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-card to-secondary/30 p-2 rounded-3xl shadow-2xl">
                <img
                  src={developerHeadshot}
                  alt="Chiamaka Peculiar"
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