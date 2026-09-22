import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Chiamaka Peculiar</h3>
            <p className="text-background/70 leading-relaxed">
              Bridging technology and business to deliver practical, scalable solutions that solve real customer challenges.
              Let’s turn complex technical needs into solutions that drive meaningful results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-background/70 hover:text-background transition-colors">
                About
              </a>
              <a href="#projects" className="text-background/70 hover:text-background transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-background/70 hover:text-background transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-2">
              <p className="text-background/70">emmanuelpeculiar645@gmail.com</p>
              <p className="text-background/70">Abuja, Nigeria</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/PECULIAR-AMY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:text-background hover:bg-background/20 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/chiamaka-igbokwe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:text-background hover:bg-background/20 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:emmanuelpeculiar645@gmail.com"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:text-background hover:bg-background/20 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm mb-4 md:mb-0">
            © {currentYear} Chiamaka Peculiar. All rights reserved.
          </p>
          <p className="text-background/70 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-400" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;