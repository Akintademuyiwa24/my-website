import Experience from "./Experience"

const Hero = () => {
  return (
      <div className="md:flex h-screeen overflow-hidden">
          <aside className="md:fixed top-0 md:top-4 left-0 w-full md:w-1/3 md:h-screen p-8 md:block">
              
            <div className="h-full p-4 text-white">
                  <h1 className="font-inter font-bold text-4xl mb-2">Olumuyiwa Akintade</h1>
                  <h3 className="font-inter mb-3 font-bold text-lg">Frontend Engineer</h3>
                    <p className="w-[200px] text-inter"> I build optimized digital experience for the web.</p>
            </div>
          </aside>

          <main className="md:ml-1/3 w-full md:w-2/3 px-8 py-10 ml-0 md:ml-[33.333333%] text-white">
              <section className="mb-3 md:px-20 py-3 font-inter text-[#999ca0]">
                   <p>I'm a frontend engineer who is result-driven, with expertise in React ecosystem, delivering responsive web applications that balance technical excellence with outstanding user experiences. Skilled at translating complex requirements into clean, efficient code while collaborating effectively across teams.</p>
              </section>
              <section className="mb-20 group md:px-20 md:py-3 font-inter text-[#999ca0] text-left">
                  <p>I'm currently a Graduate Trainee in the Frontend Engineering Team at <a href="https://seerbit.com" target="_blank" rel="noopener noreferrer" className=" group-hover:text-amber-600 text-white md:ml-1">Seerbit</a>,a fintech company focused on powering seamless digital payments across Africa. I contribute to building user-facing components that support payment solutions for merchants and businesses. From developing responsive UI to collaborating with cross functional teams on dashboard and checkout experiences, I am growing my skills in shipping real, production level financial technology products.
                  </p>
                  
                  
                  
              </section>
              <section className="md:px-20">
             
                  <Experience date="2025 - PRESENT" title="Frontend Trainee, Seerbit" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab, quibusdam, corporis animi dignissimos quod eaque culpa, recusandae eveniet expedita exercitationem blanditiis velit labore est" data={ ["JavaScript", "TypeScript", "React", "Redux", "TailwindCSS"]} />
                  <Experience date="2023 - 2024" title="Frontend Intern, Thels Impact Consulting" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab, quibusdam, corporis animi dignissimos quod eaque culpa, recusandae eveniet expedita exercitationem blanditiis velit labore est" data={ ["JavaScript", "React", "TailwindCSS"]} />
                 
              </section>
          </main>
          
          
    </div>
  )
}

export default Hero