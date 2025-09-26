import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail, Phone, Globe, Award, Briefcase, GraduationCap } from "lucide-react";

const CV = () => {
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of company's main SaaS platform serving 50k+ users",
        "Improved application performance by 40% through optimization techniques",
        "Mentored junior developers and established frontend best practices",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      achievements: [
        "Built responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Integrated third-party APIs and payment processing systems",
        "Participated in agile development practices and code reviews"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      location: "New York, NY",
      achievements: [
        "Developed custom WordPress themes and plugins",
        "Created landing pages that increased conversion rates by 25%",
        "Maintained and updated client websites using HTML, CSS, and JavaScript",
        "Learned modern development tools and frameworks"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Stanford University",
      period: "2015 - 2019",
      achievements: [
        "Graduated Summa Cum Laude with 3.9 GPA",
        "President of Computer Science Club",
        "Published research on web accessibility"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer Associate",
    "Google UX Design Professional Certificate",
    "Meta Frontend Developer Professional Certificate",
    "Certified Kubernetes Administrator (CKA)"
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Next.js", "Vue.js", "Svelte"],
    "Styling": ["Tailwind CSS", "Styled Components", "Sass", "CSS Modules"],
    "Tools": ["Git", "Docker", "Webpack", "Vite", "Jest", "Cypress"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"]
  };

  return (
    <section id="cv" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">CV</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive overview of my professional experience, education, 
            and skills in frontend development and web technologies.
          </p>
          <Button variant="hero" size="lg" className="gap-2">
            <Download className="h-5 w-5" />
            Download PDF Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info & Skills */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="card-elegant p-6 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  john.developer@email.com
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  www.johndeveloper.com
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="card-elegant p-6 animate-fade-in-delay">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-medium text-sm mb-2 text-primary">{category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-secondary text-xs rounded text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card-elegant p-6 animate-fade-in-delay">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </h3>
              <ul className="space-y-2 text-sm">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="card-elegant p-6 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">{job.title}</h4>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                        <p>{job.period}</p>
                        <p className="flex items-center gap-1 sm:justify-end">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="animate-fade-in-delay">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="card-elegant p-6 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.school}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
                        <p>{edu.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;