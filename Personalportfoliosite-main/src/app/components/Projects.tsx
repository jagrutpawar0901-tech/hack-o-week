import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Student Portal System",
    description: "A web-based student management system for managing courses, assignments, and grades with a clean user interface.",
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "To-Do List Application",
    description: "A simple and efficient task management app with features like add, edit, delete tasks and mark as complete.",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive visualization tool for common sorting and searching algorithms to better understand their working.",
    tags: ["JavaScript", "Algorithms", "Canvas"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-8">Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
                >
                  <Github size={18} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}