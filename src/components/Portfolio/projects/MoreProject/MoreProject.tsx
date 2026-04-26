import { moreProjects } from "./moreProjects.data";

const MoreProjects = () => {
  return (
    <div className="w-full mt-6">
      {moreProjects.map((section, index) => (
        <div key={index} className="my-4">
          <div className="flex items-center w-full mb-4">
            <div className="flex-1 h-px bg-white/10" />
            <h2 className="px-5 text-sm font-medium text-slate-400 uppercase tracking-wider">
              {section.title}
            </h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="flex justify-center flex-wrap gap-3">
            {section.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1a1d27] hover:bg-[#252836] border border-white/8 hover:border-white/20 px-4 py-2.5 rounded-lg text-slate-300 hover:text-white transition-colors text-sm"
              >
                <img className="rounded-full w-5 h-5" src={link.icon} alt={link.label} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreProjects;
