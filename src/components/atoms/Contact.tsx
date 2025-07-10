// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => (
  <section className="py-16 px-4 md:px-8 bg-[#1c1c1c] rounded-xl shadow-lg mt-16 lg:max-w-[800px] lg:ml-20">
    <h2 className="text-3xl font-bold text-cyan-300 mb-4 text-center font-inter">Contact Me</h2>
    <p className="text-[#8892b0] text-center mb-8 max-w-xl mx-auto">
      Interested in working together or just want to say hi? Fill out the form below or reach out via social media!
    </p>
    <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-center items-start max-w-4xl mx-auto">
 
      <form className="flex-1 bg-[#112240] rounded-xl p-8 shadow-md space-y-6 w-full max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            required
            className="peer w-full bg-transparent border-b-2 border-cyan-700 text-white py-2 px-0 focus:outline-none focus:border-cyan-300 transition-colors"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-0 top-2 text-[#8892b0] text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-300"
          >
            Name
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="peer w-full bg-transparent border-b-2 border-cyan-700 text-white py-2 px-0 focus:outline-none focus:border-cyan-300 transition-colors"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-2 text-[#8892b0] text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-300"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="peer w-full bg-transparent border-b-2 border-cyan-700 text-white py-2 px-0 focus:outline-none focus:border-cyan-300 transition-colors resize-none"
            placeholder=" "
          />
          <label
            htmlFor="message"
            className="absolute left-0 top-2 text-[#8892b0] text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-300"
          >
            Message
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-400 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;