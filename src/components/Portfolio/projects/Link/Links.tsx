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
        className="hover:bg-white/20 w-1/3 border-r-2 flex items-center justify-center"
      >
        <img
          src={github}
          alt="Link do repozytorium na githubie"
          className="w-7 h-7 m-2"
        />
      </a>
      <a
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-white/20 w-1/3 flex items-center justify-center"
      >
        <img
          src={web}
          alt="link do strony projektu (live demo)"
          className="w-7 h-7 m-2"
        />
      </a>
      <div
        onClick={onInfoClick}
        className="hover:bg-white/20 w-1/3 border-l-2 flex items-center justify-center cursor-pointer"
      >
        <img src={info} alt="Info" className="w-7 h-7 m-2" />
      </div>
    </div>
  );
};

export default Links;
