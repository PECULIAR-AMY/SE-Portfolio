import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Lightbulb,
  Wrench,
  Layers,
  Award,
  TrendingUp,
  Target,
  Briefcase,
  Code,
  CheckCircle2,
  PlayCircle,
  Monitor,
} from "lucide-react";
import { RecipeFinderProject } from "./RecipeFinderProject";
import { AiTravelAssistantProject } from "./AiTravelAssistantProject";
import projects from "../data/projects.json";

interface DemoItem {
  id: string;
  role: string;
  badge: string;
  title: string;
  description: string;
  keyHighlights?: string[];
  demoUrl: string;
  demoLabel?: string;
}

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  customerProblem: string;
  solution: string;
  solutionArchitecture?: {
    diagram: string;
    description: string;
  };
  technicalImplementation: string[];
  challenges: string;
  solutionApproach: string[];
  salesEngineeringSkills?: string[];
  businessValue: string;
  liveUrl: string;
  githubUrl?: string;
  demos?: DemoItem[];
}

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 md:mb-10 animate-fade-in text-left">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold mb-4 md:mb-6">
            Featured <span className="gradient-text">Solutions & Demos</span>
          </h2>
          <div className="text-[15px] sm:text-[17px] text-muted-foreground max-w-3xl leading-relaxed space-y-3 sm:space-y-4">
            <p>
              I build and demonstrate technical solutions that connect{" "}
              <strong className="text-foreground font-semibold">
                customer needs, business requirements and technical implementation
              </strong>
              . My projects demonstrate experience with{" "}
              <strong className="text-foreground font-semibold">
                requirements analysis, solution design, API integrations, technical architecture, problem-solving, product demonstrations and technical communication
              </strong>{" "}
              with a focus on showing how technology can address practical customer needs.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-10 md:space-y-12">
          {(projects as ProjectItem[]).map((project, index) => {
            if (project.id === "recipe-finder") {
              return <RecipeFinderProject key={project.id} project={project} index={index} />;
            }
            if (project.id === "ai-travel-assistant") {
              return <AiTravelAssistantProject key={project.id} project={project} index={index} />;
            }
            return (
              <div
                key={project.id || index}
                className="card-elegant p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 animate-fade-in-delay"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
              {/* Top Header & Category */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/50 pb-6">
                <div>
                  <h3 className="text-[26px] font-bold mb-2">{project.title}</h3>
                  <p className="text-[17px] text-primary font-medium">
                    {project.subtitle}
                  </p>
                </div>
                <div>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Grid Layout: Image & Case Study Breakdown */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Image & Quick Actions */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative group hover-lift">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="hero" className="w-full gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="elegant" className="w-full gap-2">
                          <Github className="h-4 w-4" />
                          Source Code
                        </Button>
                      </a>
                    )}
                  </div>

                  {/* Sales Engineering Skills */}
                  {project.salesEngineeringSkills && (
                    <div className="bg-secondary/40 p-5 rounded-2xl border border-border/50 space-y-3">
                      <div className="flex items-center gap-2 text-primary font-semibold text-[17px]">
                        <Award className="h-4 w-4" />
                        <span>Sales Engineering Skills</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.salesEngineeringSkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 bg-background text-foreground text-xs rounded-md border border-border/80 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Case Study Details */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Customer Problem */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary font-semibold text-[20px]">
                      <Target className="h-5 w-5" />
                      <h4 className="text-[20px] font-semibold">Customer Problem</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-[17px] whitespace-pre-line">
                      {project.customerProblem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-accent font-semibold text-[20px]">
                      <Lightbulb className="h-5 w-5" />
                      <h4 className="text-[20px] font-semibold">Solution</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-[17px] whitespace-pre-line">
                      {project.solution}
                    </p>
                  </div>

                  {/* Solution Architecture Diagram if exists */}
                  {project.solutionArchitecture && (
                    <div className="space-y-2 bg-secondary/30 p-4 rounded-xl border border-border/50">
                      <div className="flex items-center gap-2 text-foreground font-semibold text-[20px]">
                        <Layers className="h-5 w-5 text-primary" />
                        <h4 className="text-[20px] font-semibold">Solution Architecture</h4>
                      </div>
                      <div className="p-3 bg-background font-mono text-xs text-primary rounded-lg border border-border/60 overflow-x-auto">
                        {project.solutionArchitecture.diagram}
                      </div>
                      <p className="text-[17px] text-muted-foreground">
                        {project.solutionArchitecture.description}
                      </p>
                    </div>
                  )}

                  {/* Technical Challenges & Solution Approach */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-xl border border-border/50 space-y-2">
                      <div className="flex items-center gap-2 text-amber-500 font-semibold text-[20px]">
                        <Wrench className="h-5 w-5" />
                        <h4 className="text-[20px] font-semibold">Technical Challenges</h4>
                      </div>
                      <p className="text-[17px] text-muted-foreground leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>

                    <div className="bg-background p-4 rounded-xl border border-border/50 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-500 font-semibold text-[20px]">
                        <Lightbulb className="h-5 w-5" />
                        <h4 className="text-[20px] font-semibold">Technical Approach</h4>
                      </div>
                      <ul className="space-y-1 text-[17px] text-muted-foreground">
                        {project.solutionApproach.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technical Implementation */}
                  <div className="space-y-2">
                    <h4 className="text-[20px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Technical Implementation
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technicalImplementation.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Value */}
                  <div className="p-4 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent rounded-xl border border-primary/20 space-y-2">
                    <div className="flex items-center gap-2 text-primary font-semibold text-[20px]">
                      <TrendingUp className="h-5 w-5" />
                      <h4 className="text-[20px] font-semibold">Business Value</h4>
                    </div>
                    <p className="text-[17px] text-muted-foreground leading-relaxed whitespace-pre-line">
                      {project.businessValue}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dual Demo Perspectives Section */}
              {project.demos && project.demos.length > 0 && (
                <div className="mt-8 border-t border-border/60 pt-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-[22px] font-bold text-foreground flex items-center gap-2">
                        <Monitor className="h-5 w-5 text-primary" />
                        Interactive Demo Perspectives
                      </h4>
                      <p className="text-[15px] text-muted-foreground">
                        Explore this solution through two distinct engineering lenses
                      </p>
                    </div>
                    <div className="flex gap-2 bg-secondary/60 p-1.5 rounded-xl border border-border/50 self-start sm:self-auto">
                      <span className="text-xs font-semibold px-3 py-1 bg-primary/20 text-primary rounded-lg border border-primary/30">
                        Sales & Solution Demos Included
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {project.demos.map((demo) => {
                      const isSales = demo.id.includes("sales");
                      return (
                        <div
                          key={demo.id}
                          className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-5 ${
                            isSales
                              ? "bg-gradient-to-br from-primary/5 via-secondary/30 to-background border-primary/30 hover:border-primary/60"
                              : "bg-gradient-to-br from-accent/5 via-secondary/30 to-background border-accent/30 hover:border-accent/60"
                          }`}
                        >
                          <div className="space-y-3.5">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span
                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                                  isSales
                                    ? "bg-primary/15 text-primary border border-primary/30"
                                    : "bg-accent/15 text-accent border border-accent/30"
                                }`}
                              >
                                {isSales ? (
                                  <Briefcase className="h-3.5 w-3.5" />
                                ) : (
                                  <Code className="h-3.5 w-3.5" />
                                )}
                                {demo.role}
                              </span>
                              <span className="text-xs font-medium text-muted-foreground bg-background/80 px-2.5 py-0.5 rounded-md border border-border/50">
                                {demo.badge}
                              </span>
                            </div>

                            <h5 className="text-[18px] font-bold text-foreground leading-snug">
                              {demo.title}
                            </h5>

                            <p className="text-[15px] text-muted-foreground leading-relaxed">
                              {demo.description}
                            </p>

                            {demo.keyHighlights && (
                              <div className="space-y-2 pt-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                                  Key Demo Focus:
                                </span>
                                <ul className="space-y-1.5 text-xs text-muted-foreground">
                                  {demo.keyHighlights.map((highlight: string, hIdx: number) => (
                                    <li key={hIdx} className="flex items-start gap-2">
                                      <CheckCircle2
                                        className={`h-3.5 w-3.5 mt-0.5 flex-shrink-0 ${
                                          isSales ? "text-primary" : "text-accent"
                                        }`}
                                      />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          <div className="pt-4 border-t border-border/40">
                            <a
                              href={demo.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <Button
                                variant={isSales ? "hero" : "elegant"}
                                className="w-full gap-2 text-xs font-semibold py-2.5"
                              >
                                {isSales ? (
                                  <PlayCircle className="h-4 w-4" />
                                ) : (
                                  <ExternalLink className="h-4 w-4" />
                                )}
                                {demo.demoLabel || "View Demo"}
                              </Button>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;