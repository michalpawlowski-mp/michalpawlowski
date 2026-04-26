import { useToggle } from "../../../hooks/useToggle";
import { ProjectsDataProps } from "../../../types/ProjectsProps";
import ProjectPanel from "./ProjectPanel";
import Links from "./Link/Links";

interface Props {
  project: ProjectsDataProps;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { isVisible, toggleVisibility } = useToggle();

  return (
    <div className="w-72 bg-[#1a1d27] text-center flex flex-col border border-white/8 rounded-xl overflow-hidden hover:border-indigo-500/40 transition-colors">
      <p className="text-base font-medium text-white w-full border-b border-white/8 py-3 px-3">
        {project.title}
      </p>
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full object-cover"
        loading="lazy"
      />
      <div className="flex justify-center w-full border-t border-white/8 flex-wrap gap-1 p-2">
        {project.technologies.map((tech) => (
          <span
            key={tech.name}
            className="flex items-center gap-1 text-xs px-2 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-md"
          >
            <img src={tech.src} alt={tech.name} className="w-3 h-3" loading="lazy" />
          </span>
        ))}
      </div>
      <Links
        githubLink={project.links.github}
        websiteLink={project.links.website}
        onInfoClick={toggleVisibility}
      />
      {isVisible && (
        <ProjectPanel project={project} toggleVisibility={toggleVisibility} />
      )}
    </div>
  );
};

export default ProjectCard;
