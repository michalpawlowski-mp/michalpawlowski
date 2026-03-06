import { moreProjects } from "./moreProjects.data";

const MoreProjects = () => {
  return (
    <>
      {moreProjects.map((section, index) => (
        <div key={index} className="my-2">
          <div className="flex items-center justify-center w-full mb-3">
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/50 to-transparent"></div>
            <h2 className="px-6 text-lg font-semibold tracking-wide">{section.title}</h2>
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/50 to-transparent"></div>
          </div>
          <div className="w-full m-2 flex justify-center flex-wrap">
            {section.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 pe-4 m-4 rounded-3xl flex items-center"
              >
                <img className="me-3 rounded-full" src={link.icon} alt={link.label} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MoreProjects;
