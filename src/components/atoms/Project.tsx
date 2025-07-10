import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and a blog section.",
    tags: ["React", "Tailwind", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    image: "https://i.pinimg.com/736x/a3/54/6c/a3546c9735cf3794f25dd1ae3e61cad9.jpg"
  },
  {
    title: "E-commerce Dashboard",
    description: "A full-featured admin dashboard for managing products, orders, and analytics. Includes authentication and real-time updates.",
    tags: ["Next.js", "MongoDB", "Chart.js"],
    github: "https://github.com/yourusername/ecommerce-dashboard",
    demo: "https://ecommerce-demo.com",
    image: "https://i.pinimg.com/736x/93/db/31/93db31327b7cd28b7ff72193bbf5fa1f.jpg"
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group and private messaging, emoji support, and notifications.",
    tags: ["Socket.io", "Node.js", "Express"],
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chatapp-demo.com",
    image: "https://i.pinimg.com/736x/64/81/89/64818941cd9a121628586b806c6b63b7.jpg"
  },
];

const ProjectSection = () => (
  <section className="py-12 px-4 md:px-8 md:ml-8 md:max-w-[480px] lg:ml-10 lg:max-w-[880px]">
    <h2 className="text-md font-bold text-cyan-300 mb-8 font-inter">Selected Projects</h2>
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="group border border-[#233554] rounded-xl shadow-lg hover:shadow-cyan-400/20 transition-shadow duration-300 flex flex-col overflow-hidden"
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-200 font-inter">{project.title}</h3>
            <p className="text-[#8892b0] mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-cyan-700/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white transition-colors text-lg"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white transition-colors text-lg"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectSection;