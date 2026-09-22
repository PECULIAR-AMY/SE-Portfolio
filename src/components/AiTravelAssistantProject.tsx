import React from "react";
import { Button } from "@/components/ui/button";
import {
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
  MessageSquare,
  CreditCard,
  Lock,
  ArrowRight,
  ListChecks,
  Workflow,
  Sparkles,
  ShieldCheck,
  Globe,
  RefreshCw,
} from "lucide-react";

interface AiTravelAssistantProjectProps {
  project: any;
  index: number;
}

export const AiTravelAssistantProject: React.FC<AiTravelAssistantProjectProps> = ({
  project,
  index,
}) => {
  const scrollToArchitecture = () => {
    const el = document.getElementById("ai-travel-architecture");
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
              AI Travel Assistant
            </h3>
            <p className="text-[17px] sm:text-[19px] text-primary font-semibold mt-1">
              AI-Powered Travel Recommendation & Booking Solution
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/PECULIAR-AMY/AI-Travel-Assistant-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="elegant" className="gap-2 text-xs font-semibold">
                <Github className="h-4 w-4" />
                GitHub Repository
              </Button>
            </a>
            <a
              href="https://youtu.be/XbCb4qiRnBk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" className="gap-2 text-xs font-semibold">
                <PlayCircle className="h-4 w-4" />
                Demo Video
              </Button>
            </a>
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

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            "AI Integration",
            "API Integration",
            "Solution Architecture",
            "Payment Workflows",
            "Technical Problem-Solving",
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

      {/* Main Layout: Image + Overview & Problem */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Image */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative group hover-lift">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              src={project.image || "/images/Project1.png"}
              alt="AI Travel Assistant"
              className="w-full h-72 object-cover rounded-2xl shadow-lg border border-border/50"
            />
          </div>
        </div>

        {/* Right Column: Overview & Problem */}
        <div className="lg:col-span-7 space-y-6">
          {/* 2. PROJECT OVERVIEW */}
          <div className="space-y-3 bg-secondary/30 p-5 rounded-2xl border border-border/50">
            <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
              <Workflow className="h-5 w-5 text-primary" />
              Project Overview
            </h4>
            <p className="text-muted-foreground leading-relaxed text-[16px]">
              The AI Travel Assistant is a travel-planning application designed to help users explore travel options based on their preferences and budget. It brings together personalized travel recommendations, AI-assisted conversational interactions, external API integrations, travel planning workflows, and a Paystack test payment flow into a unified interface.
            </p>

            {/* Architecture Disclosure Banner */}
            <div className="flex items-start gap-2.5 p-3.5 bg-secondary/60 border border-primary/20 rounded-xl text-xs text-muted-foreground font-medium">
              <ShieldCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>
                <strong>API Integration & Resilient Fallback:</strong> The application executes external API requests to fetch travel data and incorporates fallback data mechanisms to preserve user interface continuity if an external service request is unsuccessful.
              </span>
            </div>
          </div>

          {/* 3. CUSTOMER PROBLEM */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-semibold text-[19px]">
              <Target className="h-5 w-5" />
              <h4 className="text-[19px] font-semibold">Customer Problem</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed text-[16px]">
              Planning trips often requires travelers to navigate multiple separate sources to compare destinations, flights, hotels, and local activities while trying to adhere to budget constraints. This creates a fragmented, time-consuming decision-making process. The AI Travel Assistant addresses this problem by consolidating travel preferences, recommendations, AI guidance, and checkout workflows into a single guided experience.
            </p>
          </div>
        </div>
      </div>

      {/* 4. SOLUTION */}
      <div className="space-y-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-accent font-semibold text-[20px]">
          <Lightbulb className="h-5 w-5" />
          <h4 className="text-[20px] font-bold text-foreground">Solution Capabilities</h4>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-background rounded-2xl border border-border/60 space-y-2">
            <h5 className="font-bold text-[16px] text-foreground flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> Budget Recommendations
            </h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Provides travel options tailored to user destination preferences and specified budget limits.
            </p>
          </div>

          <div className="p-4 bg-background rounded-2xl border border-border/60 space-y-2">
            <h5 className="font-bold text-[16px] text-foreground flex items-center gap-2">
              <Layers className="h-4 w-4 text-accent" /> Multi-Category Travel Options
            </h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Displays flight, hotel, tourist attraction, tour, and vehicle choices in clean card components.
            </p>
          </div>

          <div className="p-4 bg-background rounded-2xl border border-border/60 space-y-2">
            <h5 className="font-bold text-[16px] text-foreground flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-emerald-500" /> AI Assistant Chat
            </h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Offers conversational guidance to help users discover destinations and plan trip details.
            </p>
          </div>

          <div className="p-4 bg-background rounded-2xl border border-border/60 space-y-2">
            <h5 className="font-bold text-[16px] text-foreground flex items-center gap-2">
              <Globe className="h-4 w-4 text-sky-500" /> API Integrations
            </h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Connects to external travel and AI services to retrieve relevant travel information.
            </p>
          </div>

          <div className="p-4 bg-background rounded-2xl border border-border/60 space-y-2">
            <h5 className="font-bold text-[16px] text-foreground flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-amber-500" /> Resilient Fallback Data
            </h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Includes fallback data handling to maintain UI presentation if an API request fails.
            </p>
          </div>

          <div className="p-4 bg-background rounded-2xl border border-border/60 space-y-2">
            <h5 className="font-bold text-[16px] text-foreground flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" /> Paystack Test Checkout
            </h5>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Demonstrates payment workflow handling using Paystack test environment keys.
            </p>
          </div>
        </div>
      </div>

      {/* 5. REQUIREMENTS → TECHNICAL APPROACH */}
      <div className="space-y-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-primary font-semibold text-[19px]">
          <ListChecks className="h-5 w-5" />
          <h4 className="text-[19px] font-bold text-foreground">
            Requirements → Technical Approach
          </h4>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              need: "Personalized travel planning",
              approach: "Preference and budget inputs drive the recommendation experience.",
            },
            {
              need: "Travel information from external services",
              approach: "API integrations retrieve relevant travel data.",
            },
            {
              need: "Continuous user experience when an API fails",
              approach: "Fallback data keeps the UI populated when an API request is unsuccessful.",
            },
            {
              need: "Travel planning assistance",
              approach: "AI integration provides conversational assistance.",
            },
            {
              need: "Payment workflow demonstration",
              approach: "Paystack test environment demonstrates the payment flow.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-background rounded-2xl border border-border/60 space-y-2 flex flex-col justify-between"
            >
              <div className="flex items-start gap-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded border border-primary/20 flex-shrink-0">
                  User Need
                </span>
                <p className="text-xs sm:text-sm font-semibold text-foreground">
                  {item.need}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-border/40 font-mono text-xs text-muted-foreground">
                <ArrowRight className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                <span>
                  <strong className="text-accent font-semibold">Technical Approach:</strong>{" "}
                  {item.approach}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. SOLUTION ARCHITECTURE */}
      <div
        id="ai-travel-architecture"
        className="space-y-5 p-6 bg-secondary/30 rounded-2xl border border-border/60"
      >
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-foreground font-semibold text-[20px]">
            <Layers className="h-5 w-5 text-primary" />
            <h4 className="text-[20px] font-bold">Solution Architecture</h4>
          </div>
          <span className="text-xs font-mono bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full">
            Component Architecture
          </span>
        </div>

        {/* Main Application & API Flow */}
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            1. Main Application & API Integration Flow
          </span>
          <div className="p-4 bg-background rounded-xl border border-border/60 font-mono text-xs text-primary flex flex-wrap items-center gap-2 overflow-x-auto">
            <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">
              Customer
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">
              React Application
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">
              Application / API Layer
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">
              External APIs / AI Service
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="px-3 py-1.5 bg-primary/20 text-primary font-bold rounded-lg border border-primary/30">
              Travel Recommendation Response
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">
              User Interface
            </span>
          </div>
        </div>

        {/* Resilient Fallback Handling Flow */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            2. API Request & Fallback Path (UI Resilience)
          </span>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-background rounded-xl border border-emerald-500/30 font-mono text-xs text-muted-foreground space-y-1">
              <span className="text-emerald-500 font-bold block text-xs">Standard API Success Path:</span>
              <p className="text-foreground text-[11px]">
                API Request ➔ API Response ➔ Display Results
              </p>
            </div>
            <div className="p-3.5 bg-background rounded-xl border border-amber-500/30 font-mono text-xs text-muted-foreground space-y-1">
              <span className="text-amber-500 font-bold block text-xs">API Failure Fallback Path:</span>
              <p className="text-foreground text-[11px]">
                API Request ➔ API Failure ➔ Fallback Data ➔ Display Results
              </p>
            </div>
          </div>
        </div>

        {/* Payment Flow */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            3. Payment Checkout Flow (Test Sandbox)
          </span>
          <div className="p-4 bg-background rounded-xl border border-border/60 font-mono text-xs text-accent flex flex-wrap items-center gap-2 overflow-x-auto">
            <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">
              Customer
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">
              React Application
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="px-3 py-1.5 bg-secondary text-foreground font-semibold rounded-lg border border-border">
              Paystack Test Environment
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="px-3 py-1.5 bg-accent/20 text-accent font-bold rounded-lg border border-accent/30">
              Transaction Response (Test Mode)
            </span>
          </div>
        </div>
      </div>

      {/* 7. TECHNICAL IMPLEMENTATION */}
      <div className="space-y-4 pt-2">
        <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          Technical Implementation Highlights
        </h4>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* AI Integration */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-[16px]">
              <MessageSquare className="h-4 w-4" />
              <h5>AI Integration</h5>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Integrates conversational AI logic to process user prompts and assist in travel planning and destination discovery.
            </p>
          </div>

          {/* API Integration */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-2">
            <div className="flex items-center gap-2 text-accent font-bold text-[16px]">
              <Globe className="h-4 w-4" />
              <h5>API Integration</h5>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Handles HTTP service requests to external travel services to fetch recommendation datasets for rendering in the application.
            </p>
          </div>

          {/* Fallback Handling */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-2">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-[16px]">
              <RefreshCw className="h-4 w-4" />
              <h5>Fallback Handling</h5>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Provides fallback data structures when an API request fails so the user interface maintains UI continuity rather than remaining empty.
            </p>
          </div>

          {/* Credential / API Security */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-2">
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-[16px]">
              <Lock className="h-4 w-4" />
              <h5>Credential Handling</h5>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Manages API credentials through application configuration and environment variables to structure external service calls.
            </p>
          </div>

          {/* Payment Workflow */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-2">
            <div className="flex items-center gap-2 text-sky-500 font-bold text-[16px]">
              <CreditCard className="h-4 w-4" />
              <h5>Payment Workflow</h5>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Integrates Paystack test keys sandbox to demonstrate transaction initialization, modal checkout, and callback handling.
            </p>
          </div>

          {/* Frontend */}
          <div className="p-5 bg-background rounded-2xl border border-border/60 space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-[16px]">
              <Code className="h-4 w-4" />
              <h5>Frontend</h5>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Built with React, TypeScript, Vite, and Tailwind CSS to deliver a responsive, accessible single-page user experience.
            </p>
          </div>
        </div>
      </div>

      {/* 8. TECHNICAL CHALLENGES & PROBLEM-SOLVING */}
      <div className="space-y-3 bg-background p-5 rounded-2xl border border-border/60">
        <div className="flex items-center gap-2 text-amber-500 font-bold text-[18px]">
          <Wrench className="h-5 w-5" />
          <h4 className="text-[18px] font-bold text-foreground">
            Technical Challenges & Problem-Solving
          </h4>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-muted-foreground">
          <li className="flex items-start gap-2 p-3 bg-secondary/30 rounded-xl border border-border/40">
            <CheckCircle2 className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Integrating External Services:</strong> Managing asynchronous HTTP API requests and handling response payloads for rendering.
            </span>
          </li>
          <li className="flex items-start gap-2 p-3 bg-secondary/30 rounded-xl border border-border/40">
            <CheckCircle2 className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Handling API Failures:</strong> Implementing fallback data paths so the interface displays structured information when an API request fails.
            </span>
          </li>
          <li className="flex items-start gap-2 p-3 bg-secondary/30 rounded-xl border border-border/40">
            <CheckCircle2 className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Integrating AI Functionality:</strong> Processing user input prompts within conversational travel decision workflows.
            </span>
          </li>
          <li className="flex items-start gap-2 p-3 bg-secondary/30 rounded-xl border border-border/40">
            <CheckCircle2 className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Implementing Payment Workflow:</strong> Configuring Paystack sandbox test mode to demonstrate transaction callbacks without live funds.
            </span>
          </li>
        </ul>
      </div>

      {/* 9. BUSINESS & CUSTOMER VALUE */}
      <div className="p-5 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent rounded-2xl border border-primary/20 space-y-3">
        <div className="flex items-center gap-2 text-primary font-bold text-[18px]">
          <TrendingUp className="h-5 w-5" />
          <h4 className="text-[18px] font-bold text-foreground">Business & Customer Value</h4>
        </div>
        <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
          {[
            "Gives travelers a centralized planning experience in a single interface.",
            "Helps users evaluate preferences and budget parameters efficiently.",
            "Uses AI to support travel-planning interactions and guided discovery.",
            "Integrates external travel information into cohesive recommendation cards.",
            "Maintains a usable interface experience when an external API request fails.",
            "Demonstrates an end-to-end payment workflow in a test sandbox environment.",
          ].map((val, vIdx) => (
            <li key={vIdx} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{val}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 10. DEMO VIDEO */}
      <div className="space-y-6 pt-4 border-t border-border/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-[22px] font-bold text-foreground flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-primary" />
              Product Demo Walkthrough
            </h4>
            <p className="text-[15px] text-muted-foreground">
              Product-focused demonstration covering customer problem, user experience, and solution value
            </p>
          </div>
        </div>

        <div className="max-w-2xl">
          {/* Demo Video */}
          <div className="p-6 rounded-2xl border bg-gradient-to-br from-primary/5 via-secondary/30 to-background border-primary/30 hover:border-primary/60 transition-all duration-300 space-y-5">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/30">
                  <PlayCircle className="h-3.5 w-3.5" />
                  Demo Video
                </span>
                <span className="text-xs font-medium text-muted-foreground bg-background/80 px-2.5 py-0.5 rounded-md border border-border/50">
                  Product Walkthrough
                </span>
              </div>

              <h5 className="text-[18px] font-bold text-foreground leading-snug">
                Customer Problem · Walkthrough · Key Functionality · Solution Value
              </h5>

              <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                A customer-facing product walkthrough covering user problem alignment, recommendation discovery, AI chat assistance, Paystack test checkout, and technical capability presentation.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                  Key Demo Focus:
                </span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                  {[
                    "Customer problem alignment",
                    "Product walkthrough",
                    "Key functionality",
                    "User experience",
                    "Solution value pitch",
                    "Technical capability summary",
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
                href="https://youtu.be/XbCb4qiRnBk"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="hero"
                  className="w-full gap-2 text-xs font-semibold py-2.5"
                >
                  <PlayCircle className="h-4 w-4" />
                  Watch Demo Video
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 11. TECHNOLOGY STACK */}
      <div className="space-y-4 pt-4 border-t border-border/60">
        <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          Technology Stack
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "AI Integration",
            "API Integration",
            "Paystack",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 bg-secondary text-secondary-foreground rounded-xl text-xs font-semibold border border-border/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 12. PROJECT EVIDENCE / LINKS */}
      <div className="space-y-3 pt-4 border-t border-border/60">
        <h4 className="text-[18px] font-bold text-foreground flex items-center gap-2">
          <Github className="h-5 w-5 text-primary" />
          Project Evidence & Links
        </h4>
        <div className="flex flex-wrap gap-4 pt-1">
          <a
            href="https://github.com/PECULIAR-AMY/AI-Travel-Assistant-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="elegant" className="gap-2 text-xs font-semibold">
              <Github className="h-4 w-4" />
              GitHub Repository
            </Button>
          </a>
          <a
            href="https://youtu.be/XbCb4qiRnBk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" className="gap-2 text-xs font-semibold">
              <PlayCircle className="h-4 w-4" />
              Demo Video
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
