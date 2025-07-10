interface ExperienceProps {
  date: string;
  title: string;
  details: string;
  data: string[];
}

interface ToolsProps {
  data: string[];
}

const Experience = ({ date, title, details, data }: ExperienceProps) => {
  return (
    <div className="flex flex-col lg:max-w-[800px] md:flex-col lg:flex-col xl:flex-row gap-6 md:gap-10 font-inter mb-12 group hover:shadow-[0_0_5px_rgba(0,255,255,0.6)] hover:bg-white/5 transition-colors duration-300 border border-[#8892b0] p-4 sm:p-6 md:p-8 rounded-lg">
      <div className="font-inter text-[#8892b0] text-xs sm:text-sm md:text-[13px] min-w-[90px] sm:min-w-[100px] md:min-w-[120px]">
        <span className="group-hover:text-cyan-200">{date}</span>
      </div>

          {/* test */}
          <div className="relative hidden md:flex justify-center sm:hidden lg:block">
                <div className="w-[2px] bg-cyan-600 h-full hidden min-lg:block" />
                {/* Dot in center */}
                <div className="w-3 h-3 group-hover:bg-white rounded-full bg-cyan-400 absolute sm:top-2 -translate-x-1/2 left-1/2" />
            </div>

      <div className="font-inter text-[#8892b0] flex-1">
        <h4 className="text-white mb-2 text-[15px] sm:text-[16px] group-hover:text-cyan-200">{title}</h4>
        <p className="text-[14px] sm:text-[15px]">{details} </p>
        <Tools data={data} />
      </div>
    </div>
  );
};

export default Experience;

function Tools({ data }: ToolsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
      {data.map((tool, idx) => (
        <span
          key={idx}
          className="px-3 py-1 sm:px-4 rounded-full bg-cyan-600 text-cyan-100 text-[12px] sm:text-[13px] md:text-[14px]"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}
