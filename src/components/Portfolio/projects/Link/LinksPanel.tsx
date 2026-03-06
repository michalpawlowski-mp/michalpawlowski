import { web, github } from "../../../../assets/imports/index";

interface LinksPanelProps {
  githubLink: string;
  websiteLink: string;
}

const LinksPanel: React.FC<LinksPanelProps> = ({ githubLink, websiteLink }) => {
  return (
    <div className="flex">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={githubLink}
        className="flex items-center justify-evenly mt-4 mx-1 py-2  w-1/2 bg-black/50 rounded-full"
      >
        <img src={github} alt="zobacz kod projektu" loading="lazy" />
        <p>Zobacz kod</p>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={websiteLink}
        className=" flex items-center justify-evenly mt-4 mx-1 py-2  w-1/2 bg-black/50 rounded-full"
      >
        <img src={web} alt="zobacz projekt w praktyce" loading="lazy" />
        <p>Zobacz projekt</p>
      </a>
    </div>
  );
};

export default LinksPanel;
