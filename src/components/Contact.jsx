import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white py-20 px-8"
    >
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div className="space-y-8">

          <div className="flex items-center gap-5">
            <FaEnvelope className="text-cyan-400 text-3xl"/>
            <div>
              <h3 className="font-bold">Email</h3>
              <p>aftabkhurshid1234@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaPhone className="text-cyan-400 text-3xl"/>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p>9779825008894</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaMapMarkerAlt className="text-cyan-400 text-3xl"/>
            <div>
              <h3 className="font-bold">Location</h3>
              <p>Bangladesh</p>
            </div>
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <FaGithub className="hover:text-cyan-400 cursor-pointer"/>
            <FaLinkedin className="hover:text-cyan-400 cursor-pointer"/>
          </div>

        </div>

        {/* Right Side */}

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-gray-800 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-gray-800 outline-none"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-gray-800 outline-none"
          ></textarea>

          <button
            className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-600 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;