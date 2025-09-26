import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Hi! I'm your AI assistant. I can answer questions about the developer's experience, skills, projects, and background. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aboutMeKnowledge = {
    experience: "5+ years of frontend development experience, specializing in React, TypeScript, and modern web technologies.",
    skills: "Expert in React, TypeScript, Next.js, Tailwind CSS, Node.js, and modern development tools like Docker and Kubernetes.",
    projects: "Built e-commerce platforms, AI-powered dashboards, and collaborative design tools with focus on performance and user experience.",
    background: "Computer Science graduate from Stanford University, currently working as Senior Frontend Developer at TechCorp Solutions.",
    interests: "Passionate about AI integration in web development, performance optimization, and creating accessible user interfaces.",
    location: "Based in San Francisco, CA, open to remote opportunities.",
    education: "Bachelor of Science in Computer Science from Stanford University (2015-2019), graduated Summa Cum Laude.",
    certifications: "AWS Certified Developer, Google UX Design Professional Certificate, Meta Frontend Developer Certificate.",
  };

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const message = userMessage.toLowerCase();
    
    if (message.includes("experience") || message.includes("work")) {
      return aboutMeKnowledge.experience + " I've worked at companies ranging from startups to established tech firms, leading frontend development projects and mentoring junior developers.";
    }
    
    if (message.includes("skill") || message.includes("technology") || message.includes("tech")) {
      return aboutMeKnowledge.skills + " I'm always learning new technologies and staying up-to-date with the latest frontend development trends.";
    }
    
    if (message.includes("project") || message.includes("portfolio")) {
      return aboutMeKnowledge.projects + " Each project taught me valuable lessons about scalability, user experience, and modern development practices.";
    }
    
    if (message.includes("education") || message.includes("university") || message.includes("study")) {
      return aboutMeKnowledge.education + " During my studies, I was actively involved in computer science clubs and published research on web accessibility.";
    }
    
    if (message.includes("location") || message.includes("where")) {
      return aboutMeKnowledge.location + " I enjoy the tech scene in San Francisco but I'm also experienced with remote collaboration.";
    }
    
    if (message.includes("contact") || message.includes("hire") || message.includes("work together")) {
      return "I'm always interested in exciting new opportunities! You can reach me at john.developer@email.com or connect with me on LinkedIn. I'd love to discuss how I can contribute to your team or project.";
    }
    
    if (message.includes("ai") || message.includes("artificial intelligence")) {
      return "I'm fascinated by AI integration in web development! I've worked on AI-powered dashboards and I'm always exploring how AI can enhance user experiences and development workflows.";
    }

    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! I'm here to help you learn more about this developer. Feel free to ask about their experience, skills, projects, or anything else you'd like to know!";
    }
    
    // Default response for unrecognized queries
    return "That's a great question! I can tell you about the developer's experience, technical skills, education, projects, or how to get in touch. What specific aspect would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(inputMessage);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "I apologize, but I'm having trouble processing your request right now. Please try again or feel free to contact the developer directly.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300",
          "bg-gradient-to-r from-primary to-accent text-primary-foreground",
          "hover:scale-110 animate-pulse",
          isOpen && "hidden"
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[32rem] bg-card rounded-2xl shadow-2xl border border-border/50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me anything!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.type === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.type === "ai" && (
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[75%] p-3 rounded-lg text-sm",
                    message.type === "user"
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {message.content}
                </div>
                {message.type === "user" && (
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-4 w-4 text-primary-foreground animate-spin" />
                </div>
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about experience, skills, projects..."
                className="flex-1 rounded-lg"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                size="icon"
                className="rounded-lg"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;