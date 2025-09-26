import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Expert in React, TypeScript, and modern JavaScript frameworks with focus on performance and accessibility.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with attention to user experience and design systems.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and user engagement using modern development practices.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in agile development environments.",
    },
  ];

  const technologies = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL",
    "Redux", "Framer Motion", "Webpack", "Vite", "Jest", "Cypress"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with 5+ years of experience creating 
            exceptional digital experiences. I love turning complex problems into 
            simple, beautiful solutions that users enjoy.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card-elegant p-6 text-center hover-lift animate-fade-in-delay group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Love</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm font-medium hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;