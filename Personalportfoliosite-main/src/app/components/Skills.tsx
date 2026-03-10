import { Code2, Palette, Database, Smartphone, Globe, BookOpen } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "C++, Java, Python, JavaScript",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "HTML, CSS, React, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "MySQL, MongoDB, SQL",
  },
  {
    icon: BookOpen,
    title: "Data Structures & Algorithms",
    description: "Problem Solving, Competitive Programming",
  },
  {
    icon: Palette,
    title: "Tools & Technologies",
    description: "Git, GitHub, VS Code, Figma",
  },
  {
    icon: Smartphone,
    title: "Other Skills",
    description: "OOP, Software Engineering, Team Collaboration",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-8">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="p-6 rounded-lg bg-white border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-blue-600" size={24} />
                  <h3 className="text-xl">{skill.title}</h3>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}