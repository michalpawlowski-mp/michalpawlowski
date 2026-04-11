import { ProjectsDataProps } from "../../../types/ProjectsProps";
import Technologies from "./Technologies/Technologies";
import LinksPanel from "./Link/LinksPanel";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";

interface Props {
  project: ProjectsDataProps;
  toggleVisibility: () => void;
}

const ProjectPanel: React.FC<Props> = ({ project, toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40 backdrop-blur-sm p-2">
      <div className="bg-white/10 p-2 rounded-2xl max-w-3xl w-full h-5/6 overflow-auto scrollbar-none">
        <div className="flex items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h4 className="text-2xl m-auto">{project.title}</h4>
        </div>

        <div className="flex flex-col text-left p-2 my-3">
          <p className="text-xl">Funkcjonalności:</p>
          {project.features.map((feature, index) => (
            <p key={index} className="text-sm mt-1">
              ✅ {feature}
            </p>
          ))}
        </div>

        <div className="flex flex-col text-left mb-2">
          <p className="text-xl">Opis</p>
          {project.description.map((desc, index) => (
            <p key={index} className="text-sm mt-2">
              {desc}
            </p>
          ))}
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-style">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="rounded-xl"
              alt={`Project numer ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>

        <Technologies
          technologies={project.technologies}
          devTools={project.devTools ?? []}
        />

        <LinksPanel
          githubLink={project.links.github}
          websiteLink={project.links.website}
        />
      </div>
    </div>
  );
};

export default ProjectPanel;
