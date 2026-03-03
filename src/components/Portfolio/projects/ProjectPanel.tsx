import { ProjectDataProps } from "./projects.data";
import Technologies from "./Technologies/Technologies";
import LinksPanel from "./Link/LinksPanel";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";

interface Props {
  project: ProjectDataProps;
  toggleVisibility: () => void;
}

const ProjectPanel: React.FC<Props> = ({ project, toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40 backdrop-blur-sm">
      <div className="bg-white/10 p-3 rounded-2xl max-w-3xl w-full h-5/6 overflow-auto">
        <div className="flex items-center">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h4 className="text-2xl m-auto">{project.title}</h4>
        </div>

        <div className="my-4">
          <p className="text-xl">Funkcjonalności:</p>
          {project.features.map((feature, index) => (
            <p key={index} className="text-sm mt-1">
              ✅ {feature}
            </p>
          ))}
        </div>

        <div>
          <p className="text-xl">Opis</p>
          {project.description.map((desc, index) => (
            <p key={index} className="text-sm mt-2">
              {desc}
            </p>
          ))}
        </div>

        <div className="flex gap-2 my-4 overflow-x-auto">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="rounded-xl"
              alt={`Project numer ${index + 1}`}
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
