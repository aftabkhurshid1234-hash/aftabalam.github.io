import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio built using React, Tailwind CSS and Framer Motion.",
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays real-time weather using an API.",
    },
    {
      title: "Calculator",
      description:
        "A responsive calculator built with JavaScript.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#050816] text-white py-20 px-8"
    >
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-3xl p-8 hover:scale-105 transition-all duration-300"
          >
            <div className="h-44 bg-slate-700 rounded-2xl flex items-center justify-center text-gray-400 text-xl">
              Project Image
            </div>

            <h3 className="text-2xl font-bold mt-6">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {project.description}
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-cyan-500 px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-600 transition">
                <FaGithub />
                GitHub
              </button>

              <button className="border border-cyan-500 px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-500 transition">
                <FaExternalLinkAlt />
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;