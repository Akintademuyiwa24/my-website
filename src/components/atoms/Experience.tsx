
interface ExperienceProps{
    date: string
    title: string
    details: string,
    data: string[]
}

interface ToolsProps{
    data: string[]
}
const Experience = ({date, title, details, data}: ExperienceProps) => {
  return (
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 font-inter mb-12 group  hover:shadow-md hover:bg-white/5 transition-colors duration-300 border sm:border-0 hover:border hover:cursor-pointer border-[#8892b0] p-8 rounded-lg">
          <div className="font-inter text-[#8892b0] text-xs md:text-[13px] min-w-[120px]">
              <span className="group-hover:text-cyan-200">{date}</span>
          </div>

          {/* test */}
            <div className="relative hidden md:flex justify-center sm:hidden lg:block">
                <div className="w-[2px] bg-cyan-600 h-full hidden min-lg:block" />
                {/* Dot in center */}
                <div className="w-3 h-3 group-hover:bg-white rounded-full bg-cyan-400 absolute sm:top-2 -translate-x-1/2 left-1/2" />
            </div>

          <div className=" font-inter text-[#8892b0]">
              <h4 className="text-white mb-2 text-[16px] group-hover:text-cyan-200">{title}</h4>
              <p className="text-[14px]">{details} </p>
              <Tools data={data}/>
          </div>
          
    </div>
  )
}

export default Experience
function Tools({data}: ToolsProps) {
    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {data.map((tool, idx) => (
          <span
            key={idx}
            className="px-4 py-1 rounded-full bg-cyan-600 text-cyan-100 text-[13px] md:text-[14px]"
          >
            {tool}
          </span>
        ))}
      </div>
    );
  }

