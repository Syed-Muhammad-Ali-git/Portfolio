import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Code,
  Palette,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Self-Employed / Freelance",
      period: "2024 - Present",
      location: "Karachi, Pakistan",
      type: "Freelance",
      description:
        "Building responsive web applications using modern frontend technologies. Creating user-friendly interfaces and implementing best practices in web development.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
      achievements: [
        "Developed multiple responsive web applications",
        "Implemented modern UI/UX design principles",
        "Optimized website performance and accessibility",
        "Collaborated with clients to deliver custom solutions",
      ],
      icon: <Code className="w-6 h-6" />,
      color: "primary",
    },
    {
      title: "MS Office Specialist",
      company: "Various Organizations",
      period: "2022 - Present",
      location: "Karachi, Pakistan",
      type: "Part-time",
      description:
        "Providing MS Office solutions including Excel automation, Word document formatting, PowerPoint presentations, and data management services.",
      technologies: [
        "MS Excel",
        "MS Word",
        "MS PowerPoint",
        "MS Access",
        "VBA",
      ],
      achievements: [
        "Created automated Excel solutions for data analysis",
        "Designed professional presentations and documents",
        "Improved workflow efficiency through automation",
        "Trained colleagues on advanced MS Office features",
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: "secondary",
    },
    {
      title: "WordPress Developer",
      company: "Self-Employed",
      period: "2024 - 2024",
      location: "Remote",
      type: "Project-based",
      description:
        "Developed and customized WordPress websites for small businesses and individuals. Focused on responsive design, SEO optimization, and content management.",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript", "MySQL"],
      achievements: [
        "Built 5+ WordPress websites from scratch",
        "Customized themes and plugins for specific needs",
        "Improved site speed and SEO rankings",
        "Provided ongoing maintenance and support",
      ],
      icon: <Palette className="w-6 h-6" />,
      color: "accent",
    },
  ];

  const skills = [
    "Frontend Development",
    "React.js",
    "JavaScript (ES6)",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "WordPress",
    "MS Office Suite",
    "Git & GitHub",
    "Responsive Design",
    "UI/UX Principles",
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-b from-card/20 to-transparent"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and projects I've worked on
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="portfolio-card animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left column - Header info */}
                  <div className="lg:col-span-1 space-y-4">
                    <div
                      className={`inline-flex items-center gap-3 p-3 rounded-lg bg-${exp.color}/10 border border-${exp.color}/20`}
                    >
                      <div className={`text-${exp.color}`}>{exp.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right column - Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Core</span> Competencies
          </h3>

          <div className="portfolio-card">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 group animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:shadow-glow"></div>
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
