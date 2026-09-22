import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Lightbulb,
  Wrench,
  Layers,
  TrendingUp,
  Target,
  Briefcase,
  Code,
  CheckCircle2,
  PlayCircle,
  Monitor,
  Terminal,
  Cloud,
  Box,
  Server,
  ArrowRight,
  ListChecks,
  Workflow,
  Copy,
  Check,
} from "lucide-react";

interface RecipeFinderProjectProps {
  project: any;
  index: number;
}

export const RecipeFinderProject: React.FC<RecipeFinderProjectProps> = ({ project, index }) => {
  const [copied, setCopied] = useState(false);

  const dockerfileCode = `FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`;

  const copyDockerfile = () => {
    navigator.clipboard.writeText(dockerfileCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToArchitecture = () => {
    const el = document.getElementById("recipe-finder-architecture");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="card-elegant p-5 sm:p-8 lg:p-10 space-y-8 animate-fade-in-delay border-primary/30"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* 1. PROJECT HEADER */}
      <div className="flex flex-col space-y-4 border-b border-border/50 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-[28px] sm:text-[32px] font-bold text-foreground">
              {project.title}
            </h3>
            <p className="text-[17px] sm:text-[19px] text-primary font-semibold mt-1">
              API-Driven Recipe Discovery & Cloud Deployment Solution
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" className="gap-2 text-xs font-semibold">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </a>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="elegant" className="gap-2 text-xs font-semibold">
                  <Github className="h-4 w-4" />
                  Source Code
                </Button>
              </a>
            )}
            <Button
              variant="outline"
              className="gap-2 text-xs font-semibold"
              onClick={scrollToArchitecture}
            >
              <Layers className="h-4 w-4 text-primary" />
              Architecture
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            "API Integration",
            "Solution Design",
            "Technical Architecture",
            "Docker",
            "AWS",
            "Performance Optimization",
          ].map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Grid for Image and Main Overview */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Image */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative group hover-lift">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover rounded-2xl shadow-lg border border-border/50"
            />
          </div>
        </div>

        {/* Right Column: 2. Overview & 3. Customer Problem */}
        <div className="lg:col-span-7 space-y-6">
          {/* 2. PROJECT OVERVIEW */}
          <div className="space-y-2 bg-secondary/30 p-5 rounded-2xl border border-border/50">
            <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
              <Workflow className="h-5 w-5 text-primary" />
              Project Overview
            </h4>
            <p className="text-muted-foreground leading-relaxed text-[16px]">
              Recipe Finder is an API-driven recipe discovery application. I built the solution using React/TypeScript, integrated a third-party REST API, optimized API requests, containerized the application with Docker, and worked through the AWS deployment workflow using Amazon ECR and Amazon EC2.
            </p>
          </div>

          {/* 3. CUSTOMER PROBLEM */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-semibold text-[19px]">
              <Target className="h-5 w-5" />
              <h4 className="text-[19px] font-semibold">Customer Problem</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed text-[16px]">
              Users looking for recipes often need to navigate multiple sources to find relevant meals and supporting cooking resources. Recipe Finder provides a streamlined recipe discovery experience through a single customer-facing application.
            </p>
          </div>
        </div>
      </div>

      {/* 4. SOLUTION & ARCHITECTURE */}
      <div id="recipe-finder-architecture" className="space-y-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-accent font-semibold text-[20px]">
          <Lightbulb className="h-5 w-5" />
          <h4 className="text-[20px] font-bold text-foreground">Solution & Architecture</h4>
        </div>
        <p className="text-muted-foreground leading-relaxed text-[16px]">
          Recipe Finder is a responsive API-driven application that integrates TheMealDB REST API to retrieve and display recipe information.
        </p>

        {/* Visual Solution Flow */}
        <div className="bg-background p-5 rounded-2xl border border-border/60 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-primary" /> Solution Data & Infrastructure Flow
          </span>
          <div className="p-4 bg-secondary/40 font-mono text-xs text-primary rounded-xl border border-border/60 flex flex-wrap items-center gap-2 leading-relaxed overflow-x-auto">
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">React</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">TheMealDB REST API</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">React Query</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">Context API</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">Docker</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">Nginx</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">Amazon ECR</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">Amazon EC2</span>
          </div>
        </div>
      </div>

      {/* 5. REQUIREMENTS & TECHNICAL APPROACH */}
      <div className="grid md:grid-cols-2 gap-6 pt-2">
        {/* Requirements */}
        <div className="bg-background p-5 rounded-2xl border border-border/60 space-y-3">
          <div className="flex items-center gap-2 text-primary font-semibold text-[18px]">
            <ListChecks className="h-5 w-5" />
            <h4 className="text-[18px] font-bold text-foreground">Requirements</h4>
          </div>
          <ul className="space-y-2 text-[15px] text-muted-foreground">
            {[
              "Recipe search and discovery",
              "Third-party REST API integration",
              "Responsive user experience",
              "Efficient API request handling",
              "Predictable state management",
              "Performance optimization",
              "Containerized application",
              "Cloud deployment workflow",
            ].map((req, rIdx) => (
              <li key={rIdx} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Approach */}
        <div className="bg-background p-5 rounded-2xl border border-border/60 space-y-3">
          <div className="flex items-center gap-2 text-emerald-500 font-semibold text-[18px]">
            <Wrench className="h-5 w-5" />
            <h4 className="text-[18px] font-bold text-foreground">Technical Approach</h4>
          </div>
          <ul className="space-y-2 text-[15px] text-muted-foreground">
            {[
              "React + TypeScript frontend development",
              "TheMealDB REST API integration for recipe data",
              "React Query for server-state management, caching and refetching",
              "Context API for shared application state",
              "Debounced search to reduce unnecessary API requests",
              "Memoization where appropriate",
            ].map((appr, aIdx) => (
              <li key={aIdx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>{appr}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6. TECHNICAL IMPLEMENTATION CARDS */}
      <div className="space-y-4 pt-2">
        <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          Technical Implementation Highlights
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-secondary/30 rounded-xl border border-border/50 space-y-2">
            <h5 className="font-bold text-[16px] text-primary">API Integration</h5>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              TheMealDB REST API, HTTP, JSON and API request handling.
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-xl border border-border/50 space-y-2">
            <h5 className="font-bold text-[16px] text-accent">State Management</h5>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              React Query and Context API.
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-xl border border-border/50 space-y-2">
            <h5 className="font-bold text-[16px] text-emerald-500">Performance</h5>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Debounced search, caching and appropriate memoization.
            </p>
          </div>
        </div>
      </div>

      {/* 7. DOCKER & CONTAINERIZATION */}
      <div className="space-y-4 p-6 bg-gradient-to-br from-secondary/40 via-background to-secondary/20 rounded-2xl border border-primary/20">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Box className="h-6 w-6 text-primary" />
            <h4 className="text-[20px] font-bold text-foreground">Docker & Containerization</h4>
          </div>
          <span className="text-xs font-mono bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded-full">
            Multi-Stage Build
          </span>
        </div>

        <p className="text-muted-foreground text-[15px] leading-relaxed">
          I created a multi-stage Docker build to optimize container size and separate build environment from runtime.
        </p>

        {/* Visual Flow */}
        <div className="p-3 bg-background rounded-xl border border-border/60 font-mono text-xs text-primary flex flex-wrap items-center gap-2 overflow-x-auto">
          <span className="font-semibold text-foreground">Node.js Alpine Build Stage</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Production Build</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Nginx Alpine Runtime</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Docker Container</span>
        </div>

        {/* Bullet Explanation */}
        <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Node.js is used for the build stage.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>The React application is built into production assets.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Nginx serves the production assets.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Separating build and runtime keeps the production container focused on serving the application.</span>
          </li>
        </ul>

        {/* Code View Component */}
        <div className="mt-4 rounded-xl border border-border/80 bg-zinc-950 overflow-hidden shadow-lg">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-zinc-400 text-xs font-mono">
            <span className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-primary" /> Dockerfile (Multi-Stage)
            </span>
            <button
              onClick={copyDockerfile}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
            <code>{dockerfileCode}</code>
          </pre>
        </div>
      </div>

      {/* 8. LINUX & AWS DEPLOYMENT */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2">
          <Cloud className="h-6 w-6 text-primary" />
          <h4 className="text-[20px] font-bold text-foreground">Linux (Ubuntu) & Cloud Deployment</h4>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Linux Card */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-3 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 text-primary font-bold text-[17px]">
              <Terminal className="h-5 w-5" />
              <h5>Linux (Ubuntu)</h5>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              {["Linux (Ubuntu) terminal", "SSH", "Remote server access", "Docker commands", "Troubleshooting"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amazon ECR Card */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-3 hover:border-accent/50 transition-colors">
            <div className="flex items-center gap-2 text-accent font-bold text-[17px]">
              <Box className="h-5 w-5" />
              <h5>Amazon ECR</h5>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              {["Private container registry", "Docker authentication", "Image tagging", "Image push"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amazon EC2 Card */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-3 hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-[17px]">
              <Server className="h-5 w-5" />
              <h5>Amazon EC2</h5>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              {["EC2 instance", "Linux (Ubuntu) environment", "SSH connection", "Container deployment workflow"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 9. DEPLOYMENT ARCHITECTURE */}
      <div className="space-y-4 p-6 bg-secondary/30 rounded-2xl border border-border/60">
        <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          Deployment Architecture Flow
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-4 bg-background rounded-xl border border-border/60 font-mono text-xs sm:text-sm text-primary">
          <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">Developer Environment</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">Docker Multi-Stage Build</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">Amazon ECR</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">Amazon EC2 (Linux/Ubuntu)</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">Docker Container</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">Nginx</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <span className="px-3 py-1.5 bg-primary/20 text-primary font-bold rounded-lg border border-primary/30">Recipe Finder</span>
        </div>
      </div>

      {/* 10. TECHNICAL CHALLENGES & TROUBLESHOOTING */}
      <div className="space-y-3 bg-background p-5 rounded-2xl border border-border/60">
        <div className="flex items-center gap-2 text-amber-500 font-bold text-[18px]">
          <Wrench className="h-5 w-5" />
          <h4 className="text-[18px] font-bold text-foreground">Technical Challenges & Troubleshooting</h4>
        </div>
        <div className="p-3 bg-secondary/40 font-mono text-xs text-primary rounded-xl border border-border/50 flex flex-wrap items-center gap-2">
          <span className="font-semibold text-foreground">Application</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Docker</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Linux (Ubuntu)</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">AWS</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Deployment</span>
        </div>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          Technical problem solving across application behavior, Docker containers, Linux (Ubuntu) / SSH, AWS configuration and deployment workflow.
        </p>
      </div>

      {/* 11. BUSINESS & CUSTOMER VALUE */}
      <div className="p-5 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent rounded-2xl border border-primary/20 space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
          <TrendingUp className="h-5 w-5" />
          <h4 className="text-[18px] font-bold text-foreground">Business & Customer Value</h4>
        </div>
        <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
          {[
            "Simplifies recipe discovery",
            "Provides a streamlined customer experience",
            "Uses API integration effectively",
            "Applies performance-conscious implementation",
            "Demonstrates a path from application development to cloud deployment",
          ].map((val, vIdx) => (
            <li key={vIdx} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{val}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 12. TWO DEMO VIDEOS */}
      <div className="space-y-6 pt-4 border-t border-border/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-[22px] font-bold text-foreground flex items-center gap-2">
              <Monitor className="h-5 w-5 text-primary" />
              Dual Demo Perspectives
            </h4>
            <p className="text-[15px] text-muted-foreground">
              Explore this solution through two distinct Sales Engineering and Solutions Engineering lenses
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sales Engineer Demo */}
          <div className="p-6 rounded-2xl border bg-gradient-to-br from-primary/5 via-secondary/30 to-background border-primary/30 hover:border-primary/60 transition-all duration-300 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30">
                  <Briefcase className="h-3.5 w-3.5" />
                  Sales Engineer Demo
                </span>
              </div>

              <h5 className="text-[18px] font-bold text-foreground leading-snug">
                Customer Discovery · Product Demonstration · Business Value
              </h5>

              <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                A customer-facing walkthrough focused on the customer problem, user needs, product experience, solution value and high-level technical explanation.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                  Key Demo Focus:
                </span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                  {[
                    "Customer problem",
                    "Discovery",
                    "User needs",
                    "Product walkthrough",
                    "Solution value",
                    "Technical-to-business communication",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40">
              <a
                href={project.demos?.[0]?.demoUrl || "https://youtu.be/zohJeGustHY"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="hero" className="w-full gap-2 text-xs font-semibold py-2.5">
                  <PlayCircle className="h-4 w-4" />
                  Watch Sales Engineer Demo
                </Button>
              </a>
            </div>
          </div>

          {/* Solutions Engineer Demo */}
          <div className="p-6 rounded-2xl border bg-gradient-to-br from-accent/5 via-secondary/30 to-background border-accent/30 hover:border-accent/60 transition-all duration-300 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
                  <Code className="h-3.5 w-3.5" />
                  Solutions Engineer Demo
                </span>
              </div>

              <h5 className="text-[18px] font-bold text-foreground leading-snug">
                Technical Architecture · Implementation · Cloud Deployment
              </h5>

              <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                A technical walkthrough focused on how the solution works, the architecture, implementation decisions, containerization and AWS deployment workflow.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                  Key Demo Focus:
                </span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                  {[
                    "Solution architecture",
                    "TheMealDB REST API integration",
                    "React Query",
                    "Debounced search",
                    "Context API",
                    "Docker",
                    "Linux (Ubuntu)",
                    "Amazon ECR",
                    "Amazon EC2",
                    "Nginx",
                    "Deployment workflow",
                    "Technical troubleshooting",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40">
              <a
                href={project.demos?.[1]?.demoUrl || "https://youtu.be/CV_Lsmo98II"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="elegant" className="w-full gap-2 text-xs font-semibold py-2.5">
                  <PlayCircle className="h-4 w-4" />
                  Watch Solutions Engineer Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 13. TECHNOLOGY STACK */}
      <div className="space-y-4 pt-4 border-t border-border/60">
        <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          Technology Stack Breakdown
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-background rounded-xl border border-border/50 space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Application</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              React · TypeScript · Vite · Tailwind CSS
            </p>
          </div>
          <div className="p-4 bg-background rounded-xl border border-border/50 space-y-2">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">API & Integration</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              TheMealDB REST API · REST · HTTP · JSON
            </p>
          </div>
          <div className="p-4 bg-background rounded-xl border border-border/50 space-y-2">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">State & Performance</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              React Query · Context API · Client-side caching · Debounced Search
            </p>
          </div>
          <div className="p-4 bg-background rounded-xl border border-border/50 space-y-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">Cloud & Infrastructure</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              AWS · Amazon ECR · Amazon EC2 · IAM · Linux (Ubuntu) · SSH
            </p>
          </div>
          <div className="p-4 bg-background rounded-xl border border-border/50 sm:col-span-2 lg:col-span-1 space-y-2">
            <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">Containerization</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              Docker · Multi-Stage Builds · Nginx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
