import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // EmailJS configuration
  const serviceId = "service_scayctv";
  const templateId = "template_o95tlts";
  const publicKey = "xdpR-g4OUgUrUsTjy";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    try {
      // ✅ Correct usage: publicKey as 4th argument, not inside {}
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      toast.success("Message sent successfully!");
      formRef.current.reset(); // clears the form after submission
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:emmanuelpeculiar645@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to work together? I'd love to hear about your project and
            discuss how I can help bring your ideas to life. Let's create
            something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      emmanuelpeculiar645@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-md ${link.color}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="card-elegant p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h4 className="font-semibold mb-2 text-primary">
                Quick Response Guarantee
              </h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent
                projects, don't hesitate to mention it in your message!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-delay">
            <form ref={formRef} onSubmit={handleSubmit} className="card-elegant p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="from_name" //must match EmailJS variable
                    type="text"
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="from_email" //must match EmailJS variable
                    type="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject" //must match EmailJS variable
                  type="text"
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message" //must match EmailJS variable
                  required
                  rows={6}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full gap-2"
                disabled={loading}
              >
                <Send className="h-5 w-5" />
                {loading ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By sending this message, you agree that I may contact you about your
                inquiry. Your information will be kept confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
