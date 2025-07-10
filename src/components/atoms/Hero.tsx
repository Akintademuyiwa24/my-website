import Experience from "./Experience"
import TwitterIcon from '../../assets/icons/11053970_x_logo_twitter_new_brand_icon.svg'
import LinkedlnIcon from '../../assets/icons/2986200_linkdin_logo_media_social_icon.svg'
import GithubIcon from '../../assets/icons/2993771_github_social media_icon.svg'
import MediumIcon from '../../assets/icons/8679345_medium_icon.svg'
import { useState } from 'react'
import ProjectSection from "./Project"
import ContactSection from "./Contact"
import OtherInterests from "./OtherInterests"
import Footer from "./Footer"
import ProfilePic from '../../assets/PhotoRoom-20230918_090015 (1).jpg'



// import { FaArrowUpRightDots } from "react-icons/fa6";
// import { BiRightArrow } from "react-icons/bi";
// import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

interface SocialIconProp {
  name: string
  href: string
  icon: string
}

const socials: SocialIconProp[] = [
  {
    name: 'Twitter',
    href: '/',
    icon: TwitterIcon
  },
  {
    name: 'Linkedln',
    href: '/',
    icon: LinkedlnIcon
  },
  {
    name: 'Github',
    href: '/',
    icon: GithubIcon
  },
  {
    name: 'Medium',
    href: '/',
    icon: MediumIcon
  },
]

// function handleClick() {
  
// }

const Hero = () => {
  return (
    

    <div className="md:flex h-screeen overflow-hidden lg:justify-center lg:items-center lg:min-h-screen">
      {/* <button onClick={handleClick}>Change</button> */}
          <aside className="md:fixed top-0 md:left-32 md:top-4 left-0 w-full md:w-1/3 md:h-screen p-8 md:block">
              {/* Logo */}
              <div className="flex items-center mb-20">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-cyan-300 shadow-lg mr-1">
                  <span className="text-lg font-extrabold font-mono text-[#112240] tracking-widest select-none">E</span>
                </div>
                <span className="text-lg font-extrabold font-mono tracking-widest text-cyan-300 select-none">
                  mmy
                </span>
                <span className="ml-0.2 text-lg font-bold font-sans tracking-tight text-white bg-cyan-400 px-1.5 py-0.1 rounded-md shadow-sm select-none">
                  Corp
                </span>
              </div>
              {/* End Logo */}
            <div className="h-full p-4 text-white">
                  <h1 className="font-inter font-bold text-4xl mb-2">Olumuyiwa Akintade</h1>
                  <h3 className="font-inter mb-3 font-bold text-lg">Frontend Engineer</h3>
              <p className="w-full md:w-[200px] text-inter"> I build optimized digital experience for the web.</p>

              {/* Profile Picture */}
              <div className="mt-10 mb-10">
                <img
                  src={ProfilePic}
                  alt="Olumuyiwa Akintade"
                  className="w-50 h-50 rounded-full object-cover border-4 border-cyan-300 shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* navigation */}
                <div className="hidden md:block mt-20 mb-50 cursor-pointer">
                  <p className="mb-4">ABOUT</p>
                  <p className="mb-4">EXPERIENCE</p>
                  <p>CONTACT</p>
                </div>
              {/* end of nav */}
          
              {/* icons */}
                <div className="flex flex-wrap text-white gap-6 mt-4">
                  {
                    socials.map(({ icon, name, href }, index) => (
                      <a href={href} key={index} aria-label={name}>
                        <img src={icon} alt={name} className="w-6 h-6 hover:scale-110 transition-transform bg-[#999ca0] rounded-lg p-1 hover:bg-white"/>
                      </a>
                    ))
                    }
                </div>
              {/* end of icons */}

            </div>
        
          </aside>

          <main className="md:ml-1/3 w-full md:w-2/3 px-8 py-10 ml-0 md:ml-[33.333333%] text-white lg:max-w-[1050px]">
            {/* aboutme section */}
              <section className="mb-3 md:px-20 py-3 font-inter text-[#999ca0] leading-relaxed md:text-justify">
                  <h3 className="sm:hidden font-inter mb-1 border-b-1 border-blue-300 w-[100px] text-blue-100 text-[10px]">ABOUT ME</h3>
                   <p>I'm a frontend engineer who is result-driven, with expertise in React ecosystem, delivering responsive web applications that balance technical excellence with outstanding user experiences. Skilled at translating complex requirements into clean, efficient code while collaborating effectively across teams.</p>
              </section>
              <section className="mb-20 group md:px-20 md:py-3 font-inter text-[#999ca0]  ">
                  <p className="leading-relaxed tracking-normal">I'm currently a Graduate Trainee in the Frontend Engineering Team at <a href="https://seerbit.com" target="_blank" rel="noopener noreferrer" className=" group-hover:text-amber-600 text-white md:ml-1">Seerbit</a>, a fintech company focused on powering seamless digital payments across Africa. I contribute to building user-facing components that support payment solutions for merchants and businesses. From developing responsive UI to collaborating with cross functional teams on dashboard and checkout experiences, I am growing my skills in shipping real, production level financial technology products.
                  </p>
              </section>
            {/* end of ams */}

              {/* experience section */}
              <section className="md:px-20">
                <h3 className="sm:hidden font-inter mb-2 border-b-1 border-blue-300 w-[150px] text-blue-100 text-[10px]">PROFESSIONAL EXPERIENCE</h3>
                  <Experience date="2025 - PRESENT" title="Frontend Trainee, Seerbit" details="Supporting the development of web interfaces using React and Tailwind CSS. Assist with API testing using Postman, contribute to internal documentation, and carry out research to support feature implementation. Collaborate with other teams to build clean, responsive user experiences." data={ ["JavaScript", "TypeScript", "React", "Redux", "TailwindCSS"]} />
                  <Experience date="2023 - 2024" title="Frontend Intern, Thels Impact Consulting" details="Contributed to the development and styling of responsive web platforms and internal tools aimed at transforming higher education in Africa. Collaborated with cross-functional teams to build and refine user interfaces for research and innovation-focused websites and dashboards. Played a key role in translating design specs into functional, scalable components, while supporting UI consistency and improving user experience across various education tech projects" data={ ["JavaScript", "React", "TailwindCSS"]} />
                 
              </section>
              {/* end of es */}

              {/* skills section */}
              <section>
                <WorkExperience/>
              </section>
              {/* end of skills section */}

              <section>
                <ProjectSection/>
              </section>

              <section>
                <OtherInterests/>
              </section>

              <section>
                <ContactSection/>
              </section>

              <section> <Footer /></section>
        
        
          </main>
          
          
          
    </div>
    
  )
}

export default Hero

const experiences = [
  {
    company: "Programming Lang.",
    
    details: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      
    ],
  },
  {
    company: "Frameworks",
    
    details: [
      "ReactJs",
      "ReactNative",
      "NextJs",
      "Django"
    ],
  },
  {
    company: "Tools",
    
    details: [
      "Git",
      "Github",
      "Jira",
      "VsCode"
    ],
  },
 
];

function WorkExperience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border border-gray-500 rounded-md text-white p-6 max-w-5xl lg:pl-20 lg:max-w-[810px] mx-auto md:ml-18 md:max-w-[450px] lg:ml-20">
      <h2 className="text-xl font-bold mb-6 font-inter">Skills and Technologies</h2>
      <div className="flex flex-col md:flex-row">
        {/* Tabs */}
        <div
          className="custom-scrollbar flex md:flex-col overflow-x-auto md:overflow-y-auto md:w-48 border-l border-gray-700 gap-1 scroll-smooth"
        >
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap px-4 py-2 text-left border-l-4 transition-colors duration-300 ${
                index === activeIndex
                  ? "border-teal-500 border-t-teal-200 border-t-1 text-teal-400 rounded-md"
                  : "border-transparent text-gray-400 hover:text-white hover:bg-gray-800 hover:rounded-md"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="md:ml-6 mt-4 md:mt-0 flex-1">
          <h3 className="text-sm font-inter font-semibold ">
            {/* {experiences[activeIndex].role}{" "} */}
            {/* <span className="text-green-400"> {experiences[activeIndex].company}</span> */}
          </h3>
          {/* <p className="text-sm text-gray-400">{experiences[activeIndex].duration}</p> */}
          <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
            {experiences[activeIndex].details.map((item, i) => (
              <li key={i} className="font-inter text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

