import { web, github, info } from "../../../../assets/imports/index";

interface LinksProps {
  githubLink: string;
  websiteLink: string;
  onInfoClick?: () => void;
}

const Links: React.FC<LinksProps> = ({ githubLink, websiteLink, onInfoClick }) => {
  return (
    <div className="flex justify-center w-full">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-[#252836] w-1/3 border-r border-white/8 flex items-center p-3 justify-center transition-colors"
      >
        <img src={github} alt="Link do repozytorium na githubie" loading="lazy" />
      </a>
      <a
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-[#252836] w-1/3 flex items-center justify-center p-3 transition-colors"
      >
        <img src={web} alt="link do strony projektu (live demo)" loading="lazy" />
      </a>
      <div
        onClick={onInfoClick}
        className="hover:bg-[#252836] w-1/3 border-l border-white/8 p-3 flex items-center justify-center cursor-pointer transition-colors"
      >
        <img src={info} alt="Więcej info o projekcie" loading="lazy" />
      </div>
    </div>
  );
};

export default Links;
