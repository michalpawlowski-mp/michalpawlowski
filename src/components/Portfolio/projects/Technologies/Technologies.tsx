import TechnologiesProps from "../../../../types/Technology";

const Technologies: React.FC<TechnologiesProps> = ({ technologies, devTools }) => {
  return (
    <>
      <div className="flex flex-wrap mt-4 gap-2">
        <p className="w-full text-sm font-medium text-slate-400 uppercase tracking-wider">
          Użyte technologie
        </p>
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm text-indigo-300"
          >
            <img src={tech.src} alt={tech.name} className="w-4 h-4" loading="lazy" />{" "}
            {tech.name}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-3 gap-2">
        <p className="w-full text-sm font-medium text-slate-400 uppercase tracking-wider">
          Narzędzia developerskie
        </p>
        {devTools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#252836] border border-white/10 rounded-lg text-sm text-slate-300"
          >
            <img src={tool.src} alt={tool.name} className="w-4 h-4" loading="lazy" />{" "}
            {tool.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
