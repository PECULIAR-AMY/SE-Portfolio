import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb, Wrench } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React and TypeScript, featuring real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Stripe", "Node.js", "MongoDB"],
      challenges: [
        "Implementing real-time inventory updates across multiple users",
        "Optimizing performance for large product catalogs",
        "Ensuring PCI compliance for payment processing"
      ],
      solutions: [
        "Used WebSocket connections for real-time updates with optimistic UI",
        "Implemented virtual scrolling and lazy loading for catalog performance",
        "Integrated Stripe's secure payment infrastructure with tokenization"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Dashboard",
      description: "Analytics dashboard with AI-driven insights, featuring interactive charts, predictive analytics, and automated report generation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "D3.js", "Python", "TensorFlow", "PostgreSQL"],
      challenges: [
        "Processing and visualizing large datasets efficiently",
        "Creating intuitive AI insight explanations",
        "Maintaining responsive performance with complex animations"
      ],
      solutions: [
        "Implemented data virtualization and progressive loading strategies",
        "Designed clear visual indicators and explanatory tooltips for AI insights",
        "Used Canvas-based rendering for smooth 60fps chart animations"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Collaborative Design Tool",
      description: "Real-time collaborative design platform allowing teams to create, edit, and review designs together with version control and commenting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "WebRTC", "Socket.io", "Canvas API", "Redis"],
      challenges: [
        "Synchronizing real-time collaborative editing",
        "Handling complex canvas operations and state management",
        "Implementing conflict resolution for simultaneous edits"
      ],
      solutions: [
        "Built operational transformation system for conflict-free collaboration",
        "Created efficient canvas state management with command pattern",
        "Implemented last-write-wins with visual conflict indicators"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects showcasing my skills in frontend development, 
            problem-solving, and creating engaging user experiences.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-delay ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="card-elegant p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Challenges</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-elegant p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Wrench className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold">Solutions</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button variant="hero" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="elegant" className="gap-2">
                    <Github className="h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;