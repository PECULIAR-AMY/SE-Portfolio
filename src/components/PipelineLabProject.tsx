import React from "react";
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
  ShieldCheck,
  ArrowRight,
  ListChecks,
  Workflow,
  Terminal,
  Server,
  Gauge,
  Search,
  Lock,
  Zap,
} from "lucide-react";

interface PipelineLabProjectProps {
  project: any;
  index: number;
}

export const PipelineLabProject: React.FC<PipelineLabProjectProps> = ({ project, index }) => {
  const scrollToArchitecture = () => {
    const el = document.getElementById("pipeline-lab-architecture");
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
              {project.title || "Pipeline Lab"}
            </h3>
            <p className="text-[17px] sm:text-[19px] text-primary font-semibold mt-1">
              {project.subtitle || "Technical Discovery & Lead Qualification Platform"}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="gap-2 text-xs font-semibold">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.demos?.[0]?.demoUrl && (
              <a href={project.demos[0].demoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="gap-2 text-xs font-semibold">
                  <PlayCircle className="h-4 w-4" />
                  Sales Demo
                </Button>
              </a>
            )}
            {project.demos?.[1]?.demoUrl && (
              <a href={project.demos[1].demoUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="elegant" className="gap-2 text-xs font-semibold">
                  <PlayCircle className="h-4 w-4" />
                  Solutions Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 text-xs font-semibold">
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
            "Technical Discovery",
            "Solutions Engineering",
            "Lead Qualification",
            "Solution Analysis",
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
              src={project.image || "/images/Project2.png"}
              alt={project.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
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
              {project.customerProblem ? (
                "A technical discovery and lead qualification tool that turns publicly observable website and API findings into evidence-based business insights and sales handoff notes."
              ) : (
                "Pipeline Lab is an enterprise presales diagnostic platform designed for Sales Engineers and commercial teams to evaluate web performance, API security headers, and infrastructure modernness before prospect calls."
              )}
            </p>
          </div>

          {/* 3. CUSTOMER PROBLEM */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-semibold text-[19px]">
              <Target className="h-5 w-5" />
              <h4 className="text-[19px] font-semibold">Customer Problem</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed text-[16px]">
              Sales Engineers and commercial teams often enter technical discovery and qualification calls without verified insight into a prospect's actual infrastructure, edge routing, security headers, or API posture. Manually running ad-hoc curl commands, deciphering raw headers, or risking invasive vulnerability scans slows down discovery and creates unstructured deal notes. Pipeline Lab solves this by automating deterministic, passive technical evaluations that translate observable HTTP telemetry into commercial risk analysis, talking points, and standardized AE handoff notes.
            </p>
          </div>
        </div>
      </div>

      {/* 4. SOLUTION & ARCHITECTURE */}
      <div id="pipeline-lab-architecture" className="space-y-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-accent font-semibold text-[20px]">
          <Lightbulb className="h-5 w-5" />
          <h4 className="text-[20px] font-bold text-foreground">Solution & Architecture</h4>
        </div>
        <p className="text-muted-foreground leading-relaxed text-[16px]">
          Pipeline Lab is a full-stack TanStack Start application powered by Nitro and React 19. Outbound target evaluations run exclusively server-side via a single type-safe server function (<code>runScan</code>), eliminating browser CORS restrictions and insulating client IP addresses while enforcing a strict passive-scan budget and 12-second abort timeout boundaries.
        </p>

        {/* Visual Solution Flow */}
        <div className="bg-background p-5 rounded-2xl border border-border/60 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-primary" /> Solution Data & Diagnostic Inspection Flow
          </span>
          <div className="p-4 bg-secondary/40 font-mono text-xs text-primary rounded-xl border border-border/60 flex flex-wrap items-center gap-2 leading-relaxed overflow-x-auto">
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">Commercial User</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">React 19 / TanStack Router</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">Nitro Server Engine</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">runScan Server Function</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">Passive Target Inspection (1–6 Req)</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-background rounded border border-border font-semibold text-foreground">Diagnostic Scoring Engine (0–100)</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
            <span className="px-2.5 py-1 bg-primary/20 text-primary font-bold rounded-lg border border-primary/30">Executive Summary & AE Note</span>
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
              "Passive, non-intrusive target evaluation without penetration testing",
              "Dual evaluation engines for web frontends and backend API gateways",
              "Server-side request execution avoiding browser CORS restrictions",
              "Quantitative 0–100 lead scoring model based on observable metrics",
              "Automated buyer persona classification (Frontend vs. Backend team)",
              "Conversion of technical findings into commercial AE talking points",
              "Exportable CRM handoff note and printable executive summary",
              "Resilient SSR runtime with out-of-band error logging and fallbacks",
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
              "TanStack Start + React 19 full-stack application with type-safe server functions",
              "Nitro engine SSR runtime with custom error interception layer",
              "Deterministic request budget: max 1 GET for frontends, max 6 requests for APIs",
              "12-second AbortController timeout boundaries to eliminate hanging sockets",
              "Rule-based intelligence pipeline matching framework signatures and headers",
              "Tailwind CSS v4 with custom OKLCH tokens and SVG score visualization gauges",
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
            <h5 className="font-bold text-[16px] text-primary flex items-center gap-1.5">
              <Search className="h-4 w-4" /> Passive Inspection Engine
            </h5>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              HTTP telemetry, TLS handshake, security headers (HSTS, CSP, X-Frame-Options), edge CDN detection, and advertised rate limits.
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-xl border border-border/50 space-y-2">
            <h5 className="font-bold text-[16px] text-accent flex items-center gap-1.5">
              <Server className="h-4 w-4" /> Full-Stack Architecture
            </h5>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              TanStack Start with Nitro SSR, TanStack Router type-safety, and TanStack Query v5 managing server functions and mutations.
            </p>
          </div>
          <div className="p-4 bg-secondary/30 rounded-xl border border-border/50 space-y-2">
            <h5 className="font-bold text-[16px] text-emerald-500 flex items-center gap-1.5">
              <Gauge className="h-4 w-4" /> Presales Intelligence
            </h5>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Normalized 0–100 scoring algorithm, buyer persona auto-classification heuristics, and commercial AE handoff note synthesis.
            </p>
          </div>
        </div>
      </div>

      {/* 7. PASSIVE-SCANNING GUARANTEE & SAFETY */}
      <div className="space-y-4 p-6 bg-gradient-to-br from-secondary/40 via-background to-secondary/20 rounded-2xl border border-primary/20">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h4 className="text-[20px] font-bold text-foreground">Safety & Passive-Scanning Guarantee</h4>
          </div>
          <span className="text-xs font-mono bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded-full">
            Commercial Etiquette Protocol
          </span>
        </div>

        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Pipeline Lab was built with intentional architectural boundaries to remain 100% compliant with standard commercial web crawling etiquette and presales ethics:
        </p>

        {/* Visual Flow */}
        <div className="p-3 bg-background rounded-xl border border-border/60 font-mono text-xs text-primary flex flex-wrap items-center gap-2 overflow-x-auto">
          <span className="font-semibold text-foreground">Server-Side Isolation</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Transparent User-Agent</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Deterministic Request Budget</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">12s Timeout Protection</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Zero Exploitation / Read-Only</span>
        </div>

        {/* Bullet Explanation */}
        <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>No Active Probing:</strong> Zero SQL injection, XSS probing, fuzzing, auth bypass, or state modification.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Deterministic Budget:</strong> Exactly 1 GET for frontends; max 6 standard requests for backend API documentation.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Zero CORS Friction:</strong> Requests run through Nitro server functions, never exposing browser origins or client IPs.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Abort Timeout Guards:</strong> Every outbound call is bounded by a 12,000ms AbortController signal to eliminate hangs.</span>
          </li>
        </ul>
      </div>

      {/* 8. DUAL DIAGNOSTIC ENGINES */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <h4 className="text-[20px] font-bold text-foreground">Dual Diagnostic Engines & Lead Scoring</h4>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Frontend Mode Card */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-3 hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-bold text-[17px]">
                <Monitor className="h-5 w-5" />
                <h5>Frontend Evaluation Engine</h5>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 bg-primary/10 text-primary rounded-full">
                1 GET Request
              </span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              {[
                "First Byte Speed (TTFB) benchmarking against standard latency tiers",
                "Edge / CDN layer detection (Cloudflare, Vercel, Fastly, Netlify, CloudFront)",
                "Transfer hygiene (Brotli, gzip, zstd compression & HTML payload weight)",
                "Security headers (HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy)",
                "Asset loading discipline & image lazy-loading analysis",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Mode Card */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-3 hover:border-accent/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-accent font-bold text-[17px]">
                <Server className="h-5 w-5" />
                <h5>Backend Evaluation Engine</h5>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 bg-accent/10 text-accent rounded-full">
                Max 6 Passive Requests
              </span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              {[
                "Single-request origin TTFB and cold/warm round-trip latency evaluation",
                "API gateway & edge proxy inspection for regional DDoS absorption",
                "Transport layer security (HTTPS handshake & strict HSTS enforcement)",
                "Advertised rate-limiting headers (x-ratelimit-*, ratelimit, retry-after)",
                "Public API documentation exposure check (/swagger, /openapi.json, /docs, /graphql)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 9. TECHNICAL CHALLENGES & TROUBLESHOOTING */}
      <div className="space-y-3 bg-background p-5 rounded-2xl border border-border/60">
        <div className="flex items-center gap-2 text-amber-500 font-bold text-[18px]">
          <Wrench className="h-5 w-5" />
          <h4 className="text-[18px] font-bold text-foreground">Technical Challenges & Troubleshooting</h4>
        </div>
        <div className="p-3 bg-secondary/40 font-mono text-xs text-primary rounded-xl border border-border/50 flex flex-wrap items-center gap-2">
          <span className="font-semibold text-foreground">Target URL</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Server Function</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">CORS Bypass</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Timeout Intercept</span>
          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground">Commercial Handoff</span>
        </div>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          Technical problem-solving across server-side network execution, eliminating CORS restrictions, preserving Nitro SSR runtime stability against malformed targets, and transforming complex HTTP telemetry into high-impact sales discovery narratives.
        </p>
      </div>

      {/* 10. BUSINESS & CUSTOMER VALUE */}
      <div className="p-5 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent rounded-2xl border border-primary/20 space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
          <TrendingUp className="h-5 w-5" />
          <h4 className="text-[18px] font-bold text-foreground">Business & Customer Value</h4>
        </div>
        <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
          {[
            "Accelerates presales technical discovery before prospect calls",
            "Replaces manual curl inspection with quantitative 0–100 scoring",
            "Armors Account Executives with evidence-based talking points",
            "Identifies infrastructure modernization opportunities before discovery calls",
            "Automates buyer persona classification (Frontend Eng vs. Backend API teams)",
            "Standardizes deal notes for seamless CRM and AE handoff",
          ].map((val, vIdx) => (
            <li key={vIdx} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{val}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 11. DUAL DEMO PERSPECTIVES */}
      {project.demos && project.demos.length > 0 && (
        <div id="pipeline-lab-demos" className="space-y-6 pt-4 border-t border-border/60">
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
            {project.demos.map((demo: any) => {
              const isSales = demo.id?.includes("sales") || demo.role?.includes("Sales");
              return (
                <div
                  key={demo.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-5 ${
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
                      {demo.badge && (
                        <span className="text-xs font-medium text-muted-foreground bg-background/80 px-2.5 py-0.5 rounded-md border border-border/50">
                          {demo.badge}
                        </span>
                      )}
                    </div>

                    <h5 className="text-[18px] font-bold text-foreground leading-snug">
                      {demo.title}
                    </h5>

                    <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                      {demo.description}
                    </p>

                    {demo.keyHighlights && (
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                          Key Demo Focus:
                        </span>
                        <ul className="grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                          {demo.keyHighlights.map((highlight: string, hIdx: number) => (
                            <li key={hIdx} className="flex items-start gap-1.5">
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

                  {demo.demoUrl && (
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
                          <PlayCircle className="h-4 w-4" />
                          {demo.demoLabel || "Watch Demo"}
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 12. TECHNOLOGY STACK */}
      <div className="space-y-4 pt-4 border-t border-border/60">
        <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          Technology Stack Breakdown
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-background rounded-xl border border-border/50 space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Application Framework</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              TanStack Start · React 19 · TypeScript 5.8 · Vite 8
            </p>
          </div>
          <div className="p-4 bg-background rounded-xl border border-border/50 space-y-2">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">Server Engine</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              Nitro Runtime · Server Functions (createServerFn) · Node.js / Bun
            </p>
          </div>
          <div className="p-4 bg-background rounded-xl border border-border/50 space-y-2">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Styling & Design System</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              Tailwind CSS v4 · Custom OKLCH Tokens · Radix UI · Lucide Icons
            </p>
          </div>
          <div className="p-4 bg-background rounded-xl border border-border/50 space-y-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">State & Routing</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              TanStack Query v5 · TanStack Router · Zod Schema Validation
            </p>
          </div>
          <div className="p-4 bg-background rounded-xl border border-border/50 sm:col-span-2 lg:col-span-1 space-y-2">
            <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">Diagnostic Intelligence</span>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              Passive HTTP Telemetry · Lead Scoring Model · Persona Routing
            </p>
          </div>
        </div>
      </div>

      {/* 13. PROJECT EVIDENCE / LINKS */}
      <div className="space-y-3 pt-4 border-t border-border/60">
        <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
          <Github className="h-5 w-5 text-primary" />
          Project Evidence & Links
        </h4>
        <div className="flex flex-wrap gap-4 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="elegant" className="gap-2 text-xs font-semibold">
                <Github className="h-4 w-4" />
                GitHub Repository
              </Button>
            </a>
          )}
          {project.demos?.[0]?.demoUrl && (
            <a
              href={project.demos[0].demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" className="gap-2 text-xs font-semibold">
                <PlayCircle className="h-4 w-4" />
                Sales Engineer Demo
              </Button>
            </a>
          )}
          {project.demos?.[1]?.demoUrl && (
            <a
              href={project.demos[1].demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="elegant" className="gap-2 text-xs font-semibold">
                <PlayCircle className="h-4 w-4" />
                Solutions Engineer Demo
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" className="gap-2 text-xs font-semibold">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
