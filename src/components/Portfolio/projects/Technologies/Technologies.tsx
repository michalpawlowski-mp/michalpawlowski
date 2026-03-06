import TechnologiesProps from "../../../../types/Technology";

const Technologies: React.FC<TechnologiesProps> = ({ technologies, devTools }) => {
  return (
    <>
      <div className="flex flex-wrap mt-5 justify-center">
        <p className="w-full text-left text-xl">Użyte technologie:</p>
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="w-31.25 bg-black/50 py-1 rounded-full m-1 flex items-center justify-center"
          >
            <img
              src={tech.src}
              alt={`ikonka ${tech.name}`}
              className="mx-2"
              loading="lazy"
            />
            {tech.name}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        <p className="w-full text-left text-xl">Użyte narzędzia developerskie:</p>
        {devTools.map((tool) => (
          <div
            key={tool.name}
            className="w-31.25 py-1 bg-black/50 rounded-full m-1 flex items-center justify-center"
          >
            <img
              src={tool.src}
              alt={`ikonka ${tool.name}`}
              className="mx-2"
              loading="lazy"
            />
            {tool.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
