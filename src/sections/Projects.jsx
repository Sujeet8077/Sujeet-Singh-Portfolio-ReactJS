import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "StudySync",
    link: "https://studysync8077.netlify.app/",
    description:
      "A collaborative learning platform that connects students and educators, providing tools for interactive lessons, real-time feedback, and personalized learning paths.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript", "Currently Working"],
    github: "https://github.com/Sujeet8077/Minor-Project",
  },
  {
    title: "CreativeSolutions",
    description:
      "A portfolio website showcasing a collection of innovative projects, demonstrating expertise in web development, design, and problem-solving skills.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://landingpage8077.netlify.app/",
    github: "https://github.com/Sujeet8077/Landing-Page",
  },
  {
    title: "BookNook",
    description:
      "A book recommendation platform that uses machine learning algorithms to suggest personalized reading lists based on user preferences and reading history.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "FastAPI"],
    link: "https://bookstore8077.netlify.app/",
    github: "https://github.com/Sujeet8077/Book-Store",
  },
  {
    title: "Age Calculator",
    description:
      "A simple yet effective age calculation tool that provides accurate results based on user input.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript", "Typescript"],
    link: "https://agecalculator8077.netlify.app/",
    github: "https://github.com/Sujeet8077/Age-Calculator",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
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
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image Area */}
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
                
                {/* Desktop Overlay Links */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2"
                    >
                      {project.title}
                      <ExternalLink className="w-4 h-4 md:hidden text-primary" />
                    </a>

                    <div className="flex gap-3 md:hidden">
                       <a 
                         href={project.github} 
                         target="_blank" 
                         rel="noreferrer" 
                         className="text-muted-foreground hover:text-primary"
                        >
                         <Github className="w-6 h-6" />
                       </a>
                    </div>

                    <ArrowUpRight
                      className="hidden md:block w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  
                  <p className="text-muted-foreground text-sm mt-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
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

        {/* View All CTA - Updated with Link */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
            {/* Replace '#' with your actual GitHub or portfolio link */}
            <a 
              href="https://github.com/Sujeet8077" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block"
            >
              <AnimatedBorderButton>
                View All Projects
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </a>
        </div>
      </div>
    </section>
  );
};