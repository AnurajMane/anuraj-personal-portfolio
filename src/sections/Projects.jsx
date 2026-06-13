import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "AWS Cost Optimization Platform",
    description:
      "Designed and built an AI-powered cloud cost management platform that provides real-time AWS resource tracking, cost optimization recommendations, and centralized system monitoring.",
    image: "/projects/project1.jpg",
    tags: ["Java", "C# ASP.NET", "React", "JavaScript"],
    link: "#",
    github: "https://github.com/AnurajMane/web-cost",
  },
  {
    title: "TCP Chat Application using C++ and Winsock",
    description:
      "Engineered a multithreaded TCP chat application in C++ using Winsock APIs, enabling concurrent client connections and real-time message broadcasting through efficient socket-based communication.",
    image: "/projects/project1.jpg",
    tags: ["C++", "WinSock", "Multithreading"],
    link: "#",
    github: "#",
  },
  {
    title: "Vehicular Tracking System using Geospatial Data",
    description:
      "Engineered a real-time school bus tracking platform with QR-based attendance, role-based access control, and optimized routing through geospatial data analysis, improving route accuracy.",
    image: "/projects/project1.jpg",
    tags: ["Flutter", "Supabase", "QGIS"],
    link: "#",
    github: "https://github.com/AnurajMane/demotracking",
  },
  {
    title: "Store Rating System",
    description:
      "Built a full-stack store rating platform with JWT-based authentication, role-specific dashboards, and PostgreSQL-backed rating management, enabling seamless interaction between administrators, store owners, and users.",
    image: "/projects/project2.jpg",
    tags: ["React.js", "React Router DOM", "Axios", "Node.js", "Express.js", "PostgreSQL", "JWT", "PostgreSQL"],
    link: "#",
    github: "https://github.com/AnurajMane/store-rating-app",
  },
  {
    title: "Realtime Smart Campus Management System Using C",
    description:
      "A lightweight, real-time campus management system built entirely in C using structures and persistent file-system storage.",
    image: "/projects/project1.jpg",
    tags: ["C", "Procedural Programming", "Custom Structs (struct)", "Arrays", "Pointers", "Persistent Storage"],
    link: "#",
    github: "https://github.com/AnurajMane/Realtime-Smart-Campus-Management-System-using-C",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};