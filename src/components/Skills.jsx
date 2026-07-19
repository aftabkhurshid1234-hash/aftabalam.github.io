import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={60} />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt size={60} />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs size={60} />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact size={60} />, color: "text-cyan-400" },
    { name: "GitHub", icon: <FaGithub size={60} />, color: "text-white" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white py-20"
    >
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
        My Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
          >
            <div className={skill.color}>
              {skill.icon}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;