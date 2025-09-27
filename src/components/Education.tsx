import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "ADP Software Engineering",
      institution: "Ilma University",
      period: "2023 - Present",
      status: "Current",
      location: "Karachi, Pakistan",
      description:
        "Currently pursuing Associate Degree Program in Software Engineering with focus on modern development practices, programming fundamentals, and software design principles.",
      highlights: [
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering Principles",
        "Web Development Technologies",
      ],
      color: "primary",
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "Government Degree Boys College",
      period: "2021 - 2023",
      status: "Completed",
      location: "Karachi, Pakistan",
      description:
        "Completed Intermediate in Pre-Engineering with strong foundation in Mathematics, Physics, and Chemistry.",
      highlights: [
        "Mathematics & Physics",
        "Analytical Problem Solving",
        "Scientific Method",
        "Technical Foundation",
      ],
      color: "secondary",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kamran Public School",
      period: "2019 - 2021",
      status: "Completed",
      location: "Karachi, Pakistan",
      description:
        "Completed matriculation with excellent grades, building strong academic foundation.",
      highlights: [
        "Academic Excellence",
        "Core Subjects Mastery",
        "Leadership Skills",
        "Communication Skills",
      ],
      color: "accent",
    },
  ];

  const certifications = [
    {
      title: "Full Stack / MERN Stack Development",
      issuer: "Saylani SMIT",
      period: "2024 - Present",
      status: "In Progress",
      icon: "🚀",
    },
    {
      title: "Frontend Development",
      issuer: "Self-Taught",
      period: "2022 - Present",
      status: "Ongoing",
      icon: "💻",
    },
  ];

  return (
    <section
      id="education"
      className="py-10 px-3 sm:py-16 sm:px-6 lg:py-20 lg:px-8"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span> & Learning
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 sm:gap-8 mb-8 sm:mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`relative z-10 w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-${edu.color}/20 border-2 border-${edu.color} shadow-glow`}
                >
                  <GraduationCap
                    className={`w-6 h-6 sm:w-8 sm:h-8 text-${edu.color}`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 portfolio-card">
                  <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-base sm:text-lg text-primary font-semibold mb-1 sm:mb-2">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                          edu.status === "Current"
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary/20 text-secondary-foreground"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Calendar size={14} className="sm:w-4 sm:h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <MapPin size={14} className="sm:w-4 sm:h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            Certifications & <span className="gradient-text">Courses</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="portfolio-card animate-bounce-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      {cert.title}
                    </h4>
                    <p className="text-primary font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {cert.period}
                      </span>
                      <span
                        className={`px-2 py-0.5 sm:py-1 rounded-full text-xs ${
                          cert.status === "In Progress"
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary/20 text-secondary-foreground"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
