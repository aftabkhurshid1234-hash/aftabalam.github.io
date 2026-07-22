import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row justify-between items-center px-8 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <p className="text-cyan-400 text-2xl">
          Hello, I'm
        </p>

        <h1 className="text-7xl font-bold mt-3">
          Aftab Alam
        </h1>

        <TypeAnimation
          sequence={[
            "Electrical and Electronics Engineer",
            2000,
            "Web Developer",
            2000,
            "learner and problem solver",
            2000,
            "Programmer",
            2000,
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          className="text-3xl text-cyan-400 mt-6"
        />

        <p className="text-gray-400 mt-8 leading-8 text-lg">
          Passionate about creating modern websites,
          interactive UI and beautiful digital experiences
          using React and modern web technologies.
        </p>

        <div className="flex gap-5 mt-10">

          <a
  href="/CV.pdf"
  download
  className="bg-cyan-500 px-8 py-4 rounded-full hover:scale-110 duration-300 inline-block"
>
  Download CV
</a>

       <a
  href="#about"
  className="border border-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-500 duration-300"
>
  🚀 Explore My Journey
</a>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-2 animate-pulse">

          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-8 border-[#050816]"
          />

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
