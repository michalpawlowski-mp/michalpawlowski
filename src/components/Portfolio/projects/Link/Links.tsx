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
        className="hover:bg-white/20 w-1/3 border-r-2 flex items-center p-2 justify-center"
      >
        <img src={github} alt="Link do repozytorium na githubie" loading="lazy" />
      </a>
      <a
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-white/20 w-1/3 flex items-center justify-center p-2"
      >
        <img src={web} alt="link do strony projektu (live demo)" loading="lazy" />
      </a>
      <div
        onClick={onInfoClick}
        className="hover:bg-white/20 w-1/3 border-l-2 p-2 flex items-center justify-center "
      >
        <img src={info} alt="Więcej info o projekcie" loading="lazy" />
      </div>
    </div>
  );
};

export default Links;
