import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Syed-Muhammad-Ali-git?tab=repositories",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/syed-muhammed-ali/",
      label: "LinkedIn",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://web.facebook.com/ali.mazhar.272106",
      label: "Facebook",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:syeadmuhammedalimazhar@gmail.com",
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Syed Muhammad Ali</span>
            </h3>
            <p className="text-muted-foreground">
              Frontend Developer & React Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 group"
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              "Home",
              "About",
              "Skills",
              "Education",
              "Experience",
              "Projects",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="px-6 py-3 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
          >
            Back to Top ↑
          </button>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground border-t border-border/30 pt-8 w-full">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Syed Muhammad Ali. Made with React & Tailwind CSS.
            </p>
            <p className="mt-2">
              All rights reserved. Built with passion for web development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
