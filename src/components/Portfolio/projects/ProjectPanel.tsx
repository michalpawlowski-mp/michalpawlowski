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
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-40 backdrop-blur-sm p-4">
      <div className="bg-[#1a1d27] border border-white/10 p-4 rounded-xl max-w-3xl w-full h-5/6 overflow-auto scrollbar-none">
        <div className="flex items-center mb-4">
          <ToggleButton content="Zamknij" onClick={toggleVisibility} />
          <h4 className="text-xl font-medium text-white m-auto">{project.title}</h4>
        </div>

        <div className="text-left p-2 mb-3">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">
            Funkcjonalności
          </p>
          {project.features.map((feature, i) => (
            <p key={i} className="text-sm text-slate-300 mt-1 flex items-center gap-2">
              <span className="text-indigo-400">✓</span> {feature}
            </p>
          ))}
        </div>

        <div className="text-left mb-3">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">
            Opis
          </p>
          {project.description.map((desc, i) => (
            <p key={i} className="text-sm text-slate-300 mt-2 leading-relaxed">
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
