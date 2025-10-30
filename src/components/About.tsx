import profilePhoto from "@/assets/ali-about-cropped.jpg";
import { Code, Coffee, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Specialized in modern React development with Tailwind CSS",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Problem Solver",
      description:
        "Love tackling complex challenges with clean, efficient code",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Always exploring new technologies and frameworks",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills",
    },
  ];

  return (
    <section id="about" className="py-12 px-4 sm:py-20">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
            Developer, Designer, Creator, Innovator
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Profile image and stats */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="relative">
              <div className="w-48 h-48 sm:w-80 sm:h-80 mx-auto rounded-2xl overflow-hidden border-2 sm:border-4 border-primary/20 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Syed Muhammad Ali"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base font-semibold shadow-glow">
                Frontend Developer 🚀
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="portfolio-card text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary mb-1 sm:mb-2">
                  2+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Years Learning
                </div>
              </div>
              <div className="portfolio-card text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary mb-1 sm:mb-2">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
            </div>
          </div>

          {/* About content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <div className="space-y-4 sm:space-y-6">
              {/* Short text on mobile */}
              <p className="text-base sm:text-lg leading-relaxed">
                Hello! I'm{" "}
                <span className="text-primary font-semibold">
                  Syed Muhammad Ali
                </span>
                , a passionate frontend developer currently pursuing{" "}
                <span className="text-primary">
                  ADP in Software Engineering
                </span>{" "}
                from Ilma University.
                <span className="inline sm:hidden text-muted-foreground">
                  {" "}
                  …see on desktop
                </span>
              </p>

              {/* Full text only on desktop */}
              <p className="hidden sm:block text-lg leading-relaxed">
                I have strong skills in modern web technologies and am dedicated
                to creating beautiful, responsive web applications.
              </p>

              <p className="hidden sm:block text-lg leading-relaxed">
                I have experience in{" "}
                <span className="text-primary">
                  HTML, CSS, JavaScript, React, Next
                </span>{" "}
                and modern frontend frameworks. I also have hands-on experience
                with{" "}
                <span className="text-primary">
                  Typescript and also WordPress
                </span>
                , and I am currently enrolled in a Full Stack / MERN Stack
                Development course at
                <span className="text-primary"> Saylani SMIT</span>.
              </p>

              <blockquote className="hidden sm:block border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                <p className="text-lg italic">
                  "I'm a lifelong learner and innovator, driven by a passion for
                  creating exceptional user experiences and contributing to the
                  developer community."
                </p>
                <footer className="text-sm text-muted-foreground mt-2">
                  — Syed Muhammad Ali, Frontend Developer
                </footer>
              </blockquote>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="portfolio-card group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
