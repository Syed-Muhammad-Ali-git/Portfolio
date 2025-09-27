import { useState, useEffect } from "react";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Facebook,
  Mail,
} from "lucide-react";
import profilePhoto from "@/assets/ali-profile.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const titles = [
    "Frontend Developer",
    "React Enthusiast",
    "UI/UX Lover",
    "Code Creator",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentTitle.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  const codeContent = `const profile = {
    name: 'Syed Muhammad Ali',
    title: 'Frontend Developer',
    education: 'ADP Software Engineering',
    university: 'Ilma University',
    skills: [
        'HTML5', 'CSS3', 'JavaScript',
        'React.js', 'Tailwind CSS',
        'Node.js', 'GitHub'
    ],
    passionate: true,
    quickLearner: true,
    hardWorker: true,
    currentlyLearning: 'MERN Stack',
    hireable: function() {
        return (
            this.passionate &&
            this.hardWorker &&
            this.skills.length >= 7
        );
    }
};`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-1 sm:px-4 py-10 sm:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 items-center w-full max-w-full">
        {/* Left side - Hero content */}
        <div className="space-y-4 sm:space-y-8 animate-fade-in w-full max-w-full min-w-0">
          <div className="space-y-2 sm:space-y-4 w-full max-w-full min-w-0">
            <p className="text-primary text-base sm:text-lg font-medium w-full max-w-full break-words">
              Welcome to my universe
            </p>
            <div className="space-y-1 sm:space-y-2 w-full max-w-full min-w-0">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-bold w-full max-w-full break-words">
                Hello
                <br />
                I'm <span className="gradient-text">Syed Muhammad Ali</span>
              </h1>
              <div className="text-base xs:text-xl md:text-2xl text-muted-foreground min-h-[2em] w-full max-w-full break-words">
                <span>{displayText}</span>
                <span className="border-r-2 border-primary animate-pulse ml-1">
                  |
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-lg text-muted-foreground w-full max-w-full break-words">
            Passionate about creating beautiful, responsive web applications.
            Currently pursuing ADP in Software Engineering and learning MERN
            Stack Development.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4 w-full max-w-full">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-hero text-xs sm:text-base px-3 py-2"
            >
              Learn More
            </button>
            <a
              href="/Ali_CV.pdf"
              download="Ali_CV.pdf"
              className="btn-ghost text-xs sm:text-base px-3 py-2"
            >
              <Download size={16} className="mr-2" />
              Get Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2 sm:gap-4 w-full max-w-full">
            <a
              href="https://github.com/Syed-Muhammad-Ali-git?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-card/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/syed-muhammed-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-card/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://web.facebook.com/ali.mazhar.272106"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-card/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Facebook size={16} />
            </a>
            <a
              href="mailto:syeadmuhammedalimazhar@gmail.com"
              className="p-2 sm:p-3 rounded-full bg-card/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Right side - Code editor */}
        <div className="animate-slide-up [animation-delay:0.5s] mt-8 lg:mt-0 w-full max-w-full min-w-0">
          <div className="code-editor p-2 sm:p-6 font-mono text-xs sm:text-sm w-full max-w-full min-w-0 overflow-x-auto">
            <div className="flex items-center gap-2 mb-2 sm:mb-4 pb-2 sm:pb-3 border-b border-code-border">
              <div className="flex gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-primary ml-2 sm:ml-4 text-xs sm:text-base">
                developer.js
              </span>
            </div>
            <pre className="text-xs sm:text-sm leading-relaxed w-full max-w-full min-w-0 break-words">
              <code>
                {codeContent.split("\n").map((line, index) => (
                  <div
                    key={index}
                    className="hover:bg-code-border/20 px-1 sm:px-2 py-0.5 rounded w-full max-w-full min-w-0 break-words"
                  >
                    {line
                      .split(
                        /(\b(?:const|function|return|this)\b|'[^']*'|\d+|\/\/.*$)/
                      )
                      .map((part, i) => {
                        if (
                          ["const", "function", "return", "this"].includes(part)
                        ) {
                          return (
                            <span key={i} className="text-code-keyword">
                              {part}
                            </span>
                          );
                        }
                        if (part.startsWith("'") && part.endsWith("'")) {
                          return (
                            <span key={i} className="text-code-string">
                              {part}
                            </span>
                          );
                        }
                        if (/^\d+$/.test(part)) {
                          return (
                            <span key={i} className="text-code-number">
                              {part}
                            </span>
                          );
                        }
                        if (part.startsWith("//")) {
                          return (
                            <span key={i} className="text-code-comment">
                              {part}
                            </span>
                          );
                        }
                        return <span key={i}>{part}</span>;
                      })}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={18} />
      </div>
    </section>
  );
};

export default Hero;
