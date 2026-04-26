import { web, github } from "../../../../assets/imports/index";

interface LinksPanelProps {
  githubLink: string;
  websiteLink: string;
}

const LinksPanel: React.FC<LinksPanelProps> = ({ githubLink, websiteLink }) => {
  return (
    <div className="flex gap-2 mt-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={githubLink}
        className="flex items-center justify-center gap-2 py-2 w-1/2 bg-[#252836] hover:bg-[#2e3247] border border-white/10 rounded-lg text-slate-300 hover:text-white transition-colors text-sm"
      >
        <img src={github} alt="zobacz kod projektu" loading="lazy" />
        <p>Zobacz kod</p>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={websiteLink}
        className="flex items-center justify-center gap-2 py-2 w-1/2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors text-sm"
      >
        <img src={web} alt="zobacz projekt w praktyce" loading="lazy" />
        <p>Zobacz projekt</p>
      </a>
    </div>
  );
};

export default LinksPanel;
