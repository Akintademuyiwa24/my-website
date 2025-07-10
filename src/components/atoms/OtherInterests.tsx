import { FaBookOpen, FaBolt, FaLeaf, FaPenFancy, FaRobot, FaUniversalAccess} from "react-icons/fa";


const interests = [
    {
      icon: <FaBookOpen className="text-cyan-400 text-2xl group-hover:text-cyan-100 transition-colors duration-300" />,
      title: "API Enthusiast",
      desc: "Deeply experienced with REST APIs and OpenAPI specs. Built robust API references powered by Redoc.",
    },
    {
      icon: <FaUniversalAccess className="text-cyan-400 text-2xl group-hover:text-cyan-100 transition-colors duration-300" />,
      title: "Performance & Accessibility",
      desc: "Obsessed with web performance and accessibility. Always pushing for faster, more inclusive experiences.",
    },
    {
      icon: <FaPenFancy className="text-cyan-400 text-2xl group-hover:text-cyan-100 transition-colors duration-300" />,
      title: "Technical Writing",
      desc: (
        <>
          Skilled in technical documentation and communication. <br />
          <a
            href="https://medium.com/@yourmedium"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-cyan-300 hover:text-cyan-100 transition-colors"
          >
            Medium
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-cyan-300 hover:text-cyan-100 transition-colors"
          >
            LinkedIn
          </a>
        </>
      ),
    },
    {
      icon: <FaRobot className="text-cyan-400 text-2xl group-hover:text-cyan-300 transition-colors duration-300" />,
      title: "AI Integration",
      desc: "Excited about integrating AI into web apps to create smarter, more dynamic user experiences.",
    },
    {
      icon: <FaLeaf className="text-cyan-400 text-2xl group-hover:text-cyan-300 transition-colors duration-300" />,
      title: "Green Energy Advocate",
      desc: "Passionate about the green energy sector and eager to explore its intersection with tech in the future.",
    },
    {
      icon: <FaBolt className="text-cyan-400 text-2xl group-hover:text-cyan-300 transition-colors duration-300" />,
      title: "Fintech Explorer",
      desc: "Currently building in fintech, but always curious about new domains and challenges.",
    },
  ];
 

const OtherInterests = () => (
  <section className="py-16 px-4 md:px-8 bg-[#1b1c1e] rounded-xl shadow-lg mt-16 lg:max-w-[800px] lg:ml-20">
    <h2 className="text-3xl font-bold text-cyan-300 mb-4 text-center font-inter">Beyond Code</h2>
    <p className="text-[#8892b0] text-center mb-10 max-w-2xl mx-auto">
      I’m passionate about more than just building software. Here are some of the things that drive me and keep me curious:
    </p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      {interests.map((item, idx) => (
        <div
          key={idx}
          className="bg-[#112240] border border-[#233554] rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-cyan-400/20 transition-shadow duration-300 group"
        >
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-200 font-inter">{item.title}</h3>
          <div className="text-[#8892b0] text-sm">{item.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default OtherInterests;