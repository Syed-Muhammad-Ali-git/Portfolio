import { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";
import javascriptImage from "../../public/javascript-image.png";
import youtubeImage from "../../public/youtube-image.png";
import googleImg from "../../public/google-image.png";
import textChangerImg from "../../public/textchanger-image.png";
import nexcentImg from "../../public/nexcent-image.png";
import animationImg from "../../public/animation-image.png";
import netflixImg from "../../public/netflix-image.png";
import pokemonImg from "../../public/pokemon-image.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "JavaScript Assignments",
      description:
        "Collection of JavaScript assignments covering core concepts, logic building, and DOM manipulation.",
      image: javascriptImage,
      technologies: ["JavaScript", "HTML5", "CSS3"],
      category: "web",
      demoUrl:
        "https://syed-muhammad-ali-git.github.io/Javasscript-assignments/",
      codeUrl:
        "https://github.com/Syed-Muhammad-Ali-git/Javasscript-assignments",
      status: "Completed",
      features: ["Core JS concepts", "Logic building", "DOM manipulation"],
    },
    {
      id: 2,
      title: "YouTube Clone",
      description:
        "A frontend clone of YouTube built using Tailwind CSS with responsive UI.",
      image: youtubeImage,
      technologies: ["HTML5", "Tailwind CSS"],
      category: "web",
      demoUrl:
        "https://syed-muhammad-ali-git.github.io/Tailwind-Assignments/youtube-clone/index.html",
      codeUrl:
        "https://github.com/Syed-Muhammad-Ali-git/Tailwind-Assignments/tree/master/youtube-clone",
      status: "Completed",
      features: ["Responsive design", "Modern UI", "Grid & Flexbox layout"],
    },
    // ... baaki projects
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: <Globe className="w-4 h-4" /> },
    { id: "web", label: "Web Apps", icon: <Code className="w-4 h-4" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { id: "design", label: "Design", icon: <Palette className="w-4 h-4" /> },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-card/50 rounded-full backdrop-blur-sm border border-border/50">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "hover:bg-card/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter.icon}
                <span className="hidden sm:inline">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="col-span-2 text-center text-muted-foreground py-12">
              No projects found for this category.
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-card group cursor-pointer overflow-hidden animate-fade-in px-4 sm:px-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors duration-300"
                      title="Live Demo"
                    >
                      <Eye size={20} />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card text-foreground rounded-full hover:bg-card/80 transition-colors duration-300"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {/* Mobile short preview */}
                      <span className="sm:hidden">
                        {project.description.split(" ").slice(0, 12).join(" ")}…{" "}
                        <span className="italic text-muted-foreground">
                          see on desktop
                        </span>
                      </span>
                      <span className="hidden sm:inline">
                        {project.description}
                      </span>
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <span className="text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3 pt-2 flex-wrap">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-lg hover:bg-card transition-colors duration-300 text-sm font-medium"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold">
              🚀 More projects coming soon!
            </span>
          </div>
          <p className="text-muted-foreground mt-4">
            Check out my{" "}
            <a
              href="https://github.com/Syed-Muhammad-Ali-git?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              GitHub profile
            </a>{" "}
            for more projects and contributions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
