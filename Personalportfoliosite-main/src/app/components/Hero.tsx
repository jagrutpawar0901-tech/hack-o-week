import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl mb-4">
          Jagrut Pawar
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Computer Science Student
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Symbiosis University | Learning & Building Projects
        </p>
        
        <div className="flex gap-6 justify-center mb-8">
          <a href="https://github.com/jagrutpawar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/jagrutpawar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:jagrutpawar1962@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail size={28} />
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-gray-300 px-6 py-2 rounded-lg hover:border-blue-600 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}