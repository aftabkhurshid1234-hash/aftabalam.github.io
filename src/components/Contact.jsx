import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_qvytudu",
      "template_slmp8u2",
      form.current,
      "8suEemrZKn14AFLaZ"
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    });
};
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
              <a
  href="mailto:aftabkhurshid1234@gmail.com"
  className="hover:text-cyan-400 transition"
>
  aftabkhurshid1234@gmail.com
</a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaPhone className="text-cyan-400 text-3xl"/>
            <div>
              <h3 className="font-bold">Phone</h3>
              <a
  href="https://wa.me/9779825008894"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-cyan-400 transition"
>
  +977 9825008894
</a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaMapMarkerAlt className="text-cyan-400 text-3xl"/>
            <div>
              <h3 className="font-bold">Location</h3>
              <a
  href="https://maps.google.com/?q=University+of+Dhaka"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-cyan-400 transition"
>
  University of Dhaka, Bangladesh
</a>
            </div>
          </div>

          <div className="flex gap-6 mt-8 text-3xl items-center">
            <a
  href="https://github.com/YOUR_GITHUB_USERNAME"
  target="_blank"
  rel="noopener noreferrer"
>
 <FaGithub className="cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:scale-125" />
</a>
            <a
  href="https://www.linkedin.com/in/aftab-alam-76b861399"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin className="cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:scale-125" />
</a>
<a
  href="https://www.facebook.com/share/1H79gEwSm8/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebook className="cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:scale-125" />
</a>
<a
  href="https://www.instagram.com/aftab8525alam?igsh=M2k2Yzh5ZGt4Z28x"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram className="cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:scale-125" />
</a>
          </div>

        </div>

        {/* Right Side */}

        <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-6"
>

        <input
  type="text"
  name="name"
  placeholder="Your Name"
  className="w-full p-4 rounded-xl bg-gray-800 outline-none"
  required
/>

     <input
  type="email"
  name="email"
  placeholder="Your Email"
  className="w-full p-4 rounded-xl bg-gray-800 outline-none"
  required
/>    

         <textarea
  rows="6"
  name="message"
  placeholder="Your Message"
  className="w-full p-4 rounded-xl bg-gray-800 outline-none"
  required
></textarea>

       <button
  type="submit"
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