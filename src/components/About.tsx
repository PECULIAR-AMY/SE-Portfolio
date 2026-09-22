import {
  Code2,
  PlugZap,
  Workflow,
  ShieldCheck,
  Handshake,
  UsersRound,
  Wrench,
} from "lucide-react";
import data from "@/data/skills.json";

const About = () => {
  const { skills } = data;

  const iconMap = {
    Code2,
    PlugZap,
    Workflow,
    ShieldCheck,
    Handshake,
    UsersRound,
    Wrench,
  };

  return (
    <section id="about" className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-10 animate-fade-in">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold mb-4 md:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-muted-foreground max-w-3xl leading-relaxed text-left">
            I’m a software engineer transitioning into Sales Engineering and Solutions Engineering, bringing hands-on development experience and a customer-focused, business-driven approach. I enjoy understanding customer needs, translating business and technical requirements into practical solutions and communicating their value clearly. With a foundation in solution design, technical problem-solving, architecture and product demonstrations, I bridge the gap between technology and business helping technical and non-technical stakeholders understand how solutions address real challenges and deliver value.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="card-elegant p-5 sm:p-6 text-center hover-lift animate-fade-in-delay group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && <IconComponent className="h-7 w-7 sm:h-8 sm:w-8" />}
                </div>
                <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;