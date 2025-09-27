import profilePhoto from '@/assets/ali-about-cropped.jpg';
import { Code, Coffee, Rocket, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Specialized in modern React development with Tailwind CSS"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges with clean, efficient code"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Always exploring new technologies and frameworks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Developer, Designer, Creator, Innovator
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile image and stats */}
          <div className="space-y-8 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Syed Muhammad Ali"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-glow">
                Frontend Developer 🚀
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="portfolio-card text-center">
                <div className="text-2xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="portfolio-card text-center">
                <div className="text-2xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* About content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="text-primary font-semibold">Syed Muhammad Ali</span>, 
                a passionate frontend developer currently pursuing <span className="text-primary">ADP in Software Engineering</span> from 
                Ilma University. I have strong skills in modern web technologies and am dedicated to creating 
                beautiful, responsive web applications.
              </p>
              
              <p className="text-lg leading-relaxed">
                I have experience in <span className="text-primary">HTML, CSS, JavaScript, React,</span> and 
                modern frontend frameworks. I also have hands-on experience with <span className="text-primary">MS Office and WordPress</span>, 
                and I am currently enrolled in a Full Stack / MERN Stack Development course at 
                <span className="text-primary"> Saylani SMIT</span>.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                <p className="text-lg italic">
                  "I'm a lifelong learner and innovator, driven by a passion for creating 
                  exceptional user experiences and contributing to the developer community."
                </p>
                <footer className="text-sm text-muted-foreground mt-2">
                  — Syed Muhammad Ali, Frontend Developer
                </footer>
              </blockquote>
            </div>

            {/* Highlights grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="portfolio-card group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
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