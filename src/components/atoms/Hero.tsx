import Experience from "./Experience"
import TwitterIcon from '../../assets/icons/11053970_x_logo_twitter_new_brand_icon.svg'
import LinkedlnIcon from '../../assets/icons/2986200_linkdin_logo_media_social_icon.svg'
import GithubIcon from '../../assets/icons/2993771_github_social media_icon.svg'
import MediumIcon from '../../assets/icons/8679345_medium_icon.svg'
import { useState } from 'react'



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
    

    <div className="md:flex h-screeen overflow-hidden">
      {/* <button onClick={handleClick}>Change</button> */}
          <aside className="md:fixed top-0 md:top-4 left-0 w-full md:w-1/3 md:h-screen p-8 md:block">
              
            <div className="h-full p-4 text-white">
                  <h1 className="font-inter font-bold text-4xl mb-2">Olumuyiwa Akintade</h1>
                  <h3 className="font-inter mb-3 font-bold text-lg">Frontend Engineer</h3>
          <p className="w-full md:w-[200px] text-inter"> I build optimized digital experience for the web.</p>
          
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

          <main className="md:ml-1/3 w-full md:w-2/3 px-8 py-10 ml-0 md:ml-[33.333333%] text-white ">
        <section className="mb-3 md:px-20 py-3 font-inter text-[#999ca0] leading-relaxed md:text-justify">
                  <h3 className="sm:hidden font-inter text-white p-4">ABOUT</h3>
                   <p>I'm a frontend engineer who is result-driven, with expertise in React ecosystem, delivering responsive web applications that balance technical excellence with outstanding user experiences. Skilled at translating complex requirements into clean, efficient code while collaborating effectively across teams.</p>
              </section>
              <section className="mb-20 group md:px-20 md:py-3 font-inter text-[#999ca0]  ">
                  <p className="leading-relaxed tracking-normal">I'm currently a Graduate Trainee in the Frontend Engineering Team at <a href="https://seerbit.com" target="_blank" rel="noopener noreferrer" className=" group-hover:text-amber-600 text-white md:ml-1">Seerbit</a>, a fintech company focused on powering seamless digital payments across Africa. I contribute to building user-facing components that support payment solutions for merchants and businesses. From developing responsive UI to collaborating with cross functional teams on dashboard and checkout experiences, I am growing my skills in shipping real, production level financial technology products.
                  </p>
                  
                  
                  
              </section>
              <section className="md:px-20">
             
                  <Experience date="2025 - PRESENT" title="Frontend Trainee, Seerbit" details="Supporting the development of web interfaces using React and Tailwind CSS. Assist with API testing using Postman, contribute to internal documentation, and carry out research to support feature implementation. Collaborate with other teams to build clean, responsive user experiences." data={ ["JavaScript", "TypeScript", "React", "Redux", "TailwindCSS"]} />
                  <Experience date="2023 - 2024" title="Frontend Intern, Thels Impact Consulting" details="Contributed to the development and styling of responsive web platforms and internal tools aimed at transforming higher education in Africa. Collaborated with cross-functional teams to build and refine user interfaces for research and innovation-focused websites and dashboards. Played a key role in translating design specs into functional, scalable components, while supporting UI consistency and improving user experience across various education tech projects" data={ ["JavaScript", "React", "TailwindCSS"]} />
                 
        </section>
        <section>
          <WorkExperience/>
        </section>
        
        
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
    <section className="bg-gray-900 text-white p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 font-inter">Skills and Technologies</h2>
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

